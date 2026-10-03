import React, { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Image as ImageIcon, ExternalLink } from 'lucide-react';

import { EVENT_DETAILS, SESSIONS, PEOPLE, EVENT_POSTER_META } from '../data/eventData';
import type { TabType } from '../components/BottomNav';

interface HomePageProps {
  setActiveTab: (tab: TabType) => void;
  onOpenLivePreview: () => void;
  onOpenPitchTrainer: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActiveTab,
  onOpenLivePreview,
  onOpenPitchTrainer,
}) => {
  const [showPoster, setShowPoster] = useState(false);

  return (
    <div className="space-y-8 pb-20 animate-fadeIn">
      {/* 1. Top Section — Editorial Header */}
      <section className="bg-white border border-[#E7E5DF] rounded-lg p-6 sm:p-8 space-y-4">
        <div className="space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#A3791B]">
            HYDERABAD STARTUPS CLUB
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-editorial font-bold text-[#171717] leading-tight">
            The Founder’s Network
          </h1>
          <p className="text-base sm:text-lg font-semibold text-[#737373]">
            Hyderabad Edition
          </p>
          <p className="text-sm text-[#171717] font-medium pt-1 border-t border-[#E7E5DF] max-w-2xl">
            People, ideas and opportunities for Hyderabad’s founder community.
          </p>
        </div>

        {/* Compact Metadata Row */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#737373] pt-2 border-t border-[#E7E5DF]">
          <div className="flex items-center gap-1.5 text-[#171717] font-semibold">
            <Calendar className="w-3.5 h-3.5 text-[#A3791B]" />
            <span>{EVENT_DETAILS.date}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#737373]">
            <Clock className="w-3.5 h-3.5 text-[#A3791B]" />
            <span>{EVENT_DETAILS.mainEventTime}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#737373]">
            <MapPin className="w-3.5 h-3.5 text-[#A3791B]" />
            <span>{EVENT_DETAILS.venueName}, {EVENT_DETAILS.venueBranch}</span>
          </div>
        </div>
      </section>

      {/* 2. Main Content — Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Event at a glance */}
        <section className="lg:col-span-7 bg-white border border-[#E7E5DF] rounded-lg p-6 space-y-5">
          <div className="border-b border-[#E7E5DF] pb-3">
            <h2 className="text-xl font-serif-editorial font-bold text-[#171717]">
              Event at a Glance
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
            The Founder’s Network is a curated, high-impact gathering organized by Hyderabad Startups Club (an initiative by Startup Synerz). Designed specifically for founders, early-stage builders, and ecosystem leaders to connect, share insights, and collaborate.
          </p>

          <div className="p-4 bg-[#F6F5F0] border border-[#E7E5DF] rounded-md space-y-2 text-xs">
            <div className="font-bold text-[#171717] uppercase tracking-wider text-[10px]">
              Ecosystem Motto
            </div>
            <p className="text-[#171717] font-semibold">
              Meet • Learn • Collaborate • Grow
            </p>
            <p className="text-[#737373]">
              Featuring keynote insights on scaling, 30-second founder introductions, and structured open networking.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setActiveTab('schedule')}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-md font-semibold bg-[#111111] hover:bg-black text-white text-xs transition-colors cursor-pointer"
            >
              Explore Schedule <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setShowPoster(!showPoster)}
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-md font-semibold bg-[#F6F5F0] hover:bg-[#E7E5DF] text-[#171717] border border-[#E7E5DF] text-xs transition-colors cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#A3791B]" />
              {showPoster ? 'Hide Poster' : 'View Official Poster'}
            </button>
          </div>

          {/* Poster Reveal */}
          {showPoster && (
            <div className="pt-4 border-t border-[#E7E5DF] space-y-2">
              <div className="text-xs font-semibold text-[#171717] flex justify-between">
                <span>Official Poster Artwork</span>
                <span className="text-[10px] text-[#737373]">Verified Asset</span>
              </div>
              <img
                src={EVENT_POSTER_META.posterImageUrl}
                alt="Official Event Poster"
                className="w-full h-auto rounded border border-[#E7E5DF] object-contain max-h-[450px]"
              />
            </div>
          )}
        </section>

        {/* Right Column: Your Event Guide */}
        <section className="lg:col-span-5 bg-white border border-[#E7E5DF] rounded-lg p-6 space-y-5">
          <div className="flex items-center justify-between border-b border-[#E7E5DF] pb-3">
            <h2 className="text-xl font-serif-editorial font-bold text-[#171717]">
              Your Event Guide
            </h2>
            <button
              onClick={() => setActiveTab('schedule')}
              className="text-xs text-[#A3791B] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
            >
              Full Agenda <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            {SESSIONS.slice(0, 3).map((session) => (
              <div
                key={session.id}
                onClick={() => setActiveTab('schedule')}
                className="p-3 bg-[#F6F5F0] border border-[#E7E5DF] rounded-md hover:border-[#111111] transition-colors cursor-pointer space-y-1"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#111111]">{session.time}</span>
                  <span className="text-[10px] font-semibold text-[#737373]">
                    {session.statusLabel}
                  </span>
                </div>
                <h4 className="text-xs font-semibold text-[#171717]">{session.title}</h4>
              </div>
            ))}
          </div>

          {/* Live Updates Concept Feature Card */}
          <div className="p-3.5 bg-[#FDFBF7] border border-[#E5D5A8] rounded-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#A3791B]">
                Future Feature Preview
              </span>
              <button
                onClick={onOpenLivePreview}
                className="text-[11px] font-semibold text-[#A3791B] hover:underline cursor-pointer"
              >
                Preview
              </button>
            </div>
            <h4 className="text-xs font-bold text-[#171717]">Live Event Updates</h4>
            <p className="text-[11px] text-[#737373]">
              Session changes, announcements and important event updates — designed for a future ULink rollout.
            </p>
          </div>
        </section>
      </div>

      {/* 3. Meet the Community */}
      <section className="bg-white border border-[#E7E5DF] rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-[#E7E5DF] pb-3">
          <div>
            <h2 className="text-xl font-serif-editorial font-bold text-[#171717]">
              Meet the Community
            </h2>
            <p className="text-xs text-[#737373]">Featured hosts and attendees</p>
          </div>
          <button
            onClick={() => setActiveTab('people')}
            className="text-xs font-semibold text-[#A3791B] hover:underline cursor-pointer flex items-center gap-1"
          >
            View Directory <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {PEOPLE.slice(0, 3).map((person) => (
            <div
              key={person.id}
              onClick={() => setActiveTab('people')}
              className="p-3.5 bg-[#F6F5F0] border border-[#E7E5DF] rounded-md space-y-1.5 cursor-pointer hover:border-[#171717] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#171717]">{person.name}</span>
                <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-white border border-[#E7E5DF] text-[#737373]">
                  {person.verificationLabel}
                </span>
              </div>
              <div className="text-[11px] text-[#A3791B] font-medium">{person.role}</div>
              <div className="text-[11px] text-[#737373] truncate">{person.organization}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Before You Arrive */}
      <section className="bg-white border border-[#E7E5DF] rounded-lg p-6 space-y-4">
        <div className="border-b border-[#E7E5DF] pb-3">
          <h2 className="text-xl font-serif-editorial font-bold text-[#171717]">
            Before You Arrive
          </h2>
          <p className="text-xs text-[#737373]">Venue location and check-in details</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-[#F6F5F0] border border-[#E7E5DF] rounded-md space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#A3791B]">Venue Location</span>
            <div className="font-bold text-[#171717]">{EVENT_DETAILS.venueName}</div>
            <div className="text-[#737373]">{EVENT_DETAILS.venueBranch}, {EVENT_DETAILS.venueAddress}</div>
            <a
              href={EVENT_DETAILS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#A3791B] hover:underline pt-1"
            >
              Google Maps Directions <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="p-4 bg-[#F6F5F0] border border-[#E7E5DF] rounded-md space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#A3791B]">30-Second Intros</span>
            <div className="font-bold text-[#171717]">Prepare Your Pitch Note</div>
            <div className="text-[#737373]">
              Attending founders will present a 30-second introduction during the pitches segment.
            </div>
            <button
              onClick={onOpenPitchTrainer}
              className="font-semibold text-[#111111] hover:underline pt-1 cursor-pointer block text-left"
            >
              Draft pitch locally →
            </button>
          </div>
        </div>
      </section>

      {/* 5. Restrained ULink Attribution */}
      <div className="text-center py-4 border-t border-[#E7E5DF] space-y-1">
        <p className="text-xs text-[#737373]">
          The Founder’s Network — Hyderabad Edition • Saturday, 3 October 2026
        </p>
        <p className="text-[11px] text-[#A3791B]">
          Powered by ULink — Concept preview for Hyderabad Startups Club
        </p>
      </div>
    </div>
  );
};
