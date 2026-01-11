import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('overview')
    const [theme, setTheme] = useState(() => {
        // Get theme from localStorage or default to 'dark'
        return localStorage.getItem('theme') || 'dark'
    })

    // Apply theme to document root
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
    }

    const handleLogout = () => {
        // Handle logout logic here
        navigate('/')
    }

    return (
        <div className="dashboard">
            {/* Sidebar */}
            <aside className="dashboard-sidebar">
                <div className="sidebar-header">
                    <Link to="/" className="dashboard-logo">
                        <span className="gradient-text">brandUp</span>
                        <span className="logo-dot">.</span>
                    </Link>
                </div>

                <nav className="sidebar-nav">
                    <button
                        className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        <span className="nav-icon">📊</span>
                        <span>Overview</span>
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'campaigns' ? 'active' : ''}`}
                        onClick={() => setActiveTab('campaigns')}
                    >
                        <span className="nav-icon">🎯</span>
                        <span>Campaigns</span>
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
                        onClick={() => setActiveTab('analytics')}
                    >
                        <span className="nav-icon">📈</span>
                        <span>Analytics</span>
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'content' ? 'active' : ''}`}
                        onClick={() => setActiveTab('content')}
                    >
                        <span className="nav-icon">📝</span>
                        <span>Content</span>
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'social' ? 'active' : ''}`}
                        onClick={() => setActiveTab('social')}
                    >
                        <span className="nav-icon">📱</span>
                        <span>Social Media</span>
                    </button>
                    <button
                        className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('settings')}
                    >
                        <span className="nav-icon">⚙️</span>
                        <span>Settings</span>
                    </button>
                </nav>

                <div className="sidebar-footer">
                    <button className="logout-btn" onClick={handleLogout}>
                        <span className="nav-icon">🚪</span>
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="dashboard-main">
                {/* Header */}
                <header className="dashboard-header">
                    <div className="header-content">
                        <div>
                            <h1>Welcome back! 👋</h1>
                            <p>Here's what's happening with your marketing today</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button className="btn-primary">Create Campaign</button>
                            <button
                                className="theme-toggle"
                                onClick={toggleTheme}
                                aria-label="Toggle theme"
                                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                            >
                                {theme === 'dark' ? '☀️' : '🌙'}
                            </button>
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="dashboard-content">
                    {activeTab === 'overview' && (
                        <>
                            {/* Stats Grid */}
                            <div className="stats-grid">
                                <div className="stat-card glass-card">
                                    <div className="stat-header">
                                        <span className="stat-icon">👥</span>
                                        <span className="stat-trend positive">+12.5%</span>
                                    </div>
                                    <h3>Total Reach</h3>
                                    <p className="stat-value">45,678</p>
                                    <p className="stat-label">This month</p>
                                </div>

                                <div className="stat-card glass-card">
                                    <div className="stat-header">
                                        <span className="stat-icon">💰</span>
                                        <span className="stat-trend positive">+8.2%</span>
                                    </div>
                                    <h3>Revenue</h3>
                                    <p className="stat-value">$12,450</p>
                                    <p className="stat-label">This month</p>
                                </div>

                                <div className="stat-card glass-card">
                                    <div className="stat-header">
                                        <span className="stat-icon">🎯</span>
                                        <span className="stat-trend positive">+15.3%</span>
                                    </div>
                                    <h3>Conversions</h3>
                                    <p className="stat-value">1,234</p>
                                    <p className="stat-label">This month</p>
                                </div>

                                <div className="stat-card glass-card">
                                    <div className="stat-header">
                                        <span className="stat-icon">📊</span>
                                        <span className="stat-trend negative">-2.1%</span>
                                    </div>
                                    <h3>Engagement Rate</h3>
                                    <p className="stat-value">4.8%</p>
                                    <p className="stat-label">This month</p>
                                </div>
                            </div>

                            {/* Charts Section */}
                            <div className="charts-section">
                                <div className="chart-card glass-card">
                                    <div className="card-header">
                                        <h3>Performance Overview</h3>
                                        <select className="chart-select">
                                            <option>Last 7 days</option>
                                            <option>Last 30 days</option>
                                            <option>Last 90 days</option>
                                        </select>
                                    </div>
                                    <div className="chart-placeholder">
                                        <div className="chart-bars">
                                            <div className="bar" style={{ height: '60%' }}></div>
                                            <div className="bar" style={{ height: '80%' }}></div>
                                            <div className="bar" style={{ height: '45%' }}></div>
                                            <div className="bar" style={{ height: '90%' }}></div>
                                            <div className="bar" style={{ height: '70%' }}></div>
                                            <div className="bar" style={{ height: '85%' }}></div>
                                            <div className="bar" style={{ height: '95%' }}></div>
                                        </div>
                                        <div className="chart-labels">
                                            <span>Mon</span>
                                            <span>Tue</span>
                                            <span>Wed</span>
                                            <span>Thu</span>
                                            <span>Fri</span>
                                            <span>Sat</span>
                                            <span>Sun</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="chart-card glass-card">
                                    <div className="card-header">
                                        <h3>Traffic Sources</h3>
                                    </div>
                                    <div className="traffic-sources">
                                        <div className="traffic-item">
                                            <div className="traffic-info">
                                                <span className="traffic-label">Organic Search</span>
                                                <span className="traffic-value">45%</span>
                                            </div>
                                            <div className="traffic-bar">
                                                <div className="traffic-fill" style={{ width: '45%', background: 'var(--gradient-primary)' }}></div>
                                            </div>
                                        </div>
                                        <div className="traffic-item">
                                            <div className="traffic-info">
                                                <span className="traffic-label">Social Media</span>
                                                <span className="traffic-value">30%</span>
                                            </div>
                                            <div className="traffic-bar">
                                                <div className="traffic-fill" style={{ width: '30%', background: 'var(--gradient-accent)' }}></div>
                                            </div>
                                        </div>
                                        <div className="traffic-item">
                                            <div className="traffic-info">
                                                <span className="traffic-label">Direct</span>
                                                <span className="traffic-value">15%</span>
                                            </div>
                                            <div className="traffic-bar">
                                                <div className="traffic-fill" style={{ width: '15%', background: 'var(--gradient-warm)' }}></div>
                                            </div>
                                        </div>
                                        <div className="traffic-item">
                                            <div className="traffic-info">
                                                <span className="traffic-label">Referral</span>
                                                <span className="traffic-value">10%</span>
                                            </div>
                                            <div className="traffic-bar">
                                                <div className="traffic-fill" style={{ width: '10%', background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Activity */}
                            <div className="activity-section glass-card">
                                <div className="card-header">
                                    <h3>Recent Activity</h3>
                                    <a href="#" className="view-all">View All</a>
                                </div>
                                <div className="activity-list">
                                    <div className="activity-item">
                                        <div className="activity-icon" style={{ background: 'var(--gradient-primary)' }}>🎯</div>
                                        <div className="activity-content">
                                            <p className="activity-title">New campaign launched</p>
                                            <p className="activity-time">2 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="activity-item">
                                        <div className="activity-icon" style={{ background: 'var(--gradient-accent)' }}>📱</div>
                                        <div className="activity-content">
                                            <p className="activity-title">Social post published</p>
                                            <p className="activity-time">5 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="activity-item">
                                        <div className="activity-icon" style={{ background: 'var(--gradient-warm)' }}>📊</div>
                                        <div className="activity-content">
                                            <p className="activity-title">Monthly report generated</p>
                                            <p className="activity-time">1 day ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 'campaigns' && (
                        <div className="campaigns-view">
                            <h2>Active Campaigns</h2>
                            <div className="campaigns-grid">
                                <div className="campaign-card glass-card">
                                    <div className="campaign-status active">Active</div>
                                    <h3>Summer Sale 2026</h3>
                                    <p>Email marketing campaign targeting existing customers</p>
                                    <div className="campaign-stats">
                                        <div className="campaign-stat">
                                            <span className="stat-label">Sent</span>
                                            <span className="stat-value">5,234</span>
                                        </div>
                                        <div className="campaign-stat">
                                            <span className="stat-label">Open Rate</span>
                                            <span className="stat-value">42%</span>
                                        </div>
                                        <div className="campaign-stat">
                                            <span className="stat-label">CTR</span>
                                            <span className="stat-value">8.5%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="campaign-card glass-card">
                                    <div className="campaign-status scheduled">Scheduled</div>
                                    <h3>Product Launch</h3>
                                    <p>Multi-channel campaign for new product release</p>
                                    <div className="campaign-stats">
                                        <div className="campaign-stat">
                                            <span className="stat-label">Start Date</span>
                                            <span className="stat-value">Jan 15</span>
                                        </div>
                                        <div className="campaign-stat">
                                            <span className="stat-label">Budget</span>
                                            <span className="stat-value">$5,000</span>
                                        </div>
                                        <div className="campaign-stat">
                                            <span className="stat-label">Channels</span>
                                            <span className="stat-value">5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'analytics' && (
                        <div className="analytics-view">
                            <h2>Analytics Dashboard</h2>
                            <p className="section-description">Detailed insights and performance metrics</p>
                            <div className="analytics-placeholder glass-card">
                                <p>📊 Advanced analytics coming soon...</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'content' && (
                        <div className="content-view">
                            <h2>Content Library</h2>
                            <p className="section-description">Manage your marketing content</p>
                            <div className="content-placeholder glass-card">
                                <p>📝 Content management tools coming soon...</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'social' && (
                        <div className="social-view">
                            <h2>Social Media Manager</h2>
                            <p className="section-description">Schedule and manage social posts</p>
                            <div className="social-placeholder glass-card">
                                <p>📱 Social media tools coming soon...</p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div className="settings-view">
                            <h2>Settings</h2>
                            <p className="section-description">Manage your account preferences</p>
                            <div className="settings-placeholder glass-card">
                                <p>⚙️ Settings panel coming soon...</p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Dashboard
