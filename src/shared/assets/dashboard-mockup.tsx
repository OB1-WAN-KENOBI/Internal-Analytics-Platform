interface DashboardMockupProps {
  className?: string
}

export function DashboardMockup({ className }: DashboardMockupProps) {
  return (
    <svg width="800" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="800" height="500" fill="#f8fafc"/>
      <rect x="0" y="0" width="800" height="60" fill="#ffffff"/>
      <rect x="20" y="20" width="120" height="20" rx="4" fill="#e2e8f0"/>
      <rect x="680" y="20" width="100" height="20" rx="4" fill="#4f46e5"/>
      <rect x="0" y="60" width="200" height="440" fill="#ffffff"/>
      <rect x="20" y="80" width="160" height="12" rx="2" fill="#e2e8f0"/>
      <rect x="20" y="100" width="160" height="12" rx="2" fill="#e2e8f0"/>
      <rect x="20" y="120" width="160" height="12" rx="2" fill="#4f46e5" opacity="0.2"/>
      <rect x="20" y="140" width="160" height="12" rx="2" fill="#e2e8f0"/>
      <rect x="220" y="80" width="560" height="40" rx="4" fill="#ffffff"/>
      <rect x="240" y="90" width="200" height="20" rx="2" fill="#e2e8f0"/>
      <rect x="220" y="140" width="270" height="160" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
      <rect x="240" y="160" width="230" height="120" rx="4" fill="#f1f5f9"/>
      <circle cx="280" cy="220" r="3" fill="#4f46e5"/>
      <circle cx="320" cy="200" r="3" fill="#3b82f6"/>
      <circle cx="360" cy="240" r="3" fill="#8b5cf6"/>
      <rect x="510" y="140" width="270" height="160" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
      <rect x="530" y="160" width="230" height="120" rx="4" fill="#f1f5f9"/>
      <rect x="550" y="200" width="40" height="60" rx="2" fill="#4f46e5"/>
      <rect x="600" y="180" width="40" height="80" rx="2" fill="#3b82f6"/>
      <rect x="650" y="190" width="40" height="70" rx="2" fill="#8b5cf6"/>
      <rect x="220" y="320" width="560" height="180" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
      <rect x="240" y="340" width="520" height="12" rx="2" fill="#e2e8f0"/>
      <rect x="240" y="360" width="520" height="8" rx="2" fill="#f1f5f9"/>
      <rect x="240" y="375" width="520" height="8" rx="2" fill="#f1f5f9"/>
      <rect x="240" y="390" width="520" height="8" rx="2" fill="#f1f5f9"/>
    </svg>
  )
}
