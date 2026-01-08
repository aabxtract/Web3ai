import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle login logic here
        console.log('Login:', formData)
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
                        <h2>Welcome Back!</h2>
                        <p>Access your digital marketing dashboard and unlock powerful tools to grow your business.</p>
                        <div className="auth-features">
                            <div className="auth-feature">
                                <span className="feature-icon">📊</span>
                                <span>Analytics Dashboard</span>
                            </div>
                            <div className="auth-feature">
                                <span className="feature-icon">🎯</span>
                                <span>Campaign Manager</span>
                            </div>
                            <div className="auth-feature">
                                <span className="feature-icon">📈</span>
                                <span>Performance Reports</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="auth-form-container">
                    <div className="auth-form-content">
                        <h1>Sign In</h1>
                        <p className="auth-subtitle">Enter your credentials to access your account</p>

                        <form onSubmit={handleSubmit} className="auth-form">
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
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <div className="form-options">
                                <label className="checkbox-label">
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </label>
                                <a href="#" className="forgot-link">Forgot password?</a>
                            </div>

                            <button type="submit" className="btn-primary auth-submit">
                                Sign In
                            </button>
                        </form>

                        <div className="auth-divider">
                            <span>or continue with</span>
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
                            Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
