interface ModelCardProps {
    img: string,
    title: string,
    icon: React.ReactNode,
    mode: string,
    description: string
    buttonText: React.ReactNode,
    buttonOnClick: () => void
}

export const ModelCard = ({ img, title, icon, mode, description, buttonText, buttonOnClick }: ModelCardProps) => {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-[#2a1d15] border border-white/5 transition-all hover:border-white/20">
            <div className="h-48 overflow-hidden relative">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1d15] to-transparent" />
                <div className="absolute top-4 left-4 p-2 bg-orange-500/20 rounded-lg">
                    {icon}
                </div>
            </div>
            <div className="p-8">
                <h2 className="text-2xl font-bold mb-3">{mode}</h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    {description}
                </p>
                <button onClick={buttonOnClick} className="w-full py-4 bg-[#3d2b20] hover:bg-[#4a3528] rounded-xl flex items-center justify-center gap-2 transition-colors font-semibold">
                    {buttonText}
                </button>
            </div>
        </div>
    )
}