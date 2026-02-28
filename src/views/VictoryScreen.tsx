import React from 'react';
import { Share2, Home, PlusCircle } from 'lucide-react';

const VictoryScreen = ({ winnerTeam, score, opponentName }: any) => {
  return (
    <div className="min-h-screen bg-[#120c08] text-white flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      
      {/* Background Effect - แสงฟุ้งๆ ด้านหลัง */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-900/20 blur-[120px] rounded-full"></div>

      {/* Header Section */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-6xl font-black italic tracking-tighter text-orange-500 mb-2">
          VICTORY!
        </h1>
        <p className="text-gray-500 text-sm uppercase tracking-widest">
          Championship Finals • 12 Oct 2023 • Staples Center
        </p>
      </div>

      {/* Main Score Card */}
      <div className="w-full max-w-2xl bg-[#1c140e] border border-white/5 rounded-3xl p-12 relative z-10 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Winner Team Info */}
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              {/* Ring รอบ Logo */}
              <div className="w-32 h-32 rounded-full border-4 border-orange-500 flex items-center justify-center bg-[#120c08] shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                {/* ใส่รูป Logo ทีมตรงนี้ */}
                <span className="text-5xl">🏀</span> 
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-2 text-center">{winnerTeam || "Los Angeles Lakers"}</h2>
            <span className="bg-orange-500/20 text-orange-500 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Winner
            </span>
          </div>

          {/* Score Section */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-baseline gap-4 mb-2">
              <span className="text-8xl font-black leading-none">{score || "102"}</span>
              <span className="text-4xl text-gray-700 font-light">|</span>
              <span className="text-4xl text-gray-700 font-bold">98</span>
            </div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">Final Score</p>
            <p className="text-sm text-gray-400">
              Defeated <span className="text-white font-bold">{opponentName || "Miami Heat"}</span>
            </p>
          </div>

        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-12 flex flex-wrap justify-center gap-4 relative z-10">
        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-sm font-bold">
          <Home size={18} />
          Go to Home
        </button>
        
        <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all text-sm font-bold">
          <Share2 size={18} />
          Share Result
        </button>

        <button className="flex items-center gap-2 px-8 py-3 bg-orange-500 hover:bg-orange-400 text-black rounded-xl transition-all text-sm font-bold shadow-[0_10px_20px_rgba(249,115,22,0.2)]">
          <PlusCircle size={18} />
          Start New Match
        </button>
      </div>

    </div>
  );
};

export default VictoryScreen;