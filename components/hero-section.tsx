"use client"

export function HeroSection() {
  return (
    <section className="relative w-full bg-black">
      <div className="border-b border-white/10 px-6 py-8 text-center md:py-12">
        <h1 className="mb-3 font-mono text-4xl font-bold text-white md:text-5xl text-balance">未来数智港</h1>
        <p className="text-base text-white/70 md:text-lg text-balance">科技型企业孵化的创新基地</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* 左侧视频区 */}
        <div className="relative h-[50vh] lg:h-[80vh]">
          <div className="absolute inset-0">
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
              <source src="/videos/xingjuhui.mp4" type="video/mp4" />
              您的浏览器不支持视频播放
            </video>
          </div>
          <div className="absolute inset-0 bg-black/30" />

          {/* 左侧视频标题 */}
          <div className="absolute bottom-8 left-8 z-10">
            <h3 className="font-mono text-2xl font-bold text-white md:text-3xl text-balance">星聚荟</h3>
            <p className="mt-2 text-sm text-white/80 md:text-base">汇聚科技精英，共创未来</p>
          </div>
        </div>

        {/* 右侧视频区 */}
        <div className="relative h-[50vh] lg:h-[80vh]">
          <div className="absolute inset-0">
            <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
              <source src="/videos/intro-video.mp4" type="video/mp4" />
              您的浏览器不支持视频播放
            </video>
          </div>
          <div className="absolute inset-0 bg-black/30" />

          {/* 右侧视频标题 */}
          <div className="absolute bottom-8 left-8 z-10">
            <h3 className="font-mono text-2xl font-bold text-white md:text-3xl text-balance">园区风采</h3>
            <p className="mt-2 text-sm text-white/80 md:text-base">智能化园区，一站式服务</p>
          </div>
        </div>
      </div>

      {/* 滚动提示 */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-white/50">
          <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  )
}
