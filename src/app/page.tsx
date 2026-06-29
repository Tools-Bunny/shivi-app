"use client";

import React, { useState } from 'react';
import { ArrowRight, ShieldAlert, FileSpreadsheet } from 'lucide-react';
import { auditMarketplaceCSV, AuditResult } from '@/modules/ecommerce/auditor';

export default function WorkspaceHome() {
  const [auditData, setAuditData] = useState<AuditResult | null>(null);

  // Quick automated validation run using sample raw text inputs
  const runSampleAudit = () => {
    const mockCSV = `Order ID,Amount,Marketplace Fee,Expected Fee\nORD-9921,1200,240,180\nORD-4402,850,110,110\nORD-8812,2100,420,310`;
    auditMarketplaceCSV(mockCSV).then(result => {
      setAuditData(result);
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col selection:bg-zinc-800 selection:text-zinc-100">
      {/* Premium Minimal Navigation */}
      <header className="border-b border-zinc-900 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-zinc-50 rounded flex items-center justify-center text-zinc-950 font-black text-xs tracking-tighter">S</div>
          <span className="font-mono tracking-widest font-bold text-sm">SHIVI.APP</span>
        </div>
        <div className="text-xs font-mono text-zinc-500">
          STATUS // RUNNING ENGINE
        </div>
      </header>

      {/* Workspace Arena Layout */}
      <main className="flex-1 max-w-4xl mx-auto w-full p-8 space-y-8">
        <div>
          <span className="text-xs font-mono uppercase text-zinc-500 tracking-wider">Active Module / E-Commerce</span>
          <h1 className="text-3xl font-normal tracking-tight mt-1">Marketplace Fee Auditor</h1>
          <p className="text-sm text-zinc-400 mt-2 font-light">Find hidden leakages from marketplace weight dimension or referral fee miscalculations instantly.</p>
        </div>

        {/* Workspace Zero Setup Drag Zone */}
        <div 
          onClick={runSampleAudit} 
          className="border border-dashed border-zinc-800 bg-zinc-900/10 rounded-lg p-12 text-center flex flex-col items-center justify-center space-y-4 hover:border-zinc-700 transition-colors cursor-pointer group"
        >
          <div className="h-10 w-10 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center group-hover:scale-105 transition-transform">
            <FileSpreadsheet className="h-5 w-5 text-zinc-400" />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-mono text-zinc-300">Click here to run diagnostic test sequence data</p>
            <p className="text-[10px] font-mono text-zinc-600">Simulates data extraction with zero onboarding friction.</p>
          </div>
        </div>

        {/* Dynamic Micro-Hook Data Result Zone */}
        {auditData && (
          <div className="border border-zinc-900 rounded bg-zinc-900/20 p-6 space-y-6 animate-fade-in">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 border border-zinc-900 bg-zinc-950/40 rounded">
                <p className="text-[10px] font-mono uppercase text-zinc-500">Processed Rows</p>
                <p className="text-xl font-normal mt-1">{auditData.totalOrdersProcessed}</p>
              </div>
              <div className="p-4 border border-zinc-900 bg-zinc-950/40 rounded">
                <p className="text-[10px] font-mono uppercase text-zinc-500">Total Volume</p>
                <p className="text-xl font-normal mt-1">${auditData.totalRevenue}</p>
              </div>
              <div className="p-4 border border-zinc-800 bg-zinc-900 text-red-400 rounded">
                <p className="text-[10px] font-mono uppercase text-zinc-500 text-red-500">Detected Leakage</p>
                <p className="text-xl font-bold mt-1">${auditData.detectedLeakage}</p>
              </div>
            </div>

            {/* 10-to-1000 Premium Monetization Paywall Trigger Hook */}
            <div className="border border-zinc-800 bg-zinc-950 p-4 rounded flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex gap-3 items-start">
                <ShieldAlert className="h-4 w-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-0.5">
                  <h4 className="text-xs font-mono text-zinc-200">Revenue Leaks Pinpointed Successfully</h4>
                  <p className="text-[11px] text-zinc-500">We have identified the precise transaction lines where you overpaid fees.</p>
                </div>
              </div>
              <button className="whitespace-nowrap text-xs font-mono bg-zinc-50 text-zinc-950 px-4 py-2 rounded font-bold hover:bg-zinc-200 transition-all flex items-center gap-1.5 self-end sm:self-auto">
                UNLOCK PRE-FILLED DISPUTE SHEET FOR $10 <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}