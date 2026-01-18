import { Layout } from './app/layout/Layout'
import { HeroSection } from './sections/hero/HeroSection'
import { SocialProofSection } from './sections/social-proof/SocialProofSection'
import { FeaturesSection } from './sections/features/FeaturesSection'
import { ScreenshotsSection } from './sections/screenshots/ScreenshotsSection'
import { HowItWorksSection } from './sections/how-it-works/HowItWorksSection'
import { PricingSection } from './sections/pricing/PricingSection'
import { FAQSection } from './sections/faq/FAQSection'
import { CTASection } from './sections/cta/CTASection'

function App() {
  return (
    <Layout>
      <HeroSection />
      <SocialProofSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <HowItWorksSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </Layout>
  )
}

export default App
