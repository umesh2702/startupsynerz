import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { EVENT_DETAILS, EVENT_POSTER_META } from '../data/eventData';
import type { TabType } from './BottomNav';


interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenLivePreview: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenLivePreview }) => {
  const navItems: { id: TabType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'people', label: 'People' },
    { id: 'connect', label: 'Connect' },
    { id: 'essentials', label: 'Essentials' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E7E5DF]">
      {/* Top Main Bar */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo and Event Branding */}
        <div className="flex items-center gap-3">
          <div className="bg-[#111111] px-2 py-1 rounded border border-neutral-800 flex items-center justify-center flex-shrink-0">
            <img 
              src={EVENT_POSTER_META.logoImageUrl} 
              alt="Startup Synerz Official Logo" 
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm sm:text-base font-bold text-[#171717] tracking-tight leading-none">
                {EVENT_DETAILS.name}
              </h1>
              <span className="text-[10px] font-semibold text-[#A3791B] bg-[#FDFBF7] border border-[#E5D5A8] px-1.5 py-0.5 rounded">
                Hyderabad
              </span>
            </div>
            <p className="text-[11px] text-[#737373] font-medium mt-0.5">
              Hyderabad Startups Club
            </p>
          </div>
        </div>

        {/* Desktop Horizontal Navigation */}
        <nav className="hidden md:flex items-center gap-1 border-l border-[#E7E5DF] pl-6">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#111111] text-white'
                    : 'text-[#737373] hover:text-[#171717] hover:bg-[#F6F5F0]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Companion Label & Live Preview Trigger */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenLivePreview}
            className="text-xs font-semibold text-[#737373] hover:text-[#171717] hover:underline cursor-pointer hidden sm:inline-block"
          >
            Live Updates
          </button>
          <span className="text-[11px] font-semibold text-[#737373] bg-[#F6F5F0] border border-[#E7E5DF] px-2 py-1 rounded">
            ULink Companion
          </span>
        </div>
      </div>

      {/* Compact Metadata Sub-Row */}
      <div className="bg-[#F6F5F0] border-t border-[#E7E5DF] px-4 py-1.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-[11px] text-[#737373] overflow-x-auto no-scrollbar gap-4">
          <div className="flex items-center gap-4 whitespace-nowrap">
            <span className="flex items-center gap-1.5 font-medium text-[#171717]">
              <Calendar className="w-3 h-3 text-[#A3791B]" /> {EVENT_DETAILS.date}
            </span>
            <span className="text-[#E7E5DF]">|</span>
            <span className="flex items-center gap-1.5 text-[#737373]">
              <MapPin className="w-3 h-3 text-[#A3791B]" /> {EVENT_DETAILS.venueName}, {EVENT_DETAILS.venueBranch}
            </span>
          </div>
          <div className="text-[10px] text-[#737373] whitespace-nowrap">
            Concept Preview • 3 Oct 2026
          </div>
        </div>
      </div>
    </header>
  );
};
