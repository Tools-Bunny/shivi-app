"use client";

import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Check, HelpCircle, Star, Sparkles, Layers, ShieldCheck, Activity } from 'lucide-react';

const INDUSTRIES_REGISTER = [
  { 
    id: "ecommerce", 
    name: "E-Commerce", 
    leak: "Marketplace overcharges", 
    tools: ["Automated Fee Auditor", "Dynamic Image Compressor", "Competitor Stock Radar"] 
  },
  { 
    id: "marketing", 
    name: "Digital Marketing", 
    leak: "Client budget runaways", 
    tools: ["Ad-Spend Burn Alert", "Whitelabel Client Portal", "ROAS Decay Tracker"] 
  },
  { 
    id: "manufacturing", 
    name: "Manufacturing/MSMEs", 
    leak: "Raw material tracking waste", 
    tools: ["Yield Leak Calculator", "Procurement Predictor", "Downtime Tracker"] 
  },
  { 
    id: "realestate", 
    name: "Real Estate", 
    leak: "Lead-to-property lag leaks", 
    tools: ["WhatsApp Property Match Engine", "ROI Yield Simulator", "Broker Split Matrix"] 
  },
  { 
    id: "restaurants", 
    name: "Restaurants & Cafes", 
    leak: "Shift shift-split discrepancies", 
    tools: ["Tip-Pooling Allocator", "COGS Recipe Matrix", "Shift Absentee Backup"] 
  },
  { 
    id: "legal", 
    name: "Legal Firms", 
    leak: "Unlogged billable gaps", 
    tools: ["Billable Hour Log Auditor", "Retainer Decay Predictor", "Deadline Matrix"] 
  },
  { 
    id: "healthcare", 
    name: "Healthcare Clinics", 
    leak: "Unfilled missed appointments", 
    tools: ["Appointment No-Show Preventer", "Equipment Lifecycle Monitor", "Escalation Queue"] 
  },
  { 
    id: "fintech", 
    name: "Fintech Teams", 
    leak: "Micro-transaction slippage", 
    tools: ["Gateway Fee Auditor", "Cross-Border FX Shield", "Chargeback Monitor"] 
  },
  { 
    id: "creators", 
    name: "Content Creators", 
    leak: "Broken sponsor links", 
    tools: ["Sponsorship ROI Calculator", "Content Splicer", "Affiliate Link Audit Radar"] 
  },
  { 
    id: "hotels", 
    name: "Boutique Hotels", 
    leak: "Double-booking penances", 
    tools: ["Overbooking Prevention Sync", "In-Room Compendium", "Late-Checkout Upsell"] 
  }
];

const FAQS_LIST = [
  { q: "How do your tools extract leaks without formal integration?", a: "Shivi runs entirely on zero-friction execution. You simply drop your standard data sample, transaction log, or file right into the browser dashboard. The platform parses the raw schema locally, identifies architectural leaks, and flags the anomalies immediately." },
  { q: "Is my business dataset secure?", a: "Completely. All micro-audits are processed directly within your client session. Your raw customer metrics and proprietary records are never stored on our cloud layers unless explicitly logged in your premium profile." },
  { q: "What does the $10 premium unlock provide?", a: "The free diagnostic layer exposes the presence and location of revenue leakage. The flat $10 one-time upgrade unlocks your unredacted layout, deep data reports, and pre-formatted dispute sheets designed to claim back losses instantly." },
  { q: "Can I manage custom variables across my workspace?", a: "Yes. Paid profile dashboards unlock structural parameter controls so you can calibrate fee schedules, regional tax markers, and specific margin conditions across all 30 industry utilities." }
];

export default function NotionReplicaHome() {
  const [activeTab, setActiveTab] = useState("ecommerce");
  const selectedInd = INDUSTRIES_REGISTER.find(i => i.id === activeTab) || INDUSTRIES_REGISTER[0];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans pb-32 antialiased selection:bg-zinc-100">
      
      {/* 1. NOTION HERO ARENA */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center space-y-6">
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-900 max-w-4xl mx-auto leading-[1.08]">
          Write less. Extract more. <br />
          <span className="text-zinc-500 font-normal underline decoration-zinc-300 decoration-wavy decoration-1 underline-offset-8">Eliminate revenue leaks instantly.</span>
        </h1>
        <p className="text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-normal pt-2">
          The ultra-minimalist, zero-setup workspace running 30 distinct daily micro-utilities. Designed for serious operators to wipe out structural overhead across 10 global industries.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <a href="/register" className="w-full sm:w-auto text-sm bg-zinc-900 text-white hover:bg-zinc-800 px-5 py-2.5 rounded-md font-medium transition-colors shadow-sm flex items-center justify-center gap-1.5">
            Get Started Free <ArrowRight className="h-4 w-4" />
          </a>
          <a href="/demo" className="w-full sm:w-auto text-sm border border-zinc-250 hover:bg-zinc-50 text-zinc-700 px-5 py-2.5 rounded-md font-medium transition-colors">
            Request Enterprise Demo
          </a>
        </div>
      </section>

      {/* 2. TABBED INDUSTRY ENGINE DOCK (NOTION WORKSPACE ESTHETIC) */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 bg-zinc-50 px-2.5 py-1 rounded border border-zinc-200">The 10-Industry System Registry</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-800">Every micro-utility under one roof.</h2>
        </div>

        {/* Tab Selection Row */}
        <div className="flex flex-wrap items-center justify-center gap-1 border-b border-zinc-200 pb-2 mb-8">
          {INDUSTRIES_REGISTER.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(ind.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === ind.id 
                  ? 'bg-zinc-100 text-zinc-900 font-bold' 
                  : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
              }`}
            >
              {ind.name}
            </button>
          ))}
        </div>

        {/* Interactive Workspace Viewport Container */}
        <div className="border border-zinc-200 bg-zinc-50/50 rounded-xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 space-y-4">
            <div className="h-9 w-9 bg-white border border-zinc-200 rounded-lg flex items-center justify-center text-zinc-600 shadow-sm">
              <Layers className="h-4 w-4" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900">{selectedInd.name} Matrix</h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Isolate your diagnostic flows into highly targeted processors. Paste transaction files, click parse, and view data disparities immediately with zero onboarding friction.
            </p>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-red-600 bg-red-50 border border-red-100 px-2 py-1 rounded">
              <span className="h-1 w-1 rounded-full bg-red-500"></span>
              Targets: {selectedInd.leak}
            </div>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 gap-3">
            {selectedInd.tools.map((tool, tIdx) => (
              <a 
                key={tIdx}
                href={`/tools/${selectedInd.id}-${tool.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="group border border-zinc-200 bg-white p-4 rounded-xl shadow-sm hover:border-zinc-400 transition-colors flex items-center justify-between"
              >
                <div className="space-y-1">
                  <div className="text-sm font-bold text-zinc-900 group-hover:text-black flex items-center gap-1">
                    {tool}
                  </div>
                  <div className="text-xs text-zinc-500 font-normal">Serious business micro-engine configuration tier.</div>
                </div>
                <ChevronRight className="h-4 w-4 text-zinc-400 group-hover:text-zinc-600 transition-transform group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PREMIUM PROOF & TESTIMONIAL GRID */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-widest">Global Operations Metric</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">Trusted by modern operators worldwide</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-zinc-200 bg-white p-6 rounded-xl shadow-sm space-y-4">
            <div className="flex items-center gap-0.5 text-zinc-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
            </div>
            <p className="text-sm text-zinc-600 italic font-normal leading-relaxed">
              "We dropped our platform tracking data right into Shivi's Ad-Spend Burn utility. It isolated three platform delivery gaps within minutes, saving our agency over $1,400 in hidden cost overruns this quarter."
            </p>
            <div className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
              — Principal Architect, Apex Media Group
            </div>
          </div>
          <div className="border border-zinc-200 bg-white p-6 rounded-xl shadow-sm space-y-4">
            <div className="flex items-center gap-0.5 text-zinc-400">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
            </div>
            <p className="text-sm text-zinc-600 italic font-normal leading-relaxed">
              "Shivi's Marketplace Fee Auditor is an essential tool. It pinpointed miscalculated commission rates instantly on a single report upload, transforming a complex audit procedure into a 10-second action loop."
            </p>
            <div className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
              — Director of Operations, CoreCart Brands
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOTION-STYLE ACCORDION FAQ BLOCK */}
      <section className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="text-center space-y-2">
          <div className="h-7 w-7 bg-zinc-50 border border-zinc-200 rounded-lg flex items-center justify-center mx-auto text-zinc-500 shadow-sm">
            <HelpCircle className="h-4 w-4" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900">Frequently Asked Questions</h2>
        </div>
        <div className="border border-zinc-200 rounded-xl divide-y divide-zinc-200 bg-white overflow-hidden shadow-sm">
          {FAQS_LIST.map((faq, idx) => (
            <div key={idx} className="p-5 space-y-2 hover:bg-zinc-50/50 transition-colors">
              <h4 className="text-sm font-bold text-zinc-900 flex items-center gap-2">
                <span className="text-zinc-300 font-mono text-xs">0{idx + 1}.</span> {faq.q}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pl-5 font-normal">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}