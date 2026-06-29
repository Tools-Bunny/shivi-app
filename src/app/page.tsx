"use client";

import React from 'react';

export default function WorkspaceHome() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 flex flex-col items-center justify-center p-8 text-center font-mono">
      <div className="max-w-md space-y-4">
        <div className="h-12 w-12 bg-zinc-100 rounded text-zinc-950 font-black text-xl flex items-center justify-center mx-auto tracking-tighter">
          S
        </div>
        <h1 className="text-xl font-bold tracking-widest text-zinc-100">SHIVI.APP</h1>
        <p className="text-xs text-zinc-500 leading-relaxed">
          Infrastructure pipeline successfully connected. Ready to start building our custom layouts.
        </p>
      </div>
    </div>
  );
}