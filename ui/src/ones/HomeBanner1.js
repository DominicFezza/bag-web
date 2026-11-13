import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../App";
import { getInlineLoader } from "../Helpers";
import logo from "../assets/logo-full.png";

// Assets
import imgChandling from "../assets/chadling.jpeg";
import imgCustoms from "../assets/freight.jpg";
import imgElectrical from "../assets/electrical.jpg";
import {
  IoArrowForward,
  IoBoatOutline,
  IoDocumentTextOutline,
  IoFlashOutline,
  IoTimeOutline,
  IoShieldCheckmarkOutline,
  IoGlobeOutline,
} from "react-icons/io5";

const CYCLE_MS = 5000;

const coreServices = [
  {
    code: "01",
    icon: IoBoatOutline,
    title: "Ship Chandling",
    tag: "Marine Supply",
    desc: "Fresh, frozen and dry provisions, bonded stores, deck and engine consumables — delivered to berth or anchorage around the clock.",
    img: imgChandling,
    subItem: "ship-chandling",
  },
  {
    code: "02",
    icon: IoDocumentTextOutline,
    title: "Clearing & Forwarding",
    tag: "Customs & Logistics",
    desc: "Licensed customs clearance, transit cargo handling and multimodal freight forwarding across Tanzania and East Africa.",
    img: imgCustoms,
    subItem: "customs-clearing",
  },
  {
    code: "03",
    icon: IoFlashOutline,
    title: "Electrical Supply",
    tag: "Equipment & Spares",
    desc: "Genuine electrical equipment, components and spares sourced for marine fleets, industry and institutional projects.",
    img: imgElectrical,
    subItem: "equipment-materials-supply",
  },
];

const trustPoints = [
  { icon: IoTimeOutline, label: "24/7 Port Dispatch" },
  { icon: IoShieldCheckmarkOutline, label: "IMPA / ISSA Compliant" },
  { icon: IoGlobeOutline, label: "East Africa Coverage" },
];

const tickerItems = [
  "Vessel Provisioning",
  "Bonded Stores",
  "Deck & Engine Stores",
  "Customs Clearance",
  "Transit Cargo",
  "Freight Forwarding",
  "Switchgear & Cables",
  "Generators & Spares",
  "Industrial Electricals",
];

export default function HomeBanner1() {
  const appContext = useContext(AppContext);
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState(null);
  const [paused, setPaused] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setReady(true);
  }, []);

  function selectService(index) {
    if (index === active) return;
    setPrevious(active);
    setActive(index);
  }

  // Auto-cycle the featured service
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setPrevious(active);
      setActive((active + 1) % coreServices.length);
    }, CYCLE_MS);
    return () => clearTimeout(timer);
  }, [active, paused]);

  // Scroll-driven parallax (CSS vars only, no re-renders)
  useEffect(() => {
    if (!ready) return;
    let frame = null;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const el = heroRef.current;
        if (!el) return;
        const progress = Math.min(Math.max(window.scrollY / el.offsetHeight, 0), 1);
        el.style.setProperty("--hb1-scroll", progress.toFixed(4));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ready]);

  // Pointer depth: spotlight + subtle frame tilt
  function handlePointer(e) {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--hb1-mx", `${(x * 100).toFixed(2)}%`);
    el.style.setProperty("--hb1-my", `${(y * 100).toFixed(2)}%`);
    el.style.setProperty("--hb1-tx", (x - 0.5).toFixed(3));
    el.style.setProperty("--hb1-ty", (y - 0.5).toFixed(3));
  }

  if (!ready) {
    return <div style={{ padding: 40 }}>{getInlineLoader()}</div>;
  }

  const current = coreServices[active];
  const CurrentIcon = current.icon;

  return (
    <>
      <style>{`
        .hb1 {
          --hb1-primary: #015398;
          --hb1-secondary: #EF9B11;
          --hb1-ink: #010f1c;
          --hb1-navy: #02182c;
          --hb1-line: rgba(255, 255, 255, 0.12);
          --hb1-muted: rgba(255, 255, 255, 0.62);
          --hb1-ease: cubic-bezier(0.16, 1, 0.3, 1);
          --hb1-scroll: 0;
          --hb1-mx: 70%;
          --hb1-my: 40%;
          --hb1-tx: 0;
          --hb1-ty: 0;

          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          color: #ffffff;
          background:
            radial-gradient(900px 600px at 85% 10%, rgba(1, 83, 152, 0.45), transparent 60%),
            radial-gradient(700px 500px at 5% 95%, rgba(239, 155, 17, 0.10), transparent 60%),
            linear-gradient(160deg, var(--hb1-navy) 0%, var(--hb1-ink) 100%);
          display: flex;
          flex-direction: column;
          isolation: isolate;
        }

        /* --- Atmosphere --- */
        .hb1-spot {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background: radial-gradient(600px circle at var(--hb1-mx) var(--hb1-my), rgba(239, 155, 17, 0.08), transparent 60%);
        }

        .hb1-lines {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background-image: linear-gradient(90deg, var(--hb1-line) 1px, transparent 1px);
          background-size: calc(100% / 6) 100%;
          opacity: 0.35;
          mask-image: linear-gradient(180deg, transparent, black 20%, black 70%, transparent);
          -webkit-mask-image: linear-gradient(180deg, transparent, black 20%, black 70%, transparent);
        }

        .hb1-orb {
          position: absolute;
          z-index: -1;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(120px);
        }

        .hb1-orb.a {
          width: 460px;
          height: 460px;
          top: -120px;
          right: 8%;
          background: var(--hb1-primary);
          opacity: 0.55;
          animation: hb1-drift 16s ease-in-out infinite alternate;
        }

        .hb1-orb.b {
          width: 320px;
          height: 320px;
          bottom: 60px;
          left: 30%;
          background: var(--hb1-secondary);
          opacity: 0.12;
          animation: hb1-drift 12s ease-in-out infinite alternate-reverse;
        }

        @keyframes hb1-drift {
          to { transform: translate(-40px, 50px) scale(1.12); }
        }

        /* --- Layout --- */
        .hb1-main {
          flex: 1;
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 140px 5% 60px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 64px;
          align-items: center;
        }

        /* --- Left: Copy --- */
        .hb1-copy {
          min-width: 0;
          transform: translate3d(0, calc(var(--hb1-scroll) * -50px), 0);
        }

        .hb1-in {
          animation: hb1-rise 1s var(--hb1-ease) backwards;
        }

        @keyframes hb1-rise {
          from { opacity: 0; transform: translateY(24px); filter: blur(6px); }
        }

        .hb1-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 30px;
        }

        .hb1-eyebrow img {
          height: 38px;
          width: auto;
          filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.5));
        }

        .hb1-eyebrow-text {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-left: 14px;
          border-left: 1px solid var(--hb1-line);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2.2px;
          text-transform: uppercase;
          color: var(--hb1-muted);
        }

        .hb1-dot {
          position: relative;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--hb1-secondary);
        }

        .hb1-dot::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: inherit;
          animation: hb1-ping 1.8s ease-out infinite;
        }

        @keyframes hb1-ping {
          to { transform: scale(3.2); opacity: 0; }
        }

        /* Headline = service selector */
        .hb1-headline {
          margin: 0 0 28px;
          padding: 0;
          list-style: none;
        }

        .hb1-headline li {
          overflow: hidden;
          padding-bottom: 0.08em;
        }

        .hb1-hl {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          width: 100%;
          padding: 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          font-size: clamp(2rem, 4.2vw, 3.9rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -1.5px;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.32);
          transition: color 0.6s var(--hb1-ease), -webkit-text-stroke-color 0.6s var(--hb1-ease), transform 0.6s var(--hb1-ease);
          animation: hb1-mask 1.1s var(--hb1-ease) backwards;
        }

        @keyframes hb1-mask {
          from { transform: translateY(105%); }
        }

        .hb1-hl:hover {
          -webkit-text-stroke-color: rgba(255, 255, 255, 0.7);
          transform: translateX(8px);
        }

        .hb1-hl.on {
          color: #ffffff;
          -webkit-text-stroke-color: transparent;
        }

        .hb1-hl-dot {
          transition: color 0.4s ease;
        }

        .hb1-hl.on .hb1-hl-dot {
          color: var(--hb1-secondary);
        }

        .hb1-hl-num {
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 1px;
          margin-top: 0.7em;
          min-width: 22px;
          color: rgba(255, 255, 255, 0.35);
          -webkit-text-stroke: 0;
          transition: color 0.4s ease;
        }

        .hb1-hl.on .hb1-hl-num {
          color: var(--hb1-secondary);
        }

        .hb1-lead {
          max-width: 520px;
          min-height: 5.4em;
          margin: 0 0 34px;
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--hb1-muted);
          animation: hb1-rise 0.8s var(--hb1-ease) backwards;
        }

        /* CTAs */
        .hb1-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 44px;
        }

        .hb1-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 15px 30px;
          border-radius: 100px;
          font-family: inherit;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: transform 0.4s var(--hb1-ease), box-shadow 0.4s var(--hb1-ease), background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        }

        .hb1-btn svg {
          transition: transform 0.4s var(--hb1-ease);
        }

        .hb1-btn:hover svg {
          transform: translateX(4px);
        }

        .hb1-btn.solid {
          background: var(--hb1-secondary);
          color: #1a1103;
          border: 1px solid var(--hb1-secondary);
          box-shadow: 0 14px 34px -10px rgba(239, 155, 17, 0.7);
        }

        .hb1-btn.solid:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 44px -10px rgba(239, 155, 17, 0.85);
        }

        .hb1-btn.ghost {
          background: transparent;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.28);
        }

        .hb1-btn.ghost:hover {
          border-color: #ffffff;
          background: #ffffff;
          color: var(--hb1-navy);
          transform: translateY(-3px);
        }

        /* Trust row */
        .hb1-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 28px;
          padding-top: 26px;
          border-top: 1px solid var(--hb1-line);
        }

        .hb1-trust-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
        }

        .hb1-trust-item svg {
          color: var(--hb1-secondary);
          flex-shrink: 0;
        }

        /* --- Right: Media Stage --- */
        .hb1-stage-wrap {
          transform: translate3d(0, calc(var(--hb1-scroll) * 70px), 0);
        }

        .hb1-stage {
          position: relative;
          perspective: 1400px;
          animation: hb1-stage-in 1.4s var(--hb1-ease) 0.3s backwards;
        }

        @keyframes hb1-stage-in {
          from { opacity: 0; transform: translateY(40px) scale(0.96); }
        }

        .hb1-frame {
          position: relative;
          aspect-ratio: 4 / 5;
          max-height: 620px;
          width: 100%;
          border-radius: 28px;
          overflow: hidden;
          background: var(--hb1-navy);
          box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.8), 0 0 0 1px var(--hb1-line);
          transform: rotateY(calc(var(--hb1-tx) * -6deg)) rotateX(calc(var(--hb1-ty) * 5deg));
          transition: transform 0.4s ease-out;
        }

        .hb1-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          z-index: 0;
        }

        .hb1-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .hb1-slide.was {
          opacity: 1;
          z-index: 1;
        }

        .hb1-slide.on {
          opacity: 1;
          z-index: 2;
          animation: hb1-wipe 1.2s var(--hb1-ease) both;
        }

        .hb1-slide.on img {
          animation: hb1-kenburns ${CYCLE_MS + 1500}ms ease-out both;
        }

        @keyframes hb1-wipe {
          from { clip-path: inset(0 0 0 100%); }
          to { clip-path: inset(0 0 0 0); }
        }

        @keyframes hb1-kenburns {
          from { transform: scale(1.18); }
          to { transform: scale(1.02); }
        }

        .hb1-frame::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(1, 15, 28, 0.35) 0%, rgba(1, 15, 28, 0) 30%, rgba(1, 15, 28, 0) 50%, rgba(1, 15, 28, 0.88) 100%);
        }

        /* Frame caption */
        .hb1-caption {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          z-index: 4;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
        }

        .hb1-caption-main {
          animation: hb1-rise 0.8s var(--hb1-ease) 0.25s backwards;
        }

        .hb1-caption-tag {
          display: inline-block;
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--hb1-secondary);
          margin-bottom: 6px;
        }

        .hb1-caption-title {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.3px;
        }

        .hb1-caption-go {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #ffffff;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease, transform 0.5s var(--hb1-ease);
        }

        .hb1-caption-go:hover {
          background: var(--hb1-secondary);
          border-color: var(--hb1-secondary);
          color: #1a1103;
          transform: rotate(-45deg);
        }

        /* Progress segments */
        .hb1-progress {
          position: absolute;
          top: 22px;
          left: 24px;
          right: 24px;
          z-index: 4;
          display: flex;
          gap: 8px;
        }

        .hb1-seg {
          flex: 1;
          height: 3px;
          border-radius: 3px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.22);
          cursor: pointer;
          border: none;
          padding: 0;
        }

        .hb1-seg span {
          display: block;
          height: 100%;
          width: 100%;
          background: #ffffff;
          transform: scaleX(0);
          transform-origin: left;
        }

        .hb1-seg.done span {
          transform: scaleX(1);
        }

        .hb1-seg.on span {
          background: var(--hb1-secondary);
          animation: hb1-fill ${CYCLE_MS}ms linear forwards;
        }

        .hb1-stage.paused .hb1-seg.on span {
          animation-play-state: paused;
        }

        @keyframes hb1-fill {
          to { transform: scaleX(1); }
        }

        /* Floating service chip */
        .hb1-chip {
          position: absolute;
          top: 56px;
          right: -28px;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 18px 12px 12px;
          border-radius: 18px;
          background: rgba(2, 24, 44, 0.72);
          border: 1px solid rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.6);
          animation: hb1-bob 6s ease-in-out infinite;
        }

        @keyframes hb1-bob {
          50% { transform: translateY(-10px); }
        }

        .hb1-chip-icon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--hb1-secondary);
          color: #1a1103;
        }

        .hb1-chip-body {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
          animation: hb1-rise 0.6s var(--hb1-ease) backwards;
        }

        .hb1-chip-body small {
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--hb1-muted);
        }

        .hb1-chip-body strong {
          font-size: 0.92rem;
        }

        /* Live video badge with rotating ring text */
        .hb1-live {
          position: absolute;
          left: -44px;
          bottom: 110px;
          z-index: 5;
          width: 132px;
          height: 132px;
        }

        .hb1-live-ring {
          position: absolute;
          inset: 0;
          animation: hb1-spin 18s linear infinite;
        }

        .hb1-live-ring text {
          fill: rgba(255, 255, 255, 0.8);
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 2.6px;
          text-transform: uppercase;
        }

        @keyframes hb1-spin {
          to { transform: rotate(360deg); }
        }

        .hb1-live-video {
          position: absolute;
          inset: 20px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid var(--hb1-secondary);
          box-shadow: 0 14px 30px -10px rgba(0, 0, 0, 0.7);
          background: var(--hb1-navy);
        }

        .hb1-live-video video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1.3);
        }

        /* --- Ticker --- */
        .hb1-ticker {
          position: relative;
          border-top: 1px solid var(--hb1-line);
          background: rgba(1, 15, 28, 0.55);
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }

        .hb1-track {
          display: flex;
          width: max-content;
          animation: hb1-marquee 38s linear infinite;
        }

        .hb1-ticker:hover .hb1-track {
          animation-play-state: paused;
        }

        .hb1-tick {
          display: flex;
          align-items: center;
          gap: 26px;
          padding: 20px 13px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
          white-space: nowrap;
        }

        .hb1-tick::after {
          content: "";
          width: 6px;
          height: 6px;
          transform: rotate(45deg);
          background: var(--hb1-secondary);
        }

        @keyframes hb1-marquee {
          to { transform: translateX(-50%); }
        }

        /* --- Responsive --- */
        @media (max-width: 1100px) {
          .hb1-main {
            grid-template-columns: 1fr;
            gap: 56px;
            padding-top: 120px;
          }

          .hb1-stage-wrap {
            max-width: 560px;
            width: 100%;
            margin: 0 auto;
          }

          .hb1-frame {
            aspect-ratio: 4 / 3;
            transform: none;
          }

          .hb1-chip {
            right: 16px;
          }

          .hb1-live {
            left: -16px;
          }
        }

        @media (max-width: 640px) {
          .hb1-main {
            padding: 110px 16px 40px;
            gap: 44px;
          }

          .hb1-eyebrow img {
            height: 32px;
          }

          .hb1-hl {
            letter-spacing: -0.8px;
            gap: 10px;
          }

          .hb1-lead {
            font-size: 0.98rem;
            min-height: 0;
          }

          .hb1-actions {
            flex-direction: column;
          }

          .hb1-btn {
            width: 100%;
            justify-content: center;
          }

          .hb1-trust {
            gap: 14px;
            flex-direction: column;
          }

          .hb1-frame {
            aspect-ratio: 1 / 1;
            border-radius: 22px;
          }

          .hb1-chip {
            top: 44px;
            right: 12px;
            padding: 10px 14px 10px 10px;
          }

          .hb1-live {
            width: 104px;
            height: 104px;
            left: -8px;
            bottom: auto;
            top: -40px;
          }

          .hb1-live-video {
            inset: 16px;
          }

          .hb1-caption-title {
            font-size: 1.15rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hb1 *,
          .hb1 *::before,
          .hb1 *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .hb1-copy,
          .hb1-stage-wrap,
          .hb1-frame {
            transform: none;
          }
        }
      `}</style>

      <section className="hb1" ref={heroRef} onMouseMove={handlePointer}>
        {/* Atmosphere */}
        <div className="hb1-orb a" />
        <div className="hb1-orb b" />
        <div className="hb1-lines" />
        <div className="hb1-spot" />

        <div className="hb1-main">
          {/* Left: Copy & Service Selector */}
          <div className="hb1-copy">
            <div className="hb1-eyebrow hb1-in" style={{ animationDelay: "0.1s" }}>
              <img src={logo} alt="BAG Group Limited" />
              <span className="hb1-eyebrow-text">
                <span className="hb1-dot" />
                Serving Tanzanian Ports
              </span>
            </div>

            <ul
              className="hb1-headline"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {coreServices.map((service, i) => (
                <li key={service.code}>
                  <button
                    type="button"
                    className={`hb1-hl ${i === active ? "on" : ""}`}
                    style={{ animationDelay: `${0.25 + i * 0.12}s` }}
                    onMouseEnter={() => selectService(i)}
                    onFocus={() => selectService(i)}
                  >
                    <span className="hb1-hl-num">{service.code}</span>
                    <span>
                      {service.title}
                      <span className="hb1-hl-dot">.</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <p key={`lead-${active}`} className="hb1-lead" aria-live="polite">
              {current.desc}
            </p>

            <div className="hb1-actions hb1-in" style={{ animationDelay: "0.7s" }}>
              <button
                className="hb1-btn solid"
                onClick={() => appContext.navTo({ item: "contact_us" })}
              >
                Connect With Us
                <IoArrowForward size={18} />
              </button>
              <button
                className="hb1-btn ghost"
                onClick={() => appContext.navTo({ item: "services" })}
              >
                Explore Services
                <IoArrowForward size={18} />
              </button>
            </div>

            <div className="hb1-trust hb1-in" style={{ animationDelay: "0.85s" }}>
              {trustPoints.map((point) => {
                const IconComponent = point.icon;
                return (
                  <div key={point.label} className="hb1-trust-item">
                    <IconComponent size={18} />
                    <span>{point.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Cinematic Media Stage */}
          <div className="hb1-stage-wrap">
            <div
              className={`hb1-stage ${paused ? "paused" : ""}`}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="hb1-frame">
                {coreServices.map((service, i) => (
                  <div
                    key={service.code}
                    className={`hb1-slide ${i === active ? "on" : ""} ${i === previous ? "was" : ""}`}
                  >
                    <img src={service.img} alt={service.title} />
                  </div>
                ))}

                <div className="hb1-progress">
                  {coreServices.map((service, i) => (
                    <button
                      key={service.code}
                      type="button"
                      aria-label={service.title}
                      className={`hb1-seg ${i === active ? "on" : ""} ${i < active ? "done" : ""}`}
                      onClick={() => selectService(i)}
                    >
                      <span key={i === active ? `seg-${active}` : service.code} />
                    </button>
                  ))}
                </div>

                <div className="hb1-caption">
                  <div key={`cap-${active}`} className="hb1-caption-main">
                    <div className="hb1-caption-title">{current.title}</div>
                  </div>
                </div>
              </div>

              <div className="hb1-chip">
                <div className="hb1-chip-icon">
                  <CurrentIcon size={22} />
                </div>
                <div key={`chip-${active}`} className="hb1-chip-body">
                  <strong>{current.tag}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Infinite Capability Ticker */}
        <div className="hb1-ticker">
          <div className="hb1-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="hb1-tick">{item}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
