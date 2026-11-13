import React, { useEffect, useRef } from 'react';
import { IoArrowForward, IoCheckmarkCircle, IoSparkles, IoShieldCheckmarkOutline } from 'react-icons/io5';

// Assets
import banner1 from '../assets/import.jpg';
import banner2 from '../assets/freight.jpg';
import banner3 from '../assets/supplies.jpeg';

const HomeBanner2 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    const revealElements = containerRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="home-banner-2" ref={containerRef}>
      <style>{`
        :root {
          --primary-navy: #01437c;
          --deep-slate: #061524;
          --accent-amber: #f59e0b;
          --accent-amber-light: #fcd34d;
          --bg-light: #f4f8fc;
          --pill-border: rgba(1, 67, 124, 0.12);
          --card-shadow: 0 20px 45px -15px rgba(1, 67, 124, 0.15);
          --card-shadow-hover: 0 28px 55px -12px rgba(1, 67, 124, 0.28);
          --transition-smooth: all 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .home-banner-2 {
          position: relative;
          background: radial-gradient(circle at 50% 0%, #ffffff 0%, var(--bg-light) 100%);
          padding: 100px 24px;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        }

        /* Ambient Animated Lighting Orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 1;
        }

        .orb-1 {
          top: 5%;
          right: 10%;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, rgba(1, 67, 124, 0.12) 0%, transparent 70%);
        }

        .orb-2 {
          bottom: 5%;
          left: 8%;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%);
        }

        /* Geometric Background Mesh Pattern */
        .bg-mesh {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 2px 2px, rgba(1, 67, 124, 0.06) 1.5px, transparent 0);
          background-size: 32px 32px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 90%);
          -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 90%);
          pointer-events: none;
          z-index: 1;
        }

        .banner-wrapper {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        /* Interactive Tag Badge */
        .top-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--pill-border);
          border-radius: 999px;
          box-shadow: 0 4px 14px rgba(1, 67, 124, 0.05);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--primary-navy);
          margin-bottom: 8px;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        /* Banner Rows */
        .banner-row {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
        }

        /* Typographic Styling */
        .banner-title {
          font-size: clamp(2.4rem, 5.8vw, 5.2rem);
          font-weight: 900;
          color: var(--deep-slate);
          margin: 0;
          letter-spacing: -2px;
          text-transform: uppercase;
          line-height: 1.05;
          text-align: center;
        }

        .text-gradient-amber {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .text-gradient-navy {
          background: linear-gradient(135deg, #01437c 0%, #0369a1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Expressive Image Capsules */
        .image-capsule {
          position: relative;
          border-radius: 100px;
          height: 95px;
          overflow: hidden;
          box-shadow: var(--card-shadow);
          border: 3px solid #ffffff;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .image-capsule img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: brightness(0.92) contrast(1.08);
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .capsule-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(6, 21, 36, 0.1) 0%, rgba(6, 21, 36, 0.75) 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }

        .capsule-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          padding: 6px 14px;
          border-radius: 999px;
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .capsule-arrow {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--accent-amber);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transform: translateX(-4px);
          transition: transform 0.3s ease;
        }

        .image-capsule:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: var(--card-shadow-hover);
        }

        .image-capsule:hover img {
          transform: scale(1.1);
          filter: brightness(1);
        }

        .image-capsule:hover .capsule-arrow {
          transform: translateX(0);
        }

        /* Desktop Dimensions */
        .capsule-1 { width: 320px; flex-shrink: 0; }
        .capsule-2 { width: 300px; flex-shrink: 0; }
        .capsule-3 { width: 360px; flex-shrink: 0; }

        /* Staggered Scroll Animations */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: var(--transition-smooth);
        }

        .reveal-active {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.25s; }
        .delay-3 { transition-delay: 0.4s; }
        .delay-4 { transition-delay: 0.55s; }

        /* Footnote Card */
        .banner-footnote {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #ffffff;
          padding: 14px 28px;
          border-radius: 999px;
          border: 1px solid var(--pill-border);
          box-shadow: 0 10px 25px -8px rgba(1, 67, 124, 0.08);
          color: rgba(6, 21, 36, 0.8);
          font-size: 0.9rem;
          font-weight: 600;
          margin-top: 10px;
          text-align: center;
        }

        /* Mobile Adjustments (Centralized Layout) */
        @media (max-width: 868px) {
          .home-banner-2 {
            padding: 60px 16px;
          }

          .banner-wrapper {
            gap: 20px;
          }

          .banner-row {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 12px;
          }

          /* Reverse row 2 order to keep typography above visual if desired */
          .row-2 {
            flex-direction: column-reverse;
          }

          .banner-title {
            letter-spacing: -1px;
            line-height: 1.15;
          }

          .image-capsule {
            width: 100%;
            max-width: 340px;
            height: 80px;
            border-radius: 999px;
          }

          .banner-footnote {
            border-radius: 20px;
            padding: 12px 18px;
            font-size: 0.82rem;
            flex-direction: column;
            gap: 6px;
          }
        }
      `}</style>

      {/* Decorative Orbs and Mesh */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="bg-mesh" />

      <div className="banner-wrapper">
       
        {/* Row 1 */}
        <div className="banner-row row-1 reveal delay-2">
          <h2 className="banner-title">
            SHIP <span className="text-gradient-amber">SUPPLY</span>
          </h2>
          <div className="image-capsule capsule-1">
            <img src={banner1} alt="Ship Chandler Provisioning" />
            <div className="capsule-overlay">
              <span className="capsule-badge">
                <IoShieldCheckmarkOutline size={14} color="#f59e0b" /> Provisioning
              </span>
              <div className="capsule-arrow">
                <IoArrowForward size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="banner-row row-2 reveal delay-3">
          <div className="image-capsule capsule-2">
            <img src={banner2} alt="Freight Forwarding" />
            <div className="capsule-overlay">
              <span className="capsule-badge">
                <IoSparkles size={14} color="#f59e0b" /> Swift Transit
              </span>
              <div className="capsule-arrow">
                <IoArrowForward size={14} />
              </div>
            </div>
          </div>
          <h2 className="banner-title">
            <span className="text-gradient-navy">LOGISTICS</span> HUB
          </h2>
        </div>

        {/* Row 3 */}
        <div className="banner-row row-3 reveal delay-4">
          <h2 className="banner-title">
            GLOBAL <span className="text-gradient-amber">TRADING</span>
          </h2>
          <div className="image-capsule capsule-3">
            <img src={banner3} alt="Maritime Deck Supplies" />
            <div className="capsule-overlay">
              <span className="capsule-badge">24/7 Operations</span>
              <div className="capsule-arrow">
                <IoArrowForward size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Bottom Footnote */}
        <div className="banner-footnote reveal delay-4">
          <IoCheckmarkCircle size={20} color="#01437c" />
          <span>End-to-end maritime procurement, freight forwarding, and port clearance.</span>
        </div>

      </div>
    </section>
  );
};

export default HomeBanner2;           