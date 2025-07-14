// Import React own libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Import Material UI Icons
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import FunctionsIcon from '@mui/icons-material/Functions';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

// Import Own Components
import DropdownMenu from './DropdownMenu';

// Component's Interfaces
interface AnalysisElement {
    title: string;
    link: string;
}

const analysisElement: AnalysisElement[] = [
    { title: "Diseño de Vigas", link: "analysis/beams" },
];

const Navbar: React.FC = () => {
    return (
        <nav className="flex flex-row justify-between items-center bg-[#202020] z-70" role="navigation" aria-label="Main navigation">
            <h1 className='text-[#F0F0F0] font-[Josefin_Sans] ml-4'>Athens Analysis</h1>
            <ul className="flex flex-row w-fit justify-between h-12">
                <li className="text-white">
                    <Link
                        to={"/"}
                        className="text-[#F0F0F0] w-48 flex flex-row justify-center items-center h-full hover:bg-[#000]"
                    >
                        <span className='text-[#F0F0F0]'><HomeIcon sx={{ color: "#FFF" }} /></span>
                        <p className="px-2 text-[#F0F0F0]">{"Página Principal"}</p>

                    </Link>
                </li>
                <li className="text-[#F0F0F0]">
                    <DropdownMenu
                        title={"Análisis"}
                        icon={<FunctionsIcon />}
                        options={analysisElement}
                        width={"w-48"}
                    />
                </li>
                <a href="https://github.com/APEngine/athens-analysis.git" className='px-6 w-fit hover:bg-[#000] transition-colors duration-300 h-12 flex items-center justify-center hover:text-[#fff]'>
                    <span>
                        <GitHubIcon sx={{ color: "#FFF" }} /></span>
                </a>
            </ul>
        </nav>
    );
};

export default Navbar;
