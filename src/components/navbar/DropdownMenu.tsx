// Imports
// Import React and required hooks
import React, { useState } from 'react';
// Import Link component for internal navigation from React Router
import { Link } from 'react-router-dom';

// Import Material UI's icon components
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";


// Each Dropdown option contains a title, link (to own URL), and icon (ReactNode)
interface DropdownOption {
    title: string;
    link: string;
}

// Define the props that the DropdownMenu component will accept
// - title: the text to display on the dropdown button
// - options: an array of DropdownOption objects that populate the dropdown list
// - width: the width of the dropdown menu (currently using Tailwind's widths)
// - icon: the icon displayed next to the title on the button
interface DropdownMenuProps {
    title: string;
    options?: Array<DropdownOption>;
    width?: string;
    icon: React.ReactNode;
}

// DropdownMenu component
// Description: This component displays a button with a dropdown menu that opens when hovered or clicked
const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, icon, options = [], width = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative group bg-black-menu"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)} 
        >
            {/* Dropdown button that toggles the menu on click */}
            <button
                className="px-6 w-fit hover:bg-blue transition-colors duration-300 h-12 flex items-center justify-center"
                aria-haspopup="true"                  // Accessibility: Indicates this button opens a menu
                aria-expanded={isOpen}                // Accessibility: Tells screen readers if the menu is open
                onClick={() => setIsOpen(!isOpen)}    // Toggles the menu open/close on click
            >
                {/* Icon and title displayed on the button */}
                <span className="mr-1.5">{icon}</span>
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
                            className="bg-black-menu flex flex-row align-center justify-center animate-fade-in"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <Link
                                to={option.link}
                                className="display-arrow w-full flex flex-row justify-flex-start align-center block p-4 hover:bg-slate-700"
                            >
                                <p className="px-2">{option.title}</p>
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