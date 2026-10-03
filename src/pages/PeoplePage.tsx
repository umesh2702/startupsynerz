import React, { useState } from 'react';
import { Search, ExternalLink } from 'lucide-react';

import { PEOPLE } from '../data/eventData';
import type { ProfileCategory } from '../data/types';

export const PeoplePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProfileCategory | 'all'>('all');

  const categories: { id: ProfileCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Profiles' },
    { id: 'organisers', label: 'Organisers' },
    { id: 'speakers', label: 'Speakers & Panel' },
    { id: 'founders', label: 'Founders' },
    { id: 'investors', label: 'Investors & Mentors' },
  ];

  const filteredPeople = PEOPLE.filter((person) => {
    const matchesCategory = selectedCategory === 'all' || person.category === selectedCategory;
    const matchesSearch =
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.interests?.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-20 animate-fadeIn">
      {/* Search & Category Header */}
      <div className="bg-white border border-[#E7E5DF] rounded-lg p-6 space-y-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-[#171717]">
            Community Directory
          </h1>
          <p className="text-xs text-[#737373]">
            Verified organisers, hosts, and community introductions for The Founder’s Network.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#737373]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, startup, interest, or role..."
            className="w-full pl-10 pr-4 py-2 bg-[#F6F5F0] border border-[#E7E5DF] rounded-md text-xs sm:text-sm text-[#171717] placeholder-[#737373] focus:outline-none focus:border-[#111111] transition-colors"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#111111] text-white font-semibold'
                  : 'bg-[#F6F5F0] text-[#737373] border border-[#E7E5DF] hover:text-[#171717]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Directory List / Grid */}
      <div className="bg-white border border-[#E7E5DF] rounded-lg divide-y divide-[#E7E5DF]">
        {filteredPeople.map((person) => {
          const isOrganiser = person.verificationStatus === 'verified_organiser';

          return (
            <div
              key={person.id}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#FDFBF7] transition-colors"
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm font-bold text-[#171717]">{person.name}</h3>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${
                      isOrganiser
                        ? 'bg-[#111111] text-white border-[#111111]'
                        : 'bg-[#FDFBF7] text-[#A3791B] border-[#E5D5A8]'
                    }`}
                  >
                    {person.verificationLabel}
                  </span>
                </div>

                <div className="text-xs text-[#A3791B] font-semibold">
                  {person.role} • <span className="text-[#737373]">{person.organization}</span>
                </div>

                <p className="text-xs text-[#737373] max-w-2xl">{person.bio}</p>

                {person.interests && person.interests.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {person.interests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] bg-[#F6F5F0] text-[#737373] border border-[#E7E5DF]"
                      >
                        #{interest}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Verified Action Link */}
              {person.linkedinUrl && (
                <div className="flex-shrink-0 pt-2 sm:pt-0">
                  <a
                    href={person.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] bg-[#F6F5F0] hover:bg-[#E7E5DF] border border-[#E7E5DF] px-3 py-1.5 rounded-md transition-colors"
                  >
                    LinkedIn <ExternalLink className="w-3 h-3 text-[#A3791B]" />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredPeople.length === 0 && (
        <div className="p-8 text-center bg-white rounded-lg border border-[#E7E5DF] space-y-1">
          <p className="text-sm font-semibold text-[#171717]">No community entries found</p>
          <p className="text-xs text-[#737373]">Try adjusting your search terms or filter selection.</p>
        </div>
      )}
    </div>
  );
};
