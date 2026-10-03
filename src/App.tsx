import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav, type TabType } from './components/BottomNav';
import { LiveUpdatesPreviewModal } from './components/LiveUpdatesPreviewModal';
import { PitchTrainerModal } from './components/PitchTrainerModal';
import { HomePage } from './pages/HomePage';
import { SchedulePage } from './pages/SchedulePage';
import { PeoplePage } from './pages/PeoplePage';
import { ConnectionsPage } from './pages/ConnectionsPage';
import { EssentialsPage } from './pages/EssentialsPage';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isLivePreviewOpen, setIsLivePreviewOpen] = useState(false);
  const [isPitchTrainerOpen, setIsPitchTrainerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F5F0] text-[#171717] flex flex-col font-sans selection:bg-[#C99A2E] selection:text-white">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenLivePreview={() => setIsLivePreviewOpen(true)}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 pb-24">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
            onOpenLivePreview={() => setIsLivePreviewOpen(true)}
            onOpenPitchTrainer={() => setIsPitchTrainerOpen(true)}
          />
        )}

        {activeTab === 'schedule' && <SchedulePage />}

        {activeTab === 'people' && <PeoplePage />}

        {activeTab === 'connect' && (
          <ConnectionsPage onOpenPitchTrainer={() => setIsPitchTrainerOpen(true)} />
        )}

        {activeTab === 'essentials' && (
          <EssentialsPage onOpenPitchTrainer={() => setIsPitchTrainerOpen(true)} />
        )}
      </main>

      {/* Bottom Navigation for Mobile */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Modals */}
      <LiveUpdatesPreviewModal
        isOpen={isLivePreviewOpen}
        onClose={() => setIsLivePreviewOpen(false)}
      />

      <PitchTrainerModal
        isOpen={isPitchTrainerOpen}
        onClose={() => setIsPitchTrainerOpen(false)}
      />
    </div>
  );
};

export default App;
