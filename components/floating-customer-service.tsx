"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function FloatingCustomerService() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    { role: "assistant", content: "您好！我是未来数智港智能客服，有什么可以帮助您的吗？" },
  ])
  const [inputValue, setInputValue] = useState("")

  const handleSend = () => {
    if (!inputValue.trim()) return

    const newMessages = [
      ...messages,
      { role: "user" as const, content: inputValue },
      {
        role: "assistant" as const,
        content: "感谢您的咨询！我们的工作人员会尽快回复您。（此为演示版本，后续将接入AI智能体）",
      },
    ]

    setMessages(newMessages)
    setInputValue("")
  }

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-[350px] shadow-2xl md:w-[400px]">
          <div className="flex items-center justify-between border-b bg-accent p-4 text-accent-foreground">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-foreground/20 font-mono text-lg font-bold">
                数
              </div>
              <span className="font-semibold">在线客服</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-accent-foreground hover:bg-accent-foreground/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="h-[400px] overflow-y-auto p-4">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.role === "user" ? "bg-accent text-accent-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="输入您的问题..."
                className="flex-1 rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent"
              />
              <Button onClick={handleSend} size="sm" className="bg-accent hover:bg-accent/90">
                发送
              </Button>
            </div>
          </div>
        </Card>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="打开智能客服"
      >
        <div className="relative h-16 w-16 transition-transform hover:scale-110">
          <div className="absolute inset-0 rounded-full bg-accent/30 blur-xl animate-pulse" />
          <div className="relative h-full w-full rounded-full bg-gradient-to-br from-accent to-accent/80 shadow-2xl flex items-center justify-center overflow-hidden">
            {isOpen ? (
              <X className="h-7 w-7 text-white transition-all" />
            ) : (
              <>
                <div className="relative flex flex-col items-center">
                  <span className="font-mono text-2xl font-bold text-white drop-shadow-lg animate-bounce">数</span>
                  <div className="absolute -bottom-1 flex gap-1">
                    <div className="h-1 w-1 rounded-full bg-white/80" />
                    <div className="h-1 w-1 rounded-full bg-white/80" />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 animate-ping" />
                <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500" />
              </>
            )}
          </div>
        </div>
        {!isOpen && (
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            <div className="bg-black/80 text-white text-xs px-3 py-1 rounded-lg">点我咨询 👋</div>
          </div>
        )}
      </button>
    </>
  )
}
