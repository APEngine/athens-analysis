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
            className="relative group"
            onMouseEnter={() => setIsOpen(true)} 
        >
            <button 
                className="flex items-center"
                aria-haspopup="true"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            >
                {icon}{title}
            </button>
            {isOpen && (
                <ul 
                    className="absolute left-0 bg-black shadow-lg p-2 mt-1 w-40"
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
