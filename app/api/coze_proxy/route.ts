// Backwards-compatible alias to the Wainao proxy.
export { POST } from "../wainao_proxy/route"
// Turbopack requires config fields like `runtime` to be defined inline, not re-exported.
export const runtime = "nodejs"
