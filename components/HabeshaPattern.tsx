
import React from 'react';

export const HabeshaPattern: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`habesha-pattern opacity-10 ${className}`}></div>
);

export const AccentDivider: React.FC = () => (
  <div className="flex items-center justify-center w-full my-8 space-x-4">
    <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#d97706] to-transparent"></div>
    <div className="text-[#d97706] opacity-60">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.5 9H21.5L16 13.5L18.5 20.5L12 16L5.5 20.5L8 13.5L2.5 9H9.5L12 2Z" />
      </svg>
    </div>
    <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#d97706] to-transparent"></div>
  </div>
);
