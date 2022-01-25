import React from "react";
import Link from 'next/link';
import {BsSunFill} from 'react-icons/bs';
import { NavCont, Logo, LinkCont,  } from "./style";



const NavBar = ({
    logoText="NB."
}) => {
    return <NavCont>
        <Logo>{logoText}</Logo>
        <LinkCont>
            <Link href='/nick'>Projects</Link>
            <Link href='/nick'>Skills</Link>
            <Link href='/nick'>Contact</Link>
            <div>
                <BsSunFill size='1.7em'/>
            </div>
        </LinkCont>
    </NavCont>
}

export default NavBar;