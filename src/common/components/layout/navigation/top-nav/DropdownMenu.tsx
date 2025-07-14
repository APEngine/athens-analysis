// Imports
// Import React and required hooks
import React, { useState } from 'react';
// Import Link component for internal navigation from React Router
import { Link } from 'react-router-dom';

// Import Material UI's icon components
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";


interface DropdownOption {
    title: string;
    link: string;
}

interface DropdownMenuProps {
    title: string;
    options?: Array<DropdownOption>;
    width?: string;
    icon: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, icon, options = [], width = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)} 
        >
            {/* Dropdown button that toggles the menu on click */}
            <button
                className="px-6 text-[#FFF] w-fit hover:bg-[#000] hover:cursor-pointer transition-colors duration-300 h-12 flex items-center justify-center"
                aria-haspopup="true"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Icon and title displayed on the button */}
                <span className="mr-1.5 text-[#FFF]">{icon}</span>
                {title}
            </button>

            {/* Dropdown menu, conditionally rendered when isOpen is true and there are options */}
            {isOpen && options.length > 0 && (
                <ul
                    className={`${width} absolute top-11 right-0 shadow-2x-l mt-1`}
                    role="menu"
                >
                    {/* Maps over the options array to generate each menu item */}
                    {options.map((option, index) => (
                        <li
                            role="menuitem"
                            key={index}
                            className="bg-[#000] flex flex-row align-center justify-center animate-fade-in"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <Link
                                to={option.link}
                                className="display-arrow w-full flex flex-row justify-flex-start align-center block p-4 hover:bg-[#202020]"
                            >
                                <p className="px-2 text-[#FFF]">{option.title}</p>
                                <span className="arrow text-white">
                                    <ArrowOutwardIcon sx={{ scale: "90%" }} />
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default DropdownMenu;