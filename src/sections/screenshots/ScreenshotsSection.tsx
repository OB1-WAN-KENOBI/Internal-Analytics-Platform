import { motion } from 'framer-motion'
import { DashboardScreenshot } from '@/shared/assets/dashboard-screenshot'

export function ScreenshotsSection() {
  const annotations = [
    {
      title: 'Real-time Metrics',
      description: 'Live updates of key performance indicators',
      position: { top: '20%', left: '30%' },
    },
    {
      title: 'Custom Dashboards',
      description: 'Build dashboards tailored to your needs',
      position: { top: '45%', left: '60%' },
    },
    {
      title: 'Data Visualization',
      description: 'Interactive charts and graphs',
      position: { top: '70%', left: '40%' },
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 leading-tight tracking-tight">
            See it in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our dashboard provides everything you need to monitor and manage
            your internal tools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="rounded-lg border border-border shadow-xl overflow-hidden bg-card">
            <DashboardScreenshot className="w-full h-auto" />
          </div>

          {/* Annotations */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {annotations.map((annotation, index) => (
              <motion.div
                key={annotation.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                className="absolute"
                style={annotation.position}
              >
                <div className="bg-background border border-border rounded-lg p-4 shadow-lg max-w-xs">
                  <h3 className="font-semibold text-foreground mb-1">
                    {annotation.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {annotation.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
