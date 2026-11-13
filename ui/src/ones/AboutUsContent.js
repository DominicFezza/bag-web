import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Award, 
  FileText, 
  Scale, 
  Building, 
  Globe2, 
  CheckCircle2, 
  ArrowRight,
  Anchor,
  Truck,
  Boxes,
  ScrollText,
  Target,
  Eye
} from 'lucide-react';

import banner1 from '../assets/import.jpg';
import banner2 from '../assets/freight.jpg';
import banner3 from '../assets/contract.jpg';
import banner4 from '../assets/engine.jpeg';
import logo from '../assets/logo-full.png';
import logo_worded from '../assets/logo_worded.png';

const AboutUsContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { 
      img: banner1, 
      tag: "Corporate Profile", 
      title: 'BAG GROUP LIMITED', 
      subtitle: 'Premier Marine Supply, Integrated Logistics & Global Procurement' 
    },
    { 
      img: banner2, 
      tag: "Maritime Excellence", 
      title: 'Ship Chandling & Provisioning', 
      subtitle: '24/7 IMPA/ISSA-Compliant Vessel Stores Across Tanzanian Waters' 
    },
    { 
      img: banner3, 
      tag: "Supply Chain", 
      title: 'Customs, Freight & Logistics', 
      subtitle: 'End-to-End Multimodal Cargo Transit & Cross-Border Compliance' 
    },
    { 
      img: banner4, 
      tag: "Trade & Contracts", 
      title: 'Institutional Trade & Procurement', 
      subtitle: 'Verified Material Sourcing for Commercial, NGO & Government Partners' 
    }
  ];

  const statutoryObjects = [
    {
      code: "a",
      title: "Customs & Freight Operations",
      text: "To carry on the business and activities of licensed customs agents, sea-freight forwarders, and international air-cargo agents."
    },
    {
      code: "b",
      title: "Maritime Environmental & Waste Management",
      text: "To carry on the business of collection, handling, and compliant management of solid and non-solid hazardous waste, including used vessel/garage oil, bio-hazardous waste, and spent battery stores."
    },
    {
      code: "c",
      title: "Application Service Provisioning",
      text: "To carry on the activities of application service provisioning and technical digital logistics support systems."
    },
    {
      code: "d",
      title: "Commercial Food Service Contracting",
      text: "To carry on the activities of professional food service contractors, catering operations, and bulk provision contracts for maritime transport fleets and institutional facilities."
    },
    {
      code: "e",
      title: "Machinery & Commission Brokerage",
      text: "To act as commission agents involved in the supply, distribution, and sale of industrial machinery, office technology, specialized vessels, aircraft, and allied heavy equipment."
    },
    {
      code: "f",
      title: "General Trading & Global Merchandising",
      text: "To carry on general trading, purchasing, distribution, import, and export of industrial materials, general merchandise, tools, and equipment for public and private institutions."
    },
    {
      code: "g",
      title: "Strategic Joint Ventures & Contracts",
      text: "To enter into commercial contracts, consortiums, joint ventures, and partnerships with corporations, statutory authorities, and international bodies for logistics and supply execution."
    },
    {
      code: "h",
      title: "Ancillary Operations & Trade Enhancement",
      text: "To carry on any ancillary trade or commercial venture deemed advantageous by the Board of Directors to enhance company assets, capability, or operational scope."
    },
    {
      code: "i",
      title: "Asset & Property Acquisition",
      text: "To acquire, lease, exchange, hire, or hold real estate, vessel assets, concessions, and operational facilities essential for corporate business purposes."
    },
    {
      code: "j",
      title: "Fiscal Facilities & Debentures",
      text: "To raise capital, secure fiscal facilities, mortgages, debentures, and securities backed by the assets and corporate undertakings of the company."
    }
  ];

  const coreServices = [
    'Ship Chandling & Vessel Provisioning',
    'Food and Beverage Supply to Ships',
    'Marine, Deck & Engine Stores',
    'Customs Clearing & Forwarding Services',
    'Freight Forwarding & Multimodal Logistics',
    'General Trading & Strategic Procurement',
    'Supply of Goods, Equipment & Materials',
    'Corporate and Institutional Supplies',
    'Cross-Border Import & Export Services',
    'Long-Term Contract Supply & SLA Support'
  ];

  const pillarHighlights = [
    {
      icon: Anchor,
      title: "Certified Marine Supply",
      desc: "Fresh, dry, bonded stores, deck, and technical consumables delivered directly to berths and anchorage."
    },
    {
      icon: Truck,
      title: "Direct Port Clearance",
      desc: "Licensed customs brokerage, bonded storage transit, and multimodal forwarding across East Africa."
    },
    {
      icon: Boxes,
      title: "Vetted Procurement",
      desc: "Direct-from-manufacturer supplies for corporate infrastructure, engineering projects, and governmental bodies."
    }
  ];

  const missionVision = [
    {
      icon: Target,
      label: "Our Mission",
      title: "Delivering Readiness at Every Port",
      text: "To provide vessels, institutions, and commercial partners with reliable, compliant, and timely marine supply, customs, logistics, and procurement solutions — built on product integrity, competitive value, and responsive service around the clock.",
      points: [
        "Uncompromised quality & statutory compliance",
        "Rapid turnaround at berth and anchorage",
        "Transparent, partnership-driven service"
      ],
      variant: "light"
    },
    {
      icon: Eye,
      label: "Our Vision",
      title: "East Africa's Most Trusted Supply Partner",
      text: "To be the leading integrated maritime supply and logistics group in East Africa — recognised for operational excellence, dependable supply chains, and long-term value for the fleets, businesses, and communities we serve.",
      points: [
        "Regional leadership in marine provisioning",
        "Seamless cross-border trade connectivity",
        "Sustainable, responsible growth"
      ],
      variant: "dark"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="about-page">
      <style>{`
        :root {
          --brand-primary: #015398;
          --brand-secondary: #EF9B11;
          --brand-dark: #02111f;
          --brand-navy-card: rgba(1, 83, 152, 0.04);
          --text-muted: #526071;
          --card-border: rgba(1, 83, 152, 0.1);
        }

        .about-page {
          width: 100%;
          overflow-x: hidden;
          background: #fcfdfd;
          color: #0c1a29;
          font-family: 'Open Sans', system-ui, sans-serif;
        }

        /* --- Hero Slider --- */
        .hero-slider {
          position: relative;
          height: 82vh;
          min-height: 560px;
          overflow: hidden;
          background: var(--brand-dark);
        }

        .slide-item {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 8s ease;
          transform: scale(1.04);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slide-item.active {
          opacity: 1;
          transform: scale(1);
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(1, 83, 152, 0.45) 0%, rgba(2, 17, 31, 0.92) 80%);
        }

        .hero-content {
          position: relative;
          z-index: 5;
          text-align: center;
          color: #ffffff;
          padding: 0 24px;
          max-width: 950px;
        }

        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          background: rgba(239, 155, 17, 0.15);
          border: 1px solid rgba(239, 155, 17, 0.4);
          backdrop-filter: blur(10px);
          border-radius: 30px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--brand-secondary);
          margin-bottom: 22px;
        }

        .hero-logo-img {
          max-width: 260px;
          width: 75%;
          margin-bottom: 20px;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.6));
        }

        .hero-title {
          font-size: clamp(2.4rem, 5.5vw, 4.4rem);
          line-height: 1.1;
          margin: 0 0 16px;
          font-weight: 800;
          letter-spacing: -1px;
          text-transform: uppercase;
        }

        .hero-subtitle {
          font-size: clamp(0.95rem, 2vw, 1.25rem);
          color: rgba(255, 255, 255, 0.85);
          letter-spacing: 1.5px;
          margin: 0;
          font-weight: 400;
        }

        /* --- Main Content Layout --- */
        .content-wrap {
          max-width: 1380px;
          margin: 0 auto;
          padding: 90px 6%;
        }

        /* Executive Summary Bar */
        .executive-summary-card {
          background: #ffffff;
          border: 1px solid var(--card-border);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 20px 45px -15px rgba(1, 83, 152, 0.08);
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 70px;
          position: relative;
          overflow: hidden;
        }

        .executive-summary-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 6px;
          background: linear-gradient(to bottom, var(--brand-primary), var(--brand-secondary));
        }

        .executive-logo {
          width: 100%;
          max-width: 220px;
          object-fit: contain;
        }

        .executive-text h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--brand-primary);
          margin: 0 0 10px;
        }

        .executive-text p {
          margin: 0;
          color: var(--text-muted);
          font-size: 1.05rem;
          line-height: 1.8;
        }

        /* Mission & Vision */
        .mv-section {
          margin-bottom: 75px;
        }

        .mv-heading {
          text-align: center;
          max-width: 640px;
          margin: 0 auto 40px;
        }

        .mv-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--brand-secondary);
          margin-bottom: 10px;
        }

        .mv-heading h2 {
          font-size: clamp(1.8rem, 3vw, 2.3rem);
          font-weight: 800;
          letter-spacing: -0.5px;
          margin: 0 0 12px;
          color: var(--brand-dark);
        }

        .mv-heading p {
          margin: 0;
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.7;
        }

        .mv-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .mv-card {
          position: relative;
          border-radius: 24px;
          padding: 44px 40px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 18px;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .mv-card:hover {
          transform: translateY(-5px);
        }

        .mv-card.light {
          background: #ffffff;
          border: 1px solid var(--card-border);
          box-shadow: 0 20px 45px -15px rgba(1, 83, 152, 0.08);
        }

        .mv-card.light:hover {
          box-shadow: 0 24px 50px -15px rgba(1, 83, 152, 0.16);
        }

        .mv-card.dark {
          background: linear-gradient(145deg, var(--brand-primary) 0%, var(--brand-dark) 100%);
          color: #ffffff;
          box-shadow: 0 24px 50px -18px rgba(1, 83, 152, 0.45);
        }

        .mv-card::after {
          content: "";
          position: absolute;
          top: -80px;
          right: -80px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(239, 155, 17, 0.14) 0%, transparent 70%);
          pointer-events: none;
        }

        .mv-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .mv-icon-box {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .mv-card.light .mv-icon-box {
          background: rgba(1, 83, 152, 0.08);
          color: var(--brand-primary);
        }

        .mv-card.dark .mv-icon-box {
          background: rgba(239, 155, 17, 0.15);
          border: 1px solid rgba(239, 155, 17, 0.35);
          color: var(--brand-secondary);
        }

        .mv-label {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 30px;
        }

        .mv-card.light .mv-label {
          color: var(--brand-primary);
          background: rgba(1, 83, 152, 0.07);
        }

        .mv-card.dark .mv-label {
          color: var(--brand-secondary);
          background: rgba(255, 255, 255, 0.08);
        }

        .mv-card h3 {
          font-size: 1.45rem;
          font-weight: 800;
          letter-spacing: -0.3px;
          line-height: 1.3;
          margin: 4px 0 0;
        }

        .mv-card.light h3 { color: var(--brand-dark); }
        .mv-card.dark h3 { color: #ffffff; }

        .mv-text {
          margin: 0;
          font-size: 1rem;
          line-height: 1.8;
        }

        .mv-card.light .mv-text { color: var(--text-muted); }
        .mv-card.dark .mv-text { color: rgba(255, 255, 255, 0.8); }

        .mv-points {
          list-style: none;
          margin: 6px 0 0;
          padding: 20px 0 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mv-card.light .mv-points { border-top: 1px solid rgba(1, 83, 152, 0.1); }
        .mv-card.dark .mv-points { border-top: 1px solid rgba(255, 255, 255, 0.12); }

        .mv-points li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.92rem;
          font-weight: 700;
        }

        .mv-card.light .mv-points li { color: var(--brand-dark); }
        .mv-card.dark .mv-points li { color: #ffffff; }

        .mv-points svg {
          color: var(--brand-secondary);
          flex-shrink: 0;
        }

        /* Pillar Highlights */
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 75px;
        }

        .pillar-card {
          background: #ffffff;
          border: 1px solid var(--card-border);
          border-radius: 20px;
          padding: 30px;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .pillar-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 35px -10px rgba(1, 83, 152, 0.12);
          border-color: var(--brand-secondary);
        }

        .pillar-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(1, 83, 152, 0.08);
          color: var(--brand-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pillar-card h4 {
          font-size: 1.2rem;
          font-weight: 800;
          margin: 0;
          color: var(--brand-dark);
        }

        .pillar-card p {
          margin: 0;
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* Corporate Split Narrative */
        .narrative-split-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.95fr;
          gap: 36px;
          margin-bottom: 80px;
        }

        .narrative-panel {
          background: #ffffff;
          border-radius: 24px;
          padding: 42px;
          border: 1px solid var(--card-border);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.03);
        }

        .panel-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .panel-badge-icon {
          color: var(--brand-secondary);
        }

        .panel-header h2 {
          font-size: 1.65rem;
          font-weight: 800;
          margin: 0;
          letter-spacing: -0.5px;
          color: var(--brand-dark);
        }

        .narrative-body p {
          font-size: 1rem;
          line-height: 1.85;
          color: #334155;
          margin: 0 0 18px;
        }

        .narrative-body p:last-child {
          margin-bottom: 0;
        }

        .core-services-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .service-list-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          background: var(--brand-navy-card);
          border: 1px solid rgba(1, 83, 152, 0.06);
          border-radius: 12px;
          font-weight: 700;
          font-size: 0.92rem;
          color: var(--brand-dark);
          transition: all 0.25s ease;
        }

        .service-list-item:hover {
          background: rgba(239, 155, 17, 0.08);
          border-color: rgba(239, 155, 17, 0.3);
          transform: translateX(4px);
        }

        .service-list-item svg {
          color: var(--brand-secondary);
          flex-shrink: 0;
        }

        /* --- Statutory Legal Constitution (Act, Cap 212) --- */
        .statutory-section {
          background: #ffffff;
          border: 1px solid var(--card-border);
          border-radius: 28px;
          padding: 50px 45px;
          box-shadow: 0 25px 50px -15px rgba(1, 83, 152, 0.06);
        }

        .statutory-top-header {
          border-bottom: 1px solid rgba(1, 83, 152, 0.1);
          padding-bottom: 28px;
          margin-bottom: 36px;
        }

        .legal-preamble-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--brand-primary);
          background: rgba(1, 83, 152, 0.08);
          padding: 5px 14px;
          border-radius: 6px;
          margin-bottom: 12px;
        }

        .statutory-top-header h2 {
          font-size: clamp(1.8rem, 3vw, 2.3rem);
          font-weight: 900;
          margin: 0 0 10px;
          color: var(--brand-dark);
        }

        .statutory-meta-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 20px;
          padding: 16px 20px;
          background: #f8fafc;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
        }

        .meta-entry {
          display: flex;
          flex-direction: column;
        }

        .meta-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 800;
          color: var(--brand-primary);
        }

        .meta-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--brand-dark);
        }

        .objects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .object-box {
          background: #ffffff;
          border: 1px solid #e9edf2;
          border-radius: 16px;
          padding: 24px;
          display: flex;
          gap: 18px;
          transition: all 0.3s ease;
        }

        .object-box:hover {
          border-color: var(--brand-primary);
          box-shadow: 0 10px 25px rgba(1, 83, 152, 0.07);
          transform: translateY(-3px);
        }

        .object-code {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--brand-primary);
          color: #ffffff;
          font-weight: 800;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          text-transform: uppercase;
        }

        .object-content h4 {
          font-size: 1.05rem;
          font-weight: 800;
          margin: 0 0 6px;
          color: var(--brand-dark);
        }

        .object-content p {
          margin: 0;
          font-size: 0.88rem;
          line-height: 1.65;
          color: var(--text-muted);
        }

        .legal-closing-banner {
          margin-top: 36px;
          padding: 20px 24px;
          background: rgba(239, 155, 17, 0.08);
          border: 1px solid rgba(239, 155, 17, 0.3);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        .closing-note {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.92rem;
          font-weight: 700;
          color: #855303;
        }

        @media (max-width: 1024px) {
          .executive-summary-card { grid-template-columns: 1fr; text-align: center; }
          .executive-logo { margin: 0 auto; }
          .narrative-split-grid { grid-template-columns: 1fr; }
          .pillars-grid { grid-template-columns: 1fr; }
          .mv-grid { grid-template-columns: 1fr; }
          .objects-grid { grid-template-columns: 1fr; }
          .statutory-meta-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .hero-slider { height: 65vh; }
          .content-wrap { padding: 60px 5%; }
          .statutory-section { padding: 30px 20px; }
          .narrative-panel { padding: 28px 20px; }
          .mv-card { padding: 32px 22px; }
        }
      `}</style>

      {/* Hero Header Carousel */}
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            className={`slide-item ${currentSlide === index ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="hero-overlay" />
            <div className="hero-content">
              <div className="hero-pill">{slide.tag}</div>
              <div className='text-center'>
                <img src={logo_worded} alt="BAG GROUP LIMITED" className="hero-logo-img mx-auto" />
              </div>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="content-wrap">
        
        {/* Executive Summary Card */}
        <section className="executive-summary-card">
          <img src={logo} alt="BAG Group Logo" className="executive-logo" />
          <div className="executive-text">
            <h3>Tanzania’s Reliable Maritime & Logistics Partner</h3>
            <p>
              BAG GROUP LIMITED is an incorporated Tanzanian enterprise engaged in ship chandling, offshore vessel provisioning, bonded customs brokerage, multimodal freight logistics, and specialized institutional trading. We supply maritime fleets, commercial institutions, and governmental bodies across East Africa with strict adherence to safety, speed, and statutory compliance.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mv-section">
          <div className="mv-heading">
            <h2>Mission & Vision</h2>
            <p>The principles that guide how we serve every vessel, client, and partner across Tanzania and East Africa.</p>
          </div>

          <div className="mv-grid">
            {missionVision.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div key={i} className={`mv-card ${item.variant}`}>
                  <div className="mv-card-top">
                    <div className="mv-icon-box">
                      <IconComponent size={28} />
                    </div>
                    <span className="mv-label">{item.label}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p className="mv-text">{item.text}</p>
                  <ul className="mv-points">
                    {item.points.map((point, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={18} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3 Core Value Pillars */}
        <section className="pillars-grid">
          {pillarHighlights.map((pillar, i) => {
            const IconComponent = pillar.icon;
            return (
              <div key={i} className="pillar-card">
                <div className="pillar-icon-box">
                  <IconComponent size={26} />
                </div>
                <h4>{pillar.title}</h4>
                <p>{pillar.desc}</p>
              </div>
            );
          })}
        </section>

        {/* Narrative & Core Services Dual Column */}
        <section className="narrative-split-grid">
          
          <div className="narrative-panel">
            <div className="panel-header">
              <ShieldCheck size={26} className="panel-badge-icon" />
              <h2>Who We Are</h2>
            </div>
            
            <div className="narrative-body">
              <p>
                We provide reliable, prompt, and full-spectrum ship supply and chandling services to local and international vessels calling at ports throughout the United Republic of Tanzania. Our vessel provisioning scope encompasses fresh, chilled, frozen, and dry foods, certified potable drinking water, beverages, bonded supplies, galley hardware, cabin and hygiene stores, personal protective equipment (PPE), deck consumables, and engine stores customized to the specific technical demands of each vessel.
              </p>
              <p>
                Our customs and logistics division supports clients in end-to-end customs clearance, transit cargo handling, import and export documentation, freight forwarding, and cross-border transport coordination. Concurrently, our procurement arm engages in global trading, sourcing verified machinery, electrical hardware, raw industrial materials, and general supplies.
              </p>
              <p>
                BAG GROUP LIMITED is driven by commitments to uncompromised product quality, rapid port turnaround times, competitive pricing structures, and attentive customer service. Through established supplier networks and regional partnerships, we ensure vessel readiness and seamless supply-chain resilience.
              </p>
            </div>
          </div>

          <div className="narrative-panel">
            <div className="panel-header">
              <Award size={26} className="panel-badge-icon" />
              <h2>Core Operations</h2>
            </div>
            
            <div className="core-services-list">
              {coreServices.map((service, idx) => (
                <div key={idx} className="service-list-item">
                  <CheckCircle2 size={18} />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* Statutory Constitution / Memorandum of Association */}
        <section className="statutory-section">
          
          <div className="statutory-top-header">
            <div className="legal-preamble-pill">
              <ScrollText size={14} /> Statutory Corporate Objects
            </div>
            <h2>Memorandum of Association</h2>
            <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Extracted from the Company Constitution under <strong>THE COMPANIES ACT, CAP. 212</strong> (United Republic of Tanzania).
            </p>

            <div className="statutory-meta-grid">
              <div className="meta-entry">
                <span className="meta-label">Company Name</span>
                <span className="meta-value">BAG GROUP LIMITED</span>
              </div>
              <div className="meta-entry">
                <span className="meta-label">Registered Jurisdiction</span>
                <span className="meta-value">United Republic of Tanzania</span>
              </div>
              <div className="meta-entry">
                <span className="meta-label">Liability Status</span>
                <span className="meta-value">Limited by Shares</span>
              </div>
            </div>
          </div>

          {/* Detailed Legal Clauses */}
          <div className="objects-grid">
            {statutoryObjects.map((obj) => (
              <div key={obj.code} className="object-box">
                <div className="object-code">{obj.code}</div>
                <div className="object-content">
                  <h4>{obj.title}</h4>
                  <p>{obj.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="legal-closing-banner">
            <div className="closing-note">
              <Scale size={20} />
              <span>Full compliance with Tanzanian Port Authorities, TASAC guidelines, and international maritime standards.</span>
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', color: '#855303' }}>
              Cap. 212 Verified
            </span>
          </div>

        </section>

      </div>
    </div>
  );
};

export default AboutUsContent;