// Import React own libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Material UI Icons
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import FunctionsIcon from '@mui/icons-material/Functions';

// Import Own Components
import DropdownMenu from './DropdownMenu';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black-menu mb-5" role="navigation" aria-label="Main navigation">
            <div className="flex container mx-auto justify-between items-center h-16">
                <h1 className='font-semibold text-white-300'>Athens Analysis</h1>
                <ul className="flex space-x-10 text-white-300">
                    <li className='hover:bg-blue transition-colors duration-300 w-32 h-16 flex items-center justify-center'>
                        <Link to="/"><HomeIcon />Inicio</Link>
                    </li>
                    <li>
                        <DropdownMenu title="Análisis" icon={<FunctionsIcon />} />
                    </li>
                    <li className='hover:bg-blue transition-colors duration-300 w-40 h-16 flex items-center justify-center'>
                        <Link to="/settings"><SettingsIcon />Configuración</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
