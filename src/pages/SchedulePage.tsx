import React, { useState } from 'react';
import { Clock, Info } from 'lucide-react';
import { SESSIONS, EVENT_DETAILS } from '../data/eventData';

export const SchedulePage: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'keynote' | 'pitches' | 'networking'>('all');

  const filteredSessions = SESSIONS.filter((session) => {
    if (filter === 'all') return true;
    if (filter === 'keynote') return session.category === 'keynote' || session.category === 'opening';
    if (filter === 'pitches') return session.category === 'pitches';
    if (filter === 'networking') return session.category === 'networking' || session.category === 'checkin';
    return true;
  });

  return (
    <div className="space-y-6 pb-20 animate-fadeIn">
      {/* Page Title & Filter Header */}
      <div className="bg-white border border-[#E7E5DF] rounded-lg p-6 space-y-4">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#A3791B]">
            {EVENT_DETAILS.date}
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-[#171717]">
            Event Schedule & Agenda
          </h1>
          <p className="text-xs text-[#737373]">
            Official agenda from the Hyderabad Startups Club Attendee Guide.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2 border-t border-[#E7E5DF]">
          {[
            { id: 'all', label: 'All Sessions' },
            { id: 'keynote', label: 'Opening & Keynote' },
            { id: 'pitches', label: '30s Intros' },
            { id: 'networking', label: 'Networking & Panel' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as any)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                filter === item.id
                  ? 'bg-[#111111] text-white font-semibold'
                  : 'bg-[#F6F5F0] text-[#737373] border border-[#E7E5DF] hover:text-[#171717]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clean Timeline List Table */}
      <div className="bg-white border border-[#E7E5DF] rounded-lg divide-y divide-[#E7E5DF]">
        {filteredSessions.map((session) => {
          const isTbd = session.status === 'speaker_tbd' || session.status === 'panel_tbd';

          return (
            <div key={session.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start gap-4 hover:bg-[#FDFBF7] transition-colors">
              {/* Narrow Time Column */}
              <div className="w-28 flex-shrink-0">
                <div className="text-xs font-bold text-[#111111] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#A3791B]" />
                  <span>{session.time}</span>
                </div>
                <span
                  className={`inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded border ${
                    isTbd
                      ? 'bg-[#FDFBF7] text-[#A3791B] border-[#E5D5A8]'
                      : 'bg-[#F6F5F0] text-[#737373] border-[#E7E5DF]'
                  }`}
                >
                  {session.statusLabel}
                </span>
              </div>

              {/* Session Details */}
              <div className="flex-1 space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-[#171717]">
                  {session.title}
                </h3>
                <p className="text-xs text-[#737373] leading-relaxed">
                  {session.description}
                </p>

                {session.speakerOrPanel && (
                  <div className="pt-1 text-xs text-[#A3791B] font-medium flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" />
                    <span>Participants: {session.speakerOrPanel}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Callout */}
      <div className="p-4 bg-white border border-[#E7E5DF] rounded-lg text-xs text-[#737373] flex items-start gap-2">
        <Info className="w-4 h-4 text-[#A3791B] flex-shrink-0 mt-0.5" />
        <p>
          Exact timings for the open networking break and panel discussion will proceed naturally following the 30-second founder introduction round.
        </p>
      </div>
    </div>
  );
};
