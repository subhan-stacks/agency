import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import usePageTitle from '../hooks/usePageTitle.js';
import { site, services } from '../data/site.js';

const emptyForm = { name: '', email: '', service: '', budget: '', timeline: 'Flexible', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SCOPE_OPTIONS = [
  'Website Dev',
  'Custom Software',
  'Mobile App',
  'UI/UX Design',
  'SEO / AEO / GEO',
  'Social Media',
  'AI & Chatbot',
];

const BUDGET_PRESETS = {
  USD: ['Under $500', '$500 – $1,000', '$1,000 – $2,500', '$2,500+'],
  PKR: ['Under Rs. 100k', 'Rs. 100k – 250k', 'Rs. 250k – 500k', 'Rs. 500k+'],
};

const TIMELINE_OPTIONS = ['Flexible', '1–2 Weeks', '1 Month', 'Urgent'];

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!emailPattern.test(values.email)) errors.email = 'Please enter a valid email.';
  if (values.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.';
  return errors;
}

export default function Contact() {
  usePageTitle('Contact');
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Client budget & scope state
  const [selectedScope, setSelectedScope] = useState([]);
  const [currency, setCurrency] = useState('USD');

  const toggleScope = (item) => {
    setSelectedScope((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
    if (submitError) setSubmitError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    try {
      setSubmitting(true);
      setSubmitError('');

      const formData = new FormData();
      formData.append('access_key', 'fffdd84b-8df3-414c-942d-830a30a9dc38');
      formData.append('subject', `New Contact Inquiry from ${values.name} — ${site.name}`);
      formData.append('from_name', values.name);
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('service', values.service || 'General Inquiry');
      if (values.budget.trim()) {
        formData.append('client_budget', `${values.budget.trim()} (${currency})`);
      }
      if (selectedScope.length > 0) {
        formData.append('project_scope', selectedScope.join(', '));
      }
      formData.append('timeline', values.timeline);
      formData.append('message', values.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setSent(true);
        setValues(emptyForm);
        setSelectedScope([]);
      } else {
        setSubmitError(data.message || 'Failed to send message. Please try again.');
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow light">Contact</span>
          <h1>Let&apos;s talk about your project</h1>
          <p>Fill in the form and we will get back to you within one business day.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="card contact-info">
            <h3>Get in touch</h3>
            <ul className="contact-list big">
              <li>
                <Icon name="mail" size={20} />{' '}
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <Icon name="call" size={20} />{' '}
                <a href={`tel:${site.phone.replace(/\s+/g, '')}`}>{site.phone}</a>
              </li>
              <li><Icon name="pin" size={20} /> {site.address}</li>
            </ul>

            <div className="contact-socials">
              <h4>Follow us</h4>
              <div className="contact-social-links">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-social-pill"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="card">
            {sent ? (
              <div className="success" role="status">
                <Icon name="check" size={40} />
                <h3>Thank you!</h3>
                <p>Your message has been received. We will reply very soon.</p>
                <button type="button" className="btn btn-outline" onClick={() => setSent(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="contact-row-2">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" value={values.name} onChange={handleChange} autoComplete="name" />
                    {errors.name && <span className="error">{errors.name}</span>}
                  </div>

                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" value={values.email} onChange={handleChange} autoComplete="email" />
                    {errors.email && <span className="error">{errors.email}</span>}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="service">Service</label>
                  <select id="service" name="service" value={values.service} onChange={handleChange}>
                    <option value="">Select a service (optional)</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                {/* Client Budget & Scope */}
                <div className="budget-calc">
                  <div className="budget-calc-head">
                    <div>
                      <span className="budget-calc-title">Your Project Budget</span>
                      <span className="budget-calc-sub">Select or enter your preferred budget range</span>
                    </div>
                    <div className="budget-currency-toggle" role="group" aria-label="Currency">
                      <button
                        type="button"
                        className={currency === 'USD' ? 'active' : ''}
                        onClick={() => {
                          setCurrency('USD');
                          setValues((v) => ({ ...v, budget: '' }));
                        }}
                      >
                        USD
                      </button>
                      <button
                        type="button"
                        className={currency === 'PKR' ? 'active' : ''}
                        onClick={() => {
                          setCurrency('PKR');
                          setValues((v) => ({ ...v, budget: '' }));
                        }}
                      >
                        PKR
                      </button>
                    </div>
                  </div>

                  <div className="budget-chips">
                    {BUDGET_PRESETS[currency].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        className={`budget-chip ${values.budget === preset ? 'active' : ''}`}
                        onClick={() => setValues((v) => ({ ...v, budget: preset }))}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>

                  <div className="budget-options-row">
                    <div className="field">
                      <label htmlFor="budget-input">Or Enter Custom Budget ({currency})</label>
                      <input
                        id="budget-input"
                        name="budget"
                        value={values.budget}
                        onChange={handleChange}
                        placeholder={currency === 'USD' ? 'e.g. $800' : 'e.g. Rs. 150,000'}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="budget-timeline">Target Timeline</label>
                      <select
                        id="budget-timeline"
                        name="timeline"
                        value={values.timeline}
                        onChange={handleChange}
                      >
                        {TIMELINE_OPTIONS.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="field" style={{ marginBottom: 0 }}>
                    <label>Project Scope (optional)</label>
                    <div className="budget-chips" style={{ marginBottom: 0 }}>
                      {SCOPE_OPTIONS.map((item) => (
                        <button
                          key={item}
                          type="button"
                          className={`budget-chip ${selectedScope.includes(item) ? 'active' : ''}`}
                          onClick={() => toggleScope(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="3" value={values.message} onChange={handleChange} />
                  {errors.message && <span className="error">{errors.message}</span>}
                </div>

                {submitError && <p className="error" role="alert">{submitError}</p>}

                <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
