"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const services = [
  { title: "政务服务", detail: "联动市、区数据局、发改经信局等部门，提供政策解读、项目申报、场景对接。" },
  { title: "金融服务", detail: "合作杭州城基投资、方圆金鼎等机构，为企业提供融资对接与资本赋能。" },
  { title: "共享算力", detail: "依托杭州城投资源，构建共享算力网络，提供轻量化、低成本算力服务，破解技术研发瓶颈，赋能个人创业者。" },
  { title: "社群运营", detail: "依托“城投资产·星聚荟”及 WaytoAGI 开放社群，举办 AI 切磋、政策解读等活动，构建高频互动、资源共享的创新社群。" },
]

const opcPolicies = [
  {
    badge: "专项政策",
    title: "全省首个 OPC 专项政策",
    content: (
      <>
        <p>
          通过构建“135”赋能体系打造“OPC 创业第一城”。每年安排 1 亿元专项资金，为不同发展阶段的 OPC
          提供精准服务，计划到 2026 年实现建设 10 个 OPC 社区、集聚 1000 名创业者的目标。
        </p>
      </>
    ),
  },
  {
    badge: "五维赋能",
    title: "全周期精准服务矩阵",
    content: (
      <>
        <ul className="grid gap-2 text-foreground">
          <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
            <span className="font-semibold">空间：</span>提供超 2 万平方米“拎包入驻”社区和人才驿站，实现低成本启动。
          </li>
          <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
            <span className="font-semibold">要素：</span>创新推出 AI 工具会员池，免费提供算力模型等“即开即用”服务。
          </li>
          <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
            <span className="font-semibold">金融：</span>提供最高 50 万元个人贷款及 200 万元投资奖励。
          </li>
          <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
            <span className="font-semibold">场景：</span>开放城市场景并设立最高 300 万元的应用示范补助。
          </li>
          <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
            <span className="font-semibold">人才：</span>通过评选“超级个体”给予最高 20 万元奖励及高层次人才认定。
          </li>
        </ul>
        <p>
          同时，上城还将搭建“一键通达”线上平台，组建专业陪跑服务团和生态联盟，为创业者提供从落地到产业化的全周期精准赋能。
        </p>
      </>
    ),
  },
]

const gallery = [
  { src: "/2-未来数智港介绍配图-1.jpg", alt: "项目俯瞰" },
  { src: "/2-未来数智港介绍配图-2.jpg", alt: "项目景观空间" },
  { src: "/2-未来数智港介绍配图-3.jpg", alt: "项目办公空间" },
  { src: "/2-未来数智港介绍配图-4.jpg", alt: "项目主入口" },
  { src: "/2-未来数智港介绍配图-5.jpg", alt: "项目活动空间" },
]

const deepBlueBadge = "border-transparent bg-[#0B2F6C] text-white"

function ExpandableText({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col gap-3">
      <div className={`relative ${open ? "" : "max-h-28 overflow-hidden"}`}>
        <div className="space-y-3 leading-relaxed text-muted-foreground text-pretty">{children}</div>
        {!open && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-card to-transparent" />
        )}
      </div>
      <Button variant="ghost" size="sm" className="self-start px-0 text-accent" onClick={() => setOpen((v) => !v)}>
        {open ? "收起" : "展开全文"}
      </Button>
    </div>
  )
}

export function IntroductionSection() {
  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-24">
      <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-accent/15 blur-3xl md:-left-32 md:h-64 md:w-64" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl md:-right-24 md:h-64 md:w-64" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-mono text-3xl font-bold md:mb-6 md:text-5xl text-balance">城投资产·未来数智港</h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
            在数字经济的时代浪潮中，一座以“数智产业”为核心的现代化产业园——城投资产·未来数智港，依托杭州东站枢纽的独特优势，加速成长为杭州乃至长三角地区的产业新地标，致力于打造“全国企业来杭第一站”的办公金名片。
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 px-4 md:hidden">
            {gallery.map((item) => (
              <Card
                key={item.src}
                className="group relative min-w-[240px] max-w-[320px] shrink-0 snap-start overflow-hidden border border-muted-foreground/10 bg-card shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={item.src} alt={item.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                </div>
                <div className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-foreground shadow">
                  {item.alt}
                </div>
              </Card>
            ))}
          </div>

          <div className="hidden grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3 md:grid">
            {gallery.map((item, index) => (
              <Card
                key={item.src}
                className={`group relative overflow-hidden border border-muted-foreground/10 bg-card shadow-lg ${index === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className="relative h-48 w-full overflow-hidden sm:h-56 lg:h-64">
                  <img src={item.src} alt={item.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                </div>
                <div className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-foreground shadow">
                  {item.alt}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card className="border border-muted-foreground/10 bg-card shadow-xl">
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <Badge variant="secondary" className={`w-fit px-3 py-1 text-xs uppercase tracking-wide ${deepBlueBadge}`}>
                区位优势
              </Badge>
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">从交通枢纽到数智枢纽</h3>
              <ExpandableText>
                <p>
                  项目坐落于杭州东站西广场 D 座，总建筑面积约 4.4 万平方米。依托亚洲重要交通枢纽——杭州东站，每日数十万的客流吞吐，园区天然汇聚“人流、物流、信息流、数据流”，实现“出站 5 分钟即可抵达项目”的极致通勤体验，为企业对接全国资源、吸引高端人才提供无可比拟的区位条件。
                </p>
              </ExpandableText>
            </div>
          </Card>

          <Card className="border border-muted-foreground/10 bg-card shadow-xl">
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <Badge variant="secondary" className={`w-fit px-3 py-1 text-xs uppercase tracking-wide ${deepBlueBadge}`}>
                空间布局
              </Badge>
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">一站式全周期产业生态</h3>
              <ExpandableText>
                <p>园区构建“展示—办公—孵化—加速”一体化功能闭环，灵活匹配企业从初创到成熟的全阶段需求：</p>
                <ul className="grid gap-2 text-foreground">
                  <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
                    <span className="font-semibold">1—2 层：</span>数据展示、企业服务、会议洽谈与科技办公，打造“城市级展厅与会客厅”。
                  </li>
                  <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
                    <span className="font-semibold">3—4 层：</span>众创空间、孵化苗圃、联合办公区（钱唐量子空间），提供 10㎡-8000㎡ 灵活办公，支持自由分割与定制化装修，实现“拎包入住”。
                  </li>
                </ul>
              </ExpandableText>
            </div>
          </Card>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card className="border border-muted-foreground/10 bg-card shadow-xl">
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <Badge variant="secondary" className={`w-fit px-3 py-1 text-xs uppercase tracking-wide ${deepBlueBadge}`}>
                孵化体系
              </Badge>
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">陪伴企业从 0 到 1</h3>
              <ExpandableText>
                <p>
                  园区四层专设科技孵化长廊，提供 125 个孵化工位与 7 间独立孵化室。符合条件的数智科创类企业可享受 3 个月至 3 年的孵化培育，期间进行季度评估与系统辅导；孵化期满后，优秀企业可转为正式办公客户，持续在园区成长，目前，整栋楼出租率已达80%，其中专门面向OPC群体开放的8000平方米产业空间内，已集聚“一人公司”14家，另有数十个工位处于预定状态。园区设立的125个免费孵化工位已满额使用，初步形成初创主体加速涌入的良好态势。按照2026年发展目标，园区计划集聚人工智能重点企业30家以上，引进培育OPC青年人才300名以上。
                </p>
              </ExpandableText>
            </div>
          </Card>

          {opcPolicies.map((policy) => (
            <Card key={policy.title} className="border border-muted-foreground/10 bg-card shadow-xl">
              <div className="flex flex-col gap-4 p-6 md:p-8">
                <Badge variant="secondary" className={`w-fit px-3 py-1 text-xs uppercase tracking-wide ${deepBlueBadge}`}>
                  {policy.badge}
                </Badge>
                <h3 className="text-xl font-semibold text-foreground md:text-2xl">{policy.title}</h3>
                <ExpandableText>{policy.content}</ExpandableText>
              </div>
            </Card>
          ))}

          <Card className="border border-muted-foreground/10 bg-card shadow-xl">
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <Badge variant="secondary" className={`w-fit px-3 py-1 text-xs uppercase tracking-wide ${deepBlueBadge}`}>
                服务体系
              </Badge>
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">政企金社联动赋能</h3>
              <div className="grid gap-3">
                {services.map((service) => (
                  <div key={service.title} className="rounded-xl border border-muted/40 bg-muted/30 px-4 py-3">
                    <p className="text-sm font-semibold text-foreground">{service.title}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground text-pretty">{service.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8 flex justify-center lg:justify-start">
          <Button
            asChild
            size="lg"
            className="h-auto rounded-full border border-[#0B2F6C]/10 bg-gradient-to-r from-[#0B2F6C] via-[#134AA3] to-[#1E63D6] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0B2F6C]/20 transition hover:scale-[1.02] hover:shadow-xl hover:shadow-[#0B2F6C]/25"
          >
            <a
              href="https://media-1383535556.cos.ap-shanghai.myqcloud.com/%E5%85%A5%E9%A9%BB%E6%B5%81%E7%A8%8B%E8%A1%A8.zip"
              target="_blank"
              rel="noreferrer"
            >
              入驻流程
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <Card className="border border-muted-foreground/10 bg-card shadow-xl">
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <Badge variant="secondary" className={`w-fit px-3 py-1 text-xs uppercase tracking-wide ${deepBlueBadge}`}>
                发展愿景
              </Badge>
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">OPC 入杭第一站</h3>
              <ExpandableText>
                <p>
                  培育 OPC，是杭州发展新质生产力、汇聚数字人才、融入“中国数谷”建设战略的创新举措。城投资产·未来数智港依托杭州城投丰富的城市运营场景与平台资源，正持续探索 OPC 成长的“杭州模式”，致力于打造长三角区域创新引领策源地。
                </p>
              </ExpandableText>
            </div>
          </Card>

          <Card className="border border-muted-foreground/10 bg-card shadow-xl">
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <Badge variant="secondary" className={`w-fit px-3 py-1 text-xs uppercase tracking-wide ${deepBlueBadge}`}>
                结语与联系方式
              </Badge>
              <ExpandableText>
                <p>
                  城投资产·未来数智港，不仅是办公空间，更是数智科技的孵化器、产业资源的连接器、城市创新的助推器。园区与数智企业、创新团队、行业伙伴携手同行，共创智能未来，书写杭州数字经济高质量发展的新篇章。
                </p>
              </ExpandableText>
              <div className="rounded-xl bg-muted/40 px-4 py-4 text-sm leading-relaxed text-foreground">
                <p className="font-semibold">地址</p>
                <p>杭州市上城区新风路 260 号 杭州东站西广场 D 座</p>
                <p className="mt-3 font-semibold">招商</p>
                <p>章经理 17857403513</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
