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
        <nav className="bg-black" role="navigation" aria-label="Main navigation">
            <div className="flex container mx-auto justify-between items-center p-5">
                <h1 className='font-semibold text-white'>Athens Analysis</h1>
                <ul className="flex space-x-10 text-white">
                    <li>
                        <Link to="/"><HomeIcon />Inicio</Link>
                    </li>
                    <li className="relative group bg-black">
                        <DropdownMenu title="Análisis" icon={<FunctionsIcon />} />
                    </li>
                    <li>
                        <Link to="/settings"><SettingsIcon />Configuración</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
