"use client"

import { Card } from "@/components/ui/card"

const sections = [
  {
    id: 1,
    title: "园区概况",
    content:
      '未来数智港位于杭州核心区域，总建筑面积达5万平方米，是专注于科技型企业孵化的现代化创业园区。园区秉承"科技创新、智能赋能"的理念，致力于为创业者打造一个充满活力与机遇的成长空间。',
    image: "/modern-tech-park-exterior.jpg",
  },
  {
    id: 2,
    title: "核心优势",
    content:
      "园区拥有完善的基础设施和一流的办公环境，配备高速网络、智能化办公系统、多功能会议室等设施。我们提供全方位的企业服务，包括工商注册、财税咨询、法律支持、人力资源等一站式解决方案，让创业者专注于核心业务发展。",
    image: "/modern-office-tech.png",
  },
  {
    id: 3,
    title: "孵化体系",
    content:
      '建立了完整的企业孵化体系，从种子期到成长期提供全程陪伴。我们设有专业的导师团队，定期举办创业培训、行业交流、投融资对接等活动。通过"孵化+投资"的模式，为优质项目提供资金支持和资源对接，助力企业快速发展。',
    image: "/business-incubation-meeting-room.jpg",
  },
  {
    id: 4,
    title: "产业聚焦",
    content:
      "重点聚焦人工智能、大数据、云计算、物联网、智能制造等前沿科技领域。园区已吸引众多优秀科技企业入驻，形成良好的产业集群效应。通过产业链上下游资源整合，促进企业间的协同创新与合作共赢。",
    image: "/ai-technology-visualization.png",
  },
  {
    id: 5,
    title: "创新生态",
    content:
      "打造开放包容的创新生态圈，与高校、科研机构、投资机构建立深度合作关系。定期举办创新创业大赛、技术沙龙、项目路演等活动，搭建创业者、投资人、产业资源的对接平台，营造浓厚的创新创业氛围。",
    image: "/innovation-ecosystem-networking-event.jpg",
  },
  {
    id: 6,
    title: "未来愿景",
    content:
      "未来数智港将持续深化服务内涵，提升孵化能力，努力打造成为长三角地区具有重要影响力的科技企业孵化器。我们致力于培育更多具有核心竞争力的科技企业，为推动区域经济高质量发展和科技创新贡献力量。",
    image: "/futuristic-city-skyline-at-dusk.jpg",
  },
]

export function IntroductionSection() {
  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-mono text-3xl font-bold md:text-5xl text-balance">园区介绍</h2>
          <div className="mx-auto h-1 w-20 bg-accent" />
        </div>

        <div className="grid gap-12 md:gap-20">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`grid gap-8 md:grid-cols-2 md:gap-12 items-center ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="mb-4 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-foreground">
                    {section.id}
                  </span>
                  <h3 className="text-2xl font-bold md:text-3xl">{section.title}</h3>
                </div>
                <p className="leading-relaxed text-muted-foreground text-pretty">{section.content}</p>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <Card className="overflow-hidden border-0 shadow-lg">
                  <img
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    className="h-[300px] w-full object-cover md:h-[400px]"
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
