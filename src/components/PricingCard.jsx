import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

export default function PricingCard({ plan, yearly }) {
  const isCustom = plan.monthly === 'Custom';
  const price = isCustom ? 'Custom' : (yearly ? Math.round(plan.monthly * 0.8) : plan.monthly);

  // Parse numeric PKR and apply yearly discount if applicable
  const rawPkr = typeof plan.monthlyPkr === 'string' ? parseInt(plan.monthlyPkr.replace(/,/g, ''), 10) : plan.monthlyPkr;
  const pkrPrice = !isCustom && rawPkr
    ? (yearly ? Math.round(rawPkr * 0.8).toLocaleString() : plan.monthlyPkr)
    : plan.monthlyPkr;

  return (
    <article className={`card pricing-card ${plan.popular ? 'popular' : ''}`}>
      {plan.popular && <span className="badge">Most popular</span>}
      <div className="pricing-card-header">
        <h3>{plan.name}</h3>
        <p className="muted">{plan.blurb}</p>
      </div>

      <div className="price-container">
        <div className="price price-primary">
          {isCustom ? (
            <span className="amount">Custom</span>
          ) : (
            <>
              <span className="currency-symbol">$</span>
              <span className="amount">{price}</span>
              <span className="per">/ month</span>
            </>
          )}
        </div>

        {isCustom ? (
          <div className="price-secondary scope">
            <span className="pkr-badge scope-badge">SCOPE</span>
            <span className="pkr-amount">Tailored to your needs</span>
          </div>
        ) : (
          plan.monthlyPkr && (
            <div className="price-secondary">
              <span className="pkr-badge">PKR</span>
              <span className="pkr-amount">Rs. {pkrPrice}</span>
              <span className="pkr-per">/ mo</span>
            </div>
          )
        )}
      </div>

      <div className="save-container">
        {yearly && !isCustom ? (
          <span className="save-badge">✨ Billed yearly, you save 20%</span>
        ) : (
          <span className="save-placeholder">&nbsp;</span>
        )}
      </div>

      <div className="pricing-features-wrap">
        <span className="features-label">Included in package:</span>
        <ul className="check-list">
          {plan.features.map((f) => (
            <li key={f}><Icon name="check" size={16} /> {f}</li>
          ))}
        </ul>
      </div>

      {plan.terms && (
        <div className="plan-terms-card">
          <div className="plan-terms-header">
            <span className="terms-icon">⚡</span>
            <span className="terms-title">{plan.terms.title}</span>
          </div>
          <div className="plan-terms-body">
            <div className="terms-row">
              <span className="terms-badge">Delivery Time</span>
              <span className="terms-val highlight">{plan.terms.deliveryTime}</span>
            </div>
            <div className="terms-item">
              <div className="terms-label">🔄 Revisions Included:</div>
              <div className="terms-desc">{plan.terms.revisionsIncluded}</div>
            </div>
            <div className="terms-item">
              <div className="terms-label">💳 Extra Changes / Post-Review:</div>
              <div className="terms-desc">{plan.terms.extraRevisions}</div>
            </div>
          </div>
        </div>
      )}

      <Link to="/contact" className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-block pricing-btn`}>
        Choose {plan.name}
      </Link>
    </article>
  );
}
