import React from 'react';
import { Home, Calendar, Users, MessageSquare, Info } from 'lucide-react';

export type TabType = 'home' | 'schedule' | 'people' | 'connect' | 'essentials';

interface BottomNavProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const navItems: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'schedule', label: 'Schedule', icon: <Calendar className="w-4 h-4" /> },
    { id: 'people', label: 'People', icon: <Users className="w-4 h-4" /> },
    { id: 'connect', label: 'Connect', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'essentials', label: 'Essentials', icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#E7E5DF] py-1.5 px-3 md:hidden">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
                isActive
                  ? 'text-[#111111] font-semibold'
                  : 'text-[#737373] hover:text-[#171717]'
              }`}
            >
              <div
                className={`p-1 rounded-md transition-colors ${
                  isActive ? 'bg-[#F6F5F0] text-[#111111]' : 'bg-transparent'
                }`}
              >
                {item.icon}
              </div>
              <span className="text-[10px] tracking-tight mt-0.5">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
