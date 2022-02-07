import React from "react";
import Link from 'next/link';
import {BsSunFill} from 'react-icons/bs';
import { NavCont, Logo, LinkCont,  } from "./style";
import {useTheme} from '../../utils/provider'
import { comp_theme } from "../../utils/variables";


const NavBar = ({
    logoText="NB.",
    themeToggle=()=>{},
    icon=""
}) => {
    const {theme} = useTheme();
    return <NavCont>
        <Logo>{logoText}</Logo>
        <LinkCont>
            <Link href='/nick'>Projects</Link>
            <Link href='/nick'>Skills</Link>
            <Link href='/nick'>Contact</Link>
            <div  onClick={themeToggle}>
                {icon}
            </div>
        </LinkCont>
    </NavCont>
}

export default NavBar;