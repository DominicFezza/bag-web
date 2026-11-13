import React, { useState } from "react";
import { getCurrentYear } from "../Helpers";
import bannerBg from "../assets/import.jpg";
import logo from "../assets/logo-full.png";

// Lucide & React Icons
import {
  Anchor,
  Utensils,
  Wrench,
  FileCheck2,
  Truck,
  Globe,
  Cpu,
  Building2,
  ArrowLeftRight,
  ShieldCheck,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter
} from "react-icons/fa6";

export default function ModernTravelFooter() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const contact = {
    phone: "+255710122338",
    whatsapp: "+255710122338",
    email: "info@baggroup.co.tz",
    location: "Dar es Salaam, Tanzania",
    hours: "24/7 Operations & Support",
    mapLink: "https://maps.google.com/?q=Dar+es+Salaam+Tanzania"
  };

  const services = [
    { id: "ship-chandling", label: "Ship Chandling & Provisioning", icon: Anchor },
    { id: "food-beverage", label: "Food & Beverage Supply", icon: Utensils },
    { id: "deck-engine", label: "Marine, Deck & Engine Stores", icon: Wrench },
    { id: "customs-clearing", label: "Customs Clearing & Forwarding", icon: FileCheck2 },
    { id: "freight-logistics", label: "Freight Forwarding & Logistics", icon: Truck },
    { id: "general-trading", label: "General Trading & Sourcing", icon: Globe },
    { id: "goods-equipment", label: "Equipment & Materials Supply", icon: Cpu },
    { id: "corporate-supplies", label: "Corporate & Institutional Supply", icon: Building2 },
    { id: "import-export", label: "Import & Export Services", icon: ArrowLeftRight },
    { id: "contract-logistics", label: "Contract Supply & SLA Support", icon: ShieldCheck }
  ];

  const toggleService = (id) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((serviceId) => serviceId !== id) : [...prev, id]
    );
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const targetLabels = services
      .filter((service) => selectedServices.includes(service.id))
      .map((service) => service.label);

    const servicesText =
      targetLabels.length > 0 ? `Selected Requirements:\n- ${targetLabels.join("\n- ")}` : "General Service Inquiry";
    
    const subject = encodeURIComponent(`BAG GROUP Inquiry: ${formData.name}`);
    const body = encodeURIComponent(
      `Client Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "N/A"}\n\n${servicesText}\n\nMessage Scope:\n${formData.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="modern-travel-footer" style={{ backgroundImage: `url(${bannerBg})` }}>
      <div className="footer-overlay" />
      <div className="ambient-spotlight-top" />
      <div className="ambient-spotlight-bottom" />
      <div className="content-dark-gradient" />

      <div className="footer-content-wrap">
        
        {/* Top Interactive Glassmorphic Inquiry Hub */}
        <div className="footer-form-card">
          <div className="form-inner">
            <div className="form-header-box">
              <h2 className="form-title">
                Request a <span>Quote</span>
              </h2>
              <p className="form-subtitle">
                Select your service requirements below for expedited maritime clearance, vessel provisioning, or freight solutions.
              </p>
            </div>

            <form onSubmit={handleSendEmail}>
              {/* Selectable Services Grid */}
              <div className="service-selection-grid">
                {services.map((service) => {
                  const Icon = service.icon;
                  const isSelected = selectedServices.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      className={`service-tile ${isSelected ? "active" : ""}`}
                      onClick={() => toggleService(service.id)}
                    >
                      <div className="tile-icon-wrap">
                        <Icon size={18} />
                      </div>
                      <span className="tile-label">{service.label}</span>
                      <CheckCircle2 size={16} className="check-mark" />
                    </div>
                  );
                })}
              </div>

              {/* Form Input Fields */}
              <div className="input-row">
                <input
                  type="text"
                  placeholder="Full Name / Representative"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Official Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp (Optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <textarea
                placeholder="Specify vessel arrival dates, cargo specifications, procurement schedule, or delivery locations..."
                rows="3"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <button type="submit" className="glow-submit-btn">
                <span>Submit Direct Inquiry</span>
                <Send size={16} className="send-icon" />
              </button>
            </form>
          </div>
        </div>

        {/* Lower Main Footer Grid */}
        <div className="footer-main-grid">
          
          {/* Brand & Mission Profile */}
          <div className="footer-brand-info">
            <img src={logo} alt="BAG Group Limited Logo" className="footer-logo-img" />
            <p className="brand-description">
              BAG GROUP LIMITED is a Tanzanian multi-sector enterprise specializing in ship chandling, marine stores, customs clearing, freight logistics, and international procurement networks.
            </p>

            <div className="social-pill-container">
              <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer" className="social-pill whatsapp" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="#" className="social-pill" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="social-pill" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-pill" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="social-pill" aria-label="X (Twitter)">
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Contact Direct Hub */}
          <div className="footer-contact-links d-flex flex-column align-items-start">
            <h4 className="footer-heading">Port & Operations Desk</h4>
            
            <a href={`tel:${contact.phone}`} className="contact-link">
              <div className="icon-box"><Phone size={16} /></div>
              <div className="contact-details">
                <span className="contact-label">Call Dispatch</span>
                <span className="contact-val">{contact.phone}</span>
              </div>
            </a>

            <a href={`mailto:${contact.email}`} className="contact-link">
              <div className="icon-box"><Mail size={16} /></div>
              <div className="contact-details">
                <span className="contact-label">Email Inquiries</span>
                <span className="contact-val">{contact.email}</span>
              </div>
            </a>

            <a href={contact.mapLink} target="_blank" rel="noreferrer" className="contact-link">
              <div className="icon-box"><MapPin size={16} /></div>
              <div className="contact-details">
                <span className="contact-label">Main Logistics Hub</span>
                <span className="contact-val">{contact.location}</span>
              </div>
              <ExternalLink size={13} className="ext-icon" />
            </a>

            <div className="contact-link no-hover">
              <div className="icon-box"><Clock size={16} /></div>
              <div className="contact-details">
                <span className="contact-label">Availability</span>
                <span className="contact-val">{contact.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Sub-bar */}
        <div className="footer-bottom-bar">
          <p>© {getCurrentYear()} BAG GROUP LIMITED. All Rights Reserved.</p>
          <div className="footer-bottom-nav">
            <span>Ship Chandling</span>
            <span>•</span>
            <span>Freight Forwarding</span>
            <span>•</span>
            <span>General Supplies</span>
          </div>
        </div>

      </div>

      <style>{`
        :root {
          --footer-primary: #015398;
          --footer-secondary: #EF9B11;
          --footer-dark-bg: #020e1a;
          --glass-card: rgba(255, 255, 255, 0.035);
          --glass-card-border: rgba(255, 255, 255, 0.08);
        }

        .modern-travel-footer {
          position: relative;
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
          color: #ffffff;
          padding: 100px 0 0;
          font-family: 'Open Sans', system-ui, sans-serif;
          overflow: hidden;
        }

        .footer-overlay {
          position: absolute;
          inset: 0;
          background: rgba(1, 20, 37, 0.88);
          z-index: 1;
        }

        .ambient-spotlight-top {
          position: absolute;
          top: 0;
          left: 15%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(1, 83, 152, 0.25) 0%, transparent 70%);
          z-index: 2;
          pointer-events: none;
        }

        .ambient-spotlight-bottom {
          position: absolute;
          bottom: 10%;
          right: 5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(239, 155, 17, 0.15) 0%, transparent 70%);
          z-index: 2;
          pointer-events: none;
        }

        .content-dark-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 95%;
          background: linear-gradient(to top, var(--footer-dark-bg) 35%, rgba(2, 14, 26, 0.92) 75%, transparent 100%);
          z-index: 2;
        }

        .footer-content-wrap {
          position: relative;
          z-index: 5;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Glassmorphic Form Card */
        .footer-form-card {
          background: var(--glass-card);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-card-border);
          border-radius: 28px;
          padding: 48px;
          margin-bottom: 75px;
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.6);
          position: relative;
        }

        .footer-form-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 28px;
          border: 1px solid transparent;
          background: linear-gradient(135deg, rgba(239, 155, 17, 0.3) 0%, transparent 40%, rgba(1, 83, 152, 0.3) 100%) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .form-header-box {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 36px;
        }

        .form-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--footer-secondary);
          background: rgba(239, 155, 17, 0.12);
          border: 1px solid rgba(239, 155, 17, 0.3);
          padding: 5px 14px;
          border-radius: 20px;
          margin-bottom: 14px;
        }

        .form-title {
          font-size: clamp(2rem, 4vw, 2.7rem);
          margin: 0 0 10px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .form-title span {
          background: linear-gradient(135deg, #ffffff 20%, var(--footer-secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .form-subtitle {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.6;
          margin: 0;
        }

        /* Selectable Service Tiles */
        .service-selection-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
          gap: 12px;
          margin-bottom: 24px;
        }

        .service-tile {
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 12px 14px;
          border-radius: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .service-tile:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(239, 155, 17, 0.4);
          transform: translateY(-2px);
        }

        .service-tile.active {
          background: rgba(239, 155, 17, 0.15);
          border-color: var(--footer-secondary);
          color: #ffffff;
          box-shadow: 0 0 18px rgba(239, 155, 17, 0.25);
        }

        .tile-icon-wrap {
          color: var(--footer-secondary);
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .tile-label {
          font-size: 0.8rem;
          font-weight: 600;
          line-height: 1.25;
          flex-grow: 1;
        }

        .check-mark {
          color: var(--footer-secondary);
          opacity: 0;
          transform: scale(0.6);
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .service-tile.active .check-mark {
          opacity: 1;
          transform: scale(1);
        }

        /* Inputs & Textareas */
        .input-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 14px;
        }

        .footer-form-card input,
        .footer-form-card textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          padding: 14px 18px;
          border-radius: 12px;
          color: #ffffff;
          outline: none;
          transition: all 0.25s ease;
          font-size: 0.9rem;
          font-family: inherit;
        }

        .footer-form-card input:focus,
        .footer-form-card textarea:focus {
          border-color: var(--footer-secondary);
          background: rgba(255, 255, 255, 0.07);
          box-shadow: 0 0 0 3px rgba(239, 155, 17, 0.15);
        }

        .glow-submit-btn {
          width: 100%;
          padding: 16px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, var(--footer-secondary) 0%, #d88708 100%);
          color: #ffffff;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
          margin-top: 14px;
          font-size: 0.88rem;
          box-shadow: 0 10px 25px rgba(239, 155, 17, 0.35);
        }

        .glow-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(239, 155, 17, 0.5);
        }

        .glow-submit-btn .send-icon {
          transition: transform 0.3s ease;
        }

        .glow-submit-btn:hover .send-icon {
          transform: translateX(4px) translateY(-2px);
        }

        /* Footer Main Lower Grid */
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 70px;
          padding-bottom: 60px;
          text-align: left;
        }

        .footer-logo-img {
          height: 65px;
          margin-bottom: 20px;
          object-fit: contain;
        }

        .brand-description {
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.7;
          max-width: 480px;
          font-size: 0.92rem;
          margin: 0 0 26px 0;
        }

        .social-pill-container {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .social-pill {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.85);
          transition: all 0.3s ease;
          font-size: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          text-decoration: none;
        }

        .social-pill:hover {
          background: var(--footer-secondary);
          color: #020e1a;
          transform: translateY(-3px);
          border-color: var(--footer-secondary);
          box-shadow: 0 6px 18px rgba(239, 155, 17, 0.35);
        }

        .social-pill.whatsapp:hover {
          background: #25d366;
          border-color: #25d366;
          color: #ffffff;
          box-shadow: 0 6px 18px rgba(37, 211, 102, 0.35);
        }

        /* Reach Us Links */
        .footer-heading {
          color: var(--footer-secondary);
          text-transform: uppercase;
          font-size: 0.82rem;
          font-weight: 800;
          margin: 0 0 24px 0;
          letter-spacing: 2px;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          transition: all 0.25s ease;
          position: relative;
        }

        .contact-link:not(.no-hover):hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .contact-link:not(.no-hover):hover .icon-box {
          background: var(--footer-primary);
          border-color: var(--footer-secondary);
          color: var(--footer-secondary);
        }

        .icon-box {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(1, 83, 152, 0.2);
          border: 1px solid rgba(1, 83, 152, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #ffffff;
          transition: all 0.3s ease;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
        }

        .contact-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.45);
        }

        .contact-val {
          font-size: 0.92rem;
          font-weight: 600;
        }

        .ext-icon {
          opacity: 0.4;
          margin-left: 6px;
        }

        /* Bottom Copyright Strip */
        .footer-bottom-bar {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 26px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .footer-bottom-nav {
          display: flex;
          gap: 10px;
        }

        /* Mobile Breakpoints */
        @media (max-width: 900px) {
          .footer-form-card {
            padding: 32px 20px;
            border-radius: 20px;
          }

          .service-selection-grid {
            grid-template-columns: 1fr;
          }

          .input-row {
            grid-template-columns: 1fr;
          }

          .footer-main-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            text-align: center;
          }

          .footer-logo-img {
            margin: 0 auto 16px;
          }

          .brand-description {
            margin: 0 auto 24px;
          }

          .social-pill-container {
            justify-content: center;
          }

          .contact-link {
            justify-content: center;
          }

          .footer-bottom-bar {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}