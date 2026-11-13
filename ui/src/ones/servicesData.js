import {
  Anchor,
  Utensils,
  Wrench,
  FileCheck2,
  Truck,
  ArrowLeftRight,
  ShieldCheck,
  Zap,
  Cable,
  Cpu,
  Lightbulb,
  Globe,
  Boxes,
  Building2,
} from "lucide-react";

import imgChandling from "../assets/chadling.jpeg";
import imgFreight from "../assets/freight.jpg";
import imgElectrical from "../assets/electrical.jpg";
import imgGoods from "../assets/goods.jpg";

/**
 * Single source of truth for BAG Group services.
 * Services are grouped into divisions (clusters) so the site presents
 * four clear offerings instead of ten overlapping ones.
 * Shared by ServicesBanner1 (division showcase) and HomeBanner3 (service directory).
 */
export const serviceClusters = [
  {
    id: "01",
    key: "marine",
    title: "Ship Chandling",
    short: "Marine Supply",
    tagline: "Vessel Provisioning & Stores",
    summary:
      "Complete ship supply to vessels at berth and anchorage — provisions, bonded stores, deck and engine consumables delivered around the clock across Tanzanian ports.",
    icon: Anchor,
    image: imgChandling,
    subItem: "ship-chandling",
    highlights: ["24/7 Port Delivery", "Fresh & Frozen Provisions", "Bonded Stores", "IMPA / ISSA Compliant"],
    services: [
      {
        title: "Ship Chandling & Vessel Provisioning",
        desc: "Provisions, bonded stores, safety gear and maintenance items delivered to berth or anchorage.",
        icon: Anchor,
        subItem: "ship-chandling",
      },
      {
        title: "Food & Beverage Supply to Ships",
        desc: "Fresh, chilled, frozen and dry foods, drinking water and beverages to marine hygiene standards.",
        icon: Utensils,
        subItem: "food-beverage-supply",
      },
      {
        title: "Marine, Deck & Engine Stores",
        desc: "Ropes, valves, lubricants, paints, engine spares and PPE to IMPA / ISSA codes.",
        icon: Wrench,
        subItem: "deck-engine-stores",
      },
    ],
  },
  {
    id: "02",
    key: "logistics",
    title: "Clearing & Forwarding",
    short: "Customs & Logistics",
    tagline: "Customs, Freight & Trade Flow",
    summary:
      "Licensed customs clearance and multimodal freight forwarding that moves cargo through Tanzanian ports and across East African corridors without delay.",
    icon: FileCheck2,
    image: imgFreight,
    subItem: "customs-clearing",
    highlights: ["Licensed Customs Agents", "Transit Cargo", "Sea, Air & Road", "Import / Export Docs"],
    services: [
      {
        title: "Customs Clearing & Forwarding",
        desc: "Port clearance, tariff advisory, import/export documentation and transit coordination.",
        icon: FileCheck2,
        subItem: "customs-clearing",
      },
      {
        title: "Freight Forwarding & Logistics",
        desc: "Ocean, air and cross-border road freight with end-to-end shipment tracking.",
        icon: Truck,
        subItem: "freight-forwarding",
      },
      {
        title: "Import & Export Services",
        desc: "Cross-border trade execution, compliance assurance and bonded warehousing.",
        icon: ArrowLeftRight,
        subItem: "import-export",
      },
      {
        title: "Contract Supply & Logistics Support",
        desc: "SLA-backed supply agreements, buffer inventory and dedicated haulage.",
        icon: ShieldCheck,
        subItem: "contract-logistics",
      },
    ],
  },
  {
    id: "03",
    key: "electrical",
    title: "Electrical Supply",
    short: "Electrical Equipment",
    tagline: "Power, Control & Marine Electricals",
    summary:
      "Genuine electrical equipment, components and spares for vessels, industrial plants and institutional projects — sourced from verified manufacturers.",
    icon: Zap,
    image: imgElectrical,
    subItem: "electrical-equipment-supply",
    highlights: ["Switchgear & Panels", "Cables & Wiring", "Generators & Motors", "Marine Electricals"],
    services: [
      {
        title: "Electrical Equipment Supply",
        desc: "Switchgear, distribution boards, breakers, control panels and protection devices.",
        icon: Zap,
        subItem: "electrical-equipment-supply",
      },
      {
        title: "Cables, Wiring & Accessories",
        desc: "Power and marine-grade cables, glands, conduits, terminals and installation accessories.",
        icon: Cable,
        subItem: "cables-wiring",
      },
      {
        title: "Generators, Motors & Spares",
        desc: "Generator sets, electric motors, alternators and genuine replacement parts.",
        icon: Cpu,
        subItem: "generators-motors",
      },
      {
        title: "Lighting & Marine Electricals",
        desc: "Navigation, deck and industrial lighting plus certified marine electrical fittings.",
        icon: Lightbulb,
        subItem: "lighting-marine-electricals",
      },
    ],
  },
  {
    id: "04",
    key: "trading",
    title: "Trading & Procurement",
    short: "General Trading",
    tagline: "Sourcing for Industry & Institutions",
    summary:
      "Strategic sourcing and supply of goods, equipment and materials for corporate, governmental and NGO partners across East Africa.",
    icon: Globe,
    image: imgGoods,
    subItem: "general-trading",
    highlights: ["Global Sourcing", "Vetted Suppliers", "Institutional Contracts", "Nationwide Delivery"],
    services: [
      {
        title: "General Trading & Procurement",
        desc: "International sourcing, vendor vetting, purchasing and distribution of commercial goods.",
        icon: Globe,
        subItem: "general-trading",
      },
      {
        title: "Supply of Goods, Equipment & Materials",
        desc: "Industrial tools, machinery and construction materials with verified quality.",
        icon: Boxes,
        subItem: "equipment-materials-supply",
      },
      {
        title: "Corporate & Institutional Supplies",
        desc: "Contract procurement for corporations, government bodies, NGOs and mining operations.",
        icon: Building2,
        subItem: "corporate-supplies",
      },
    ],
  },
];
