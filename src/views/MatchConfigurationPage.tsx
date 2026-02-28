import React, { useEffect } from 'react';
import { Button, CancelButton } from '../components/BaseButton'
import { InputBox } from '../components/InputBox'
import { TeamCard, TeamMemberList } from '../components/TeamCard'
import { useState } from "react"
import { Users, Settings, Gamepad2, Play } from 'lucide-react';
import { useNavigate } from "react-router-dom"
const MatchConfigurationPage = () => {
    const navigate = useNavigate()
    const [types, setTypes] = useState("free")
    const [duration, setDuration] = useState(600)
    const [maxScore, setMaxScore] = useState(21)
    const [round, setRound] = useState(4)
    const [player, setPlayer] = useState("")
    const [memberInput, setMemberInput] = useState<{ [key: number]: string }>({});
    const [teams, setTeams] = useState<Team[]>([])
    const [team, setTeam] = useState<Team>({
        team: "",
        member: []
    })
    type Member = {
        name: String,
    }
    type Team = {
        team: String,
        member: Member[]
    }
    useEffect(() => {
        const matchConfig = {
            types,
            duration,
            maxScore,
            round,
            teams
        };
        localStorage.setItem('match_config', JSON.stringify(matchConfig));
    }, [types, duration, maxScore, round, teams]);
    const removeTeam = (idx: any) => {
        setTeams(prev => prev.filter((_, i) => i !== idx
        ))
    }
    const addTeam = () => {
        if (types == "free") {
            alert("โปรดเลือกประเภททีม")
            return
        }
        if (teams.length == 2) {
            alert("มีทีมครบแล้ว")
            return
        }
        setTeams(prev => [...prev, team])
    }
    const removePlayer = (idx: any, name: String) => {
        setTeams(prev => prev.map((t, i) =>
            i == idx ? { ...t, member: t.member.filter(m => m.name !== name) } : t
        ))
    }
    const addPlayer = (idx: any) => {
        if (!(memberInput[idx])) {
            alert("ไม่พบผู้เล่น")
            return
        }
        if (types == "free team") {
            setTeams(prev => prev.map((t, i) =>

                i == idx ? { ...t, member: [...t.member, { name: memberInput[idx] }] } : t
            ))
        } else if (types == "3x3" && teams[idx].member.length < 3) {
            setTeams(prev => prev.map((t, i) =>

                i == idx ? { ...t, member: [...t.member, { name: memberInput[idx] }] } : t
            ))
        } else if (types == "5x5" && teams[idx].member.length < 5) {
            setTeams(prev => prev.map((t, i) =>

                i == idx ? { ...t, member: [...t.member, { name: memberInput[idx] }] } : t
            ))
        } else {
            alert("ผู้เล่นเกินจำนวน")
            return
        }
        setMemberInput(prev => ({ ...prev, [idx]: "" }))

    }
    const selectButton = (type: any) =>
        `py-8 rounded-xl border-2
            ${types === type
            ? "border-orange-500 bg-orange-500 text-white font-bold text-xl"
            : "border-white/5 bg-[#1a120b] text-gray-400"}`

    const selectHandle = (type: any) => {

        let complete = false
        if (type == "5x5") {
            teams.map((t, i) => (
                t.member.length > 5 ? complete = true : complete = false
            ))
        } else if (type == "3x3") {
            teams.map((t, i) => (
                t.member.length > 3 ? complete = true : complete = false
            ))
        }
        if (complete) {
            alert("สมาชิกไม่สอดคล้องกับประเภท")
            return
        }
        setTypes(type)
    }
    const handleClickToBack = () => {
        // login สำเร็จ
        navigate("/")
    }
    const goToStart = () => {
        // login สำเร็จ
        if (startHandle()) {
            navigate("/score-board")
        } else {
            alert("สมาชิกไม่ครบถ้วน")
        }

    }
    const startHandle = () => {
        let complete = false;
        if (types == "5x5") {
            teams.map((t, i) => (
                t.member.length == 5 ? complete = true : complete = false
            ))
        } else if (types == "3x3") {
            teams.map((t, i) => (
                t.member.length == 3 ? complete = true : complete = false
            ))
        } else {
            complete = true
        }
        return complete
    }
    return (
        <div className="min-h-screen bg-[#1a120b] text-white p-8 font-sans">
            {/* --- Header Section --- */}
            <div className="flex justify-between items-start mb-10">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Match Configuration</h1>
                    <p className="text-gray-400">Set up the rules and roster for the upcoming game.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* --- Left Column (Config) --- */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Game Type */}
                    <section className="bg-[#231810] p-6 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-orange-500/20 rounded-lg text-orange-500"><Gamepad2 size={20} /></div>
                            <h2 className="text-xl font-semibold">Game Type</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <button onClick={() => selectHandle("free team")} className={selectButton("free team")}>Free Team</button>
                            <button onClick={() => selectHandle("3x3")} className={selectButton("3x3")}>3x3</button>
                            <button onClick={() => selectHandle("5x5")} className={selectButton("5x5")}>5x5</button>
                        </div>
                    </section>

                    {/* Rules & Constraints */}
                    <section className="bg-[#231810] p-6 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-orange-500/20 rounded-lg text-orange-500"><Settings size={20} /></div>
                            <h2 className="text-xl font-semibold">Rules & Constraints</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <InputBox label='Match Time (second)' onChange={(e) => setDuration(Number(e.target.value))} placeHolder={`${duration}`} Icon='⏱' />
                            <InputBox label='Max Score (Points)' onChange={(e) => setMaxScore(Number(e.target.value))} placeHolder={`${maxScore}`} Icon='🏀' />
                            <InputBox label='Round' onChange={(e) => setRound(Number(e.target.value))} placeHolder={`${maxScore}`} Icon='🏀' />
                        </div>
                    </section>
                </div>

                {/* --- Right Column (Teams & Members) --- */}
                <div className="space-y-6">
                    <section className="bg-[#231810] p-6 rounded-2xl border border-white/5">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-orange-500/20 rounded-lg text-orange-500"><Users size={20} /></div>
                                <h2 className="text-xl font-semibold">Teams</h2>
                            </div>
                            <span className="text-xs bg-white/10 px-2 py-1 rounded">{teams.length}/2</span>
                        </div>

                        {/* Team List Area */}
                        <div className="space-y-4">
                            {/* ตัวอย่าง Team Card */}
                            {
                                teams.map((t, i) => (
                                    <TeamCard
                                        onChangeTeamName={(e) => setTeams(prev => prev.map((t, idx) => idx == i ? { ...t, team: e.target.value } : t))}
                                        onClickRemoveTeam={() => removeTeam(i)}
                                        value={`${memberInput[i]}`}
                                        onChangMemberName={(e) => setMemberInput(prev => ({ ...prev, [i]: e.target.value }))}
                                        onClickAddPlayer={() => addPlayer(i)}
                                        teamMember={t.member.map((m) => (
                                            <TeamMemberList name={`${m.name}`} onClickRemovePlayer={() => removePlayer(i, m.name)} />
                                        ))}
                                    />

                                ))
                            }

                            {/* Add Team Placeholder */}
                            <button onClick={() => addTeam()} className="w-full py-3 border-2 border-dashed border-white/5 rounded-xl text-gray-500 text-sm hover:border-white/10 transition-all">
                                + Add Team
                            </button>
                        </div>
                    </section>
                </div>
            </div>

            {/* --- Footer --- */}
            <div className="mt-12 flex justify-end items-center gap-8 border-t border-white/5 pt-8">
                <CancelButton onClick={handleClickToBack}>Cancel</CancelButton>
                <Button onClick={goToStart}>Start Match <Play size={20} fill="currentColor" /></Button>
            </div>
        </div>
    );
};

export default MatchConfigurationPage;