"use client";

import React, { useState } from 'react';
import './globals.css'; // <--- MAKE SURE THIS IS EXACTLY HERE

// 10 Core Industries and their respective 3 primary tools (30 tools total)
const INST_MATRIX = {
  "E-Commerce": [
    { name: "Automated Fee Auditor", desc: "Find marketplace commission overcharges" },
    { name: "Dynamic Image Compressor", desc: "WebP bulk converter for fast loading" },
    { name: "Competitor Stock Radar", desc: "Automated competitor daily price monitor" }
  ],
  "Digital Marketing": [
    { name: "Ad-Spend Burn Alert", desc: "Meta/Google multi-platform alert system" },
    { name: "Whitelabel Notion Portal", desc: "One-click professional client dashboard" },
    { name: "ROAS Decay Tracker", desc: "Real-time ad fatigue analysis tracking" }
  ],
  "Manufacturing/MSMEs": [
    { name: "Raw Material Yield Calculator", desc: "Track raw materials waste & leaks" },
    { name: "Procurement Cost Predictor", desc: "Optimize vendor order frequencies" },
    { name: "Shop-Floor Downtime Tracker", desc: "Analyze structural machine delays" }
  ],
  "Real Estate": [
    { name: "WhatsApp Property Match Engine", desc: "Auto-match leads to listings" },
    { name: "ROI Yield Simulator", desc: "Calculate exact multi-unit rental yields" },
    { name: "Broker Split Matrix", desc: "Manage secondary market broker shares" }
  ],
  "Restaurants & Cafes": [
    { name: "Tip-Pooling Allocator", desc: "Compliant staff shift tips splitter" },
    { name: "COGS Recipe Matrix", desc: "Live menu item ingredient cost calculator" },
    { name: "Shift Absentees Backup Link", desc: "SMS on-call notification system" }
  ],
  "Legal Firms": [
    { name: "Billable Hour Log Auditor", desc: "Flag lost or unlogged lawyer hours" },
    { name: "Retainer Retraction Predictor", desc: "Track client activity engagement flags" },
    { name: "Court Filing Deadline Matrix", desc: "Strict jurisdiction timeline calculator" }
  ],
  "Healthcare Clinics": [
    { name: "Appointment No-Show Preventer", desc: "Calculate patient cancellation risks" },
    { name: "Medical Equipment Lifecycle Tracker", desc: "Prevent expensive gear breakdown lags" },
    { name: "Staff Escalation Queue", desc: "Manage clinic waiting room stress points" }
  ],
  "Fintech Teams": [
    { name: "Stripe/Gateway Fee Auditor", desc: "Expose micro-transaction leak variations" },
    { name: "Cross-Border FX Shield", desc: "Monitor multi-currency markup margins" },
    { name: "Chargeback Exposure Matrix", desc: "Flag dangerous merchant account thresholds" }
  ],
  "Content Creators": [
    { name: "Sponsorship ROI Calculator", desc: "Generate media kits using real data" },
    { name: "Multi-Platform Content Splicer", desc: "Turn long forms into structured short text" },
    { name: "Affiliate Link Audit Radar", desc: "Scan and flag broken sponsor links instantly" }
  ],
  "Boutique Hotels": [
    { name: "Overbooking Prevention Sync", desc: "Lightweight cross-platform calendar engine" },
    { name: "In-Room Digital Compendium", desc: "Responsive mobile guest rule QR site" },
    { name: "Late-Checkout Upsell Automator", desc: "Send automated guest departure morning offers" }
  ]
};

type IndustryKey = keyof typeof INST_MATRIX;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState<IndustryKey>("E-Commerce");

  return (
    <html lang="en">
      <body className="bg-zinc-950 text-zinc-50 antialiased selection:bg-zinc-800 selection:text-zinc-100">
        
        {/* NOTION REPLICA MEGA HEADER */}
        <header className="border-b border-zinc-900 bg-zinc-950 sticky top-0 z-50 text-xs font-mono">
          <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
            
            {/* Left Zone: Logo */}
            <div className="flex items-center gap-6">
              <a href="/" className="flex items-center gap-2 group">
                <div className="h-5 w-5 bg-zinc-100 rounded flex items-center justify-center text-zinc-950 font-black text-[11px] tracking-tighter">S</div>
                <span className="tracking-widest font-bold text-zinc-200 group-hover:text-white">SHIVI.APP</span>
              </a>

              {/* Center Zone: Dropdown Menu System */}
              <nav className="hidden md:flex items-center gap-4 text-zinc-400">
                <div 
                  className="relative"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <button className={`hover:text-zinc-200 py-4 flex items-center gap-1 ${megaMenuOpen ? 'text-zinc-100' : ''}`}>
                    Services <span className="text-[9px]">▼</span>
                  </button>

                  {/* Mega Menu Drawer */}
                  {megaMenuOpen && (
                    <div className="absolute top-11 left-0 w-[640px] bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl grid grid-cols-5 divide-x divide-zinc-800 p-2 animate-fade-in">
                      {/* Left side: 10 Industries */}
                      <div className="col-span-2 space-y-0.5 max-h-[380px] overflow-y-auto pr-1">
                        {Object.keys(INST_MATRIX).map((industry) => (
                          <button
                            key={industry}
                            onMouseEnter={() => setActiveIndustry(industry as IndustryKey)}
                            onClick={() => setActiveIndustry(industry as IndustryKey)}
                            className={`w-full text-left px-2 py-1.5 rounded transition-colors ${
                              activeIndustry === industry 
                                ? 'bg-zinc-800 text-zinc-50 font-bold' 
                                : 'hover:bg-zinc-850/50 text-zinc-400'
                            }`}
                          >
                            {industry}
                          </button>
                        ))}
                      </div>

                      {/* Right side: 3 Interactive Premium Tools */}
                      <div className="col-span-3 pl-3 py-1 space-y-3 max-h-[380px] overflow-y-auto">
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">
                          {activeIndustry} Operational Matrix
                        </div>
                        {INST_MATRIX[activeIndustry].map((tool, idx) => (
                          <a 
                            key={idx} 
                            href={`/tools/${activeIndustry.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${tool.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                            className="block group/item space-y-0.5 hover:bg-zinc-850 p-1.5 rounded"
                          >
                            <div className="text-zinc-200 group-hover/item:text-white font-medium flex items-center gap-1">
                              {tool.name} <span className="opacity-0 group-hover/item:opacity-100 transition-opacity text-[10px]">→</span>
                            </div>
                            <div className="text-[10px] text-zinc-500 font-sans leading-normal">{tool.desc}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <a href="/blog" className="hover:text-zinc-200">Resources</a>
                <a href="/pricing" className="hover:text-zinc-200">Pricing</a>
                <a href="/demo" className="hover:text-zinc-200">Book Demo</a>
              </nav>
            </div>

            {/* Right Zone: Action Buttons */}
            <div className="flex items-center gap-3">
              <a href="/login" className="text-zinc-400 hover:text-zinc-200 px-2 py-1">Log In</a>
              <a href="/register" className="bg-zinc-50 text-zinc-950 hover:bg-zinc-200 px-3 py-1.5 rounded font-bold transition-all shadow-sm">
                Get Started Free
              </a>
            </div>

          </div>
        </header>

        {/* PAGE BODY LOADER */}
        {children}

      </body>
    </html>
  );
}