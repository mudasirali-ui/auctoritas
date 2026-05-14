import PageTransition from '../components/PageTransition'

export default function PrivacyPolicy() {
  return (
    <PageTransition>
      <main style={{ paddingTop: '160px', paddingBottom: '6rem' }}>
        <section className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>Legal</div>
            <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>Privacy Policy</h1>
            <p style={{ fontSize: '1.125rem' }}>Last updated: May 13, 2026</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: 'var(--text-muted)' }}>
            <div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>1. Introduction</h3>
              <p>Welcome to Auctoritas. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>2. The data we collect about you</h3>
              <p style={{ marginBottom: '1rem' }}>Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>3. How we use your personal data</h3>
              <p style={{ marginBottom: '1rem' }}>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>4. Data Security</h3>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>5. Contact Details</h3>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: <strong>privacy@auctoritas.com.au</strong></p>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
