import { Children } from "react";

interface ButtonProps {
    children: React.ReactNode,
    onClick: () => void
}
export const Button = ({ children, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all"
        >
            {children}
        </button>
    );
};

export const IconButton = ({ children, onClick }: ButtonProps) => {
    return (
        <button 
            onClick={onClick}
            className="bg-[#1c1610] p-2.5 rounded-xl text-gray-500 border border-white/5 active:scale-90 transition-all"
        >
            {children}
        </button>
    );
}

export const EndGameButton = ({children, onClick}: ButtonProps) => {
    return (
        <button 
            onClick={onClick}
            className="bg-red-500/10 text-red-500 px-5 py-3 rounded-xl flex items-center gap-2 text-[9px] font-black border border-red-500/20 hover:bg-red-500 hover:text-white transition-all"
        >
            {children}
        </button>
    );
}

export const CancelButton = ({children, onClick}: ButtonProps) => {
    return (
        <button 
            onClick={onClick} 
            className="text-gray-400 hover:text-white font-medium"
        >
            {children}
        </button>
    );
}