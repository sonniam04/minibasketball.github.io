import React from 'react';
import { Trophy, Tv2, ArrowRight, Plus } from 'lucide-react';
import { useNavigate } from "react-router-dom"

const SelectGamePlan = () => {
  const navigate = useNavigate()

  const GoToConfiguration = () => {
    // login สำเร็จ
    navigate("/match-config")
  }
  return (
    <div className="min-h-screen bg-[#1a120b] text-white flex flex-col items-center justify-center p-6 font-sans">

      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          What's the game plan today?
        </h1>
        <p className="text-gray-400 text-lg">
          Manage your league or jump straight into the action.<br />
          Select a mode to get started.
        </p>
      </div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">

        {/* Tournament Mode Card */}
        <div className="group relative overflow-hidden rounded-2xl bg-[#2a1d15] border border-white/5 transition-all hover:border-white/20">
          <div className="h-48 overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800"
              alt="Basketball Hoop"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a1d15] to-transparent" />
            <div className="absolute top-4 left-4 p-2 bg-orange-500/20 rounded-lg">
              <Trophy className="text-orange-500 w-6 h-6" />
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold mb-3">Tournament Mode</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Create brackets, manage leagues, and track standings for multiple teams over a season. Perfect for organizers.
            </p>
            <button className="w-full py-4 bg-[#3d2b20] hover:bg-[#4a3528] rounded-xl flex items-center justify-center gap-2 transition-colors font-semibold">
              Start Tournament <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Quick Match Card */}
        <div className="group relative overflow-hidden rounded-2xl bg-[#2a1d15] border border-white/5 transition-all hover:border-white/20">
          <div className="h-48 overflow-hidden relative">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGDU4tVKkWwmBjCzmKx4ZPi8ph3A77fuQfg&s"
              alt="Basketball"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a1d15] to-transparent" />
            <div className="absolute top-4 left-4 p-2 bg-orange-500/20 rounded-lg">
              <Tv2 className="text-orange-500 w-6 h-6" />
            </div>
          </div>

          <div className="p-8">
            <h2 className="text-2xl font-bold mb-3">Quick Match</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Score a single game, track stats, and manage timeouts instantly. Ideal for pickup games or single matches.
            </p>
            <button onClick={GoToConfiguration} className="w-full py-4 bg-[#3d2b20] hover:bg-[#4a3528] rounded-xl flex items-center justify-center gap-2 transition-colors font-semibold">
              New Match <Plus size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SelectGamePlan;