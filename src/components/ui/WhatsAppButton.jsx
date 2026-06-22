import React, { useState } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '919842770504';

  const questions = [
    {
      label: 'Request a Quote for Insulation/Cladding',
      text: 'Hello, I would like to request a quote for hot/cold thermal insulation (lagging and cladding) works.'
    },
    {
      label: 'Discuss Pipeline Fabrication & Erection',
      text: 'Hello, I want to discuss a project regarding industrial pipeline fabrication and erection.'
    },
    {
      label: 'Inquire about Firebrickworks / Refractory',
      text: 'Hello, I would like to inquire about your firebrickworks and furnace refractory services.'
    },
    {
      label: 'General Business / Engineering Query',
      text: 'Hello Eagle Star Enterprises, I want to connect with your team for general engineering consultation.'
    }
  ];

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleQuestionClick = (text) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="whatsapp-wrapper">
      {isOpen && (
        <div className="whatsapp-popup">
          <div className="whatsapp-popup-header">
            <div className="wa-header-avatar">
              <img src="/logo.png" alt="Eagle Star Enterprises" className="wa-avatar-img" />
              <div className="wa-status-dot"></div>
            </div>
            <div className="wa-header-text">
              <h4>Eagle Star Enterprises</h4>
              <span>Typically replies in minutes</span>
            </div>
            <button className="wa-popup-close" onClick={() => setIsOpen(false)} aria-label="Close popup">
              &times;
            </button>
          </div>
          <div className="whatsapp-popup-body">
            <p className="wa-greeting">Hello! How can we help you today? Select a topic to start chatting on WhatsApp:</p>
            <div className="wa-questions-list">
              {questions.map((q, idx) => (
                <button
                  key={idx}
                  className="wa-question-btn"
                  onClick={() => handleQuestionClick(q.text)}
                >
                  <span className="wa-question-icon">💬</span>
                  <span className="wa-question-label">{q.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={handleToggle}
        className={`whatsapp-float ${isOpen ? 'active' : ''}`}
        aria-label="Chat with us on WhatsApp"
      >
        <div className="whatsapp-pulse"></div>
        <svg
          className="whatsapp-icon"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M12.031 2C6.49 2 2 6.49 2 12.03c0 1.95.56 3.77 1.53 5.31L2 22l4.83-1.27c1.47.8 3.14 1.26 4.93 1.26 5.54 0 10.03-4.49 10.03-10.03C21.79 6.49 17.3 2 12.031 2zm6.27 14.16c-.25.7-1.46 1.37-2.02 1.46-.49.08-1.12.15-3.23-.71-2.7-1.1-4.41-3.83-4.54-4-.13-.18-1.07-1.42-1.07-2.71 0-1.29.67-1.92.91-2.18.25-.26.54-.32.72-.32.18 0 .36.01.52.01.17 0 .4-.07.63.48.24.58.82 2.01.89 2.16.07.15.12.33.02.53-.1.2-.15.33-.3.51-.15.18-.32.4-.45.54-.15.15-.31.32-.13.62.18.3.82 1.34 1.76 2.18.94.84 2.11 1.36 2.45 1.52.33.15.53.13.73-.1.2-.23.86-.99 1.09-1.33.23-.35.46-.29.77-.18.31.11 1.98.93 2.31 1.1.33.17.55.25.63.39.08.13.08.79-.17 1.49z" />
        </svg>
        <span className="whatsapp-tooltip">{isOpen ? 'Close' : 'Chat with us'}</span>
      </button>
    </div>
  );
}
