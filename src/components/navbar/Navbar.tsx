// Import React own libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Material UI Icons
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import FunctionsIcon from '@mui/icons-material/Functions';

// Import Own Components
import DropdownMenu from './DropdownMenu';

// Component's Interfaces
interface AnalysisElement {
    title: string;         // Title of the element (string)
    link: string;          // Link associated with the element (string)
}

const analysisElement: AnalysisElement[] = [
    { title: "Diseño de Vigas", link: "inventory" },
];

const Navbar: React.FC = () => {
    return (
        <nav className="flex flex-row justify-between bg-black-menu" role="navigation" aria-label="Main navigation">
            <h1>Athens Analysis</h1>
            <ul className="flex flex-row w-fit justify-between h-12">
                <li className="text-white">
                    <DropdownMenu
                        title={"Página Principal"}
                        icon={<HomeIcon />}
                        width={"w-64"}
                    />
                </li>
                <li className="text-white">
                    <DropdownMenu
                        title={"Análisis"}
                        icon={<FunctionsIcon />}
                        options={analysisElement}
                        width={"w-48"}
                    />
                </li>
                <li className="text-white w-12 mr-1 flex flex-row align-center justify-center">
                    <button className="rotated-icon">
                        <Link to="/settings">
                        <SettingsIcon />
                        </Link>
                    </button>

                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
