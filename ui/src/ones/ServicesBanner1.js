import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import { getInlineLoader } from "../Helpers";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { serviceClusters } from "./servicesData";

const CYCLE_MS = 6500;

export default function ServicePortfolio() {
  const appContext = useContext(AppContext);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  // Auto-advance the featured division
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setActive((prev) => (prev + 1) % serviceClusters.length);
    }, CYCLE_MS);
    return () => clearTimeout(timer);
  }, [active, paused]);

  if (!ready) return <div className="container py-5 text-center">{getInlineLoader()}</div>;

  return (
    <>
      <style>{`
        .sv {
          --sv-primary: #015398;
          --sv-secondary: #EF9B11;
          --sv-dark: #021425;
          --sv-ink: #010d18;
          --sv-line: rgba(255, 255, 255, 0.12);
          --sv-muted: rgba(255, 255, 255, 0.66);
          --sv-ease: cubic-bezier(0.16, 1, 0.3, 1);

          position: relative;
          overflow: hidden;
          color: #ffffff;
          padding: 110px 5% 100px;
          background:
            radial-gradient(800px 500px at 0% 0%, rgba(1, 83, 152, 0.35), transparent 60%),
            radial-gradient(600px 400px at 100% 100%, rgba(239, 155, 17, 0.08), transparent 60%),
            linear-gradient(180deg, var(--sv-dark) 0%, var(--sv-ink) 100%);
        }

        .sv-inner {
          max-width: 1320px;
          margin: 0 auto;
        }

        /* --- Header --- */
        .sv-head {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: end;
          margin-bottom: 52px;
        }

        .sv-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 2.4px;
          text-transform: uppercase;
          color: var(--sv-secondary);
          margin-bottom: 16px;
        }

        .sv-eyebrow::before {
          content: "";
          width: 28px;
          height: 2px;
          background: var(--sv-secondary);
        }

        .sv-title {
          margin: 0;
          font-size: clamp(2.1rem, 4.2vw, 3.6rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -1.5px;
        }

        .sv-title span {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.55);
        }

        .sv-intro {
          margin: 0 0 22px;
          font-size: 1.02rem;
          line-height: 1.75;
          color: var(--sv-muted);
        }

        .sv-tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .sv-tab {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 100px;
          border: 1px solid var(--sv-line);
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          font-family: inherit;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.35s var(--sv-ease);
        }

        .sv-tab:hover {
          border-color: rgba(255, 255, 255, 0.4);
          color: #ffffff;
        }

        .sv-tab.on {
          background: var(--sv-secondary);
          border-color: var(--sv-secondary);
          color: #1a1103;
        }

        /* --- Expanding Panels --- */
        .sv-panels {
          display: flex;
          gap: 14px;
          height: 560px;
        }

        .sv-panel {
          position: relative;
          flex: 1 1 0;
          min-width: 0;
          border-radius: 26px;
          overflow: hidden;
          cursor: pointer;
          isolation: isolate;
          border: 1px solid var(--sv-line);
          transition: flex-grow 0.9s var(--sv-ease), border-color 0.5s ease, box-shadow 0.5s ease;
        }

        .sv-panel.on {
          flex-grow: 3.4;
          cursor: default;
          border-color: rgba(239, 155, 17, 0.45);
          box-shadow: 0 30px 60px -25px rgba(0, 0, 0, 0.8);
        }

        .sv-panel-bg {
          position: absolute;
          inset: 0;
          z-index: -2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.12);
          filter: grayscale(0.6) brightness(0.55);
          transition: transform 1.6s var(--sv-ease), filter 0.9s ease;
        }

        .sv-panel:hover .sv-panel-bg {
          filter: grayscale(0.2) brightness(0.65);
        }

        .sv-panel.on .sv-panel-bg {
          transform: scale(1);
          filter: grayscale(0) brightness(0.8);
        }

        .sv-panel::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(180deg, rgba(1, 13, 24, 0.35) 0%, rgba(1, 13, 24, 0.2) 35%, rgba(1, 13, 24, 0.94) 100%);
        }

        .sv-panel.on::after {
          background:
            linear-gradient(90deg, rgba(1, 13, 24, 0.9) 0%, rgba(1, 13, 24, 0.55) 55%, rgba(1, 13, 24, 0.15) 100%),
            linear-gradient(180deg, transparent 60%, rgba(1, 13, 24, 0.7) 100%);
        }

        /* Collapsed label */
        .sv-collapsed {
          position: absolute;
          inset: 0;
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          transition: opacity 0.4s ease;
        }

        .sv-panel.on .sv-collapsed {
          opacity: 0;
          pointer-events: none;
        }

        .sv-num {
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: var(--sv-secondary);
        }

        .sv-vertical {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .sv-mini-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: background 0.3s ease, color 0.3s ease;
        }

        .sv-panel:hover .sv-mini-icon {
          background: var(--sv-secondary);
          border-color: var(--sv-secondary);
          color: #1a1103;
        }

        /* Expanded content */
        .sv-expanded {
          position: absolute;
          inset: 0;
          padding: 44px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          max-width: 600px;
          opacity: 0;
          pointer-events: none;
        }

        .sv-panel.on .sv-expanded {
          opacity: 1;
          pointer-events: auto;
        }

        .sv-expanded > * {
          opacity: 0;
          transform: translateY(18px);
        }

        .sv-panel.on .sv-expanded > * {
          animation: sv-in 0.8s var(--sv-ease) forwards;
        }

        .sv-panel.on .sv-expanded > *:nth-child(1) { animation-delay: 0.25s; }
        .sv-panel.on .sv-expanded > *:nth-child(2) { animation-delay: 0.33s; }
        .sv-panel.on .sv-expanded > *:nth-child(3) { animation-delay: 0.41s; }
        .sv-panel.on .sv-expanded > *:nth-child(4) { animation-delay: 0.49s; }
        .sv-panel.on .sv-expanded > *:nth-child(5) { animation-delay: 0.57s; }

        @keyframes sv-in {
          to { opacity: 1; transform: translateY(0); }
        }

        .sv-exp-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        }

        .sv-exp-icon {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--sv-secondary);
          color: #1a1103;
          flex-shrink: 0;
        }

        .sv-exp-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--sv-secondary);
        }

        .sv-exp-meta small {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 1.5px;
        }

        .sv-exp-title {
          margin: 0 0 14px;
          font-size: clamp(1.8rem, 3vw, 2.7rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -1px;
        }

        .sv-exp-text {
          margin: 0 0 22px;
          font-size: 1rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.78);
        }

        .sv-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }

        .sv-chip {
          padding: 7px 14px;
          border-radius: 100px;
          font-size: 0.78rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .sv-actions {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .sv-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 26px;
          border-radius: 100px;
          border: none;
          background: var(--sv-secondary);
          color: #1a1103;
          font-family: inherit;
          font-size: 0.88rem;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 14px 30px -10px rgba(239, 155, 17, 0.7);
          transition: transform 0.4s var(--sv-ease), box-shadow 0.4s var(--sv-ease);
        }

        .sv-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px -10px rgba(239, 155, 17, 0.85);
        }

        .sv-btn svg,
        .sv-link svg {
          transition: transform 0.4s var(--sv-ease);
        }

        .sv-btn:hover svg {
          transform: translateX(4px);
        }

        .sv-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          padding: 0;
          color: #ffffff;
          font-family: inherit;
          font-size: 0.86rem;
          font-weight: 700;
          cursor: pointer;
          border-bottom: 1px solid rgba(255, 255, 255, 0.35);
          padding-bottom: 3px;
        }

        .sv-link:hover svg {
          transform: translate(3px, -3px);
        }

        .sv-count {
          position: absolute;
          top: 28px;
          right: 30px;
          font-size: 5rem;
          font-weight: 900;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.28);
          opacity: 0;
          transition: opacity 0.6s ease 0.3s;
        }

        .sv-panel.on .sv-count {
          opacity: 1;
        }

        .sv-bar {
          position: absolute;
          left: 0;
          bottom: 0;
          height: 3px;
          width: 100%;
          background: var(--sv-secondary);
          transform: scaleX(0);
          transform-origin: left;
        }

        .sv-panel.on .sv-bar {
          animation: sv-fill ${CYCLE_MS}ms linear forwards;
        }

        .sv-panels.paused .sv-bar {
          animation-play-state: paused;
        }

        @keyframes sv-fill {
          to { transform: scaleX(1); }
        }

        /* --- Responsive --- */
        @media (max-width: 1100px) {
          .sv-head {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .sv-expanded {
            padding: 34px;
          }
        }

        @media (max-width: 900px) {
          .sv {
            padding: 80px 16px 70px;
          }

          .sv-panels {
            flex-direction: column;
            height: auto;
            gap: 12px;
          }

          .sv-panel {
            flex: 0 0 84px;
            border-radius: 20px;
            transition: flex-basis 0.8s var(--sv-ease), border-color 0.5s ease;
          }

          .sv-panel.on {
            flex: 0 0 500px;
          }

          .sv-collapsed {
            flex-direction: row;
            padding: 0 20px;
            gap: 16px;
          }

          .sv-vertical {
            writing-mode: horizontal-tb;
            transform: none;
            flex: 1;
            font-size: 1.05rem;
          }

          .sv-mini-icon {
            width: 40px;
            height: 40px;
          }

          .sv-expanded {
            padding: 26px 22px;
            max-width: none;
          }

          .sv-panel.on::after {
            background: linear-gradient(180deg, rgba(1, 13, 24, 0.3) 0%, rgba(1, 13, 24, 0.95) 70%);
          }

          .sv-count {
            font-size: 3.4rem;
            top: 20px;
            right: 20px;
          }
        }

        @media (max-width: 480px) {
          .sv-panel.on {
            flex-basis: 540px;
          }

          .sv-exp-text {
            font-size: 0.94rem;
          }

          .sv-tabs {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sv *,
          .sv *::before,
          .sv *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <section
        className="sv"
        style={appContext?.navItem === "services" ? { paddingTop: `calc(110px + var(--topBarHeight, 0px))` } : {}}
      >
        <div className="sv-inner">
          {/* Section Header */}
          <div className="sv-head">
            <div>
              <div className="sv-eyebrow">What We Do</div>
              <h2 className="sv-title">
                Four Divisions. <br />
                <span>One Dependable Partner.</span>
              </h2>
            </div>
            <div>
              <p className="sv-intro">
                From vessel provisioning to customs clearance and electrical supply, every BAG Group
                service is organised into a focused division — so you always know who delivers what.
              </p>
              <div className="sv-tabs">
                {serviceClusters.map((cluster, i) => (
                  <button
                    key={cluster.key}
                    type="button"
                    className={`sv-tab ${i === active ? "on" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    {cluster.id} · {cluster.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Expanding Division Panels */}
          <div
            className={`sv-panels ${paused ? "paused" : ""}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {serviceClusters.map((cluster, i) => {
              const IconComponent = cluster.icon;
              const isOn = i === active;
              return (
                <div
                  key={cluster.key}
                  className={`sv-panel ${isOn ? "on" : ""}`}
                  onClick={() => !isOn && setActive(i)}
                  role="button"
                  tabIndex={isOn ? -1 : 0}
                  aria-expanded={isOn}
                  onKeyDown={(e) => {
                    if (!isOn && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      setActive(i);
                    }
                  }}
                >
                  <img className="sv-panel-bg" src={cluster.image} alt="" />

                  <div className="sv-collapsed" aria-hidden={isOn}>
                    <span className="sv-num">{cluster.id}</span>
                    <span className="sv-vertical">{cluster.title}</span>
                    <span className="sv-mini-icon">
                      <IconComponent size={20} />
                    </span>
                  </div>

                  <span className="sv-count" aria-hidden="true">{cluster.id}</span>

                  <div className="sv-expanded" aria-hidden={!isOn}>
                    <div className="sv-exp-top">
                      <span className="sv-exp-icon">
                        <IconComponent size={26} />
                      </span>
                      <span className="sv-exp-meta">
                        {cluster.short}
                        <small>{cluster.tagline}</small>
                      </span>
                    </div>

                    <h3 className="sv-exp-title">{cluster.title}</h3>
                    <p className="sv-exp-text">{cluster.summary}</p>

                    <div className="sv-chips d-none">
                      {cluster.highlights.map((item) => (
                        <span key={item} className="sv-chip">{item}</span>
                      ))}
                    </div>

                    <div className="sv-actions">
                      <button
                        type="button"
                        className="sv-link"
                        tabIndex={isOn ? 0 : -1}
                        onClick={() => appContext?.navTo?.({ item: "contact_us" })}
                      >
                        Request a Quote <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>

                  <span className="sv-bar" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
