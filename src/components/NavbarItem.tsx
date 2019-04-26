import * as React from 'react';

export interface IProps {
    name: string;
}

function NavbarItem({ name }: IProps) {


    return (
        <div className="navbar__item">
            {name}
        </div>
    );
}

export default NavbarItem;
