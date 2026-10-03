import React, { useState, useEffect } from 'react';
import { X, Mic, Play, Pause, RotateCcw, Save, Check, Copy } from 'lucide-react';

interface PitchTrainerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PitchTrainerModal: React.FC<PitchTrainerModalProps> = ({ isOpen, onClose }) => {
  const [pitchText, setPitchText] = useState('');
  const [startupName, setStartupName] = useState('');
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const savedPitch = localStorage.getItem('hsc_pitch_draft');
    const savedName = localStorage.getItem('hsc_startup_name');
    if (savedPitch) setPitchText(savedPitch);
    if (savedName) setStartupName(savedName);
  }, []);

  useEffect(() => {
    let interval: any = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const handleSave = () => {
    localStorage.setItem('hsc_pitch_draft', pitchText);
    localStorage.setItem('hsc_startup_name', startupName);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleCopy = () => {
    const fullText = `${startupName ? `${startupName}: ` : ''}${pitchText}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(30);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white border border-[#E7E5DF] rounded-lg w-full max-w-lg p-6 relative shadow-xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-md text-[#737373] hover:text-[#171717] bg-[#F6F5F0] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#FDFBF7] text-[#A3791B] border border-[#E5D5A8]">
            Interactive Pitch Tool
          </span>
        </div>

        <h3 className="text-xl font-serif-editorial font-bold text-[#171717] flex items-center gap-2 mb-1">
          <Mic className="w-4 h-4 text-[#A3791B]" />
          Prepare Your 30-Second Intro
        </h3>

        <p className="text-xs text-[#737373] mb-4 leading-relaxed">
          At The Founder’s Network, every attendee gets 30 seconds to introduce their startup. Draft and practice your pitch below (saved locally on your phone).
        </p>

        {/* Practice Timer */}
        <div className="p-4 bg-[#F6F5F0] border border-[#E7E5DF] rounded-md mb-4 text-center">
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#737373] mb-1">
            30-Second Practice Timer
          </div>
          <div className="text-3xl font-extrabold font-mono text-[#171717] mb-3">
            00:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={toggleTimer}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-semibold text-white transition-colors cursor-pointer ${
                isActive ? 'bg-[#ea580c] hover:bg-[#c2410c]' : 'bg-[#111111] hover:bg-black'
              }`}
            >
              {isActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              {isActive ? 'Pause' : 'Start Timer'}
            </button>
            <button
              onClick={resetTimer}
              className="flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold bg-white border border-[#E7E5DF] text-[#171717] hover:bg-[#F6F5F0] transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Reset
            </button>
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-3 mb-4">
          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1">
              Startup / Product Name
            </label>
            <input
              type="text"
              value={startupName}
              onChange={(e) => setStartupName(e.target.value)}
              placeholder="e.g. Acme Technologies"
              className="w-full px-3 py-2 bg-[#F6F5F0] border border-[#E7E5DF] rounded-md text-xs text-[#171717] focus:outline-none focus:border-[#111111] placeholder-[#737373]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#171717] mb-1">
              Your 30-Second Intro Draft
            </label>
            <textarea
              rows={4}
              value={pitchText}
              onChange={(e) => setPitchText(e.target.value)}
              placeholder="Hi, I'm [Name], founder of [Startup]. We solve [Problem] for [Target Customer]. Today we are looking for [Co-founders / Seed Investors / Beta Users]."
              className="w-full px-3 py-2 bg-[#F6F5F0] border border-[#E7E5DF] rounded-md text-xs text-[#171717] focus:outline-none focus:border-[#111111] placeholder-[#737373] resize-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-[#E7E5DF]">
          <button
            onClick={handleSave}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md font-semibold bg-[#111111] hover:bg-black text-white text-xs transition-colors cursor-pointer"
          >
            {saved ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Save className="w-3.5 h-3.5" />}
            {saved ? 'Saved on Device!' : 'Save Draft'}
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-md font-semibold bg-[#F6F5F0] hover:bg-[#E7E5DF] border border-[#E7E5DF] text-[#171717] text-xs transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};
