import { useContext } from "react";
import { AppContext } from "../App";
import logo from "../assets/logo-full.png";

// Lucide & Brand Icons
import {
  X,
  Home,
  Info,
  Layers,
  PhoneCall,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Send
} from "lucide-react";

import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function SideBar() {
  const appContext = useContext(AppContext);

  function closeSideBar() {
    appContext?.setIsSideBarOpen?.(false);
  }

  function goTo(item) {
    appContext?.navTo?.({ item });
    closeSideBar();
  }

  const navItems = [
    { label: "Home", key: "home", icon: Home, desc: "Return to overview" },
    { label: "About Us", key: "about_us", icon: Info, desc: "Company profile & objects" },
    { label: "Services", key: "services", icon: Layers, desc: "10 Core operational lines" },
    { label: "Contact Us", key: "contact_us", icon: PhoneCall, desc: "Request quotes & support" },
  ];

  const contact = {
    phone: "+255618307833",
    whatsapp: "255618307833",
    email: "info@baggroup.co.tz",
    location: "Dar es Salaam, Tanzania"
  };

  const isOpen = appContext?.isSideBarOpen;

  return (
    <>
      <style>{`
        :root {
          --sidebar-primary: #015398;
          --sidebar-secondary: #EF9B11;
          --sidebar-dark: #020f1c;
          --sidebar-glass-bg: rgba(2, 17, 31, 0.95);
          --sidebar-glass-border: rgba(255, 255, 255, 0.08);
        }

        /* Backdrop Overlay */
        .sidebar-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(1, 10, 20, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1998;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .sidebar-backdrop.open {
          opacity: 1;
          pointer-events: auto;
        }

        /* Main Drawer Container */
        .mobile-sidebar-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 86vw;
          max-width: 380px;
          background: var(--sidebar-glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-left: 1px solid var(--sidebar-glass-border);
          z-index: 1999;
          display: flex;
          flex-direction: column;
          box-shadow: -20px 0 50px rgba(0, 0, 0, 0.6);
          transform: translateX(105%);
          transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          color: #ffffff;
          overflow: hidden;
        }

        .mobile-sidebar-drawer.open {
          transform: translateX(0);
        }

        /* Ambient Background Light */
        .sidebar-ambient-light {
          position: absolute;
          top: -10%;
          right: -10%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(1, 83, 152, 0.35) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* Header Bar */
        .sidebar-header {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--sidebar-glass-border);
        }

        .sidebar-brand-pill {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--sidebar-secondary);
          background: rgba(239, 155, 17, 0.12);
          border: 1px solid rgba(239, 155, 17, 0.3);
          padding: 4px 12px;
          border-radius: 20px;
        }

        .sidebar-close-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--sidebar-glass-border);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .sidebar-close-btn:hover {
          background: var(--sidebar-secondary);
          color: #020f1c;
          border-color: var(--sidebar-secondary);
          transform: rotate(90deg);
        }

        /* Scrollable Content Body */
        .sidebar-scroll-body {
          position: relative;
          z-index: 2;
          flex-grow: 1;
          overflow-y: auto;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          scrollbar-width: none;
        }

        .sidebar-scroll-body::-webkit-scrollbar {
          display: none;
        }

        /* Logo Brand Frame */
        .sidebar-logo-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--sidebar-glass-border);
          border-radius: 18px;
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sidebar-logo-card img {
          max-width: 170px;
          height: auto;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));
        }

        /* Navigation List */
        .sidebar-nav-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sidebar-nav-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid transparent;
          color: #ffffff;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
        }

        .sidebar-nav-item:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(239, 155, 17, 0.3);
          transform: translateX(4px);
        }

        .sidebar-nav-item.active {
          background: rgba(1, 83, 152, 0.28);
          border-color: var(--sidebar-primary);
          box-shadow: 0 4px 20px rgba(1, 83, 152, 0.35);
        }

        .nav-item-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(1, 83, 152, 0.2);
          border: 1px solid rgba(1, 83, 152, 0.4);
          color: var(--sidebar-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .sidebar-nav-item.active .nav-item-icon-box,
        .sidebar-nav-item:hover .nav-item-icon-box {
          background: var(--sidebar-secondary);
          color: #020f1c;
          border-color: var(--sidebar-secondary);
        }

        .nav-item-text-group {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .nav-item-title {
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .nav-item-desc {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 2px;
        }

        .nav-item-arrow {
          color: rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .sidebar-nav-item:hover .nav-item-arrow {
          color: var(--sidebar-secondary);
          transform: translateX(3px);
        }

        /* Direct Quick Contact Hub */
        .sidebar-quick-contact {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--sidebar-glass-border);
          border-radius: 16px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .quick-contact-title {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--sidebar-secondary);
          font-weight: 700;
          margin: 0;
        }

        .quick-contact-link {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.75);
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .quick-contact-link:hover {
          color: #ffffff;
        }

        .quick-contact-link svg {
          color: var(--sidebar-secondary);
          flex-shrink: 0;
        }

        /* Primary Action Button */
        .sidebar-cta-btn {
          width: 100%;
          background: linear-gradient(135deg, var(--sidebar-secondary) 0%, #d88708 100%);
          color: #ffffff;
          border: none;
          padding: 14px 20px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          box-shadow: 0 8px 20px rgba(239, 155, 17, 0.35);
          transition: all 0.3s ease;
        }

        .sidebar-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px rgba(239, 155, 17, 0.5);
        }

        /* Bottom Social Icons */
        .sidebar-footer {
          position: relative;
          z-index: 2;
          padding: 16px 24px;
          border-top: 1px solid var(--sidebar-glass-border);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sidebar-social-pills {
          display: flex;
          gap: 8px;
        }

        .side-social-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--sidebar-glass-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .side-social-icon:hover {
          background: var(--sidebar-secondary);
          color: #020f1c;
          border-color: var(--sidebar-secondary);
          transform: translateY(-2px);
        }

        .side-social-icon.whatsapp:hover {
          background: #25d366;
          border-color: #25d366;
          color: #ffffff;
        }

        .sidebar-copyright {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.4);
          margin: 0;
        }
      `}</style>

      {/* Backdrop */}
      <div
        className={`sidebar-backdrop ${isOpen ? "open" : ""}`}
        onClick={closeSideBar}
        aria-hidden="true"
      />

      {/* Slide Drawer */}
      <aside
        className={`mobile-sidebar-drawer ${isOpen ? "open" : ""}`}
        aria-label="Mobile Navigation Menu"
      >
        <div className="sidebar-ambient-light" />

        {/* Top Header */}
        <div className="sidebar-header d-flex align-items-center justify-content-end">
          <button
            className="sidebar-close-btn"
            onClick={closeSideBar}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Center Body */}
        <div className="sidebar-scroll-body">
          {/* Logo Frame */}
          <div className="sidebar-logo-card">
            <img src={logo} alt="BAG GROUP LIMITED Logo" />
          </div>

          {/* Navigation Links */}
          <nav className="sidebar-nav-list">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = appContext?.navItem === item.key;
              return (
                <div
                  key={item.key}
                  className={`sidebar-nav-item ${isActive ? "active" : ""}`}
                  onClick={() => goTo(item.key)}
                >
                  <div className="nav-item-icon-box">
                    <Icon size={18} />
                  </div>
                  <div className="nav-item-text-group">
                    <span className="nav-item-title">{item.label}</span>
                    <span className="nav-item-desc">{item.desc}</span>
                  </div>
                  <ArrowRight size={16} className="nav-item-arrow" />
                </div>
              );
            })}
          </nav>

          {/* Quick Direct Contacts */}
          <div className="sidebar-quick-contact">
            <p className="quick-contact-title">Port Operations Desk</p>
            <a href={`tel:${contact.phone}`} className="quick-contact-link">
              <Phone size={14} />
              <span>{contact.phone}</span>
            </a>
            <a href={`mailto:${contact.email}`} className="quick-contact-link">
              <Mail size={14} />
              <span>{contact.email}</span>
            </a>
            <div className="quick-contact-link">
              <MapPin size={14} />
              <span>{contact.location}</span>
            </div>
          </div>

          {/* Action Button */}
          <button
            className="sidebar-cta-btn"
            onClick={() => goTo("contact_us")}
          >
            <span>Request Quote</span>
            <Send size={15} />
          </button>
        </div>

        {/* Bottom Social Footer */}
        <div className="sidebar-footer">
          <div className="sidebar-social-pills">
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="side-social-icon whatsapp"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={15} />
            </a>
            <a href="#" className="side-social-icon" aria-label="LinkedIn">
              <FaLinkedinIn size={14} />
            </a>
            <a href="#" className="side-social-icon" aria-label="Instagram">
              <FaInstagram size={14} />
            </a>
          </div>
          <p className="sidebar-copyright">BAG GROUP LTD</p>
        </div>
      </aside>
    </>
  );
}