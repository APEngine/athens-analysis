import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black">
            <div className="container mx-auto">
                <ul className="flex space-x-10 text-white p-5">
                    <li>
                        <h1 className='font-semibold'>Athens Analysis</h1>
                    </li>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/about">Acerca de</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
