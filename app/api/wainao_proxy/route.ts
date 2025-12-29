const DEFAULT_WAINAO_API_URL = "https://api.cn.reai.com/app/blocks/api/134e2b1f75574e55b0077/run"
const WAINAO_API_URL = process.env.WAINAO_API_URL?.trim() || DEFAULT_WAINAO_API_URL
const WAINAO_VERSION = process.env.WAINAO_VERSION?.trim() || "^1.0.0"

const extractAssistantAnswer = (data: unknown): string => {
  const tryExtract = (record: any): string => {
    if (!record || typeof record !== "object") return ""

    if (typeof record.assistant_answer === "string") return record.assistant_answer
    if (record.assistant_answer && typeof record.assistant_answer.text === "string") return record.assistant_answer.text
    if (record.assistant_answer && typeof record.assistant_answer.content === "string") return record.assistant_answer.content
    if (Array.isArray(record.assistant_answer)) {
      const first = record.assistant_answer.find(
        (item: any) => typeof item === "string" || typeof item?.text === "string" || typeof item?.content === "string"
      )
      if (typeof first === "string") return first
      if (first?.text) return first.text
      if (first?.content) return first.content
    }

    if (record.outputs && typeof record.outputs === "object") {
      const answer = record.outputs.assistant_answer
      if (typeof answer === "string") return answer
      if (answer && typeof answer.text === "string") return answer.text
      if (answer && typeof answer.content === "string") return answer.content
      if (Array.isArray(answer)) {
        const first = answer.find(
          (item: any) => typeof item === "string" || typeof item?.text === "string" || typeof item?.content === "string"
        )
        if (typeof first === "string") return first
        if (first?.text) return first.text
        if (first?.content) return first.content
      }
    }

    if (record.outputJSON && typeof record.outputJSON === "object") {
      const oa = record.outputJSON.assistant_answer
      if (typeof oa === "string") return oa
      if (oa?.content) return oa.content
      if (oa?.text) return oa.text
    }

    if (Array.isArray(record.result)) {
      for (const item of record.result) {
        if (!item) continue
        const name = typeof item.name === "string" ? item.name : ""
        if (!name || name.toLowerCase() !== "assistant_answer") continue
        const output = (item as any).output
        if (!output) continue
        if (typeof output === "string") return output
        if (typeof output.content === "string") return output.content
        if (typeof output.text === "string") return output.text
        if (Array.isArray(output)) {
          const first = output.find(
            (o: any) => typeof o === "string" || typeof o?.text === "string" || typeof o?.content === "string"
          )
          if (typeof first === "string") return first
          if (first?.text) return first.text
          if (first?.content) return first.content
        }
      }
    }

    return ""
  }

  // Try top-level first
  const fromTop = tryExtract(data as any)
  if (fromTop) return fromTop

  // Then try nested under .data (as in your sample)
  if (data && typeof data === "object" && (data as any).data) {
    const nested = tryExtract((data as any).data)
    if (nested) return nested
  }

  return ""
}

export async function POST(req: Request) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined

  try {
    const { text } = (await req.json()) as { text?: string }
    const question = text?.trim()

    if (!question) {
      return new Response(JSON.stringify({ error: "Message is required" }), { status: 400 })
    }

    const apiKey = process.env.WAINAO_API_KEY
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "WAINAO_API_KEY is not set on the server" }), { status: 500 })
    }

    const controller = new AbortController()
    timeoutId = setTimeout(() => controller.abort(), 60000)

    const upstreamResponse = await fetch(WAINAO_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: {
          user_input: question,
        },
        version: WAINAO_VERSION,
      }),
      signal: controller.signal,
    })

    if (!upstreamResponse.ok) {
      const errorText = await upstreamResponse.text().catch(() => "Failed to fetch from upstream")
      return new Response(JSON.stringify({ error: errorText || "Failed to fetch from upstream" }), {
        status: upstreamResponse.status || 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    let data: unknown = null
    try {
      data = await upstreamResponse.json()
    } catch (parseErr) {
      console.error("Failed to parse Wainao response", parseErr)
    }

    const replyText = extractAssistantAnswer(data).trim()
    if (!replyText) {
      return new Response(JSON.stringify({ error: "No content returned from upstream", raw: data }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      })
    }

    const payload = data ? { text: replyText, raw: data } : { text: replyText }

    return new Response(JSON.stringify(payload), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    })
  } catch (error: any) {
    console.error("Error handling Wainao proxy", error)

    if (error?.name === "AbortError") {
      return new Response(JSON.stringify({ error: "Upstream request timed out" }), {
        status: 504,
        headers: { "Content-Type": "application/json" },
      })
    }

    return new Response(JSON.stringify({ error: "Unexpected server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  }
}

export const runtime = "nodejs"
