import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  CreditCard, 
  Code, 
  RefreshCw, 
  Server, 
  Lock, 
  AlertTriangle, 
  HelpCircle, 
  CheckCircle2, 
  Calendar, 
  ArrowRight,
  Sparkles,
  Scale
} from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { site } from '../data/site.js';

export default function Terms() {
  usePageTitle('Terms & Conditions');
  const [activeSection, setActiveSection] = useState('acceptance');

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms', icon: ShieldCheck },
    { id: 'services', title: '2. Scope of Services', icon: Code },
    { id: 'proposals', title: '3. Estimates & Milestones', icon: Calendar },
    { id: 'payments', title: '4. Payments & Billing', icon: CreditCard },
    { id: 'client-responsibilities', title: '5. Client Obligations', icon: CheckCircle2 },
    { id: 'revisions', title: '6. Revisions & Changes', icon: RefreshCw },
    { id: 'intellectual-property', title: '7. IP & Ownership', icon: Sparkles },
    { id: 'third-party', title: '8. Hosting & Third-Party APIs', icon: Server },
    { id: 'confidentiality', title: '9. Confidentiality & Data', icon: Lock },
    { id: 'cancellation', title: '10. Cancellation & Refunds', icon: AlertTriangle },
    { id: 'liability', title: '11. Limitation of Liability', icon: Scale },
    { id: 'contact-legal', title: '12. Contact & Inquiries', icon: HelpCircle },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="terms-page">
      {/* Page Hero */}
      <section className="page-hero terms-hero">
        <div className="container">
          <span className="eyebrow light">Legal & Policies</span>
          <h1>Terms & Conditions</h1>
          <p>
            Please review these terms and conditions carefully before engaging {site.name} for digital services, web development, software solutions, or marketing campaigns.
          </p>
          <div className="terms-meta-badges">
            <span className="terms-badge">
              <Calendar size={14} /> Effective: October 2024
            </span>
            <span className="terms-badge">
              <ShieldCheck size={14} /> Version 2.2 · Active
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section terms-content-section">
        <div className="container terms-layout">
          {/* Quick Nav Sidebar */}
          <aside className="terms-sidebar">
            <div className="terms-nav-box">
              <div className="terms-nav-header">
                <FileText size={18} className="terms-accent-icon" />
                <h4>Table of Contents</h4>
              </div>
              <ul className="terms-nav-list">
                {sections.map((sec) => {
                  const IconComponent = sec.icon;
                  return (
                    <li key={sec.id}>
                      <button
                        type="button"
                        onClick={() => scrollTo(sec.id)}
                        className={`terms-nav-btn ${activeSection === sec.id ? 'active' : ''}`}
                      >
                        <IconComponent size={15} />
                        <span>{sec.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="terms-help-card">
                <h5>Have Questions?</h5>
                <p>Need custom contract terms or an enterprise NDA?</p>
                <Link to="/contact" className="btn btn-outline terms-help-btn">
                  Talk to Legal Team <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </aside>

          {/* Legal Text Body */}
          <div className="terms-body">
            {/* 1. Acceptance */}
            <Reveal>
              <article id="acceptance" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 01</span>
                    <h2>Acceptance of Terms</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    By accessing our website, hiring <strong>{site.name}</strong>, signing a service agreement, or approving a project estimate, you (the &ldquo;Client&rdquo;) acknowledge that you have read, understood, and agreed to be legally bound by these Terms and Conditions.
                  </p>
                  <p>
                    These terms govern all services provided by {site.name}, registered and operating from Lahore, Pakistan, under the visionary leadership of <strong>Founder &amp; CEO Ali Hamza</strong>. If you do not accept these terms in full, you must not use our website or commission our services.
                  </p>
                  <div className="terms-callout">
                    <strong>Important Note:</strong> Any custom project proposal, statement of work (SOW), or service level agreement (SLA) executed between {site.name} and the Client shall supersede these standard terms in case of direct conflict.
                  </div>
                </div>
              </article>
            </Reveal>

            {/* 2. Scope of Services */}
            <Reveal>
              <article id="services" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <Code size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 02</span>
                    <h2>Scope of Services</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    {site.name} is a full-service software and digital agency delivering industry-leading solutions, including but not limited to:
                  </p>
                  <ul className="terms-bullet-list">
                    <li><strong>Custom Website &amp; Web App Development:</strong> Responsive React, Vite, Next.js, Node.js applications, headless CMS, and scalable architectures.</li>
                    <li><strong>Custom Software &amp; SaaS Solutions:</strong> Tailored internal business tools, CRM/ERP systems, database design, and cloud deployments.</li>
                    <li><strong>Mobile Application Development:</strong> Cross-platform iOS and Android mobile solutions built with React Native.</li>
                    <li><strong>UI/UX Design &amp; Prototyping:</strong> User research, modern Figma design systems, wireframes, and interactive client prototypes.</li>
                    <li><strong>Search Engine Optimization (SEO, GEO &amp; AEO):</strong> Technical audits, local citations, Google Business optimization, and Answer Engine readiness for generative AI search.</li>
                    <li><strong>Social Media Marketing (SMM):</strong> Targeted multi-platform campaigns, ad strategy, creative content management, and brand growth.</li>
                    <li><strong>AI &amp; Automation Systems:</strong> AI customer support chatbots (Botpress, n8n), LLM integrations, and custom workflow automations.</li>
                  </ul>
                  <p>
                    Specific project deliverables, milestones, and technical specifications are explicitly defined in each project proposal or invoice.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* 3. Estimates & Milestones */}
            <Reveal>
              <article id="proposals" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <Calendar size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 03</span>
                    <h2>Project Estimates, Proposals &amp; Milestones</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    All written quotations and proposals provided by {site.name} are valid for <strong>30 calendar days</strong> from issuance date unless otherwise stated in writing.
                  </p>
                  <ul className="terms-bullet-list">
                    <li><strong>Kickoff:</strong> Project execution officially commences only after the initial deposit is confirmed and necessary assets (copy, branding guidelines, login credentials) are received from the client.</li>
                    <li><strong>Delivery Timelines:</strong> Estimated completion times (e.g., 5 business days for Starter, 10–14 days for Growth, or sprint milestones for Enterprise) are provided in good faith and depend on timely client responses.</li>
                    <li><strong>Delays caused by client inaction:</strong> If feedback or required materials are delayed beyond 7 business days, {site.name} reserves the right to adjust delivery deadlines accordingly.</li>
                  </ul>
                </div>
              </article>
            </Reveal>

            {/* 4. Payments & Billing */}
            <Reveal>
              <article id="payments" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <CreditCard size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 04</span>
                    <h2>Payments, Billing &amp; Invoicing</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    {site.name} bills in US Dollars (USD) for international clients and Pakistani Rupees (PKR) for domestic clients as outlined on our Packages page.
                  </p>
                  <ul className="terms-bullet-list">
                    <li><strong>Upfront Commitment:</strong> Standard fixed-price projects require an upfront deposit (typically 50% upon project kickoff, 25% upon design/prototype approval, and 25% upon final pre-deployment sign-off).</li>
                    <li><strong>Monthly Retainers:</strong> Monthly digital marketing, SEO, and ongoing maintenance packages are billed in advance at the start of each billing cycle.</li>
                    <li><strong>Invoicing Terms:</strong> Invoices are payable within 5 business days of issue. Invoices not cleared within 14 calendar days may lead to temporary suspension of active services or development servers.</li>
                    <li><strong>Payment Methods:</strong> We accept direct bank transfers, wire transfers (IBAN/SWIFT), Wise, Payoneer, and approved local payment channels. All transactional fees or intermediary bank charges are the responsibility of the client.</li>
                  </ul>
                </div>
              </article>
            </Reveal>

            {/* 5. Client Obligations */}
            <Reveal>
              <article id="client-responsibilities" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 05</span>
                    <h2>Client Obligations &amp; Content Delivery</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    To ensure prompt project delivery and peak quality, the Client agrees to:
                  </p>
                  <ul className="terms-bullet-list">
                    <li>Provide all necessary text, images, logos, product information, and third-party credentials in a timely manner.</li>
                    <li>Guarantee that all materials provided to {site.name} are owned by the client or legally licensed, and do not infringe any trademark or intellectual property laws.</li>
                    <li>Designate a primary point of contact with decision-making authority for approvals and feedback reviews.</li>
                  </ul>
                </div>
              </article>
            </Reveal>

            {/* 6. Revisions & Scope Policy */}
            <Reveal>
              <article id="revisions" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <RefreshCw size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 06</span>
                    <h2>Revisions, Feedback &amp; Scope Policy</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    We take immense pride in crafting products that exceed client expectations. To balance creativity with structured delivery, our revision policies are governed as follows:
                  </p>
                  <div className="terms-grid-2">
                    <div className="terms-mini-box">
                      <h4>Starter Package</h4>
                      <p>Includes <strong>2 rounds</strong> of minor revisions during the review phase (within 3 days of initial delivery). Additional revision requests are billed at $30/request.</p>
                    </div>
                    <div className="terms-mini-box">
                      <h4>Growth Package</h4>
                      <p>Includes <strong>unlimited minor revisions</strong> during the 7-day review period post-delivery. Structural overhauls are billed at $50/hour.</p>
                    </div>
                  </div>
                  <p className="mt-4">
                    <strong>Scope Creep:</strong> Any functionality, third-party integration, or structural redesign not enumerated in the initial agreement shall be deemed a &ldquo;Change Request&rdquo; and will be quoted separately before work begins.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* 7. IP & Ownership */}
            <Reveal>
              <article id="intellectual-property" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <Sparkles size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 07</span>
                    <h2>Intellectual Property &amp; Ownership</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    <strong>100% Client Ownership upon Final Payment:</strong> Once all dues, milestone balances, and invoices are settled in full, full ownership of the custom codebase, graphics, frontend designs, and digital assets created specifically for the project transfers to the Client.
                  </p>
                  <p>
                    <strong>Pre-existing Code &amp; Open-Source Libraries:</strong> {site.name} utilizes reputable open-source libraries (e.g., React, Node, Tailwind, standard npm packages). These remain subject to their respective MIT/Apache licenses.
                  </p>
                  <p>
                    <strong>Portfolio &amp; Showcase Rights:</strong> Unless protected by a signed mutual Non-Disclosure Agreement (NDA) prior to kickoff, {site.name} retains the right to showcase screenshots, case studies, and live links of completed work in our digital portfolio and social marketing channels.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* 8. Hosting & Third-Party APIs */}
            <Reveal>
              <article id="third-party" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <Server size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 08</span>
                    <h2>Hosting, Domains &amp; Third-Party Services</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    Web hosting, domain registrations, third-party API fees (such as OpenAI tokens, Botpress subscriptions, Twilio, Google Cloud, AWS, or payment gateway charges) are direct costs paid by the client unless explicitly bundled in an enterprise managed maintenance tier.
                  </p>
                  <p>
                    {site.name} does not control the uptime, pricing modifications, or policy shifts of third-party platforms and cannot be held liable for third-party server downtimes or API deprecations.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* 9. Confidentiality */}
            <Reveal>
              <article id="confidentiality" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <Lock size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 09</span>
                    <h2>Confidentiality &amp; Data Protection</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    Both parties agree to safeguard proprietary and confidential information disclosed during the project lifecycle. {site.name} will never sell, lease, or distribute your private business data, database schemas, or customer lists to any third party.
                  </p>
                  <p>
                    We gladly sign mutual Non-Disclosure Agreements (NDAs) for enterprise solutions, proprietary SaaS codebases, and startup ventures prior to discovery calls.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* 10. Cancellation & Refunds */}
            <Reveal>
              <article id="cancellation" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <AlertTriangle size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 10</span>
                    <h2>Cancellation &amp; Refund Policy</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    Either party may terminate a service contract by submitting a <strong>14-day written notice</strong> via email.
                  </p>
                  <ul className="terms-bullet-list">
                    <li><strong>Non-Refundable Deposits:</strong> Upfront deposits cover initial architecture planning, wireframing, sprint allocation, and development resource reservation. Deposits are non-refundable once development or design sprints have begun.</li>
                    <li><strong>Pro-Rata Settlement:</strong> Upon early cancellation, the Client shall pay for all hours worked, milestones completed, and non-cancellable third-party expenses accrued up to the termination date.</li>
                    <li><strong>Deliverable Handoff:</strong> Any work completed up to the cancellation date for which payment has been received will be handed over to the Client in its current state.</li>
                  </ul>
                </div>
              </article>
            </Reveal>

            {/* 11. Limitation of Liability */}
            <Reveal>
              <article id="liability" className="terms-card">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <Scale size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 11</span>
                    <h2>Warranty &amp; Limitation of Liability</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    <strong>30-Day Post-Launch Bug Warranty:</strong> All custom code delivered by {site.name} includes a complimentary 30-day bug warranty starting from the deployment date, covering defects or errors directly attributable to our code.
                  </p>
                  <p>
                    To the maximum extent permitted by applicable law, in no event shall {site.name}, its founder, or developers be liable for indirect, incidental, punitive, or consequential damages (including lost profits, business interruptions, or loss of commercial data). Our total cumulative liability arising out of any project shall not exceed the total fees actually paid to {site.name} by the Client for the specific deliverable in dispute.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* 12. Contact & Inquiries */}
            <Reveal>
              <article id="contact-legal" className="terms-card terms-contact-highlight">
                <div className="terms-card-header">
                  <div className="terms-icon-wrapper">
                    <HelpCircle size={22} />
                  </div>
                  <div>
                    <span className="terms-section-tag">Section 12</span>
                    <h2>Contact &amp; Legal Inquiries</h2>
                  </div>
                </div>
                <div className="terms-card-content">
                  <p>
                    If you have any questions or clarifications regarding our Terms and Conditions, or wish to request custom contractual terms, please contact our leadership team:
                  </p>
                  <div className="terms-contact-info-grid">
                    <div className="terms-contact-item">
                      <span className="muted-label">Agency Name</span>
                      <strong>{site.name}</strong>
                    </div>
                    <div className="terms-contact-item">
                      <span className="muted-label">Founder &amp; CEO</span>
                      <strong>Ali Hamza</strong>
                    </div>
                    <div className="terms-contact-item">
                      <span className="muted-label">Official Email</span>
                      <a href={`mailto:${site.email}`} className="terms-link">{site.email}</a>
                    </div>
                    <div className="terms-contact-item">
                      <span className="muted-label">Phone &amp; WhatsApp</span>
                      <a href={`tel:${site.phone.replace(/\s+/g, '')}`} className="terms-link">{site.phone}</a>
                    </div>
                    <div className="terms-contact-item">
                      <span className="muted-label">Headquarters</span>
                      <strong>{site.address}</strong>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CtaBand />
    </div>
  );
}
