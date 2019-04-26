import * as React from 'react';
import NavbarItem from './NavbarItem';

function Navbar() {

    const renderNavbarItems = () => {
        const names = [
            "Editor-in-Chief",
            "Login",
            "About",
        ];

        return names.map((name, index) => (<NavbarItem name={name} key={index} />));
    }

    return (
        <div className="navbar">
            {renderNavbarItems()}
        </div>
    );
}

export default Navbar;
