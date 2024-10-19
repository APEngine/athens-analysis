// Import React own libraries
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface DropdownMenuProps {
    title: string;
    icon: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative group bg-black-menu"
            onMouseEnter={() => setIsOpen(true)}
        >
            <button
                className="hover:bg-blue transition-colors duration-300 w-32 h-16 flex items-center justify-center"
                aria-haspopup="true"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                {icon}{title}
            </button>
            {isOpen && (
                <ul
                    className="absolute left-0 bg-black-menu shadow-lg p-2 w-40"
                    role="menu"
                    onMouseLeave={() => setIsOpen(false)}
                >
                    <li role="menuitem">
                        <Link to="/analysis/beams" className="block p-2 hover:bg-gray">Vigas</Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default DropdownMenu;
