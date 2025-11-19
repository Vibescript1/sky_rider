import React from 'react';

export const SectionTitle = ({ children, className = "" }) => (
  <h2 className={`font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 ${className}`}>
    {children}
  </h2>
);

export const SectionSubtitle = ({ children, className = "" }) => (
  <p className={`text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${className}`}>
    {children}
  </p>
);

export const SectionBadge = ({ children, icon: Icon, className = "" }) => (
  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 ${className}`}>
    {Icon && <Icon className="w-4 h-4 text-yellow-400" />}
    <span className="text-sm text-white/80">{children}</span>
  </div>
);