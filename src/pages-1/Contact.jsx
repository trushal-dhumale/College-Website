import React, { useState } from 'react';
import './Contact.css'; // Assuming you have a CSS file for styling

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', msg: 'Message sent successfully!' });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus({ type: 'error', msg: data.error || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ type: 'error', msg: 'Network error, please try again.' });
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      {status && (
        <div className={`status-message ${status.type}`}>
          {status.msg}
        </div>
      )}

      <form onSubmit={submit} className="contact-form">
        <label>
          Name <span className="required">*</span>
          <input
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Email <span className="required">*</span>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Message <span className="required">*</span>
          <textarea
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
          />
        </label>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}
