import React from 'react';
import './App.css';

const tiers = [
  {
    name: 'Basic',
    price: '$9/month',
    features: ['1 User', 'Basic Support', 'All Core Features'],
    button: 'Choose Basic',
  },
  {
    name: 'Standard',
    price: '$29/month',
    features: ['5 Users', 'Priority Support', 'All Core Features'],
    button: 'Choose Standard',
    popular: true,
  },
  {
    name: 'Premium',
    price: '$99/month',
    features: ['Unlimited Users', '24/7 Support', 'Advanced Features'],
    button: 'Choose Premium',
  },
];

export default function PricingTable() {
  return (
    <div className="pricing-table-container">
      <h2 className="pricing-title">Our Pricing Plans</h2>
      <div className="pricing-table">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`pricing-card${tier.popular ? ' popular' : ''}`}
          >
            {/* Removed Most Popular badge */}
            <h3 className="tier-name">{tier.name}</h3>
            <p className="tier-price">{tier.price}</p>
            <ul className="tier-features">
              {tier.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button className="tier-button">{tier.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
