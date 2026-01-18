import { motion } from 'framer-motion'
import { Button } from '@/shared/ui/Button'
import { PLATFORM_URL } from '@/config'

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 leading-tight tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join 500+ teams already using Internal Analytics Platform to monitor
            and manage their internal tools.
          </p>
          <Button asChild size="lg">
            <a href={`${PLATFORM_URL}/dashboard`}>Get Started</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
