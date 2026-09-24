import userStore from '@/stores/userStore';
import { useState } from 'react';

export default function AuthLoginForm() {
    // State for active tab: 'mobile' or 'email'
    const [authMethod, setAuthMethod] = useState('mobile');

    let setPasswordAndPhone = userStore(state => state.setPasswordAndPhone);
    let setPasswordAndemail = userStore(state => state.setPasswordAndemail);
    // Input states
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        // if there is email then call the email setter
        // else call the phone number setter
        if (authMethod === 'mobile'){
            setPasswordAndPhone({passwordNew : password, phoneNew : mobileNumber})
        }else {
            // means it is email
            setPasswordAndemail({passwordNew : password, emailNew : email})
        }
    };

    return (
        <div className="auth-card-container">
        {/* Top Divider */}
        <div className="auth-divider">
            <span className="auth-divider-text">OR WITH PHONE / EMAIL</span>
        </div>

        {/* Tab Switcher */}
        <div className="auth-tab-group">
            {/* Mobile Tab */}
            <button
            type="button"
            className={`auth-tab-btn ${authMethod === 'mobile' ? 'active' : ''}`}
            onClick={() => setAuthMethod('mobile')}
            >
            {/* Smartphone Icon */}
            <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
                <line x1="11" y1="18" x2="13" y2="18" />
            </svg>
            <div className="tab-text">
                <span className="tab-title">Ethiopian</span>
                <span className="tab-subtitle">Mobile (+251)</span>
            </div>
            </button>

            {/* Email Tab */}
            <button
            type="button"
            className={`auth-tab-btn ${authMethod === 'email' ? 'active' : ''}`}
            onClick={() => setAuthMethod('email')}
            >
            {/* Mail Icon */}
            <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="tab-single-title">Email Address</span>
            </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form-fields">
            {/* Dynamic Field: Mobile vs Email */}
            {authMethod === 'mobile' ? (
            <div className="form-group">
                <div className="label-row">
                <label className="field-label">Mobile Number</label>
                <span className="carrier-sublabel">Ethio Telecom / Safaricom</span>
                </div>

                <div className="input-box mobile-input-box">
                {/* Country Code Selector Box */}
                <div className="country-badge">
                    <span className="ethiopia-flag">🇪🇹</span>
                    <span className="country-code">+251</span>
                    {/* Chevron Down Icon */}
                    <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>

                <input
                    type="tel"
                    className="input-field"
                    placeholder="91123 4567"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.value ? e.value : e.target.value)}
                />
                </div>
            </div>
            ) : (
            <div className="form-group">
                <div className="label-row">
                <label className="field-label">Email Address</label>
                </div>

                <div className="input-box">
                <input
                    type="email"
                    className="input-field full-padding"
                    placeholder="example@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
            </div>
            )}

            {/* Password / PIN Section */}
            <div className="form-group">
            <label className="field-label">Secret Password / PIN</label>
            <div className="input-box password-input-box">
                {/* Lock Icon */}
                <svg className="field-icon left-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>

                <input
                type={showPassword ? 'text' : 'password'}
                className="input-field password-field"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />

                {/* Toggle Eye Button */}
                <button
                type="button"
                className="toggle-password-btn"
                onClick={() => setShowPassword(!showPassword)}
                >
                {showPassword ? (
                    /* Eye Off Icon */
                    <svg className="field-icon right-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                ) : (
                    /* Eye Icon */
                    <svg className="field-icon right-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                    </svg>
                )}
                </button>
            </div>
            </div>

            {/* Done Action Button */}
            <button type="submit" className="done-btn" >
            Done
            </button>
        </form>
        </div>
    );
}