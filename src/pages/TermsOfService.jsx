import PageTransition from '../components/PageTransition'

export default function TermsOfService() {
  return (
    <PageTransition>
      <main style={{ paddingTop: '160px', paddingBottom: '6rem' }}>
        <section className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>Legal</div>
            <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>Terms of Service</h1>
            <p style={{ fontSize: '1.125rem' }}>Last updated: May 13, 2026</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', color: 'var(--text-muted)' }}>
            <div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>1. Agreement to Terms</h3>
              <p>By accessing or using Auctoritas, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>2. Use License</h3>
              <p style={{ marginBottom: '1rem' }}>Permission is granted to temporarily download one copy of the materials (information or software) on Auctoritas's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>Attempt to decompile or reverse engineer any software contained on Auctoritas's website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>3. Disclaimer</h3>
              <p>The materials on Auctoritas's website are provided on an 'as is' basis. Auctoritas makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>4. Limitations</h3>
              <p>In no event shall Auctoritas or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Auctoritas's website, even if Auctoritas or a Auctoritas authorized representative has been notified orally or in writing of the possibility of such damage.</p>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>5. Revisions and Errata</h3>
              <p>The materials appearing on Auctoritas's website could include technical, typographical, or photographic errors. Auctoritas does not warrant that any of the materials on its website are accurate, complete or current. Auctoritas may make changes to the materials contained on its website at any time without notice.</p>
            </div>

            <div>
              <h3 style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>6. Governing Law</h3>
              <p>These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
