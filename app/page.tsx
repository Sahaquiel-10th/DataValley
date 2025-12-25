import { HeroSection } from "@/components/hero-section"
import { IntroductionSection } from "@/components/introduction-section"
import { AssetVideoSection } from "@/components/asset-video-section"
import { AssetGroupSection } from "@/components/asset-group-section"
import { QRCodeSection } from "@/components/qrcode-section"
import { FloatingCustomerService } from "@/components/floating-customer-service"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <IntroductionSection />
      <AssetVideoSection />
      <AssetGroupSection />
      <QRCodeSection />
      <FloatingCustomerService />
    </main>
  )
}
