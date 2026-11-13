import { useContext, useState, useEffect } from "react";
import { AppContext } from "../App";
import { MdMenu } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import logo from "../assets/logo_worded.png";

export default function TopBar() {
  const appContext = useContext(AppContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", key: "home" },
    { label: "About Us", key: "about_us" },
    { label: "Services", key: "services" },
    { label: "Contact Us", key: "contact_us" },
  ];

  function goTo(item) {
    appContext?.navTo?.({ item });
  }

  return (
    <>
      <style>{`
        :root {
          --topbar-primary: #015398;
          --topbar-secondary: #EF9B11;
          --topbar-dark: #02111f;
          --topbar-glass-bg: rgba(2, 17, 31, 0.75);
          --topbar-glass-border: rgba(255, 255, 255, 0.1);
        }

        .travel-topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: transparent;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .travel-topbar.scrolled {
          background: var(--topbar-glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--topbar-glass-border);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
        }

        .travel-topbar-body {
          height: var(--topBarHeight, 84px);
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: height 0.3s ease;
        }

        .travel-topbar.scrolled .travel-topbar-body {
          height: calc(var(--topBarHeight, 84px) - 14px);
        }

        .travel-nav-wrap {
          width: 100%;
          max-width: 1360px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        /* Brand Anchor */
        .travel-brand {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          cursor: pointer;
          text-decoration: none;
        }

        .travel-logo {
          height: 48px;
          width: auto;
          max-width: 160px;
          object-fit: contain;
          transition: transform 0.3s ease;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
        }

        .travel-brand:hover .travel-logo {
          transform: scale(1.03);
        }

        /* Nav Links */
        .travel-nav {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 4px 8px;
          border-radius: 40px;
          backdrop-filter: blur(8px);
        }

        .travel-nav-link {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.82);
          font-size: 0.88rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          padding: 0.6rem 1.15rem;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .travel-nav-link:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
        }

        .travel-nav-link.active {
          color: #ffffff;
          background: var(--topbar-primary);
          box-shadow: 0 4px 15px rgba(1, 83, 152, 0.4);
        }

        /* Right Actions */
        .topbar-right-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .travel-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.35rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          background: linear-gradient(135deg, var(--topbar-secondary) 0%, #d88708 100%);
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          box-shadow: 0 6px 18px rgba(239, 155, 17, 0.35);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .travel-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(239, 155, 17, 0.55);
        }

        .travel-cta-button .cta-arrow {
          transition: transform 0.25s ease;
        }

        .travel-cta-button:hover .cta-arrow {
          transform: translateX(3px);
        }

        /* Mobile Hamburger Button */
        .travel-menu-btn {
          display: none;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.06);
          color: #ffffff;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
          backdrop-filter: blur(8px);
        }

        .travel-menu-btn:hover {
          background: var(--topbar-secondary);
          color: #02111f;
          border-color: var(--topbar-secondary);
          transform: scale(1.04);
        }

        /* Mobile Adjustments */
        @media (max-width: 991px) {
          .travel-topbar-body {
            padding: 0 1.25rem;
            height: 72px;
          }

          .travel-topbar.scrolled .travel-topbar-body {
            height: 64px;
          }

          .travel-logo {
            height: 38px;
            max-width: 130px;
          }

          .travel-nav {
            display: none;
          }

          .travel-cta-button {
            display: none;
          }

          .travel-menu-btn {
            display: inline-flex;
          }
        }
      `}</style>

      <header className={`travel-topbar ${scrolled ? "scrolled" : ""}`}>
        <div className="travel-topbar-body">
          <div className="travel-nav-wrap">
            {/* Brand Logo */}
            <div className="travel-brand" onClick={() => goTo("home")}>
              <img src={logo} alt="BAG GROUP LIMITED" className="travel-logo" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="travel-nav" aria-label="Main Navigation">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  className={`travel-nav-link ${appContext?.navItem === item.key ? "active" : ""}`}
                  onClick={() => goTo(item.key)}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Call to Action & Mobile Hamburger */}
            <div className="topbar-right-actions">
              <button
                className="travel-cta-button"
                onClick={() => goTo("contact_us")}
              >
                <span>Get a Quote</span>
                <IoArrowForward size={15} className="cta-arrow" />
              </button>

              <button
                className="travel-menu-btn"
                onClick={appContext?.openSideBar}
                aria-label="Open Navigation Menu"
              >
                <MdMenu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}