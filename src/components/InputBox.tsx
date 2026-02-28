import type React from "react";

interface InputBoxProps {
    label: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeHolder: string,
    Icon: string
}

export const InputBox = ({ label, onChange, placeHolder, Icon }: InputBoxProps) => {
    return (
        <div className="space-y-2">
            <label className="text-sm text-gray-400">{label}</label>
            <div className="relative">
                <input type="text" onChange={onChange} placeholder={placeHolder} className="w-full bg-[#1a120b] border border-white/10 rounded-xl p-4 pl-12 outline-none" />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">{Icon}</span>
            </div>
        </div>
    )
}