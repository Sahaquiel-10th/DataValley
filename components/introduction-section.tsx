"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const services = [
  { title: "政务服务", detail: "联动市、区数据局、发改经信局等部门，提供政策解读、项目申报、场景对接。" },
  { title: "金融服务", detail: "合作杭州城基投资、方圆金鼎等机构，为企业提供融资对接与资本赋能。" },
  { title: "共享算力", detail: "依托杭州城投资源，构建共享算力网络，提供轻量化、低成本算力服务，破解技术研发瓶颈，赋能个人创业者。" },
  { title: "社群运营", detail: "依托“城投资产·星聚荟”及 WaytoAGI 开放社群，举办 AI 切磋、政策解读等活动，构建高频互动、资源共享的创新社群。" },
]

const opcPolicies = [
  {
    badge: "专项政策",
    title: "人工智能OPC社区建设相关政策",
    content: (
      <>
        <ul className="grid gap-2 text-foreground">
          <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
            <span className="font-semibold">创业服务：</span>提供政务云窗和陪跑团，覆盖咨询、开办、法务、人力等全流程。
          </li>
          <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
            <span className="font-semibold">降低成本：</span>提供不少于2万㎡智创空间，实施OPC育苗计划，青年创业者最高可获50万元资助。
          </li>
          <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
            <span className="font-semibold">要素保障：</span>开放AI工具池；高质量数据集最高奖励10万元。
          </li>
          <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
            <span className="font-semibold">工具奖励：</span>对成效显著的AI工具开发企业，最高奖励100万元。
          </li>
          <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
            <span className="font-semibold">场景开放：</span>每年评选标杆场景项目，按投入30%补助，单个最高300万元。
          </li>
          <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
            <span className="font-semibold">安居保障：</span>人才最长3年租金支持，创始人最长半年。
          </li>
          <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
            <span className="font-semibold">社区矩阵：</span>优秀社区最高奖励200万元。
          </li>
          <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
            <span className="font-semibold">金融服务：</span>个人最高50万、企业最高300万贴息贷款；10亿元专项基金；股权融资按5%奖励，最高200万元。
          </li>
          <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
            <span className="font-semibold">超级个体：</span>评定后最高奖励20万元+杭州市高层次人才名额。
          </li>
          <li className="rounded-lg bg-muted/50 px-4 py-3 text-sm leading-relaxed">
            <span className="font-semibold">活力社群：</span>举办活动按费用50%支持，单个社区最高100万元。
          </li>
        </ul>
      </>
    ),
  },
]

const gallery = [
  { src: "https://media-1383535556.cos.ap-shanghai.myqcloud.com/%E9%A1%B9%E7%9B%AE%E4%BF%AF%E7%9E%B0%E5%9B%BE.jpg", alt: "项目俯瞰" },
  { src: "/2-未来数智港介绍配图-2.jpg", alt: "项目景观空间" },
  { src: "/2-未来数智港介绍配图-3.jpg", alt: "项目办公空间" },
  { src: "https://media-1383535556.cos.ap-shanghai.myqcloud.com/%E9%A1%B9%E7%9B%AE%E4%B8%BB%E5%85%A5%E5%8F%A3.jpg", alt: "项目主入口" },
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
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="h-auto rounded-full border border-[#0B2F6C]/10 bg-gradient-to-r from-[#0B2F6C] via-[#134AA3] to-[#1E63D6] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0B2F6C]/20 transition hover:scale-[1.02] hover:shadow-xl hover:shadow-[#0B2F6C]/25"
              >
                入驻流程
                <ArrowUpRight className="size-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto border border-muted-foreground/10 bg-card p-0">
              <div className="flex flex-col gap-6 p-6 md:p-8">
                <DialogHeader className="text-left">
                  <Badge variant="secondary" className={`w-fit px-3 py-1 text-xs uppercase tracking-wide ${deepBlueBadge}`}>
                    入驻流程
                  </Badge>
                  <DialogTitle className="text-2xl text-foreground">OPC入驻申请流程</DialogTitle>
                </DialogHeader>

                <div className="grid gap-4">
                  <div className="rounded-xl border border-muted/40 bg-muted/30 px-4 py-4">
                    <p className="text-sm font-semibold text-foreground">第1步：填表申请</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      请填写《OPC入驻申请表》。表格内容简洁明了，主要围绕您的创业方向、技术背景及项目规划进行信息采集。
                    </p>
                  </div>

                  <div className="rounded-xl border border-muted/40 bg-muted/30 px-4 py-4">
                    <p className="text-sm font-semibold text-foreground">第2步：创业导师评估</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      提交申请后，园区将组织“创业陪跑团”开展审核。创业导师将从项目创新性、成长潜力及与区域产业契合度等方面进行综合评估。只要你的项目具备清晰的构想和可行的落地路径，且展现出足够的潜力，就有机会通过审核。
                    </p>
                  </div>

                  <div className="rounded-xl border border-muted/40 bg-muted/30 px-4 py-4">
                    <p className="text-sm font-semibold text-foreground">第3步：项目路演</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      初筛团队将进行项目路演，结合路演效果，最终讨论评定入选团队。
                    </p>
                  </div>

                  <div className="rounded-xl border border-muted/40 bg-muted/30 px-4 py-4">
                    <p className="text-sm font-semibold text-foreground">第4步：注册公司，现场办公</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      审核通过后，申请人需在园区内完成公司注册并实行现场办公。有助于帮助创业者更充分地融入园区生态而不仅限于工位使用。
                    </p>
                  </div>
                </div>

                <div className="flex justify-start">
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
                      下载申请表
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
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
