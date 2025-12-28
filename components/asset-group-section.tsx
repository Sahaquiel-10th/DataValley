"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const images = [
  { src: "/4-杭州城投资产集团介绍配图-2.png", alt: "城投资产集团 周边项目密度" },
  { src: "/4-杭州城投资产集团介绍配图-3.png", alt: "城投资产集团 园区环境" },
  { src: "/4-杭州城投资产集团介绍配图-4.png", alt: "城投资产集团 街区商业" },
  { src: "/4-杭州城投资产集团介绍配图-5.png", alt: "城投资产集团 建筑外观" },
]

export function AssetGroupSection() {
  return (
    <section className="bg-secondary py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-mono text-3xl font-bold md:text-5xl text-balance">杭州城投资产集团</h2>
          <div className="mx-auto mb-8 h-1 w-20 bg-accent" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr,0.95fr]">
          <Card className="h-full border border-muted-foreground/10 bg-card p-6 shadow-xl md:p-8">
            <div className="flex flex-col gap-4">
              <Badge
                variant="secondary"
                className="w-fit px-3 py-1 text-xs uppercase tracking-wide border-transparent bg-[#0B2F6C] text-white"
              >
                杭州城投资产集团介绍
              </Badge>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">公司介绍</p>
                <p className="leading-relaxed text-foreground text-pretty">
                  杭州城投资产集团有限公司成立于2012年7月，注册资本10亿元，隶属于杭州市城市建设投资集团有限公司，定位“杭州城投资产经营主平台”，主要负责城市物业资产的经营与管理，履行投资、融资职责，助力国有资产保值增值。
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">资产规模</p>
                <p className="leading-relaxed text-foreground text-pretty">
                  当前，集团累积经营面积近84万平方米，在管资产主要分布于上城区、拱墅区、西湖区、滨江区、钱塘区等，其中上城区集中度最高约60万方，火车东站项目体量较大约35万方。经营物业涵盖写字楼、产业园区、商办楼宇、核心街区商铺、邻居中心、奥特莱斯等多种类型。
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">经营模式</p>
                <p className="leading-relaxed text-foreground text-pretty">
                  深耕资产经营领域十余载，始终聚焦资产价值培育与提升，创新建立“国资合规+市场导向”双轮驱动机制，通过租赁、自营、联营等多元化经营模式，持续完善专业化资产运营体系，实现资产效益与管理效能协同增长。
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">主营业务</p>
                <p className="leading-relaxed text-foreground text-pretty">
                  构建起以“城投资产”办公品牌与“东韵”商业品牌为引领、六大业务体系协同并进的发展格局。其中，办公运营、产业园运营与商业运营构成三大基石业务，数智产业、社邻服务、资产管理与咨询服务为三大创新增长引擎。
                </p>
              </div>
              <p className="leading-relaxed text-foreground text-pretty">
                坚持以“市场化、资本化、数字化”思维驱动，致力于激活核心资源要素，打磨具有市场竞争力的标杆产品，持续扩大资产体量与运营品质，推动资产经营向更高质量、更高能级稳步转型。
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <Card className="border border-muted-foreground/20 bg-muted/50 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">企业使命</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">焕新资产，美好城市</p>
                </Card>
                <Card className="border border-muted-foreground/20 bg-muted/50 p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">企业愿景</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">成为国内一流的国有资产运营服务商</p>
                </Card>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {images.map((image) => (
              <Card
                key={image.src}
                className="group relative overflow-hidden border-0 shadow-lg transition-transform hover:scale-[1.02]"
              >
                <div className="relative h-36 w-full overflow-hidden sm:h-44 md:h-52">
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
