import { Logo1 } from '@/shared/assets/icons/Logo1'
import { Logo2 } from '@/shared/assets/icons/Logo2'
import { Logo3 } from '@/shared/assets/icons/Logo3'
import { Logo4 } from '@/shared/assets/icons/Logo4'
import { Logo5 } from '@/shared/assets/icons/Logo5'
import { Logo6 } from '@/shared/assets/icons/Logo6'

export function SocialProofSection() {
  const logos = [
    { Component: Logo1, key: 'logo1' },
    { Component: Logo2, key: 'logo2' },
    { Component: Logo3, key: 'logo3' },
    { Component: Logo4, key: 'logo4' },
    { Component: Logo5, key: 'logo5' },
    { Component: Logo6, key: 'logo6' },
  ]

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by 500+ teams worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
          {logos.map(({ Component, key }) => (
            <div key={key} className="flex-shrink-0">
              <Component />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
