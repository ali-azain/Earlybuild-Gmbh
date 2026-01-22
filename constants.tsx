
import React from 'react';
import { 
  FiMapPin, 
  FiBarChart2, 
  FiTarget, 
  FiZap 
} from 'react-icons/fi';

export const METRICS = [
  { label: "Faster Feasibility", value: "30", suffix: "x", prefix: "" },
  { label: "Annual Savings", value: "200", suffix: "k+", prefix: "€" },
  { label: "Sites Analyzed", value: "10", suffix: "k+", prefix: "" }
];

export const WORKFLOW = [
  {
    title: "Plan Sites in Minutes",
    description: "Auto-collect location data (47k+ sources) for instant situational awareness.",
    icon: <FiMapPin className="text-3xl text-blue-500" />
  },
  {
    title: "Close with Data Certainty",
    description: "AI market analysis in 90s. Replace weeks of research with data-backed decisions.",
    icon: <FiBarChart2 className="text-3xl text-green-500" />
  },
  {
    title: "Maximize Potential",
    description: "Precise site recommendations and massing within 10% error margin.",
    icon: <FiTarget className="text-3xl text-orange-500" />
  },
  {
    title: "Action Instantly",
    description: "Rocket export to Revit, AutoCAD, or Excel. No more manual data entry.",
    icon: <FiZap className="text-3xl text-purple-500" />
  }
];

export const ROLE_DATA: Record<string, { benefit: string; description: string; visual: string }> = {
  Developers: {
    benefit: "Vet deals pre-investment",
    description: "Stop wasting money on sites that don't pencil. Pro forma validation in real-time.",
    visual: "München-Schwabing: 87% Feasibility"
  },
  Architekten: {
    benefit: "3x layout iterations",
    description: "Generate building massing based on local zoning regulations instantly.",
    visual: "Nürnberg Industrial: 24.5k m² GFA"
  },
  Planer: {
    benefit: "Zoning + topography AI",
    description: "Automated cut/fill calculations and zoning envelope compliance checks.",
    visual: "Berlin-Mitte: 4.2 FAR Compliance"
  },
  Makler: {
    benefit: "Lead qualification",
    description: "Match opportunities to buyer needs with AI emotional-need indexing.",
    visual: "Frankfurt: High-yield Retail Match"
  }
};
