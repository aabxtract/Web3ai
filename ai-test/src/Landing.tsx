import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Landing() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <span className="gradient-text">brandUp</span>
              <span className="logo-dot">.</span>
            </div>
            <ul className="nav-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <Link to="/login">
              <button className="btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate-fadeInUp">
              <h1>
                Transform Your Brand with
                <br />
                <span className="gradient-text">Digital Excellence</span>
              </h1>
              <p className="hero-description">
                We craft data-driven marketing strategies that elevate your brand,
                engage your audience, and drive measurable growth in the digital landscape.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">Start Your Journey</button>
                <button className="btn-secondary">View Our Work</button>
              </div>
              <div className="hero-stats">
                <div className="stat">
                  <h3 className="gradient-text">500+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3 className="gradient-text">98%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div className="stat">
                  <h3 className="gradient-text">250%</h3>
                  <p>Average ROI</p>
                </div>
              </div>
            </div>
            <div className="hero-visual animate-float">
              <div className="floating-card card-1">
                <div className="card-icon">📈</div>
                <div className="card-text">
                  <strong>Growth</strong>
                  <span>+350%</span>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">🎯</div>
                <div className="card-text">
                  <strong>Engagement</strong>
                  <span>+280%</span>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">💡</div>
                <div className="card-text">
                  <strong>Innovation</strong>
                  <span>Leading Edge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container">
          <div className="section-header">
            <h2>Our <span className="gradient-text">Services</span></h2>
            <p>Comprehensive digital marketing solutions tailored to your success</p>
          </div>
          <div className="services-grid">
            <div className="service-card glass-card">
              <div className="service-icon">🚀</div>
              <h3>Brand Strategy</h3>
              <p>Build a powerful brand identity that resonates with your target audience and stands out in the market.</p>
              <ul className="service-features">
                <li>Brand Positioning</li>
                <li>Visual Identity</li>
                <li>Market Research</li>
              </ul>
            </div>
            <div className="service-card glass-card">
              <div className="service-icon">📱</div>
              <h3>Social Media Marketing</h3>
              <p>Engage your audience with compelling content and strategic campaigns across all major platforms.</p>
              <ul className="service-features">
                <li>Content Creation</li>
                <li>Community Management</li>
                <li>Paid Advertising</li>
              </ul>
            </div>
            <div className="service-card glass-card">
              <div className="service-icon">🎨</div>
              <h3>Content Marketing</h3>
              <p>Create valuable, relevant content that attracts and retains your ideal customers.</p>
              <ul className="service-features">
                <li>Blog Writing</li>
                <li>Video Production</li>
                <li>SEO Optimization</li>
              </ul>
            </div>
            <div className="service-card glass-card">
              <div className="service-icon">📊</div>
              <h3>Analytics & Insights</h3>
              <p>Make data-driven decisions with comprehensive analytics and actionable insights.</p>
              <ul className="service-features">
                <li>Performance Tracking</li>
                <li>ROI Analysis</li>
                <li>Custom Reports</li>
              </ul>
            </div>
            <div className="service-card glass-card">
              <div className="service-icon">💰</div>
              <h3>PPC Advertising</h3>
              <p>Maximize your ROI with targeted pay-per-click campaigns that convert.</p>
              <ul className="service-features">
                <li>Google Ads</li>
                <li>Social Ads</li>
                <li>Retargeting</li>
              </ul>
            </div>
            <div className="service-card glass-card">
              <div className="service-icon">✉️</div>
              <h3>Email Marketing</h3>
              <p>Nurture leads and drive conversions with personalized email campaigns.</p>
              <ul className="service-features">
                <li>Campaign Design</li>
                <li>Automation</li>
                <li>A/B Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio section">
        <div className="container">
          <div className="section-header">
            <h2>Success <span className="gradient-text">Stories</span></h2>
            <p>Real results for real businesses</p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item glass-card">
              <div className="portfolio-image">
                <div className="portfolio-placeholder" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                  <span className="portfolio-category">E-Commerce</span>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>Fashion Retailer</h3>
                <p>Increased online sales by 450% through targeted social media campaigns and influencer partnerships.</p>
                <div className="portfolio-metrics">
                  <span>+450% Sales</span>
                  <span>+320% Traffic</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item glass-card">
              <div className="portfolio-image">
                <div className="portfolio-placeholder" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                  <span className="portfolio-category">SaaS</span>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>Tech Startup</h3>
                <p>Generated 10,000+ qualified leads and achieved 280% ROI through strategic content marketing.</p>
                <div className="portfolio-metrics">
                  <span>10K+ Leads</span>
                  <span>280% ROI</span>
                </div>
              </div>
            </div>
            <div className="portfolio-item glass-card">
              <div className="portfolio-image">
                <div className="portfolio-placeholder" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                  <span className="portfolio-category">Healthcare</span>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>Medical Practice</h3>
                <p>Boosted patient bookings by 350% with local SEO and targeted Google Ads campaigns.</p>
                <div className="portfolio-metrics">
                  <span>+350% Bookings</span>
                  <span>+200% Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        <div className="container">
          <div className="section-header">
            <h2>Client <span className="gradient-text">Testimonials</span></h2>
            <p>Hear what our clients say about working with brandUp</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card glass-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                  <span className="avatar-initials">MJ</span>
                </div>
                <div className="testimonial-info">
                  <h4>Michael Johnson</h4>
                  <p className="testimonial-role">CEO, TechFlow Solutions</p>
                  <div className="testimonial-stars">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
                "Working with brandUp has been a game-changer for our business. Their strategic approach to digital marketing helped us increase our online presence by 300% in just 6 months. The team is professional, creative, and truly understands our industry."
              </p>
              <div className="testimonial-footer">
                <span className="testimonial-date">2 months ago</span>
                <span className="testimonial-verified">✓ Verified Client</span>
              </div>
            </div>

            <div className="testimonial-card glass-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                  <span className="avatar-initials">SC</span>
                </div>
                <div className="testimonial-info">
                  <h4>Sarah Chen</h4>
                  <p className="testimonial-role">Marketing Director, StyleHub</p>
                  <div className="testimonial-stars">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
                "The ROI we've seen from our campaigns with brandUp is incredible. They don't just execute - they strategize, analyze, and optimize continuously. Our social media engagement has skyrocketed, and we're seeing real conversions."
              </p>
              <div className="testimonial-footer">
                <span className="testimonial-date">3 months ago</span>
                <span className="testimonial-verified">✓ Verified Client</span>
              </div>
            </div>

            <div className="testimonial-card glass-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                  <span className="avatar-initials">DR</span>
                </div>
                <div className="testimonial-info">
                  <h4>David Rodriguez</h4>
                  <p className="testimonial-role">Founder, GreenLeaf Organics</p>
                  <div className="testimonial-stars">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
                "As a small business owner, I was skeptical about investing in digital marketing. brandUp proved me wrong! Their personalized approach and transparent reporting gave me confidence. We've tripled our customer base in one year."
              </p>
              <div className="testimonial-footer">
                <span className="testimonial-date">1 month ago</span>
                <span className="testimonial-verified">✓ Verified Client</span>
              </div>
            </div>

            <div className="testimonial-card glass-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                  <span className="avatar-initials">EP</span>
                </div>
                <div className="testimonial-info">
                  <h4>Emily Parker</h4>
                  <p className="testimonial-role">VP Marketing, FinanceFirst</p>
                  <div className="testimonial-stars">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star half">★</span>
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
                "brandUp's data-driven approach is exactly what we needed. Their analytics and insights have helped us make smarter marketing decisions. The team is responsive, knowledgeable, and always goes the extra mile."
              </p>
              <div className="testimonial-footer">
                <span className="testimonial-date">4 months ago</span>
                <span className="testimonial-verified">✓ Verified Client</span>
              </div>
            </div>

            <div className="testimonial-card glass-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' }}>
                  <span className="avatar-initials">JL</span>
                </div>
                <div className="testimonial-info">
                  <h4>James Liu</h4>
                  <p className="testimonial-role">Owner, Urban Fitness</p>
                  <div className="testimonial-stars">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
                "From brand strategy to execution, brandUp delivered beyond our expectations. They helped us rebrand and launch a successful digital campaign that brought in 500+ new members in 3 months. Highly recommend!"
              </p>
              <div className="testimonial-footer">
                <span className="testimonial-date">5 months ago</span>
                <span className="testimonial-verified">✓ Verified Client</span>
              </div>
            </div>

            <div className="testimonial-card glass-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar" style={{ background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' }}>
                  <span className="avatar-initials">RK</span>
                </div>
                <div className="testimonial-info">
                  <h4>Rachel Kim</h4>
                  <p className="testimonial-role">CMO, CloudTech Inc</p>
                  <div className="testimonial-stars">
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                    <span className="star filled">★</span>
                  </div>
                </div>
              </div>
              <p className="testimonial-text">
                "The creative team at brandUp is phenomenal. They transformed our content marketing strategy and helped us establish thought leadership in our industry. Our website traffic increased by 400% and lead quality improved significantly."
              </p>
              <div className="testimonial-footer">
                <span className="testimonial-date">2 months ago</span>
                <span className="testimonial-verified">✓ Verified Client</span>
              </div>
            </div>
          </div>

          <div className="testimonials-stats">
            <div className="testimonial-stat">
              <h3 className="gradient-text">4.9/5</h3>
              <p>Average Rating</p>
              <div className="stat-stars">
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
                <span className="star filled">★</span>
              </div>
            </div>
            <div className="testimonial-stat">
              <h3 className="gradient-text">200+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="testimonial-stat">
              <h3 className="gradient-text">98%</h3>
              <p>Would Recommend</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our <span className="gradient-text">Experts</span></h2>
            <p>Passionate professionals dedicated to your success</p>
          </div>
          <div className="team-grid">
            <div className="team-member glass-card">
              <div className="member-avatar" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <span className="avatar-text">SM</span>
              </div>
              <h3>Sarah Mitchell</h3>
              <p className="member-role">Chief Strategy Officer</p>
              <p className="member-bio">15+ years crafting winning digital strategies for Fortune 500 companies.</p>
            </div>
            <div className="team-member glass-card">
              <div className="member-avatar" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                <span className="avatar-text">JC</span>
              </div>
              <h3>James Chen</h3>
              <p className="member-role">Creative Director</p>
              <p className="member-bio">Award-winning designer with a passion for creating memorable brand experiences.</p>
            </div>
            <div className="team-member glass-card">
              <div className="member-avatar" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <span className="avatar-text">EP</span>
              </div>
              <h3>Emily Parker</h3>
              <p className="member-role">Head of Analytics</p>
              <p className="member-bio">Data scientist turning complex metrics into actionable growth strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text">
              <h2>Ready to <span className="gradient-text">brandUp</span> Your Brand?</h2>
              <p>Let's discuss how we can help you achieve your digital marketing goals and drive real results.</p>
              <div className="contact-info">
                <div className="info-item">
                  <span className="info-icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <p>hello@brandup.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <strong>Location</strong>
                    <p>San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form glass-card">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Company Name" />
                </div>
                <div className="form-group">
                  <textarea placeholder="Tell us about your project" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <span className="gradient-text">brandUp</span>
                <span className="logo-dot">.</span>
              </div>
              <p>Transforming brands through innovative digital marketing strategies.</p>
              <div className="social-links">
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">Facebook</a>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li><a href="#services">Brand Strategy</a></li>
                  <li><a href="#services">Social Media</a></li>
                  <li><a href="#services">Content Marketing</a></li>
                  <li><a href="#services">Analytics</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><a href="#team">About Us</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Case Studies</a></li>
                  <li><a href="#">Insights</a></li>
                  <li><a href="#">Newsletter</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 brandUp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Landing
