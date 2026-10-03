import React from 'react';
import { X, Sparkles, Bell, Radio, Info } from 'lucide-react';

interface LiveUpdatesPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LiveUpdatesPreviewModal: React.FC<LiveUpdatesPreviewModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white border border-[#E7E5DF] rounded-lg w-full max-w-lg p-6 relative shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-md text-[#737373] hover:text-[#171717] bg-[#F6F5F0] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Status Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#FDFBF7] text-[#A3791B] border border-[#E5D5A8]">
            Coming Soon — Concept Preview
          </span>
        </div>

        {/* Feature Title */}
        <h3 className="text-xl font-serif-editorial font-bold text-[#171717] flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#A3791B]" /> Live Event Updates
        </h3>

        <p className="text-xs text-[#737373] leading-relaxed mb-5">
          Session changes, announcements and important event updates — designed for a future ULink rollout.
        </p>

        {/* Feature Cards */}
        <div className="space-y-2.5 mb-5">
          <div className="p-3 bg-[#F6F5F0] border border-[#E7E5DF] rounded-md">
            <div className="flex items-center justify-between text-xs text-[#737373] mb-1">
              <span className="font-semibold text-[#171717] flex items-center gap-1">
                <Bell className="w-3.5 h-3.5 text-[#A3791B]" /> Push Announcements
              </span>
              <span className="text-[10px] bg-white border border-[#E7E5DF] px-1.5 py-0.5 rounded font-mono">Future Feature</span>
            </div>
            <p className="text-xs text-[#737373]">
              Real-time schedule alerts directly on attendee mobile screens.
            </p>
          </div>

          <div className="p-3 bg-[#F6F5F0] border border-[#E7E5DF] rounded-md">
            <div className="flex items-center justify-between text-xs text-[#737373] mb-1">
              <span className="font-semibold text-[#171717] flex items-center gap-1">
                <Radio className="w-3.5 h-3.5 text-[#A3791B]" /> Stage Broadcasts
              </span>
              <span className="text-[10px] bg-white border border-[#E7E5DF] px-1.5 py-0.5 rounded font-mono">Future Feature</span>
            </div>
            <p className="text-xs text-[#737373]">
              Organizer broadcasts during key keynote transitions.
            </p>
          </div>
        </div>

        <div className="p-3 bg-[#FDFBF7] border border-[#E5D5A8] rounded-md flex items-start gap-2 text-xs text-[#A3791B] mb-5">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>
            This feature is a visual preview for <strong>The Founder’s Network – Hyderabad</strong>. Live push notifications are disabled for this preview version.
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-md font-semibold bg-[#111111] hover:bg-black text-white text-xs transition-colors cursor-pointer"
        >
          Got it
        </button>
      </div>
    </div>
  );
};
