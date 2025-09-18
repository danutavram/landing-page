

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    onClick?: ()=> void;
}

export const Button = ({onClick, children, className = ""}: ButtonProps) =>{
    return (
        <button onClick={onClick} className={`px-6 py-3 rounded-full outline-none cursor-pointer
        relative overflow-hidden border border-transparent bg-violet-600 transform transition-all duration-300 hover:scale-105 ${className}`}>
            {children}
        </button>
    )
}