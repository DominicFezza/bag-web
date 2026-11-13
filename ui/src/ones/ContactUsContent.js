import React, { useEffect, useState } from "react";
import { getInlineLoader } from "../Helpers";

// Lucide Icons & Social Brands
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Anchor,
  Compass,
  MessageSquare
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter
} from "react-icons/fa6";

import banner3 from "../assets/freight.jpg";
import banner1 from "../assets/contract.jpg";

export default function ContactUsContent() {
  const [ready, setReady] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Ship Chandling & Vessel Provisioning",
    message: ""
  });

  const contact = {
    phone: "+255710122338",
    whatsapp: "+255710122338",
    email: "info@baggroup.co.tz",
    location: "Dar es Salaam, Tanzania",
    operatingHours: "24/7 Port & Emergency Dispatch",
    mapEmbed: "https://maps.google.com/maps?q=Dar%20es%20Salaam,%20Tanzania&t=&z=13&ie=UTF8&iwloc=&output=embed",
    mapLink: "https://maps.google.com/?q=Dar+es+Salaam,+Tanzania"
  };

  const serviceOptions = [
    "Ship Chandling & Vessel Provisioning",
    "Food and Beverage Supply to Ships",
    "Marine, Deck & Engine Stores",
    "Customs Clearing & Forwarding Services",
    "Freight Forwarding & Logistics",
    "General Trading & Procurement",
    "Supply of Goods, Equipment & Materials",
    "Corporate and Institutional Supplies",
    "Import & Export Services",
    "Contract Supply and Logistics Support"
  ];

  useEffect(() => {
    setReady(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`BAG GROUP Inquiry: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(
      `Dear BAG GROUP LIMITED Operations Team,\n\n` +
      `I would like to initiate a formal service request.\n\n` +
      `-------------------------------------------\n` +
      `CLIENT DETAILS\n` +
      `-------------------------------------------\n` +
      `Full Name: ${formData.name}\n` +
      `Email Address: ${formData.email}\n` +
      `Phone/WhatsApp: ${formData.phone || "Not provided"}\n` +
      `Required Service: ${formData.service}\n\n` +
      `-------------------------------------------\n` +
      `SCOPE / INQUIRY DETAILS\n` +
      `-------------------------------------------\n` +
      `${formData.message}\n\n` +
      `Sent via BAG GROUP Official Portal`
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  if (!ready) {
    return <div className="loader-container">{getInlineLoader()}</div>;
  }

  return (
    <div className="contact-page-container">
      <style>{`
        :root {
          --brand-primary: #015398;
          --brand-secondary: #EF9B11;
          --brand-dark: #02101e;
          --glass-bg: rgba(255, 255, 255, 0.035);
          --glass-border: rgba(255, 255, 255, 0.08);
          --glass-hover: rgba(255, 255, 255, 0.07);
        }

        .contact-page-container {
          background-color: var(--brand-dark);
          color: #ffffff;
          font-family: 'Open Sans', system-ui, sans-serif;
          position: relative;
          overflow: hidden;
          padding-bottom: 90px;
        }

        /* Ambient Lighting Mesh */
        .ambient-glow-1 {
          position: absolute;
          top: 10%;
          left: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(1, 83, 152, 0.28) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        .ambient-glow-2 {
          position: absolute;
          top: 45%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(239, 155, 17, 0.16) 0%, transparent 70%);
          pointer-events: none;
          z-index: 1;
        }

        /* Hero Header Section */
        .contact-hero-header {
          position: relative;
          height: 48vh;
          min-height: 380px;
          background: linear-gradient(180deg, rgba(2, 16, 30, 0.4) 0%, rgba(2, 16, 30, 0.95) 90%, var(--brand-dark) 100%), 
                      url(${banner3}) center/cover fixed;
          display: flex;
          align-items: flex-end;
          padding: 0 6% 50px;
          z-index: 2;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: rgba(239, 155, 17, 0.12);
          border: 1px solid rgba(239, 155, 17, 0.35);
          backdrop-filter: blur(10px);
          border-radius: 30px;
          color: var(--brand-secondary);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .header-title {
          font-size: clamp(2.4rem, 5.5vw, 4.2rem);
          font-weight: 800;
          letter-spacing: -1.5px;
          line-height: 1.1;
          margin: 0;
          text-transform: uppercase;
        }

        .title-gold {
          background: linear-gradient(135deg, #ffffff 20%, var(--brand-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .title-blue {
          background: linear-gradient(135deg, #3aa0f9 0%, #ffffff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Main Content Grid */
        .contact-grid {
          position: relative;
          z-index: 3;
          max-width: 1360px;
          margin: 40px auto 0;
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 50px;
          padding: 0 6%;
          align-items: start;
        }

        /* Sidebar Info Cards */
        .sidebar-heading {
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin: 0 0 10px;
        }

        .sidebar-subtext {
          color: rgba(255, 255, 255, 0.65);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .interactive-contact-card {
          display: flex;
          align-items: center;
          gap: 20px;
          background: var(--glass-bg);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid var(--glass-border);
          padding: 20px 24px;
          border-radius: 18px;
          text-decoration: none;
          color: #ffffff;
          margin-bottom: 16px;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .interactive-contact-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--brand-secondary);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .interactive-contact-card:hover {
          background: var(--glass-hover);
          border-color: rgba(239, 155, 17, 0.4);
          transform: translateX(6px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
        }

        .interactive-contact-card:hover::before {
          opacity: 1;
        }

        .icon-circle {
          width: 48px;
          height: 48px;
          background: rgba(1, 83, 152, 0.25);
          border: 1px solid rgba(1, 83, 152, 0.5);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand-secondary);
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .interactive-contact-card:hover .icon-circle {
          background: var(--brand-secondary);
          color: #02101e;
          transform: scale(1.06);
          border-color: var(--brand-secondary);
        }

        .card-details {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-tag {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--brand-secondary);
          font-weight: 700;
        }

        .card-value {
          font-size: 1rem;
          font-weight: 700;
          margin-top: 2px;
          color: #ffffff;
        }

        .card-arrow {
          color: rgba(255, 255, 255, 0.3);
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .interactive-contact-card:hover .card-arrow {
          transform: translateX(4px);
          color: var(--brand-secondary);
        }

        /* Social Pill Links */
        .social-channel-block {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid var(--glass-border);
        }

        .social-heading {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 16px;
          font-weight: 700;
        }

        .social-pill-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .social-icon-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-icon-btn:hover {
          background: var(--brand-secondary);
          color: #02101e;
          transform: translateY(-3px);
          border-color: var(--brand-secondary);
          box-shadow: 0 6px 18px rgba(239, 155, 17, 0.35);
        }

        .social-icon-btn.whatsapp:hover {
          background: #25d366;
          border-color: #25d366;
          color: #ffffff;
          box-shadow: 0 6px 18px rgba(37, 211, 102, 0.35);
        }

        /* Modern Form Container */
        .form-glass-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          background: url(${banner1}) center/cover;
          border: 1px solid var(--glass-border);
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.6);
        }

        .form-backdrop-layer {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(2, 16, 30, 0.97) 0%, rgba(2, 16, 30, 0.88) 100%);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .form-content-area {
          position: relative;
          z-index: 2;
          padding: 48px;
        }

        .form-lead-title {
          font-size: 1.8rem;
          font-weight: 800;
          margin: 0 0 8px;
          letter-spacing: -0.5px;
        }

        .form-lead-subtitle {
          color: rgba(255, 255, 255, 0.65);
          font-size: 0.92rem;
          margin-bottom: 32px;
          line-height: 1.6;
        }

        .form-input-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .field-group {
          margin-bottom: 24px;
          position: relative;
        }

        .field-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--brand-secondary);
          margin-bottom: 8px;
          font-weight: 700;
          display: block;
        }

        .custom-glass-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 14px 18px;
          color: #ffffff;
          font-size: 0.95rem;
          font-family: inherit;
          transition: all 0.3s ease;
          outline: none;
        }

        .custom-glass-input:focus {
          border-color: var(--brand-secondary);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(239, 155, 17, 0.15);
        }

        select.custom-glass-input option {
          background: #021120;
          color: #ffffff;
          padding: 10px;
        }

        .btn-dispatch-inquiry {
          width: 100%;
          background: linear-gradient(135deg, var(--brand-secondary) 0%, #d88708 100%);
          color: #ffffff;
          border: none;
          padding: 17px 36px;
          border-radius: 12px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 700;
          font-size: 0.88rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.35s ease;
          box-shadow: 0 10px 25px rgba(239, 155, 17, 0.35);
          margin-top: 10px;
        }

        .btn-dispatch-inquiry:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 32px rgba(239, 155, 17, 0.55);
        }

        .btn-dispatch-inquiry .send-icon-spin {
          transition: transform 0.3s ease;
        }

        .btn-dispatch-inquiry:hover .send-icon-spin {
          transform: translateX(4px) translateY(-2px);
        }

        /* Map Preview Section */
        .map-section-wrap {
          position: relative;
          z-index: 3;
          max-width: 1360px;
          margin: 70px auto 0;
          padding: 0 6%;
        }

        .map-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .map-header-title {
          font-size: 1.35rem;
          font-weight: 800;
          margin: 0;
        }

        .map-frame-container {
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--glass-border);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          height: 380px;
          background: #010a14;
          position: relative;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .contact-hero-header {
            height: 38vh;
          }
        }

        @media (max-width: 768px) {
          .contact-page-container {
            padding-bottom: 60px;
          }

          .form-input-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .form-content-area {
            padding: 32px 20px;
          }

          .map-frame-container {
            height: 280px;
          }

          .header-title {
            font-size: 2.2rem;
          }
        }
      `}</style>

      {/* Ambient Radial Lights */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      {/* Hero Header */}
      <header className="contact-hero-header">
        <div className="header-text-block">
          <div className="hero-badge">
            <Compass size={14} /> 24/7 Operations & Dispatch
          </div>
          <h1 className="header-title">
            <span className="title-gold">Connect With</span> <br />
            <span className="title-blue">BAG GROUP LIMITED.</span>
          </h1>
        </div>
      </header>

      {/* Main Grid: Direct Hub & Interactive Quote Form */}
      <div className="contact-grid">
        
        {/* Left Side: Reach Us & Direct Dispatch */}
        <aside className="contact-sidebar">
          <h2 className="sidebar-heading">Direct Port & Office Desks</h2>
          <p className="sidebar-subtext">
            For urgent vessel chandling at berth, customs clearance status, or freight quotes, reach out through our priority communication lines.
          </p>

          <a href={`tel:${contact.phone}`} className="interactive-contact-card">
            <div className="icon-circle">
              <Phone size={20} />
            </div>
            <div className="card-details">
              <span className="card-tag">Call Dispatch 24/7</span>
              <span className="card-value">{contact.phone}</span>
            </div>
            <ArrowRight size={18} className="card-arrow" />
          </a>

          <a href={`mailto:${contact.email}`} className="interactive-contact-card">
            <div className="icon-circle">
              <Mail size={20} />
            </div>
            <div className="card-details">
              <span className="card-tag">Official Inquiries</span>
              <span className="card-value">{contact.email}</span>
            </div>
            <ArrowRight size={18} className="card-arrow" />
          </a>

          <a href={contact.mapLink} target="_blank" rel="noreferrer" className="interactive-contact-card">
            <div className="icon-circle">
              <MapPin size={20} />
            </div>
            <div className="card-details">
              <span className="card-tag">Operational Hub</span>
              <span className="card-value">{contact.location}</span>
            </div>
            <ArrowRight size={18} className="card-arrow" />
          </a>

          <div className="interactive-contact-card" style={{ cursor: "default" }}>
            <div className="icon-circle">
              <Clock size={20} />
            </div>
            <div className="card-details">
              <span className="card-tag">Availability</span>
              <span className="card-value">{contact.operatingHours}</span>
            </div>
            <ShieldCheck size={18} color="#EF9B11" />
          </div>

          {/* Social Presence */}
          <div className="social-channel-block">
            <div className="social-heading">Connect with us online</div>
            <div className="social-pill-row">
              <a 
                href={`https://wa.me/${contact.whatsapp}`} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-btn whatsapp" 
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
              <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                <FaLinkedinIn size={16} />
              </a>
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <FaInstagram size={17} />
              </a>
              <a href="#" className="social-icon-btn" aria-label="Facebook">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="social-icon-btn" aria-label="X (Twitter)">
                <FaXTwitter size={16} />
              </a>
            </div>
          </div>
        </aside>

        {/* Right Side: Glassmorphic Inquiry Form */}
        <main className="form-glass-card">
          <div className="form-backdrop-layer" />
          
          <div className="form-content-area">
            <h2 className="form-lead-title">Request Service Proposal</h2>
            <p className="form-lead-subtitle">
              Fill out the parameters below. Our operations team will respond promptly with detailed schedules and competitive quotes.
            </p>

            <form onSubmit={handleFormSubmit}>
              <div className="form-input-grid">
                <div className="field-group">
                  <label className="field-label">Your Name / Organization</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="custom-glass-input"
                  />
                </div>

                <div className="field-group">
                  <label className="field-label">Official Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="custom-glass-input"
                  />
                </div>
              </div>

              <div className="form-input-grid">
                <div className="field-group">
                  <label className="field-label">Phone / WhatsApp Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="custom-glass-input"
                  />
                </div>

                <div className="field-group">
                  <label className="field-label">Target Service Category</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="custom-glass-input"
                  >
                    {serviceOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field-group">
                <label className="field-label">Scope & Specifications</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="custom-glass-input"
                />
              </div>

              <button type="submit" className="btn-dispatch-inquiry">
                <span>Dispatch Inquiry Directly</span>
                <Send size={16} className="send-icon-spin" />
              </button>
            </form>
          </div>
        </main>

      </div>

      {/* Map Preview Container */}
      <section className="map-section-wrap">
        <div className="map-header-bar">
          <div>
            <span className="field-label" style={{ marginBottom: 4 }}>Headquarters & Logistics Center</span>
            <h3 className="map-header-title">Dar es Salaam Maritime Operations Hub</h3>
          </div>
          <a
            href={contact.mapLink}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "var(--brand-secondary)",
              textDecoration: "none",
              fontSize: "0.82rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}
          >
            Open in Google Maps ↗
          </a>
        </div>

        <div className="map-frame-container">
          <iframe
            title="BAG GROUP Office Location Map"
            src={contact.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(1.2)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

    </div>
  );
}