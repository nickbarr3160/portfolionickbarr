import React from "react";
import Link from 'next/link';
import {BsSunFill} from 'react-icons/bs';
import { NavCont, Logo, LinkCont,  } from "./style";
import {useTheme} from '../../utils/provider'
import { NavBar_theme } from "../../utils/variables";


const NavBar = ({
    logoText="NB.",
    themeToggle=()=>{},
    icon="",
}) => {
    const {theme} = useTheme();
    return <NavCont>
        <Logo color={NavBar_theme[theme].logo} hovColor={NavBar_theme[theme].logoHover}>{logoText}</Logo>
        <LinkCont color={NavBar_theme[theme].links}>
            <Link href='/nick' hovColor={NavBar_theme[theme].linkHover}>Projects</Link>
            <Link href='/nick'>Skills</Link>
            <Link href='/nick'>Contact</Link>
            <div  onClick={themeToggle}>
                {icon}
            </div>
        </LinkCont>
    </NavCont>
}

export default NavBar;