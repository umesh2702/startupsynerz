import React from 'react';
import { MapPin, Phone, Mail, Globe, Calendar, Navigation, Mic, ExternalLink } from 'lucide-react';
import { EVENT_DETAILS } from '../data/eventData';


interface EssentialsPageProps {
  onOpenPitchTrainer: () => void;
}

export const EssentialsPage: React.FC<EssentialsPageProps> = ({ onOpenPitchTrainer }) => {
  return (
    <div className="space-y-6 pb-20 animate-fadeIn">
      {/* Header */}
      <div className="bg-white border border-[#E7E5DF] rounded-lg p-6 space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#A3791B]">
          EVENT ESSENTIALS
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-[#171717]">
          Attendee Guide & Contact Details
        </h1>
        <p className="text-xs text-[#737373]">
          Essential details for attending The Founder’s Network — Hyderabad Edition.
        </p>
      </div>

      {/* Compact Information Table */}
      <div className="bg-white border border-[#E7E5DF] rounded-lg divide-y divide-[#E7E5DF]">
        {/* 1. Date & Timings */}
        <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase text-[#A3791B] tracking-wider flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> Date & Schedule
            </div>
            <div className="text-sm font-bold text-[#171717]">{EVENT_DETAILS.date}</div>
            <div className="text-xs text-[#737373]">
              Check-in: <span className="font-semibold text-[#171717]">{EVENT_DETAILS.registrationTime}</span> | Main Event: <span className="font-semibold text-[#171717]">{EVENT_DETAILS.mainEventTime}</span>
            </div>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#F6F5F0] border border-[#E7E5DF] text-[#171717] self-start sm:self-center">
            NanoSpace Coworking
          </span>
        </div>

        {/* 2. Venue & Navigation */}
        <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase text-[#A3791B] tracking-wider flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> Venue Location
            </div>
            <div className="text-sm font-bold text-[#171717]">{EVENT_DETAILS.venueName} — {EVENT_DETAILS.venueBranch}</div>
            <div className="text-xs text-[#737373]">{EVENT_DETAILS.venueAddress}</div>
          </div>
          <a
            href={EVENT_DETAILS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md font-semibold bg-[#111111] hover:bg-black text-white text-xs transition-colors whitespace-nowrap self-start sm:self-center"
          >
            <Navigation className="w-3.5 h-3.5 text-[#A3791B]" /> Google Maps
          </a>
        </div>

        {/* 3. 30-Second Intro Reminder */}
        <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase text-[#A3791B] tracking-wider flex items-center gap-1">
              <Mic className="w-3.5 h-3.5" /> Pitch Preparation
            </div>
            <div className="text-sm font-bold text-[#171717]">30-Second Founder Introductions</div>
            <div className="text-xs text-[#737373]">Draft your notes locally on your device prior to arrival.</div>
          </div>
          <button
            onClick={onOpenPitchTrainer}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md font-semibold bg-[#F6F5F0] hover:bg-[#E7E5DF] text-[#171717] border border-[#E7E5DF] text-xs transition-colors whitespace-nowrap self-start sm:self-center cursor-pointer"
          >
            Draft Pitch Notes →
          </button>
        </div>

        {/* 4. Organiser Contact Rows */}
        <div className="p-4 sm:p-5 space-y-3">
          <div className="text-[10px] font-bold uppercase text-[#A3791B] tracking-wider">
            Organiser Contacts
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <a
              href={`tel:${EVENT_DETAILS.contactPhone}`}
              className="p-3 bg-[#F6F5F0] border border-[#E7E5DF] rounded-md hover:border-[#171717] transition-colors flex items-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-[#A3791B]" />
              <div>
                <div className="text-[10px] text-[#737373] uppercase font-semibold">Phone</div>
                <div className="font-bold text-[#171717]">{EVENT_DETAILS.contactPhone}</div>
              </div>
            </a>

            <a
              href={`mailto:${EVENT_DETAILS.contactEmail}`}
              className="p-3 bg-[#F6F5F0] border border-[#E7E5DF] rounded-md hover:border-[#171717] transition-colors flex items-center gap-2.5"
            >
              <Mail className="w-4 h-4 text-[#A3791B]" />
              <div>
                <div className="text-[10px] text-[#737373] uppercase font-semibold">Email</div>
                <div className="font-bold text-[#171717]">{EVENT_DETAILS.contactEmail}</div>
              </div>
            </a>

            <a
              href={EVENT_DETAILS.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#F6F5F0] border border-[#E7E5DF] rounded-md hover:border-[#171717] transition-colors flex items-center gap-2.5"
            >
              <Globe className="w-4 h-4 text-[#A3791B]" />
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#737373] uppercase font-semibold">Website</div>
                  <div className="font-bold text-[#171717]">startupsynerz.com</div>
                </div>
                <ExternalLink className="w-3 h-3 text-[#737373]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
