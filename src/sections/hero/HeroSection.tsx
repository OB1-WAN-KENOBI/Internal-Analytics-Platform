import { motion } from 'framer-motion'
import { Button } from '@/shared/ui/Button'
import { DashboardMockup } from '@/shared/assets/dashboard-mockup'
import { PLATFORM_URL } from '@/config'

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            Real-time analytics for your internal tools
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-[1.6]">
            Build powerful dashboards and internal tools with real-time metrics,
            role-based access control, and comprehensive audit logs. Trusted by
            500+ teams worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button asChild size="lg">
              <a href={`${PLATFORM_URL}/dashboard`}>Get Started</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={`${PLATFORM_URL}/dashboard`}>View Dashboard</a>
            </Button>
          </div>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-lg border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-card">
            <DashboardMockup className="w-full h-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
