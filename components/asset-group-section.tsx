"use client"

import { Card } from "@/components/ui/card"

const images = [
  "/modern-corporate-building-exterior.jpg",
  "/professional-business-team-meeting.png",
  "/urban-development-construction-site.jpg",
  "/corporate-office-interior.png",
  "/city-infrastructure-project.jpg",
]

export function AssetGroupSection() {
  return (
    <section className="bg-secondary py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-mono text-3xl font-bold md:text-5xl text-balance">杭州城投资产集团</h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-accent" />
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="leading-relaxed text-lg text-foreground text-pretty">
              杭州城投资产集团是杭州市属国有重点企业，注册资本100亿元，是杭州城市建设和发展的重要力量。集团业务涵盖城市基础设施建设、房地产开发、产业园区运营、金融投资等多个领域，总资产规模超过千亿元。
            </p>
            <p className="mt-6 leading-relaxed text-lg text-foreground text-pretty">
              作为城市发展的参与者和推动者，集团始终坚持"服务城市、造福民生"的使命，积极参与杭州城市更新、产业升级和民生改善工程。未来数智港作为集团重点打造的科技创新平台，承载着培育新经济、助力产业转型升级的重要使命，是集团产业多元化布局的重要战略举措。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {images.map((image, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg transition-transform hover:scale-105">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`资产集团展示 ${index + 1}`}
                  className="h-[200px] w-full object-cover md:h-[250px]"
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
