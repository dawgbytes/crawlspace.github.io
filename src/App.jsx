import { useState } from 'react'
import { siteConfig } from './config/siteConfig'

function App() {
  const [openFaq, setOpenFaq] = useState(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  })

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Mock lead generation logic
    console.log('Lead submitted:', formData)
    setFormSubmitted(true)
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      message: ''
    })
  }

  return (
    <>
      {/* 1. Sticky Header */}
      <header className="header">
        <div className="container header__container">
          <a href="#" className="header__brand">
            <span className="header__logo">{siteConfig.companyName}</span>
            <span className="header__tagline">Raleigh Crawl Space Specialists</span>
          </a>
          <div className="header__nav">
            <a href={`tel:${siteConfig.phoneNumeric}`} className="header__phone">
              <span aria-hidden="true">📞</span>
              <span>{siteConfig.phone}</span>
            </a>
            <a href="#inspection-form" className="btn btn--primary">
              Free Inspection
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <h1>Crawl Space Repair &amp; Encapsulation in Raleigh, NC</h1>
            <p className="subheadline">
              Protect your home from moisture, mold, wood rot, pests, and foundation damage with experienced local crawl space specialists.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href={`tel:${siteConfig.phoneNumeric}`} className="btn btn--primary btn--lg">
                Call Now: {siteConfig.phone}
              </a>
              <a href="#services" className="btn btn--outline-white btn--lg">
                Explore Services
              </a>
            </div>
          </div>

          <div id="inspection-form" className="hero-form">
            <h3>Schedule a Free Crawl Space Inspection</h3>
            <p>Raleigh area homeowners receive an honest, photo-documented evaluation with zero high-pressure sales tactics.</p>
            
            {formSubmitted ? (
              <div style={{
                backgroundColor: 'rgba(27,67,50,0.1)',
                border: '1px solid var(--primary-green)',
                padding: '20px',
                borderRadius: 'var(--radius-sm)',
                textAlign: 'center'
              }}>
                <h4 style={{ color: 'var(--primary-green)', marginBottom: '8px' }}>Thank You!</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                  Your request has been received. One of our Raleigh crawl space specialists will reach out shortly to schedule your free inspection.
                </p>
                <button 
                  className="btn btn--secondary btn--sm" 
                  style={{ marginTop: '16px', padding: '8px 16px', fontSize: '0.85rem' }}
                  onClick={() => setFormSubmitted(false)}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      placeholder="(919) 555-0100"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Home Address / Zip Code</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="form-input"
                    placeholder="123 Raleigh Oaks Dr, Raleigh, NC 27601"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Brief Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    className="form-textarea"
                    placeholder="Describe any issues (musty smell, sagging floors, standing water, etc.)..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn--secondary btn--full" style={{ fontWeight: '700' }}>
                  Get My Free Inspection
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. Trust Bar */}
      <section className="trust-bar">
        <div className="container trust-bar__grid">
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">🔍</span>
            <span className="trust-label">Free Inspections</span>
            <span className="trust-sublabel">Honest Assessments</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">📍</span>
            <span className="trust-label">Local Raleigh Service</span>
            <span className="trust-sublabel">Triangle Area Coverage</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">🤝</span>
            <span className="trust-label">Honest Advice</span>
            <span className="trust-sublabel">No High-Pressure Sales</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">📸</span>
            <span className="trust-label">Photo Findings</span>
            <span className="trust-sublabel">See Everything Yourself</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">💳</span>
            <span className="trust-label">Financing Available</span>
            <span className="trust-sublabel">Plans from $99/mo*</span>
          </div>
        </div>
      </section>

      {/* 4. Problem Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ color: 'var(--primary-green)' }}>Signs Your Crawl Space Needs Attention</h2>
          <p className="text-center text-light" style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
            Crawl space issues can slowly compromise your home's structural integrity, air quality, and energy efficiency. Look out for these common warning signs.
          </p>
          
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon-wrapper" aria-hidden="true">👃</div>
              <h3>Musty Smells</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                Damp air and mold spores from the crawl space rise up into your first-floor rooms through the "stack effect."
              </p>
            </div>
            
            <div className="problem-card">
              <div className="problem-icon-wrapper" aria-hidden="true">👣</div>
              <h3>Sagging Floors</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                Excess humidity weakens wood joists, causing them to rot, sag, and make floors bouncy or uneven.
              </p>
            </div>
            
            <div className="problem-card">
              <div className="problem-icon-wrapper" aria-hidden="true">💧</div>
              <h3>Standing Water</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                Heavy rain and poor external drainage can create pools of water in your crawl space, raising humidity levels.
              </p>
            </div>
            
            <div className="problem-card">
              <div className="problem-icon-wrapper" aria-hidden="true">🌡️</div>
              <h3>High Humidity</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                A wet crawl space raises indoor relative humidity, making your air conditioner work harder and raising energy bills.
              </p>
            </div>

            <div className="problem-card">
              <div className="problem-icon-wrapper" aria-hidden="true">🍄</div>
              <h3>Mold &amp; Mildew</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                Fungus grows aggressively on damp wood framing and floor insulation, eating away at your structural timbers.
              </p>
            </div>

            <div className="problem-card">
              <div className="problem-icon-wrapper" aria-hidden="true">🕸️</div>
              <h3>Damaged Insulation</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                Wet fiberglass insulation loses its R-value, sags out of the joist bays, and becomes a nesting ground for pests.
              </p>
            </div>

            <div className="problem-card">
              <div className="problem-icon-wrapper" aria-hidden="true">🐀</div>
              <h3>Pests &amp; Rodents</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                Insects, termites, and rodents thrive in dark, damp spaces, causing damage and leaving behind unhealthy dander.
              </p>
            </div>

            <div className="problem-card">
              <div className="problem-icon-wrapper" aria-hidden="true">🪵</div>
              <h3>Wood Rot</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)' }}>
                Continuous exposure to high moisture content causes wood decay, endangering the safety of your home's foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section id="services" className="section section--alt">
        <div className="container">
          <h2 className="text-center" style={{ color: 'var(--primary-green)' }}>Our Professional Crawl Space &amp; Basement Services</h2>
          <p className="text-center text-light" style={{ maxWidth: '600px', margin: '0 auto 20px auto' }}>
            We provide engineered, long-term solutions tailored to North Carolina's unique clay soils and extreme seasonal humidity.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-image-placeholder">Crawl Space Inspections</div>
              <div className="service-content">
                <h3>Crawl Space Inspections</h3>
                <p>A full assessment of your crawl space. We check wood moisture levels, inspect framing, check for mold, and provide you with a documented report with photos.</p>
                <a href="#inspection-form" className="service-link">Schedule Free Inspection →</a>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image-placeholder">Encapsulation Systems</div>
              <div className="service-content">
                <h3>Crawl Space Encapsulation</h3>
                <p>The ultimate moisture barrier. We completely seal your crawl space floor, walls, and vents with thick, durable white vapor barrier to keep damp air and mold out.</p>
                <a href="#inspection-form" className="service-link">Get a Quote →</a>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image-placeholder">Vapor Barriers</div>
              <div className="service-content">
                <h3>Vapor Barriers</h3>
                <p>Cost-effective moisture prevention. We replace damaged, wet plastic sheets with clean, properly overlapping ground barriers to prevent ground moisture from rising.</p>
                <a href="#inspection-form" className="service-link">Request Service →</a>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image-placeholder">Basement Drainage</div>
              <div className="service-content">
                <h3>Drainage &amp; French Drains</h3>
                <p>Keep water from pooling. We install interior and exterior perimeter French drain systems that direct crawl space water safely away from your home's foundation.</p>
                <a href="#inspection-form" className="service-link">Schedule Inspection →</a>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image-placeholder">Sump Pump Systems</div>
              <div className="service-content">
                <h3>Sump Pump Systems</h3>
                <p>Automatic flood protection. Heavy-duty, long-lasting sump pumps with backup batteries to automatically collect and discharge standing water out of the space.</p>
                <a href="#inspection-form" className="service-link">Get a Quote →</a>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image-placeholder">Energy Dehumidifiers</div>
              <div className="service-content">
                <h3>Commercial Dehumidifiers</h3>
                <p>Maintain healthy humidity. We install energy-efficient crawl space dehumidifiers to automatically maintain moisture levels below 55% to permanently block mold.</p>
                <a href="#inspection-form" className="service-link">Request Service →</a>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image-placeholder">Mold Remediation</div>
              <div className="service-content">
                <h3>Mold Remediation</h3>
                <p>Safe mold removal. We treat and clean infected framing, neutralizing wood decay fungi to improve air quality and protect your structural timbers.</p>
                <a href="#inspection-form" className="service-link">Schedule Inspection →</a>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image-placeholder">Structural Wood Repair</div>
              <div className="service-content">
                <h3>Wood Rot &amp; Structural Repair</h3>
                <p>Strengthen weak floors. We sister damaged floor joists, replace sagged sills, and install heavy-duty steel jacks to level bouncy first-floor framing.</p>
                <a href="#inspection-form" className="service-link">Request Service →</a>
              </div>
            </div>

            <div className="service-card">
              <div className="service-image-placeholder">Insulation Replacement</div>
              <div className="service-content">
                <h3>Insulation Replacement</h3>
                <p>Boost home efficiency. We remove falling, mold-ridden fiberglass and install clean, pest-resistant insulation options to lower energy bills year-round.</p>
                <a href="#inspection-form" className="service-link">Schedule Free Inspection →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us Section */}
      <section className="section">
        <div className="container why-grid">
          <div>
            <h2 style={{ color: 'var(--primary-green)' }}>Professional Care, Honest Recommendations</h2>
            <p className="text-light" style={{ marginBottom: '24px' }}>
              We believe in delivering long-term, custom crawl space solutions for Raleigh area families. We do not use high-pressure commission sales or scare tactics. We focus on showing you exactly what we find, providing clear options, and doing clean, durable work.
            </p>
            <ul className="why-features">
              <li className="why-feature-item">
                <span className="why-feature-icon" aria-hidden="true">🛡️</span>
                <div className="why-feature-text">
                  <h4>Years of Experienced Work</h4>
                  <p>Our technicians are highly skilled crawl space and foundation repair specialists with deep expertise in Southern home build styles.</p>
                </div>
              </li>
              
              <li className="why-feature-item">
                <span className="why-feature-icon" aria-hidden="true">📸</span>
                <div className="why-feature-text">
                  <h4>Complete Photo Documentation</h4>
                  <p>We photograph every step of our findings and our work. You see exactly what we see under your home before signing off.</p>
                </div>
              </li>

              <li className="why-feature-item">
                <span className="why-feature-icon" aria-hidden="true">✨</span>
                <div className="why-feature-text">
                  <h4>Clean, Durable Solutions</h4>
                  <p>We treat your home like our own. Our materials are commercial-grade, and our encapsulation liners are thick and double-reinforced.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, var(--navy) 0%, var(--primary-green) 100%)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            color: 'var(--white)',
            boxShadow: 'var(--shadow-xl)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h3 style={{ color: 'var(--gold)', fontSize: '1.75rem', marginBottom: '16px' }}>Our Satisfaction Guarantee</h3>
            <p style={{ color: 'var(--tan)', marginBottom: '24px', fontSize: '1.05rem', lineHeight: '1.6' }}>
              We are committed to providing premium work at a fair price. We stand by our products and our craftsmanship, offering comprehensive warranties on our encapsulation liners, sump pumps, structural framing, and dehumidifiers.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ fontSize: '3rem' }}>🌟</div>
              <div>
                <h4 style={{ color: 'var(--white)', margin: 0 }}>Fully Licensed &amp; Insured</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>{siteConfig.licenseInfo}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Raleigh-Specific Section */}
      <section className="raleigh-section">
        <div className="container raleigh-grid">
          <div>
            <h2 style={{ color: 'var(--gold)' }}>Tailored Crawl Space Care for the Raleigh-Durham Triangle</h2>
            <p style={{ color: 'var(--tan)', marginBottom: '20px', fontSize: '1.05rem' }}>
              North Carolina's hot, humid summers, heavy seasonal rain, and dense red clay soils create a perfect storm for under-home moisture problems. Clay soils hold water close to your crawl space walls, while the high humidity causes moisture to condense on cold wood beams.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '24px' }}>
              Our engineered systems are specifically built to withstand NC weather conditions, keeping wood dry and crawl spaces completely healthy.
            </p>
            
            <h4 style={{ color: 'var(--white)', marginBottom: '12px', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>Areas We Serve Around Raleigh</h4>
            <div className="raleigh-list">
              {siteConfig.serviceAreas.map((city, idx) => (
                <div key={idx} className="raleigh-city-tag">{city}</div>
              ))}
            </div>
          </div>

          <div style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.15)',
            padding: '30px',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: 'var(--white)', marginBottom: '12px' }}>Triangle Moisture Facts</h3>
            <div style={{ fontSize: '3rem', color: 'var(--gold)', margin: '16px 0' }}>🌦️</div>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)', marginBottom: '16px' }}>
              Raleigh receives an average of <strong>46 inches of rainfall</strong> annually. Coupled with summer relative humidity levels frequently reaching <strong>80-90%</strong>, open crawl space vents act like vacuums pulling moisture under your home.
            </p>
            <span className="badge-tag">Triangle Engineered Solutions</span>
          </div>
        </div>
      </section>

      {/* 8. Before/After Gallery Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ color: 'var(--primary-green)' }}>Our Before &amp; After Crawl Space Encapsulation</h2>
          <p className="text-center text-light" style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
            Witness the transformation. We take damp, dirty, mold-filled environments and turn them into bright, clean, fully insulated, healthy crawl spaces.
          </p>

          <div className="gallery-grid">
            <div className="gallery-card">
              <div className="gallery-visuals">
                <div className="gallery-image-box gallery-image-box--before">
                  <span className="gallery-badge gallery-badge--before">Before</span>
                </div>
                <div className="gallery-image-box gallery-image-box--after">
                  <span className="gallery-badge gallery-badge--after">After</span>
                </div>
              </div>
              <div className="gallery-desc">Full Encapsulation &amp; Wall Liners</div>
            </div>

            <div className="gallery-card">
              <div className="gallery-visuals">
                <div className="gallery-image-box gallery-image-box--before">
                  <span className="gallery-badge gallery-badge--before">Before</span>
                </div>
                <div className="gallery-image-box gallery-image-box--after">
                  <span className="gallery-badge gallery-badge--after">After</span>
                </div>
              </div>
              <div className="gallery-desc">Mold Remediation &amp; Joist sistering</div>
            </div>

            <div className="gallery-card">
              <div className="gallery-visuals">
                <div className="gallery-image-box gallery-image-box--before">
                  <span className="gallery-badge gallery-badge--before">Before</span>
                </div>
                <div className="gallery-image-box gallery-image-box--after">
                  <span className="gallery-badge gallery-badge--after">After</span>
                </div>
              </div>
              <div className="gallery-desc">Sump Pump &amp; Trench Installation</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Reviews Section */}
      <section className="section section--alt">
        <div className="container">
          <h2 className="text-center" style={{ color: 'var(--primary-green)' }}>What Your Raleigh Neighbors Say</h2>
          <p className="text-center text-light" style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
            We've earned a reputaton across Wake, Durham, and Johnston counties for our clean work and transparent communication.
          </p>

          <div className="reviews-grid">
            {siteConfig.testimonials.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-stars" aria-label={`${review.stars} star rating`}>
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="review-author">
                  <span className="review-name">{review.name}</span>
                  <span className="review-meta">{review.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ color: 'var(--primary-green)' }}>Crawl Space FAQs</h2>
          <p className="text-center text-light" style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
            Everything you need to know about crawl space inspections, moisture control, and encapsulation repairs in North Carolina.
          </p>

          <div className="faq-container">
            {siteConfig.faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon" style={{
                    transform: openFaq === idx ? 'rotate(45deg)' : 'rotate(0deg)'
                  }}>+</span>
                </button>
                <div className={`faq-answer ${openFaq === idx ? 'faq-answer--open' : ''}`}>
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA Section */}
      <section className="final-cta">
        <div className="container final-cta__content">
          <h2>Ready to Dry Out Your Crawl Space?</h2>
          <p>
            Get a 100% Free, comprehensive crawl space inspection and custom action plan. No sales pitches, just honest answers.
          </p>
          <div className="final-cta__buttons">
            <a href="#inspection-form" className="btn btn--primary btn--lg">
              Schedule Free Inspection
            </a>
            <a href={`tel:${siteConfig.phoneNumeric}`} className="btn btn--outline-white btn--lg">
              📞 Call Now: {siteConfig.phone}
            </a>
          </div>
          <p style={{ marginTop: '24px', fontSize: '0.85rem', color: 'var(--tan)', opacity: 0.8 }}>
            * {siteConfig.financingInfo}
          </p>
        </div>
      </section>

      {/* 12. Footer */}
      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__col">
            <h4 style={{ color: 'var(--white)', fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: '800' }}>
              {siteConfig.companyName}
            </h4>
            <p style={{ margin: '12px 0 20px 0' }}>
              Raleigh area's premier crawl space encapsulation, mold removal, sump pump, and floor repair specialists.
            </p>
            <span style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>{siteConfig.licenseInfo}</span>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <a href="#" className="footer__link">Back to Top</a>
            <a href="#services" className="footer__link">Our Services</a>
            <a href="#inspection-form" className="footer__link">Schedule Free Inspection</a>
            <a href={`tel:${siteConfig.phoneNumeric}`} className="footer__link">Call Office: {siteConfig.phone}</a>
          </div>

          <div className="footer__col">
            <h4>Office Info</h4>
            <p><strong>Email:</strong> {siteConfig.email}</p>
            <p><strong>Phone:</strong> {siteConfig.phone}</p>
            <p><strong>Coverage Area:</strong> Raleigh, NC &amp; Surrounding Triangle Areas</p>
            <div className="footer__hours-list" style={{ marginTop: '16px' }}>
              <div className="footer__hours-row">
                <span>Mon - Fri:</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="footer__hours-row">
                <span>Saturday:</span>
                <span>9:00 AM - 3:00 PM</span>
              </div>
              <div className="footer__hours-row">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer__bottom">
          <p>&copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
