"use client"

import { Card } from "@/components/ui/card"

const qrCodes = [
  {
    id: 1,
    title: "关注公众号",
    description: "获取最新园区动态",
    query: "wechat official account QR code",
  },
  {
    id: 2,
    title: "企业入驻申请",
    description: "在线提交入驻申请",
    query: "business application form QR code",
  },
  {
    id: 3,
    title: "联系我们",
    description: "添加企业微信咨询",
    query: "wechat business contact QR code",
  },
]

export function QRCodeSection() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-mono text-3xl font-bold md:text-5xl text-balance">联系方式</h2>
          <div className="mx-auto mb-6 h-1 w-20 bg-accent" />
          <p className="text-lg text-muted-foreground">扫描二维码，了解更多信息</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {qrCodes.map((qr) => (
            <Card key={qr.id} className="p-8 text-center shadow-lg">
              <div className="mb-6 flex justify-center">
                <div className="h-48 w-48 overflow-hidden rounded-lg bg-muted">
                  <img
                    src={`/.jpg?height=200&width=200&query=${qr.query}`}
                    alt={qr.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold">{qr.title}</h3>
              <p className="text-sm text-muted-foreground">{qr.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">地址：杭州市 XX 区 XX 路 XX 号 | 电话：0571-XXXX-XXXX</p>
        </div>
      </div>
    </section>
  )
}
