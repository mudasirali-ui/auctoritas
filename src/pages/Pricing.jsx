import { Check } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { Link } from 'react-router-dom'

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '49',
      description: 'Perfect for small teams getting started with compliance.',
      features: [
        'Up to 5 users',
        'Basic compliance templates',
        'Standard email support',
        'Monthly reporting'
      ],
      buttonText: 'Get Started',
      buttonClass: 'btn-secondary',
      highlighted: false
    },
    {
      name: 'Professional',
      price: '149',
      description: 'Ideal for growing businesses needing full coverage.',
      features: [
        'Up to 25 users',
        'Full compliance library',
        'Priority 24/7 support',
        'Custom reporting & analytics',
        'API access'
      ],
      buttonText: 'Book Demo',
      buttonClass: 'btn-primary',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: '399',
      description: 'Advanced features for large scale organizations.',
      features: [
        'Unlimited users',
        'Custom workflow automation',
        'Dedicated account manager',
        'Advanced security features',
        'SLA guarantee',
        'On-premise deployment options'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'btn-secondary',
      highlighted: false
    }
  ]

  return (
    <PageTransition>
      <main style={{ paddingTop: '160px', paddingBottom: '6rem' }}>
        <section className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h1 style={{ marginBottom: '1.5rem' }}>Simple, transparent pricing.</h1>
            <p style={{ fontSize: '1.25rem' }}>Choose the perfect plan to streamline your enterprise knowledge and compliance workflows. No hidden fees.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'stretch', maxWidth: '1100px', margin: '0 auto' }}>
            {tiers.map((tier, index) => (
              <div 
                key={index} 
                className="card" 
                style={{ 
                  borderColor: tier.highlighted ? 'var(--primary)' : 'var(--border)',
                  borderWidth: tier.highlighted ? '2px' : '1px',
                  boxShadow: tier.highlighted ? '0 20px 25px -5px rgba(0, 130, 200, 0.1), 0 10px 10px -5px rgba(0, 130, 200, 0.04)' : 'var(--shadow-md)',
                  zIndex: tier.highlighted ? 10 : 1,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  position: 'relative'
                }}
              >
                {tier.highlighted && (
                  <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 600, alignSelf: 'flex-start', marginBottom: '1rem' }}>
                    Most Popular
                  </div>
                )}
                
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{tier.name}</h3>
                <p style={{ minHeight: '3rem', marginBottom: '2rem' }}>{tier.description}</p>
                
                <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                  <span style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--text-main)', lineHeight: 1 }}>${tier.price}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '1.125rem', fontWeight: 500 }}>/mo</span>
                </div>

                <Link to="/contact" className={`btn ${tier.buttonClass}`} style={{ width: '100%', marginBottom: '2.5rem' }}>
                  {tier.buttonText}
                </Link>

                <div style={{ marginTop: 'auto' }}>
                  <p style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--text-main)' }}>What's included:</p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {tier.features.map((feature, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-muted)' }}>
                        <Check size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '6rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Need a custom solution?</h3>
            <p style={{ marginBottom: '2rem' }}>We offer tailored plans for massive scale and specific compliance requirements.</p>
            <Link to="/contact" className="btn btn-primary">
              Contact our Enterprise Team
            </Link>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
