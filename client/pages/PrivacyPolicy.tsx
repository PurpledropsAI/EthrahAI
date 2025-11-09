import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FEFEFE]">
      <Header />
      <main className="mx-auto max-w-[1280px] px-4 sm:px-6 md:px-10 py-12 md:py-20">
        <div className="mx-auto w-full max-w-3xl">
          <header className="mb-10 md:mb-14 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#141414]">
              PRIVACY POLICY - ETHRAH AI
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#737373]">
              Last Updated: <time dateTime="2025-11-08">November 8, 2025</time>
            </p>
          </header>

          <div className="prose prose-neutral max-w-none prose-headings:font-semibold prose-h2:text-[#141414] prose-p:text-[#595959] prose-li:text-[#595959] prose-a:text-[#141414] dark:prose-invert">
            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl text-[#141414]">1. INTRODUCTION</h2>
              <p className="mt-3">
                Welcome to Ethrah AI. We are committed to protecting your privacy and ensuring you have a positive experience on our website and when using our services. This Privacy Policy explains how we collect, use, share, and safeguard your personal information. By accessing and using our website at <a href="https://www.ethrah.ai" target="_blank" rel="noopener noreferrer" className="underline">www.ethrah.ai</a> and our services, you acknowledge that you have read and agree to be bound by this Privacy Policy. If you do not agree with our policies, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl text-[#141414]">2. INFORMATION WE COLLECT</h2>
              <p className="mt-3">
                <span className="font-semibold">Information You Provide:</span> When you contact us, fill out forms, or register for services, we collect your full name, email address, phone number, company name, job title, and business address. When you communicate with us through contact forms or messages, we collect the content of your inquiries, including details about your business challenges and project descriptions. If you create an account, we store your username and password. For clients who purchase services, we collect payment information through secure third-party processors, along with billing address and payment history. When you use our AI solutions, we collect information about your requirements, business goals, technical specifications, and files you upload for processing.
              </p>
              <p className="mt-3">
                <span className="font-semibold">Information Collected Automatically:</span> When you visit our website, we automatically collect technical information including pages you visit, links you click, your browser type, operating system, and IP address. We use cookies and tracking technologies to remember your preferences and analyze how you use our website. We collect approximate location information based on your IP address (city and country level).
              </p>
              <p className="mt-3">
                <span className="font-semibold">Information from Third Parties:</span> We may receive information about you from your employer, business partners, referral sources, or public sources when relevant to your inquiry or service request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl text-[#141414]">3. LEGAL BASIS FOR PROCESSING</h2>
              <p className="mt-3">We process your personal data based on the following legal foundations:</p>
              <ul className="mt-3 list-disc pl-6">
                <li>
                  <span className="font-semibold">Your Consent:</span> You have voluntarily agreed to allow us to collect and use your information. You can withdraw consent at any time.
                </li>
                <li>
                  <span className="font-semibold">Contract Performance:</span> Processing is necessary to provide the services you have requested from us.
                </li>
                <li>
                  <span className="font-semibold">Legal Obligation:</span> We are required by UAE law and regulations to process certain data for tax and compliance purposes.
                </li>
                <li>
                  <span className="font-semibold">Legitimate Business Interests:</span> We process data to improve our services, prevent fraud, conduct analytics, and market our services with your permission.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl text-[#141414]">4. HOW WE USE YOUR INFORMATION</h2>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Provide AI solutions, products, and consulting services you have requested</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Create and deliver proposals and service agreements</li>
                <li>Send transactional emails (confirmations, invoices, receipts, service updates)</li>
                <li>Send marketing communications if you have consented to receive them (you can opt out anytime)</li>
                <li>Analyze website usage to improve our services and user experience</li>
                <li>Detect and prevent fraud and security threats</li>
                <li>Comply with legal obligations and maintain business records</li>
                <li>Schedule consultations and meetings with you</li>
                <li>Track service performance and client satisfaction</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl text-[#141414]">5. WHO WE SHARE YOUR DATA WITH</h2>
              <p className="mt-3">We only share your information with:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Service Providers:</span> Cloud hosting providers (AWS, Google Cloud, Azure), payment processors, email service providers, analytics platforms, and CRM systems that help us deliver services to you
                </li>
                <li>
                  <span className="font-semibold">Business Partners:</span> Technology vendors and integration partners only when necessary to deliver your service
                </li>
                <li>
                  <span className="font-semibold">Legal Requirements:</span> Government authorities, law enforcement, courts, and regulatory bodies when legally required
                </li>
                <li>
                  <span className="font-semibold">With Your Consent:</span> Any other third party only with your explicit written permission
                </li>
              </ul>
              <p className="mt-3">We do NOT sell your information to data brokers, marketing companies, or other unauthorized third parties.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl text-[#141414]">6. DATA RETENTION</h2>
              <p className="mt-3">We retain your personal data for the following periods:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Contact form submissions: 2 years</li>
                <li>Consultation records: Duration of relationship + 2 years</li>
                <li>Service contracts and proposals: 5 years (per tax requirements)</li>
                <li>Financial records and invoices: 5 years minimum (per UAE law)</li>
                <li>Website analytics: 13 months</li>
                <li>Email communications: 3 years or duration of relationship + 1 year</li>
                <li>Marketing consent records: Until you withdraw consent</li>
                <li>Technical logs and security data: 90 days to 1 year</li>
              </ul>
              <p className="mt-3">When retention periods expire, we securely delete or anonymize your data. You can request deletion of your information at any time, though we may need to retain certain data for legal or tax compliance reasons.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl text-[#141414]">7. YOUR DATA RIGHTS</h2>
              <p className="mt-3">Under the UAE Personal Data Protection Law, you have the following rights:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Right of Access:</span> You can request a copy of the personal data we hold about you in a readable format. We will provide this within 30 days of your request at no charge.
                </li>
                <li>
                  <span className="font-semibold">Right to Correction:</span> You can request that we correct any inaccurate or incomplete information about you. We will update your data promptly.
                </li>
                <li>
                  <span className="font-semibold">Right to Deletion:</span> You can request deletion of your personal data under certain circumstances. We may refuse if deletion would prevent us from fulfilling legal obligations or completing your service request.
                </li>
                <li>
                  <span className="font-semibold">Right to Data Portability:</span> You can request your data in a machine-readable format (CSV, JSON) and transfer it to another provider.
                </li>
                <li>
                  <span className="font-semibold">Right to Object:</span> You can object to processing of your data based on legitimate interests. You have the absolute right to opt out of marketing communications at any time.
                </li>
                <li>
                  <span className="font-semibold">Right to Restrict Processing:</span> You can request that we limit how we use your data while you verify accuracy or resolve disputes.
                </li>
                <li>
                  <span className="font-semibold">Right to Withdraw Consent:</span> If we process data based on your consent, you can withdraw it at any time by contacting us.
                </li>
              </ul>
              <p className="mt-3">
                <span className="font-semibold">How to Exercise Rights:</span> Email <a href="mailto:ethrah.ai@gmail.com" className="underline">ethrah.ai@gmail.com</a> with "Privacy Request" in the subject line. Include your name, email, and description of your request. We will respond within 30 days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl text-[#141414]">8. COOKIES AND TRACKING</h2>
              <p className="mt-3">
                <span className="font-semibold">What Are Cookies:</span> Cookies are small files stored on your device that help us recognize you and remember your preferences.
              </p>
              <p className="mt-3 font-semibold">Types of Cookies We Use:</p>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Essential Cookies:</span> Required for website function (login, security, preferences) - cannot be disabled
                </li>
                <li>
                  <span className="font-semibold">Analytics Cookies:</span> Track website usage to help us improve (can be disabled)
                </li>
                <li>
                  <span className="font-semibold">Marketing Cookies:</span> Used for advertising and retargeting (can be disabled with consent)
                </li>
                <li>
                  <span className="font-semibold">Functional Cookies:</span> Remember your choices like language preference (can be disabled)
                </li>
              </ul>
              <p className="mt-3">
                <span className="font-semibold">Managing Cookies:</span> You can control cookies through your browser settings. When you visit our website, a cookie consent banner will allow you to accept all cookies, reject optional cookies, or manage preferences. You can change your preferences at any time through our footer cookie link.
              </p>
              <p className="mt-3">
                <span className="font-semibold">Third-Party Cookies:</span> Google Analytics, Facebook Pixel, LinkedIn Insight Tag, and email marketing platforms may place cookies on our website. You can control these through their opt-out pages or your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl text-[#141414]">9. DATA SECURITY</h2>
              <p className="mt-3">
                <span className="font-semibold">Technical Security:</span> All data transmitted between your device and our servers is encrypted using SSL/TLS technology. Data stored on our servers is encrypted using AES-256 encryption. We use secure password hashing (bcrypt, Argon2). Two-factor authentication (2FA) protects user accounts. We maintain firewalls, intrusion detection systems, DDoS protection, and Web Application Firewalls. We keep all software updated with security patches.
              </p>
              <p className="mt-3">
                <span className="font-semibold">Organizational Security:</span> We limit data access to authorized personnel only. All staff receive data protection training and sign confidentiality agreements. We conduct regular security audits and penetration testing. We maintain detailed access logs to track data handling.
              </p>
              <p className="mt-3">
                <span className="font-semibold">Important Limitation:</span> No security system is 100% secure. While we implement industry-leading protections, there is always some inherent risk. We are not liable for breaches beyond our reasonable control.
              </p>
              <p className="mt-3">
                <span className="font-semibold">Breach Response:</span> If we discover unauthorized access to your data, we will investigate immediately and notify affected individuals within 24 hours if there is likely risk of harm. We will report to authorities as required by law and implement preventive measures.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl text-[#141414]">10. CHILDREN'S PRIVACY</h2>
              <p className="mt-3">
                Our website and services are not intended for children under 18. We do not knowingly collect information from children under 18. If we discover we have inadvertently collected such information, we will delete it immediately. If you are a parent or guardian and believe we have collected information from your child, contact us at <a href="mailto:ethrah.ai@gmail.com" className="underline">ethrah.ai@gmail.com</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl text-[#141414]">11. THIRD-PARTY LINKS</h2>
              <p className="mt-3">
                Our website may contain links to third-party websites. We are not responsible for their privacy practices, content, or security. We recommend that you review their privacy policies before providing any information. Links do not constitute endorsement of those sites or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl text-[#141414]">12. COMPLIANCE WITH LAWS</h2>
              <p className="mt-3">
                <span className="font-semibold">UAE Personal Data Protection Law (PDPL):</span> We comply with Federal Decree-Law No. 45 of 2021 by obtaining clear consent, respecting purpose limitation, implementing data security, and honoring your individual rights.
              </p>
              <p className="mt-3">
                <span className="font-semibold">GDPR (For EU Users):</span> If you are in the EU, we apply GDPR principles and procedures to protect your data with the same standards as UAE PDPL users.
              </p>
              <p className="mt-3">
                <span className="font-semibold">CCPA (For California Residents):</span> If you are in California, you have rights to know what data we collect, request deletion, opt out of data sharing, and correct inaccurate information. We do not discriminate against you for exercising these rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl text-[#141414]">13. AI SERVICES AND DATA HANDLING</h2>
              <p className="mt-3">
                <span className="font-semibold">Model Training:</span> Your personal data and business data will NOT be used to train our AI models without your explicit written consent. Client data remains your property and under your control. Models are trained only on data you authorize, anonymized data, or our own synthetic data.
              </p>
              <p className="mt-3">
                <span className="font-semibold">Automated Decisions:</span> If our AI makes decisions affecting your business, we will inform you, explain how it works, and allow you to request human review or object to the automated decision.
              </p>
              <p className="mt-3">
                <span className="font-semibold">Third-Party AI Platforms:</span> We may use third-party AI services (OpenAI, Google Cloud, etc.). We only use enterprise/private versions that do NOT use your data to train their public models. We have contracts in place protecting your data. You will be informed of any third-party involvement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl text-[#141414]">14. DATA PROCESSING AGREEMENTS</h2>
              <p className="mt-3">
                For business clients who purchase AI services and have us process business data, we provide a separate Data Processing Agreement (DPA) that specifies data types, processing purposes, security measures, and your rights. Request a DPA at <a href="mailto:ethrah.ai@gmail.com" className="underline">ethrah.ai@gmail.com</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl sm:text-3xl text-[#141414]">15. MODIFICATIONS TO THIS POLICY</h2>
              <p className="mt-3">
                We may update this Privacy Policy to reflect changes in our practices, legal requirements, technology, or user feedback. When we make updates, we will post the new version with an updated "Last Updated" date. For significant changes, we will send email notice to registered users at least 30 days before the changes take effect. Your continued use of our services means you accept the updated policy. If you disagree with changes, you can stop using our services.
              </p>
            </section>

            <section className="mb-2">
              <h2 className="text-2xl sm:text-3xl text-[#141414]">16. CONTACT US</h2>
              <p className="mt-3">For any questions about this Privacy Policy, to exercise your rights, or to report privacy concerns:</p>
              <ul className="mt-3 list-none pl-0 space-y-1">
                <li>
                  Email: <a className="underline" href="mailto:ethrah.ai@gmail.com">ethrah.ai@gmail.com</a>
                </li>
                <li>
                  Phone: <a className="underline" href="tel:+971528978549">+971 52 897 8549</a>
                </li>
                <li>
                  Website: <a className="underline" href="https://www.ethrah.ai" target="_blank" rel="noopener noreferrer">www.ethrah.ai</a>
                </li>
              </ul>
              <p className="mt-3 text-sm text-[#737373]">We will acknowledge your request within 2 business days and provide a complete response within 30 days. For urgent privacy concerns, include "URGENT" in your email subject line.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
