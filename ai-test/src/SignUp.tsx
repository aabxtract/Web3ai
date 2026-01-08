import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function SignUp() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!')
            return
        }
        // Handle signup logic here
        console.log('Sign up:', formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-visual">
                    <div className="auth-visual-content">
                        <Link to="/" className="auth-logo">
                            <span className="gradient-text">brandUp</span>
                            <span className="logo-dot">.</span>
                        </Link>
                        <h2>Start Your Journey</h2>
                        <p>Join thousands of businesses transforming their digital presence with our cutting-edge marketing tools.</p>
                        <div className="auth-stats">
                            <div className="auth-stat">
                                <h3 className="gradient-text">10K+</h3>
                                <p>Active Users</p>
                            </div>
                            <div className="auth-stat">
                                <h3 className="gradient-text">500+</h3>
                                <p>Companies</p>
                            </div>
                            <div className="auth-stat">
                                <h3 className="gradient-text">98%</h3>
                                <p>Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="auth-form-container">
                    <div className="auth-form-content">
                        <h1>Create Account</h1>
                        <p className="auth-subtitle">Get started with your free account today</p>

                        <form onSubmit={handleSubmit} className="auth-form">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Your Company"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create a strong password"
                                    required
                                    minLength={8}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm your password"
                                    required
                                    minLength={8}
                                />
                            </div>

                            <label className="checkbox-label terms-checkbox">
                                <input type="checkbox" required />
                                <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
                            </label>

                            <button type="submit" className="btn-primary auth-submit">
                                Create Account
                            </button>
                        </form>

                        <div className="auth-divider">
                            <span>or sign up with</span>
                        </div>

                        <div className="social-auth">
                            <button className="social-btn">
                                <span className="social-icon">G</span>
                                Google
                            </button>
                            <button className="social-btn">
                                <span className="social-icon">f</span>
                                Facebook
                            </button>
                        </div>

                        <p className="auth-switch">
                            Already have an account? <Link to="/login" className="auth-link">Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
