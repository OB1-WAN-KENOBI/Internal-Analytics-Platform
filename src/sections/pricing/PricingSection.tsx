import { motion } from 'framer-motion'
import { Button } from '@/shared/ui/Button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/ui/Card'
import { Badge } from '@/shared/ui/Badge'
import { PLATFORM_URL } from '@/config'

interface Plan {
  name: string
  price: string
  description: string
  features: string[]
  highlighted?: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for getting started',
    features: [
      'Up to 5 team members',
      'Basic dashboards',
      'Real-time metrics',
      'Email support',
      'Community access',
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'For growing teams',
    features: [
      'Unlimited team members',
      'Advanced dashboards',
      'Role-based access',
      'Feature flags',
      'Audit logs',
      'Priority support',
      'Custom integrations',
    ],
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Everything in Pro',
      'Self-hosting option',
      'Dedicated support',
      'Custom SLA',
      'Advanced security',
      'On-premise deployment',
      'Custom training',
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4 leading-tight tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your team. All plans include our core
            features.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`h-full flex flex-col transition-all ${
                  plan.highlighted
                    ? 'border-primary shadow-lg scale-[1.02] md:scale-[1.03]'
                    : ''
                }`}
              >
                <CardHeader>
                  {plan.badge && (
                    <div className="mb-3">
                      <Badge variant="default">{plan.badge}</Badge>
                    </div>
                  )}
                  <CardTitle className="text-2xl mb-3">{plan.name}</CardTitle>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full"
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    <a href={`${PLATFORM_URL}/dashboard`}>Get Started</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
