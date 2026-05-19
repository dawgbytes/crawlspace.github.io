import { useState } from 'react'
import { siteConfig } from './config/siteConfig'

function App() {
  const [openFaq, setOpenFaq] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [secondarySubmitted, setSecondarySubmitted] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    zipcode: '',
    message: ''
  })

  const [secondaryData, setSecondaryData] = useState({
    name: '',
    phone: '',
    zipcode: ''
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

  const handleSecondaryInputChange = (e) => {
    const { name, value } = e.target
    setSecondaryData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated lead generation logic
    console.log('Primary Lead submitted:', formData)
    setFormSubmitted(true)
    setFormData({
      name: '',
      phone: '',
      email: '',
      zipcode: '',
      message: ''
    })
  }

  const handleSecondarySubmit = (e) => {
    e.preventDefault()
    // Simulated lead generation logic for secondary quick form
    console.log('Secondary Quick Lead submitted:', secondaryData)
    setSecondarySubmitted(true)
    setSecondaryData({
      name: '',
      phone: '',
      zipcode: ''
    })
  }

  const handleProblemSelect = (problemName) => {
    const messageTemplate = `Hi! I'm concerned about ${problemName.toLowerCase()} under my home and would like to schedule a free crawl space inspection to get a professional assessment.`
    setFormData(prev => ({
      ...prev,
      message: messageTemplate
    }))
    
    // Smooth scroll to the main inspection form
    const formElement = document.getElementById('inspection-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleServiceSelect = (serviceName) => {
    const messageTemplate = `Hi! I'd like to get a free quote for ${serviceName} and discuss the best solutions for my home.`
    setFormData(prev => ({
      ...prev,
      message: messageTemplate
    }))
    
    // Smooth scroll to the main inspection form
    const formElement = document.getElementById('inspection-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const problemCards = [
    {
      title: "Musty Smells",
      icon: "👃",
      desc: "Damp air and mold spores from the crawl space rise up into your first-floor rooms through the Stack Effect."
    },
    {
      title: "Sagging Floors",
      icon: "👣",
      desc: "Excess humidity weakens structural wood joists, causing them to rot, sag, and make floors bouncy or uneven."
    },
    {
      title: "Standing Water",
      icon: "💧",
      desc: "Heavy Raleigh rain and poor external yard drainage create pools of water in your crawl space, risking foundation shift."
    },
    {
      title: "High Humidity",
      icon: "🌡️",
      desc: "A wet crawl space raises indoor relative humidity, making your air conditioner work harder and raising energy bills."
    },
    {
      title: "Mold & Mildew",
      icon: "🍄",
      desc: "Fungus grows aggressively on damp wood framing and floor insulation, eating away at your structural timbers."
    },
    {
      title: "Damaged Insulation",
      icon: "🕸️",
      desc: "Wet, falling fiberglass insulation loses its R-value, traps moisture against joists, and becomes a pest nesting ground."
    },
    {
      title: "Pests & Rodents",
      icon: "🐀",
      desc: "Insects, termites, and rodents thrive in dark, damp spaces, causing damage and leaving behind unhealthy dander."
    },
    {
      title: "Wood Rot",
      icon: "🪵",
      desc: "Continuous exposure to high moisture content causes wood decay, endangering the safety of your home's foundation."
    }
  ]

  const services = [
    {
      title: "Crawl Space Inspections",
      image: "/inspection.jpg",
      altText: "Professional crawl space moisture inspection in Raleigh, NC by local experts",
      desc: "A comprehensive assessment of your crawl space. We check wood moisture levels, inspect framing, check for mold, and provide you with a detailed, photo-documented report.",
      cta: "Schedule Free Inspection"
    },
    {
      title: "Crawl Space Encapsulation",
      image: "/encapsulation.jpg",
      altText: "Premium sealed crawl space encapsulation and white vapor barrier installation in a Raleigh home",
      desc: "The ultimate moisture barrier. We completely seal your crawl space floor, walls, and vents with thick, durable white vapor barrier to keep damp air, mold, and radon gas out.",
      cta: "Get Encapsulation Quote"
    },
    {
      title: "Vapor Barriers",
      image: "/vapor-barrier.jpg",
      altText: "Ground vapor barrier installation in Raleigh, NC crawl space to block ground moisture",
      desc: "Cost-effective moisture prevention. We replace damaged, wet plastic sheets with clean, properly overlapping ground barriers to prevent ground moisture from rising.",
      cta: "Request Vapor Barrier"
    },
    {
      title: "Drainage Systems",
      image: "/drainage-system.jpg",
      altText: "Crawl space drainage system and French drain installation underneath a Triangle area home",
      desc: "Keep water from pooling. We install interior and exterior perimeter French drain systems that direct crawl space water safely away from your home's foundation.",
      cta: "Request Drainage Quote"
    },
    {
      title: "Sump Pump Systems",
      image: "/sump-pump.jpg",
      altText: "Heavy-duty sump pump system with automatic basin installed in Raleigh crawl space for flood protection",
      desc: "Automatic flood protection. Heavy-duty, long-lasting sump pumps with backup batteries to automatically collect and discharge standing water out of the space.",
      cta: "Get Sump Pump Quote"
    },
    {
      title: "Crawl Space Dehumidifiers",
      image: "/dehumidifier.jpg",
      altText: "Commercial-grade energy-efficient crawl space dehumidifier running under a Wake County home",
      desc: "Maintain healthy humidity. We install energy-efficient crawl space dehumidifiers to automatically maintain moisture levels below 55% to permanently block mold.",
      cta: "Request Dehumidifier Quote"
    },
    {
      title: "Mold/Moisture Solutions",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
      altText: "Professional crawl space mold removal and wood sanitation treatment in Raleigh, NC",
      desc: "Safe mold removal. We treat and clean infected framing, neutralizing wood decay fungi to improve air quality and protect your structural timbers.",
      cta: "Request Mold Treatment"
    },
    {
      title: "Wood Rot Repair",
      image: "/wood-rot.jpg",
      altText: "Sistered floor joists and structural wood rot repair for bouncy floors in Raleigh, NC",
      desc: "Strengthen weak floors. We sister damaged floor joists, replace sagged sills, and install heavy-duty steel jacks to level bouncy first-floor framing.",
      cta: "Request Structural Repair"
    },
    {
      title: "Insulation Replacement",
      image: "/insulation.jpg",
      altText: "Replacing old wet crawl space insulation with clean pest-resistant insulation in Cary, NC",
      desc: "Boost home efficiency. We remove falling, mold-ridden fiberglass and install clean, pest-resistant insulation options to lower energy bills year-round.",
      cta: "Request Insulation Quote"
    }
  ]

  const galleryItems = [
    {
      id: 1,
      title: "Wet Space vs. Encapsulation",
      splitImage: "/gallery1-split.jpg",
      desc: "Damp Dirt Floor vs. Premium Sealed Encapsulation"
    },
    {
      id: 2,
      title: "Wood Rot vs. Wood Rot Repair",
      beforeImage: "/gallery2-before.jpg",
      afterImage: "/gallery2-after.jpg",
      desc: "Rotted Joists vs. Sistered Beams & Support Jacks"
    },
    {
      id: 3,
      title: "Torn Insulation vs. Sealed Vapor Liner",
      beforeImage: "/gallery3-before.jpg",
      afterImage: "/gallery3-after.jpg",
      desc: "Falling Fiberglass vs. Thick, Double-Reinforced Liner"
    },
    {
      id: 4,
      title: "Poor Grading vs. French Drain & Sump Pump",
      beforeImage: "/gallery4-before.jpg",
      afterImage: "/gallery4-after.jpg",
      desc: "Standing Water Pools vs. Automated Sump & French Drains"
    }
  ]

  const whyChooseUsBenefits = [
    {
      title: "Years of Local Experience",
      desc: "Deeply familiar with Raleigh-Durham architectural builds, dense soil varieties, and environmental humidity factors."
    },
    {
      title: "Honest, Clear Communication",
      desc: "We focus purely on structural safety. Absolutely no scare tactics, commissions, or aggressive sales pitches."
    },
    {
      title: "No-Pressure Free Inspections",
      desc: "Entirely complimentary, detailed assessments for residential homeowners in local Triangle communities."
    },
    {
      title: "Engineered Long-Term Solutions",
      desc: "We rely on commercial-grade, multi-ply reinforced vapor barriers and durable sump drainage hardware."
    },
    {
      title: "Clean & Respectful Workmanship",
      desc: "Our crews maintain tight dust containment, use floor protection, and leave your property perfectly tidy."
    },
    {
      title: "Detailed Photo & Video Findings",
      desc: "We photograph and document every aspect of our findings under your home so you see the exact reality."
    },
    {
      title: "100% Locally Owned & Serviced",
      desc: "A reliable community-based business focused on protecting local homes and ensuring structural safety."
    }
  ]

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to Main Content
      </a>

      {/* 1. Sticky Header */}
      <header className="header">
        <div className="container header__container">
          <a href="#" className="header__brand">
            <img src="/logo.png" alt="The Crawl Space Guys NC Logo" className="header__logo-img" />
            <div className="header__brand-text">
              <span className="header__logo">{siteConfig.companyName}</span>
              <span className="header__tagline">Serving Raleigh &amp; Surrounding Areas</span>
            </div>
          </a>
          
          <button 
            className={`header__burger ${mobileMenuOpen ? 'header__burger--active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`header__menu ${mobileMenuOpen ? 'header__menu--open' : ''}`}>
            <a href="#services" className="header__menu-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#why-choose-us" className="header__menu-link" onClick={() => setMobileMenuOpen(false)}>Why Choose Us</a>
            <a href="#before-after" className="header__menu-link" onClick={() => setMobileMenuOpen(false)}>Before &amp; After</a>
            <a href="#reviews" className="header__menu-link" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
            <a href="#faqs" className="header__menu-link" onClick={() => setMobileMenuOpen(false)}>FAQs</a>
            <div className="header__menu-mobile-nav">
              <a href={`tel:${siteConfig.phoneNumeric}`} className="header__phone">
                <span aria-hidden="true">📞</span>
                <span>{siteConfig.phone}</span>
              </a>
              <a href="#inspection-form" className="btn btn--cta-orange" onClick={() => setMobileMenuOpen(false)}>
                Free Inspection
              </a>
            </div>
          </nav>

          <div className="header__nav">
            <a href={`tel:${siteConfig.phoneNumeric}`} className="header__phone">
              <span aria-hidden="true">📞</span>
              <span>{siteConfig.phone}</span>
            </a>
            <a href="#inspection-form" className="btn btn--cta-orange">
              Free Inspection
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        {/* 2. Hero Section */}
        <section 
          className="hero" 
          style={{ 
            background: `linear-gradient(135deg, rgba(10, 46, 29, 0.94) 0%, rgba(25, 40, 30, 0.92) 100%), url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat`
          }}
        >
          <div className="container hero__grid">
            <div className="hero__content">
              <div className="hero__rating-badge">
                <span className="hero__stars">⭐⭐⭐⭐⭐</span>
                <span className="hero__rating-text">4.9/5 (184+ Local Raleigh Reviews)</span>
              </div>
              <h1>Protect Your Home From Crawl Space Moisture &amp; Damage</h1>
              <p className="subheadline">
                Free crawl space inspections for homeowners in Raleigh, Cary, Apex, Wake Forest, Garner, Clayton, and surrounding areas.
              </p>
              
              <div className="hero__trust-list">
                <div className="hero__trust-bullet-item">
                  <span className="bullet-icon" aria-hidden="true">🛡️</span>
                  <span>Fully Licensed &amp; Insured NC #987654</span>
                </div>
                <div className="hero__trust-bullet-item">
                  <span className="bullet-icon" aria-hidden="true">🏡</span>
                  <span>Locally Owned &amp; Operated</span>
                </div>
                <div className="hero__trust-bullet-item">
                  <span className="bullet-icon" aria-hidden="true">📸</span>
                  <span>Complete Photo &amp; Video Findings</span>
                </div>
              </div>

              <div className="hero__actions">
                <a href="#inspection-form" className="btn btn--cta-orange btn--lg">
                  Schedule Free Inspection
                </a>
                <a href={`tel:${siteConfig.phoneNumeric}`} className="btn btn--outline-white btn--lg">
                  📞 Call Now
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
                padding: '24px',
                borderRadius: 'var(--radius-sm)',
                textAlign: 'center'
              }}>
                <h4 style={{ color: 'var(--primary-green)', marginBottom: '8px' }}>Thank You!</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>
                  Your request has been successfully received. One of our Raleigh crawl space specialists will reach out shortly to schedule your free inspection.
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
                    placeholder="Enter your name"
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
                      placeholder="(919) 555-0199"
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
                      placeholder="name@domain.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="zipcode">Zip Code</label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    className="form-input"
                    placeholder="e.g. 27601"
                    required
                    value={formData.zipcode}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Brief Message / Concern (Optional)</label>
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
                  Schedule Free Inspection
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
          <div className="trust-item">
            <span className="trust-icon" aria-hidden="true">🛡️</span>
            <span className="trust-label">Licensed &amp; Insured</span>
            <span className="trust-sublabel">NC License #987654</span>
          </div>
        </div>
      </section>

      {/* 4. Problem Section */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ color: 'var(--primary-green)' }}>Signs Your Crawl Space Needs Attention</h2>
          <p className="text-center text-light" style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
            Crawl space issues slowly compromise your home's structural integrity, indoor air quality, and energy bills. Click any warning sign below to inquire immediately.
          </p>
          
          <div className="problem-grid">
            {problemCards.map((prob, idx) => (
              <div 
                key={idx} 
                className="problem-card" 
                onClick={() => handleProblemSelect(prob.title)}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') handleProblemSelect(prob.title); }}
              >
                <div className="problem-icon-wrapper" aria-hidden="true">{prob.icon}</div>
                <h3>{prob.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginBottom: '12px' }}>
                  {prob.desc}
                </p>
                <span style={{ fontSize: '0.85rem', color: 'var(--primary-green)', fontWeight: '700', marginTop: 'auto' }}>
                  Report This Issue →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section id="services" className="section section--alt">
        <div className="container">
          <h2 className="text-center" style={{ color: 'var(--primary-green)' }}>Our Professional Crawl Space &amp; Basement Services</h2>
          <p className="text-center text-light" style={{ maxWidth: '600px', margin: '0 auto 20px auto' }}>
            We provide custom, engineered solutions tailored to North Carolina's dense red clay soils and seasonal humidity patterns.
          </p>

          <div className="services-grid">
            {services.map((svc, idx) => (
              <div key={idx} className="service-card">
                <div className="service-image-wrapper">
                  <img 
                    src={svc.image} 
                    alt={svc.altText} 
                    className="service-image" 
                    loading="lazy" 
                  />
                </div>
                <div className="service-content">
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <button 
                    onClick={() => handleServiceSelect(svc.title)}
                    className="btn btn--outline-green btn--sm"
                    style={{ marginTop: 'auto', alignSelf: 'flex-start', padding: '10px 20px', fontSize: '0.85rem' }}
                  >
                    {svc.cta} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us Section */}
      <section id="why-choose-us" className="section">
        <div className="container why-grid">
          <div>
            <h2 style={{ color: 'var(--primary-green)' }}>Professional Local Care &amp; Honest Recommendations</h2>
            <p className="text-light" style={{ marginBottom: '24px' }}>
              We believe in delivering long-term, structural protection for Raleigh area families. We do not use high-pressure commission tactics. We focus on showing you exactly what we find with complete photo reports and performing premium workmanship.
            </p>
            <ul className="why-features" style={{ listStyle: 'none', padding: 0 }}>
              {whyChooseUsBenefits.map((benefit, idx) => (
                <li key={idx} className="why-feature-item" style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                  <span className="why-feature-icon" style={{ fontSize: '1.4rem', color: 'var(--primary-green)' }} aria-hidden="true">✔</span>
                  <div className="why-feature-text">
                    <h4 style={{ margin: 0, color: 'var(--primary-green)', fontWeight: '700' }}>{benefit.title}</h4>
                    <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: 'var(--text-medium)' }}>{benefit.desc}</p>
                  </div>
                </li>
              ))}
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

      {/* 7. Raleigh-Specific Geological & Local Section */}
      <section className="raleigh-section">
        <div className="container raleigh-grid">
          <div>
            <h2 style={{ color: 'var(--gold)' }}>Tailored Crawl Space Care for the Raleigh-Durham Triangle</h2>
            <div style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.95)', lineHeight: '1.7' }}>
              <p style={{ marginBottom: '16px' }}>
                <strong>The Threat of Raleigh's Red Clay Soil:</strong> Wake County's soils are packed with dense, heavy red clay. When wet, clay expands aggressively and retains massive volumes of groundwater for weeks. This saturated clay exerts hydrostatic pressure directly against your crawl space foundation walls, forcing moisture to seep into your crawl space through porous masonry block.
              </p>
              <p style={{ marginBottom: '20px' }}>
                <strong>The Dangerous Stack Effect:</strong> In physical building mechanics, your home acts like a chimney. As warm air rises and escapes through the attic, it creates a powerful negative pressure vacuum on the lower levels. This <strong>Stack Effect draws up to 50% of your first-floor air directly from your crawl space</strong>. When moisture levels are high, this draws dangerous mold spores, rot odors, and allergens into your family's living areas, while placing a massive load on your HVAC system.
              </p>
            </div>
            
            <h4 style={{ color: 'var(--white)', marginBottom: '12px', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.05em' }}>Areas We Proudly Serve Around Raleigh</h4>
            <div className="raleigh-list">
              {siteConfig.serviceAreas.map((city, idx) => (
                <div key={idx} className="raleigh-city-tag">{city}</div>
              ))}
            </div>
          </div>

          <div style={{
            backgroundColor: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.18)',
            padding: '30px',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center'
          }}>
            <h3 style={{ color: 'var(--white)', marginBottom: '12px' }}>Triangle Moisture Facts</h3>
            <div style={{ fontSize: '3rem', color: 'var(--gold)', margin: '16px 0' }}>🌦️</div>
            <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.9)', marginBottom: '16px', lineHeight: '1.6' }}>
              Raleigh receives an average of <strong>46 inches of rain</strong> annually. Paired with peak summer humidity that routinely exceeds <strong>80-90%</strong>, open crawl space vents act like moisture vacuums, rotting support beams and growing mold.
            </p>
            <span className="badge-tag">Triangle Engineered Solutions</span>
          </div>
        </div>
      </section>

      {/* 8. Before/After Gallery Section */}
      <section id="before-after" className="section">
        <div className="container">
          <h2 className="text-center" style={{ color: 'var(--primary-green)' }}>Our Before &amp; After Crawl Space Transformations</h2>
          <p className="text-center text-light" style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
            Witness how we take damp, mold-infected, structurally decaying crawl spaces and transform them into clean, dry, bright, and completely healthy environments.
          </p>

          <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-card">
                <div className="gallery-visuals">
                  {item.splitImage ? (
                    <div className="gallery-image-wrapper" style={{ width: '100%' }}>
                      <img 
                        src={item.splitImage} 
                        alt={`${item.title} - The Crawl Space Guys NC`} 
                        className="gallery-img" 
                        loading="lazy" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  ) : (
                    <>
                      <div className="gallery-image-wrapper">
                        <img 
                          src={item.beforeImage} 
                          alt={`Before: ${item.title} - The Crawl Space Guys NC`} 
                          className="gallery-img" 
                          loading="lazy" 
                        />
                        <span className="gallery-badge gallery-badge--before">Before</span>
                      </div>
                      <div className="gallery-image-wrapper gallery-image-wrapper--after">
                        <img 
                          src={item.afterImage} 
                          alt={`After: ${item.title} - The Crawl Space Guys NC`} 
                          className="gallery-img" 
                          loading="lazy" 
                        />
                        <span className="gallery-badge gallery-badge--after">After</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="gallery-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Reviews Section */}
      <section id="reviews" className="section section--alt">
        <div className="container">
          <h2 className="text-center" style={{ color: 'var(--primary-green)' }}>What Your Raleigh Neighbors Say</h2>
          <p className="text-center text-light" style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
            We've earned a stellar reputation across Wake, Durham, and Johnston counties for our clean workmanship and transparent, zero-pressure estimates.
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
      <section id="faqs" className="section">
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

      {/* 11. Final CTA & Secondary Lead Form Section */}
      <section className="final-cta" style={{ textAlign: 'left', padding: '80px 0' }}>
        <div className="container">
          <div className="final-cta__grid">
            <div className="final-cta__info">
              <h2 style={{ color: 'var(--white)', fontSize: '2.5rem', marginBottom: '16px', lineHeight: '1.2' }}>
                Ready to Dry Out Your Crawl Space &amp; Protect Your Home?
              </h2>
              <p style={{ color: 'var(--tan)', fontSize: '1.15rem', marginBottom: '24px', lineHeight: '1.6' }}>
                Get your 100% Free, detailed, photo-documented crawl space inspection and custom repair recommendations. No commission-based sales pitches—just honest, local expertise.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                <a href={`tel:${siteConfig.phoneNumeric}`} className="btn btn--primary btn--lg" style={{ display: 'inline-flex', alignSelf: 'flex-start' }}>
                  📞 Call Office: {siteConfig.phone}
                </a>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '20px' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--tan)', marginBottom: '8px', opacity: 0.9 }}>
                  💳 <strong>Financing Terms:</strong> {siteConfig.financingInfo}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--tan)', opacity: 0.9 }}>
                  🛡️ <strong>License Info:</strong> {siteConfig.licenseInfo}
                </p>
              </div>
            </div>

            <div className="final-cta__form-container">
              <div className="hero-form" style={{ boxShadow: 'var(--shadow-xl)', borderTop: '4px solid var(--gold)' }}>
                <h3 style={{ color: 'var(--primary-green)', marginBottom: '8px' }}>Request Quick Call Back</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-medium)', marginBottom: '20px' }}>
                  Enter your details below and a Raleigh specialist will call you back within 15 minutes.
                </p>

                {secondarySubmitted ? (
                  <div style={{
                    backgroundColor: 'rgba(27,67,50,0.1)',
                    border: '1px solid var(--primary-green)',
                    padding: '24px',
                    borderRadius: 'var(--radius-sm)',
                    textAlign: 'center'
                  }}>
                    <h4 style={{ color: 'var(--primary-green)', marginBottom: '8px' }}>Thank You!</h4>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                      Your quick request has been received. We will contact you immediately at your provided number.
                    </p>
                    <button 
                      className="btn btn--secondary btn--sm" 
                      style={{ marginTop: '16px', padding: '8px 16px', fontSize: '0.85rem' }}
                      onClick={() => setSecondarySubmitted(false)}
                    >
                      Submit Another Callback
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSecondarySubmit}>
                    <div className="form-group">
                      <label htmlFor="sec-name">Full Name</label>
                      <input
                        type="text"
                        id="sec-name"
                        name="name"
                        className="form-input"
                        placeholder="Your Name"
                        required
                        value={secondaryData.name}
                        onChange={handleSecondaryInputChange}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="sec-phone">Phone Number</label>
                      <input
                        type="tel"
                        id="sec-phone"
                        name="phone"
                        className="form-input"
                        placeholder="(919) 555-0199"
                        required
                        value={secondaryData.phone}
                        onChange={handleSecondaryInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="sec-zipcode">Zip Code</label>
                      <input
                        type="text"
                        id="sec-zipcode"
                        name="zipcode"
                        className="form-input"
                        placeholder="e.g. 27601"
                        required
                        value={secondaryData.zipcode}
                        onChange={handleSecondaryInputChange}
                      />
                    </div>

                    <button type="submit" className="btn btn--secondary btn--full" style={{ fontWeight: '700', marginTop: '8px' }}>
                      Request Call Back
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>

      {/* 12. Footer */}
      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <img src="/logo.png" alt="The Crawl Space Guys NC Logo" className="footer__logo-img" style={{ height: '50px', width: 'auto', objectFit: 'contain' }} />
              <h4 style={{ color: 'var(--white)', fontSize: '1.25rem', fontFamily: 'var(--font-heading)', fontWeight: '800', margin: 0, textTransform: 'none', letterSpacing: 'normal' }}>
                {siteConfig.companyName}
              </h4>
            </div>
            <p style={{ margin: '0 0 20px 0' }}>
              Raleigh area's premier crawl space encapsulation, mold removal, sump pump, and floor repair specialists.
            </p>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-orange)' }}>{siteConfig.licenseInfo}</span>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <a href="#" className="footer__link">Back to Top</a>
            <a href="#services" className="footer__link">Our Services</a>
            <a href="#why-choose-us" className="footer__link">Why Choose Us</a>
            <a href="#before-after" className="footer__link">Before &amp; After</a>
            <a href="#reviews" className="footer__link">Reviews</a>
            <a href="#faqs" className="footer__link">FAQs</a>
          </div>

          <div className="footer__col">
            <h4>Office Info</h4>
            <p><strong>Address:</strong> {siteConfig.address}</p>
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

      {/* Sticky Mobile CTA Bar */}
      <div className="mobile-cta-bar">
        <a href={`tel:${siteConfig.phoneNumeric}`} className="mobile-cta-bar__btn mobile-cta-bar__btn--call">
          <span>📞 Call Now</span>
        </a>
        <a href="#inspection-form" className="mobile-cta-bar__btn mobile-cta-bar__btn--inspect">
          <span>📅 Free Inspection</span>
        </a>
      </div>
    </>
  )
}

export default App
