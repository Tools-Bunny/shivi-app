"use client";

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Layers, HelpCircle, Star } from 'lucide-react';

const FEATURED_INDUSTRIES = [
  { name: "E-Commerce", tools: ["Fee Auditor", "WebP Compressor", "Competitor Stock Radar"], leak: "Marketplace margin overcharges" },
  { name: "Digital Marketing", tools: ["Ad-Spend Burn Alert", "Whitelabel Client Portal", "ROAS Decay Tracker"], leak: "Client budget runaways" },
  { name: "Manufacturing/MSMEs", tools: ["Yield Leak Calculator", "Procurement Predictor", "Downtime Tracker"], leak: "Raw material tracking waste" },
  { name: "Real Estate", tools: ["WhatsApp Match Engine", "ROI Yield Simulator", "Broker Split Matrix"], leak: "Lead-to-property lag leaks" },
  { name: "Restaurants & Cafes", tools: ["Tip-Pooling Allocator", "COGS Recipe Matrix", "Shift Absentee Backup"], leak: "Shift shift-split discrepancies" },
  { name: "Legal Firms", tools: ["Billable Hour Auditor", "Retainer Decay Predictor", "Deadline Matrix"], leak: "Unlogged billable gaps" },
  { name: "Healthcare Clinics", tools: ["No-Show Preventer", "Equipment Lifecycle Monitor", "Escalation Queue"], leak: "Unfilled missed appointments" },
  { name: "Fintech Teams", tools: ["Gateway Fee Auditor", "Cross-Border FX Shield", "Chargeback Monitor"], leak: "Micro-transaction slippage" },
  { name: "Content Creators", tools: ["Sponsorship ROI Calculator", "Content Splicer", "Link Audit Radar"], leak: "Broken sponsor links" },
  { name: "Boutique Hotels", tools: ["Overbooking Sync", "In-Room Compendium", "Late-Checkout Upsell"], leak: "Double-booking penances" }
];

const FAQS = [
  { q: "How do your tools extract leaks without formal integration?", a: "Shivi runs entirely on zero-friction execution. You simply drop your standard data sample, transaction log, or file right into the browser dashboard. The platform parses the raw schema locally, identifies architectural leaks, and flags the anomalies immediately." },
  { q: "Is my business dataset secure?", a: "Completely. All micro-audits are processed directly within your client session. Your raw customer metrics and proprietary records are never stored on our cloud layers unless explicitly logged in your premium profile." },
  { q: "What does the $10 premium unlock provide?", a: "The free diagnostic layer exposes the presence and location of revenue leakage. The flat $10 one-time upgrade unlocks your unredacted layout, deep data reports, and pre-formatted dispute sheets designed to claim back losses instantly." },
  { q: "Can I manage custom variables across my workspace?", a: "Yes. Paid profile dashboards unlock structural parameter controls so you can calibrate fee schedules, regional tax markers, and specific margin conditions across all 30 industry utilities." }
];

export default function NotionReplicaHome() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans pb-24 selection:bg-zinc-800 selection:text-zinc-150">
      
      {/* 1. HERO ARENA SECTION */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-normal tracking-tight leading-[1.1] text-zinc-50 max-w-3xl mx-auto">
          Write less. Extract more. <br />
          <span className="text-zinc-400 font-light">Eliminate revenue leaks instantly.</span>
        </h1>
        <p className="text-base sm:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
          The ultra-minimalist, zero-setup workspace running 30 distinct daily micro-utilities. Designed for serious operators to wipe out structural overhead across 10 global industries.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="/register" className="w-full sm:w-auto text-xs font-mono bg-zinc-50 text-zinc-950 hover:bg-zinc-200 px-6 py-3 rounded font-bold transition-all shadow-md flex items-center justify-center gap-2">
            Get Started Free <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <a href="/demo" className="w-full sm:w-auto text-xs font-mono border border-zinc-800 hover:bg-zinc-900/50 text-zinc-300 px-6 py-3 rounded transition-all">
            Request Enterprise Demo
          </a>
        </div>
      </section>

      {/* 2. THE NOTION-STYLE FEATURE MATRIX WORKSPACE */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="border border-zinc-900 bg-zinc-950 rounded-xl overflow-hidden shadow-2xl">
          <div className="border-b border-zinc-900 px-6 py-4 bg-zinc-900/10">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400">The 10-Industry System Registry</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-900">
            
            {/* Left Workspace Block */}
            <div className="p-8 space-y-8">
              <div className="space-y-2">
                <div className="h-8 w-8 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center text-zinc-400">
                  <Layers className="h-4 w-4" />
                </div>
                <h2 className="text-xl font-normal tracking-tight text-zinc-100">Modular Operational Architecture</h2>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Each industry dashboard isolates your diagnostic flows into highly targeted processors. Paste transaction files, click parse, and view data disparities immediately with zero onboarding friction.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-zinc-900/60">
                <div className="flex items-start gap-2.5 text-xs">
                  <CheckCircle2 className="h-4 w-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                  <div><strong className="text-zinc-200 font-medium">30 Specialized Micro-Engines</strong>: Custom utility frameworks from fee audit trackers to real-time calendar vectors.</div>
                </div>
                <div className="flex items-start gap-2.5 text-xs">
                  <CheckCircle2 className="h-4 w-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                  <div><strong className="text-zinc-200 font-medium">The 10-to-1000 Premium Model</strong>: Check data samples for free, find anomalies, and unlock structured output matrices for a flat $10.</div>
                </div>
              </div>
            </div>

            {/* Right Matrix Directory List */}
            <div className="p-6 max-h-[460px] overflow-y-auto space-y-2.5 bg-zinc-900/5">
              {FEATURED_INDUSTRIES.map((ind, idx) => (
                <div key={idx} className="border border-zinc-900 bg-zinc-950 p-4 rounded-lg hover:border-zinc-800 transition-colors group">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono font-bold text-zinc-200">{ind.name}</span>
                    <span className="text-[10px] font-mono text-red-400 bg-red-950/30 px-1.5 py-0.5 rounded border border-red-900/40">Targets: {ind.leak}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {ind.tools.map((t, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono bg-zinc-900 text-zinc-400 border border-zinc-850 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. PREMIUM PROOF & TESTIMONIAL ENGINE */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <div className="text-center">
          <span className="text-xs font-mono uppercase text-zinc-500 tracking-widest">Global Traction Metrics</span>
          <h2 className="text-2xl font-normal tracking-tight mt-1 text-zinc-200">Trusted by founders worldwide</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-zinc-900 bg-zinc-900/10 p-6 rounded-lg space-y-4">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current text-zinc-300" />)}
            </div>
            <p className="text-xs text-zinc-400 italic font-sans leading-relaxed">
              "We dropped our platform tracking data right into Shivi's Ad-Spend Burn utility. It isolated three platform delivery gaps within minutes, saving our agency over $1,400 in hidden cost overruns this quarter."
            </p>
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
              — Principal Architect, Apex Media Group
            </div>
          </div>
          <div className="border border-zinc-900 bg-zinc-900/10 p-6 rounded-lg space-y-4">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current text-zinc-300" />)}
            </div>
            <p className="text-xs text-zinc-400 italic font-sans leading-relaxed">
              "Shivi's Marketplace Fee Auditor is an essential tool. It pinpointed miscalculated commission rates instantly on a single report upload, transforming a complex audit procedure into a 10-second action loop."
            </p>
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
              — Director of Operations, CoreCart Brands
            </div>
          </div>
        </div>
      </section>

      {/* 4. DEEP SEO STRUCTURAL FAQ BOARD */}
      <section className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="text-center space-y-1">
          <div className="h-6 w-6 bg-zinc-900 border border-zinc-850 rounded flex items-center justify-center mx-auto text-zinc-400 mb-2">
            <HelpCircle className="h-3.5 w-3.5" />
          </div>
          <h2 className="text-xl font-normal tracking-tight text-zinc-200">Frequently Asked Questions</h2>
          <p className="text-xs text-zinc-500 font-mono">SYSTEM LOG // USER SUPPORT DIRECTORY</p>
        </div>
        <div className="border border-zinc-900 rounded-lg divide-y divide-zinc-900 bg-zinc-950 overflow-hidden">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="p-5 space-y-2 group hover:bg-zinc-900/20 transition-colors">
              <h4 className="text-xs font-mono font-bold text-zinc-200 flex items-center gap-2">
                <span className="text-zinc-600">0{idx + 1}.</span> {faq.q}
              </h4>
              <p className="text-xs text-zinc-400 font-sans leading-relaxed pl-5 font-light">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}