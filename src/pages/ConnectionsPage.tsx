import React, { useState } from 'react';
import { ExternalLink, Mic, Filter } from 'lucide-react';
import { PEOPLE } from '../data/eventData';

interface ConnectionsPageProps {
  onOpenPitchTrainer: () => void;
}

export const ConnectionsPage: React.FC<ConnectionsPageProps> = ({ onOpenPitchTrainer }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('all');

  const topics = ['all', 'SaaS', 'AI/ML', 'Fundraising', 'Growth', 'Scale', 'Ecosystem'];

  const filteredPeople = PEOPLE.filter((person) => {
    if (selectedTopic === 'all') return true;
    return person.interests?.some((i) => i.toLowerCase().includes(selectedTopic.toLowerCase()));
  });

  return (
    <div className="space-y-6 pb-20 animate-fadeIn">
      {/* Header */}
      <div className="bg-white border border-[#E7E5DF] rounded-lg p-6 space-y-3">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#A3791B]">
            NETWORKING HUB
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-[#171717]">
            Founder Connections
          </h1>
          <p className="text-xs text-[#737373]">
            Discover ecosystem members and attendees to connect with during open networking.
          </p>
        </div>

        {/* Featured Prompt */}
        <div className="p-4 bg-[#F6F5F0] border border-[#E7E5DF] rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#E7E5DF]">
          <div className="space-y-0.5">
            <div className="text-[10px] font-bold uppercase text-[#A3791B]">Attendee Networking Prompt</div>
            <div className="text-sm font-serif-editorial font-bold text-[#171717]">“What are you working on?”</div>
            <p className="text-xs text-[#737373]">Draft your 30-second introduction notes locally before check-in.</p>
          </div>
          <button
            onClick={onOpenPitchTrainer}
            className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-md font-semibold bg-[#111111] hover:bg-black text-white text-xs transition-colors cursor-pointer whitespace-nowrap"
          >
            <Mic className="w-3.5 h-3.5" /> Draft 30s Pitch
          </button>
        </div>
      </div>

      {/* Topic Filter */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#171717]">
          <Filter className="w-3.5 h-3.5 text-[#A3791B]" /> Filter Connections by Topic:
        </div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTopic(t)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedTopic === t
                  ? 'bg-[#111111] text-white font-semibold'
                  : 'bg-white text-[#737373] border border-[#E7E5DF] hover:text-[#171717]'
              }`}
            >
              {t === 'all' ? 'All Topics' : `#${t}`}
            </button>
          ))}
        </div>
      </div>

      {/* Connections List */}
      <div className="bg-white border border-[#E7E5DF] rounded-lg divide-y divide-[#E7E5DF]">
        {filteredPeople.map((person) => (
          <div
            key={person.id}
            className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FDFBF7] transition-colors"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-[#171717]">{person.name}</h3>
                <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-[#F6F5F0] border border-[#E7E5DF] text-[#737373]">
                  {person.verificationLabel}
                </span>
              </div>
              <div className="text-xs text-[#A3791B] font-semibold">{person.role} • <span className="text-[#737373]">{person.organization}</span></div>
              <p className="text-xs text-[#737373] max-w-xl">{person.bio}</p>
            </div>

            {person.linkedinUrl ? (
              <a
                href={person.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] bg-[#F6F5F0] hover:bg-[#E7E5DF] border border-[#E7E5DF] px-3 py-1.5 rounded-md transition-colors whitespace-nowrap self-start sm:self-center"
              >
                LinkedIn <ExternalLink className="w-3 h-3 text-[#A3791B]" />
              </a>
            ) : (
              <span className="text-[10px] text-[#737373] italic self-start sm:self-center">
                Available at Check-in
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
