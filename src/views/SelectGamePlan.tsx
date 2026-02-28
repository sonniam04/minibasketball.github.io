import { Trophy, Tv2, ArrowRight, Plus } from 'lucide-react';
import { useNavigate } from "react-router-dom"
import { ModelCard } from '../components/Card'
export const SelectGamePlan = () => {
  const navigate = useNavigate()
  const MatchHandle = (mode: string) => {
    mode == "Quick Match" ? navigate("/match-config") : navigate("/match-config")
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
        <ModelCard
          img='https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800'
          title='Basketball Hoop'
          icon={<Trophy className="text-orange-500 w-6 h-6" />}
          mode='Tournament Mode'
          description="Create brackets, manage leagues, and track standings for multiple teams over a season. Perfect for organizers."
          buttonText="Start Tournament"
          buttonOnClick={() => { MatchHandle("Tournament") }}
        />
        {/* Quick Match Card */}
        <ModelCard
          img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGDU4tVKkWwmBjCzmKx4ZPi8ph3A77fuQfg&s'
          title='Basketball'
          icon={<Tv2 className="text-orange-500 w-6 h-6" />}
          mode='Quick Match'
          description="Score a single game, track stats, and manage timeouts instantly. Ideal for pickup games or single matches."
          buttonText="New Match"
          buttonOnClick={() => { MatchHandle("Quick Match") }}
        />
      </div>
    </div>
  );
};