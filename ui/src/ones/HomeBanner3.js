import React, { useContext, useState } from 'react';
import {
  Compass,
  PackageCheck,
  ClipboardCheck,
  ArrowRight,
  ArrowUpRight,
  LayoutGrid,
} from 'lucide-react';
import { AppContext } from '../App';
import { serviceClusters } from './servicesData';

const whyPoints = [
  {
    icon: Compass,
    title: "Reliable Turnaround",
    desc: "24/7 port readiness and expedited clearance to minimise vessel demurrage.",
  },
  {
    icon: PackageCheck,
    title: "Certified Quality",
    desc: "IMPA-compliant stores, genuine electricals and tested materials.",
  },
  {
    icon: ClipboardCheck,
    title: "One Point of Contact",
    desc: "Supply, clearance, freight and procurement handled by a single team.",
  },
];

const HomeBanner3 = () => {
  const appContext = useContext(AppContext);
  const [filter, setFilter] = useState("all");

  const totalServices = serviceClusters.reduce((sum, c) => sum + c.services.length, 0);
  const visibleClusters = filter === "all"
    ? serviceClusters
    : serviceClusters.filter((c) => c.key === filter);

  const filters = [
    { key: "all", label: "All Services", icon: LayoutGrid, count: totalServices },
    ...serviceClusters.map((c) => ({ key: c.key, label: c.title, icon: c.icon, count: c.services.length })),
  ];

  return (
    <>
      <style>
        {`
          .sd {
            --sd-primary: #015398;
            --sd-secondary: #EF9B11;
            --sd-dark: #02111e;
            --sd-text: #0c1a29;
            --sd-muted: #5b6b7c;
            --sd-surface: #ffffff;
            --sd-bg: #f5f7fa;
            --sd-border: rgba(1, 83, 152, 0.1);
            --sd-ease: cubic-bezier(0.16, 1, 0.3, 1);

            position: relative;
            background: var(--sd-bg);
            color: var(--sd-text);
            padding: 110px 5%;
            overflow: hidden;
          }

          .sd::before {
            content: "";
            position: absolute;
            top: -200px;
            right: -150px;
            width: 520px;
            height: 520px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(1, 83, 152, 0.08), transparent 70%);
            pointer-events: none;
          }

          .sd-inner {
            position: relative;
            max-width: 1320px;
            margin: 0 auto;
          }

          /* --- Header --- */
          .sd-head {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 40px;
            flex-wrap: wrap;
            margin-bottom: 36px;
          }

          .sd-eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            font-size: 0.74rem;
            font-weight: 800;
            letter-spacing: 2.4px;
            text-transform: uppercase;
            color: var(--sd-primary);
            margin-bottom: 14px;
          }

          .sd-eyebrow::before {
            content: "";
            width: 28px;
            height: 2px;
            background: var(--sd-secondary);
          }

          .sd-title {
            margin: 0;
            max-width: 640px;
            font-size: clamp(2rem, 3.8vw, 3.2rem);
            font-weight: 800;
            line-height: 1.1;
            letter-spacing: -1.2px;
            color: var(--sd-dark);
          }

          .sd-title span {
            color: var(--sd-primary);
          }

          .sd-intro {
            max-width: 420px;
            margin: 0;
            font-size: 1rem;
            line-height: 1.75;
            color: var(--sd-muted);
          }

          /* --- Filter Bar --- */
          .sd-filters {
            display: flex;
            gap: 8px;
            padding: 6px;
            margin-bottom: 40px;
            background: var(--sd-surface);
            border: 1px solid var(--sd-border);
            border-radius: 100px;
            width: fit-content;
            max-width: 100%;
            overflow-x: auto;
            scrollbar-width: none;
            box-shadow: 0 10px 30px -18px rgba(1, 83, 152, 0.3);
          }

          .sd-filters::-webkit-scrollbar {
            display: none;
          }

          .sd-filter {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 10px 18px;
            border: none;
            border-radius: 100px;
            background: transparent;
            color: var(--sd-muted);
            font-family: inherit;
            font-size: 0.84rem;
            font-weight: 700;
            white-space: nowrap;
            cursor: pointer;
            transition: color 0.3s ease;
            isolation: isolate;
          }

          .sd-filter:hover {
            color: var(--sd-dark);
          }

          .sd-filter.on {
            color: #ffffff;
          }

          .sd-filter-pill {
            position: absolute;
            inset: 0;
            z-index: -1;
            border-radius: 100px;
            background: var(--sd-primary);
          }

          .sd-filter-count {
            font-size: 0.7rem;
            font-weight: 800;
            padding: 2px 7px;
            border-radius: 100px;
            background: rgba(1, 83, 152, 0.08);
            color: var(--sd-primary);
            transition: background 0.3s ease, color 0.3s ease;
          }

          .sd-filter.on .sd-filter-count {
            background: var(--sd-secondary);
            color: #1a1103;
          }

          /* --- Layout --- */
          .sd-layout {
            display: grid;
            grid-template-columns: 1fr 360px;
            gap: 36px;
            align-items: start;
          }

          .sd-clusters {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 22px;
          }

          .sd-clusters.single {
            grid-template-columns: 1fr;
          }

          /* --- Division Card --- */
          .sd-card {
            background: var(--sd-surface);
            border: 1px solid var(--sd-border);
            border-radius: 24px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            transition: box-shadow 0.5s var(--sd-ease), border-color 0.4s ease, transform 0.5s var(--sd-ease);
          }

          .sd-card:hover {
            transform: translateY(-4px);
            border-color: rgba(1, 83, 152, 0.22);
            box-shadow: 0 28px 50px -28px rgba(1, 83, 152, 0.4);
          }

          .sd-card-head {
            position: relative;
            height: 150px;
            overflow: hidden;
            display: flex;
            align-items: flex-end;
            padding: 20px 22px;
            color: #ffffff;
            isolation: isolate;
          }

          .sd-card.wide .sd-card-head {
            height: 190px;
          }

          .sd-card-head img {
            position: absolute;
            inset: 0;
            z-index: -2;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.2s var(--sd-ease);
          }

          .sd-card:hover .sd-card-head img {
            transform: scale(1.07);
          }

          .sd-card-head::after {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -1;
            background: linear-gradient(180deg, rgba(2, 17, 30, 0.15) 0%, rgba(2, 17, 30, 0.88) 100%);
          }

          .sd-card-head-row {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 14px;
          }

          .sd-card-icon {
            width: 46px;
            height: 46px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--sd-secondary);
            color: #1a1103;
            flex-shrink: 0;
          }

          .sd-card-titles {
            flex: 1;
            min-width: 0;
          }

          .sd-card-titles small {
            display: block;
            font-size: 0.68rem;
            font-weight: 800;
            letter-spacing: 1.8px;
            text-transform: uppercase;
            color: var(--sd-secondary);
            margin-bottom: 2px;
          }

          .sd-card-titles h3 {
            margin: 0;
            font-size: 1.2rem;
            font-weight: 800;
            letter-spacing: -0.2px;
            color: #ffffff;
          }

          .sd-card-id {
            font-size: 2rem;
            font-weight: 900;
            line-height: 1;
            color: transparent;
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.45);
          }

          /* Service rows */
          .sd-rows {
            list-style: none;
            margin: 0;
            padding: 8px;
            display: flex;
            flex-direction: column;
          }

          .sd-card.wide .sd-rows {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 4px;
          }

          .sd-row {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            width: 100%;
            padding: 14px;
            border: none;
            border-radius: 16px;
            background: transparent;
            text-align: left;
            font-family: inherit;
            color: inherit;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .sd-row:hover {
            background: rgba(1, 83, 152, 0.05);
          }

          .sd-row-icon {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(1, 83, 152, 0.07);
            color: var(--sd-primary);
            flex-shrink: 0;
            transition: background 0.3s ease, color 0.3s ease, transform 0.4s var(--sd-ease);
          }

          .sd-row:hover .sd-row-icon {
            background: var(--sd-primary);
            color: #ffffff;
            transform: rotate(-6deg);
          }

          .sd-row-body {
            flex: 1;
            min-width: 0;
          }

          .sd-row-title {
            display: block;
            font-size: 0.95rem;
            font-weight: 700;
            color: var(--sd-dark);
            margin-bottom: 3px;
            transition: color 0.3s ease;
          }

          .sd-row:hover .sd-row-title {
            color: var(--sd-primary);
          }

          .sd-row-desc {
            display: block;
            font-size: 0.83rem;
            line-height: 1.55;
            color: var(--sd-muted);
          }

          .sd-row-arrow {
            flex-shrink: 0;
            margin-top: 2px;
            color: rgba(1, 83, 152, 0.3);
            transition: color 0.3s ease, transform 0.4s var(--sd-ease);
          }

          .sd-row:hover .sd-row-arrow {
            color: var(--sd-secondary);
            transform: translate(3px, -3px);
          }

          /* --- Sticky Aside --- */
          .sd-aside {
            position: sticky;
            top: 100px;
          }

          .sd-why {
            position: relative;
            overflow: hidden;
            border-radius: 28px;
            padding: 36px 30px;
            color: #ffffff;
            background:
              radial-gradient(400px 300px at 100% 0%, rgba(239, 155, 17, 0.18), transparent 60%),
              linear-gradient(160deg, var(--sd-primary) 0%, var(--sd-dark) 100%);
            box-shadow: 0 30px 60px -30px rgba(1, 83, 152, 0.7);
          }

          .sd-why h3 {
            margin: 0 0 26px;
            font-size: 1.7rem;
            font-weight: 800;
            line-height: 1.15;
            letter-spacing: -0.5px;
          }

          .sd-why h3 span {
            color: var(--sd-secondary);
          }

          .sd-why-item {
            display: flex;
            gap: 14px;
            padding: 16px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.12);
          }

          .sd-why-icon {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.14);
            color: var(--sd-secondary);
            flex-shrink: 0;
            transition: background 0.3s ease, color 0.3s ease, transform 0.4s var(--sd-ease);
          }

          .sd-why-item:hover .sd-why-icon {
            background: var(--sd-secondary);
            color: #1a1103;
            transform: scale(1.06) rotate(-5deg);
          }

          .sd-why-item h4 {
            margin: 0 0 4px;
            font-size: 0.98rem;
            font-weight: 700;
          }

          .sd-why-item p {
            margin: 0;
            font-size: 0.84rem;
            line-height: 1.55;
            color: rgba(255, 255, 255, 0.7);
          }

          .sd-cta {
            width: 100%;
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 16px;
            border: none;
            border-radius: 100px;
            background: var(--sd-secondary);
            color: #1a1103;
            font-family: inherit;
            font-size: 0.9rem;
            font-weight: 800;
            cursor: pointer;
            box-shadow: 0 14px 30px -10px rgba(239, 155, 17, 0.7);
            transition: transform 0.4s var(--sd-ease), box-shadow 0.4s var(--sd-ease);
          }

          .sd-cta:hover {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px -10px rgba(239, 155, 17, 0.85);
          }

          .sd-cta svg {
            transition: transform 0.4s var(--sd-ease);
          }

          .sd-cta:hover svg {
            transform: translateX(4px);
          }

          /* --- Responsive --- */
          @media (max-width: 1180px) {
            .sd-layout {
              grid-template-columns: 1fr;
            }

            .sd-aside {
              position: static;
            }
          }

          @media (max-width: 860px) {
            .sd-clusters,
            .sd-card.wide .sd-rows {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 640px) {
            .sd {
              padding: 80px 16px;
            }

            .sd-head {
              margin-bottom: 28px;
            }

            .sd-filters {
              border-radius: 18px;
              margin-bottom: 28px;
            }

            .sd-filter {
              padding: 9px 14px;
            }

            .sd-row {
              padding: 12px 10px;
            }

            .sd-why {
              padding: 30px 22px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .sd *,
            .sd *::before,
            .sd *::after {
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>

      <section className="sd">
        <div className="sd-inner">
          {/* Header */}
          <div className="sd-head">
            <div>
              <div className="sd-eyebrow">Service Directory</div>
              <h2 className="sd-title">
                Everything we deliver, <span>Multi-Service .</span>
              </h2>
            </div>
          </div>

          {/* Division Filter */}
          <div className="sd-filters" role="tablist">
            {filters.map((f) => {
              const IconComponent = f.icon;
              const isOn = filter === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  role="tab"
                  aria-selected={isOn}
                  className={`sd-filter ${isOn ? "on" : ""}`}
                  onClick={() => setFilter(f.key)}
                >
                  {isOn && (
                    <span className="sd-filter-pill" />
                  )}
                  <IconComponent size={15} />
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="sd-layout">
            {/* Division Cards */}
            <div
              key={filter}
              className={`sd-clusters ${visibleClusters.length === 1 ? "single" : ""}`}
            >
              {visibleClusters.map((cluster) => {
                const ClusterIcon = cluster.icon;
                return (
                  <article
                    key={cluster.key}
                    className={`sd-card ${visibleClusters.length === 1 ? "wide" : ""}`}
                  >
                    <div className="sd-card-head">
                      <img src={cluster.image} alt={cluster.title} />
                      <div className="sd-card-head-row">
                        <span className="sd-card-icon">
                          <ClusterIcon size={22} />
                        </span>
                        <div className="sd-card-titles">
                          <small>{cluster.short}</small>
                          <h3>{cluster.title}</h3>
                        </div>
                        <span className="sd-card-id">{cluster.id}</span>
                      </div>
                    </div>

                    <ul className="sd-rows">
                      {cluster.services.map((service) => {
                        const ServiceIcon = service.icon;
                        return (
                          <li key={service.subItem}>
                            <button
                              type="button"
                              className="sd-row"
                              onClick={() => appContext?.navTo?.({ item: 'services', subItem: service.subItem })}
                            >
                              <span className="sd-row-icon">
                                <ServiceIcon size={18} />
                              </span>
                              <span className="sd-row-body">
                                <span className="sd-row-title">{service.title}</span>
                                <span className="sd-row-desc">{service.desc}</span>
                              </span>
                              <ArrowUpRight size={18} className="sd-row-arrow" />
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </article>
                );
              })}
            </div>

            {/* Sticky Why-Choose Aside */}
            <aside className="sd-aside">
              <div
                className="sd-why"
              >
                <h3>
                  Why Choose <br />
                  <span>BAG Group?</span>
                </h3>

                {whyPoints.map((point) => {
                  const IconComponent = point.icon;
                  return (
                    <div key={point.title} className="sd-why-item">
                      <span className="sd-why-icon">
                        <IconComponent size={20} />
                      </span>
                      <div>
                        <h4>{point.title}</h4>
                        <p>{point.desc}</p>
                      </div>
                    </div>
                  );
                })}

                <button
                  type="button"
                  className="sd-cta"
                  onClick={() => appContext?.navTo?.({ item: 'contact_us' })}
                >
                  Request Service <ArrowRight size={18} />
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner3;
