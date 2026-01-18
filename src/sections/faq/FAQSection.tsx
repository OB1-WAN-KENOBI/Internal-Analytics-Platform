import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/shared/utils'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Is it secure?',
    answer:
      'Yes, security is our top priority. We use industry-standard encryption, follow security best practices, and undergo regular security audits. All data is encrypted in transit and at rest.',
  },
  {
    question: 'How real-time works?',
    answer:
      'Our platform uses WebSocket connections to push updates to your dashboard instantly. When data changes in your connected sources, you see the updates in real-time without page refreshes.',
  },
  {
    question: 'Is self-hosting supported?',
    answer:
      'Yes, our Enterprise plan includes self-hosting options. You can deploy the platform on your own infrastructure while still receiving updates and support from our team.',
  },
  {
    question: 'Who is it for?',
    answer:
      'Internal Analytics Platform is designed for teams and organizations that need visibility into their internal tools and systems. It\'s perfect for engineering teams, product teams, and operations teams.',
  },
  {
    question: 'Can I upgrade later?',
    answer:
      'Absolutely! You can upgrade your plan at any time. When you upgrade, you\'ll immediately gain access to the new features, and we\'ll prorate the billing for the remainder of your billing cycle.',
  },
  {
    question: 'What data sources can I connect?',
    answer:
      'We support a wide variety of data sources including databases (PostgreSQL, MySQL, MongoDB), APIs (REST, GraphQL), cloud services (AWS, GCP, Azure), and many more. Custom integrations are available for Enterprise customers.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 leading-tight tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Internal Analytics Platform.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="border border-border rounded-lg bg-card">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors rounded-lg"
                >
                  <span className="font-semibold text-foreground">
                    {faq.question}
                  </span>
                  <svg
                    className={cn(
                      'w-5 h-5 text-muted-foreground transition-transform',
                      openIndex === index && 'rotate-180'
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
