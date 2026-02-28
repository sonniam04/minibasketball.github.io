import { Camera, Plus, Trash2 } from "lucide-react"

interface CardProps {
    onChangeTeamName: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onClickRemoveTeam: () => void,
    value: string,
    onChangMemberName: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onClickAddPlayer: () => void,
    teamMember: React.ReactNode,
}
interface MemberProps {
    name: string,
    onClickRemovePlayer: () => void,
}
export const TeamCard = ({onChangeTeamName,onClickRemoveTeam,value,onChangMemberName,onClickAddPlayer,teamMember}: CardProps) => {
    return (
        <div className="bg-[#1a120b] rounded-xl p-4 border border-white/5 space-y-4">
            <div className="flex justify-between items-center">
                <input type="text" placeholder="Enter Team Name" onChange={onChangeTeamName} className="bg-transparent font-bold outline-none border-b border-white/10 focus:border-orange-500" />
                <button onClick={onClickRemoveTeam} className="text-gray-600 hover:text-red-500"><Trash2 size={16} /></button>
            </div>

            {/* Member Setup Area */}
            <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Members</p>

                {/* Member Row (Input) */}
                <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full bg-[#2a1d15] border border-dashed border-white/20 flex items-center justify-center cursor-pointer hover:border-orange-500 transition-colors">
                        <Camera size={14} className="text-gray-500" />
                    </div>
                    <input type="text" value={value} onChange={onChangMemberName} className="flex-1 bg-transparent text-sm border-b border-white/5 outline-none focus:border-orange-500" />
                    <button onClick={onClickAddPlayer} className="p-1 bg-orange-500/10 text-orange-500 rounded"><Plus size={14} /></button>
                </div>

                {/* Member List (Display Only) */}
                {teamMember}
            </div>
        </div>
    )
}

export const TeamMemberList = ({ name, onClickRemovePlayer }: MemberProps) => {
    return (
        <div className="space-y-2 mt-4">
            <div className="flex items-center justify-between p-2 bg-[#2a1d15] rounded-lg">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-600"></div>
                    <span className="text-sm">{name}</span>
                </div>
                <button onClick={onClickRemovePlayer} className="text-gray-600 hover:text-red-500">×</button>
            </div>
        </div>
    )
}