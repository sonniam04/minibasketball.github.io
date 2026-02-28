import React, { useEffect, useState } from 'react';
import { Button, IconButton, EndGameButton } from '../components/BaseButton'
import { RotateCcw, Play, Timer, Flag, ChevronLeft, ChevronRight, Pause } from 'lucide-react';
const Scoreboard = () => {
  type Member = {
    name: String,
  }
  type Team = {
    team: String,
    member: Member[]
  }
  //declare value
  const [isActive, setIsActive] = useState(false)
  const [quater, setQuater] = useState("1")
  const [time, setTime] = useState()
  //get data from localStorage
  const [maxScore, setMaxScore] = useState(() => {
    const saved = localStorage.getItem('match_config')
    if (saved) {
      const parsed = JSON.parse(saved)
      return parsed.maxScore
    }
  })
  const [round, setRound] = useState(() => {
    const saved = localStorage.getItem('match_config')
    if (saved) {
      const parsed = JSON.parse(saved)
      return parsed.round
    }
  })
  const [teams, setTeams] = useState<Team[]>(() => {
    const saved = localStorage.getItem('match_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // ตรวจสอบว่ามี property teams หรือไม่
        return parsed.teams || [];
      } catch (e) {
        console.error("Parse error:", e);
        return []; // ถ้า JSON พัง ให้คืนค่าอาเรย์ว่าง
      }
    }
    return []; // สำคัญมาก: ถ้าไม่มีข้อมูลใน localStorage ต้องคืนค่าเริ่มต้นที่นี่
  });
  const [score, setScore] = useState<number[]>(teams.map(() => 0));
  const [duration, setDuration] = useState(() => {
    const saved = localStorage.getItem('match_config');
    if (saved) {
      const parsed = JSON.parse(saved);
      setTime(parsed.duration)
      return parsed.duration ?? 600; // ถ้ามีค่า duration ให้เอามา ถ้าไม่มีให้เอา 600
    }
    return 600;
  });
  //useEffect
  useEffect(() => {

    let interval = 0;
    if (isActive && duration > 0) {
      interval = setInterval(() => {
        setDuration((prev: number) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if (duration == 0) {

      setDuration(time)
      if (Number(quater) < round) {
        setQuater((prev: String) => String(Number(prev) + 1))
      }
      setIsActive(false)
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, duration])
  useEffect(()=>{
    const conclusion = {
      score,
      teams
    }
    localStorage.setItem('conclusion-data', JSON.stringify(conclusion))
  },[score,teams])
  //function
  const updateScore = (teamIndex: any, point: any) => {
    if (!isActive) {
      alert("เกมยังไม่เริ่ม")
      return
    }
    setScore((prev) => ({
      ...prev, [teamIndex]: (prev[teamIndex] || 0) + point
    }))
    if (score[teamIndex] + point >= maxScore) {
      setIsActive(false)
      alert(teams[teamIndex].team + " Win");
    }
  }
  const fomatTime = () => {
    let timeMinute = Math.floor(duration / 60)
    let timeSecond = String(duration % 60)
    console.log(timeMinute + " " + timeSecond + " " + duration)
    if (Number(timeSecond) < 10) {
      timeSecond = "0" + timeSecond
    }
    return timeMinute + ":" + timeSecond
  }

  return (
    <div className="h-[100dvh] w-full bg-[#110d0a] text-white flex flex-col overflow-hidden font-sans select-none p-2">

      {/* --- Game Clock: แถบแบนประหยัดพื้นที่ --- */}
      <div className="flex-none flex flex-row items-center justify-center gap-4 py-1 border-b border-white/5 z-20">
        <div className="bg-[#1c1610] border border-white/10 px-3 py-1 rounded-xl flex items-center gap-3 shadow-lg">
          <div className="flex flex-col items-start leading-none">
            <p className="text-[6px] uppercase tracking-widest text-gray-500 font-bold">Clock</p>
            <h1 className="text-xl md:text-3xl font-black tabular-nums tracking-tighter">{fomatTime()}</h1>
          </div>
          <div className="bg-orange-500/20 text-orange-500 text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Q{quater}</div>
        </div>

        <div className="flex items-center gap-2 bg-white/5 p-1 rounded-full scale-90 md:scale-100">
          <button className="p-1 rounded-full text-gray-600 hover:text-white transition-colors">
            <ChevronLeft size={14} />
          </button>
          <div className="text-[7px] uppercase font-bold text-gray-500 px-1">Possession</div>
          <button className="p-1 rounded-full bg-orange-500 text-white shadow-sm">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* --- Score Area: ปรับให้สมดุลและขยายปุ่มกด --- */}
      <div className="flex-1 flex flex-col md:flex-row w-full max-w-5xl mx-auto overflow-hidden">

        {
          teams.map((t, i) => (
            <div className="flex-1 flex flex-row md:flex-col items-center justify-around md:justify-center p-2 relative">

              <div className="flex flex-col items-center md:mb-2 text-[#b1c0cf]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#1b4d3e]/10 border border-[#1b4d3e]/30 flex items-center justify-center overflow-hidden font-black">
                    <span className="text-[#1b4d3e] text-[10px]">C</span>
                  </div>
                  <h2 className="text-base md:text-xl font-black tracking-tight uppercase leading-none">{t.team}</h2>
                </div>

              </div>

              <div className="text-[clamp(3.5rem,15vh,7rem)] md:text-[clamp(5rem,10vw,9rem)] font-black leading-none tabular-nums tracking-tighter text-[#b1c0cf] mx-2">
                {score[i]}
              </div>

              <div className="grid grid-cols-3 gap-1.5 w-[150px] md:w-[260px]">
                {['+1', '+2', '+3'].map((v) => (
                  <button onClick={() => updateScore(i, Number(v))} key={v} className={`py-3 md:py-6 rounded-xl font-black text-lg md:text-3xl border border-white/5 active:scale-90 transition-all ${v === '+3' ? 'bg-orange-500 shadow-md shadow-orange-500/20' : 'bg-[#1c1610] hover:bg-white/5'}`}>
                    {v}
                  </button>
                ))}
                {['-1', '-2', '-3'].map((v) => (
                  <button onClick={() => updateScore(i, Number(v))} key={v} className="py-2 rounded-lg bg-[#1c1610]/40 text-gray-500 text-[10px] md:text-xs font-black border border-white/5 hover:text-white active:scale-95 transition-all uppercase">
                    {v}
                  </button>
                ))}
              </div>
            </div>
          ))
        }
        {/* Team 2 (Bottom / Right) */}

      </div >

      {/* --- Footer Control: เล็กที่สุด --- */}
      < div className="flex-none py-2 border-t border-white/5 flex justify-center items-center gap-4 bg-[#110d0a]/50" >
        <IconButton onClick={() => { }}><RotateCcw size={16} /></IconButton>
        <Button onClick={() => setIsActive(!isActive)}>{isActive ? <><Pause size={22} fill="currentColor" /> PAUSE</> : <><Play size={22} fill="currentColor" /> RESUME</>}</Button>
        <IconButton onClick={() => { }}><Timer size={16} /></IconButton>
        <EndGameButton onClick={() => { }}><Flag size={16} /> END GAME</EndGameButton>
      </div >

    </div >
  );
};

export default Scoreboard;