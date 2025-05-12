"use client";
/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react';
import {
  LayoutDashboard, MessageCircle, Flame, Smile, Settings, CircleDot,
  MessageSquare, Gift, StickyNote, ArrowLeft, Sparkles
} from 'lucide-react';

const fans = {
  Emma: {
    avatar: '/emma.jpg',
    status: 'Hot',
    messages: 48,
    spent: 132,
    scripts: 3,
    lastSeen: '2h ago',
    lastIA: 'Hey love 😘 I missed your last message.',
    note: '',
  },
};

export default function Home() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [selectedFan, setSelectedFan] = useState(null);
  const [notes, setNotes] = useState({});
  const [iaPrompt, setIaPrompt] = useState('');
  const [iaResponse, setIaResponse] = useState('');

  const handleNoteChange = (fan, value) => {
    setNotes({ ...notes, [fan]: value });
  };

  const generateIaResponse = () => {
    setIaResponse(`Auto-reply to ${selectedFan}: ${iaPrompt}`);
  };

  return (
    <main className="min-h-screen bg-[#1e1e2f] text-white font-sans flex">
      <div className="w-64 bg-[#2a2a3c] p-6">
        <h2 className="text-lg font-bold mb-6">📂 Menu</h2>
        <nav className="space-y-4 text-sm">
          <button onClick={() => setActiveSection('dashboard')}>Dashboard</button>
          <button onClick={() => setActiveSection('messageAI')}>AI Suggestions</button>
          <button onClick={() => setActiveSection('fanHot')}>Hot Fans</button>
          <button onClick={() => setActiveSection('settings')}>Settings</button>
        </nav>
      </div>

      <div className="flex-1 p-6">
        <h1 className="text-xl font-bold mb-4">Welcome to ITakeLove 💜</h1>

        {activeSection === 'dashboard' && (
          <div>
            <h2>📊 Dashboard</h2>
            <p>Total Fans: 356 | Revenue: €2,730</p>
          </div>
        )}

        {activeSection === 'messageAI' && (
          <div>
            <h2>🤖 AI Suggestions</h2>
            <textarea value={iaPrompt} onChange={(e) => setIaPrompt(e.target.value)} />
            <button onClick={generateIaResponse}>Generate</button>
            {iaResponse && <p>{iaResponse}</p>}
          </div>
        )}

        {activeSection === 'settings' && (
          <div>
            <h2>⚙️ Settings</h2>
            <label><input type="checkbox" defaultChecked /> Enable notifications</label>
          </div>
        )}
      </div>
    </main>
  );
}
