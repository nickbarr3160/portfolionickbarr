import React from "react";
import Link from 'next/link';
import {BsSunFill} from 'react-icons/bs';
import { NavCont, Logo, LinkCont, IconCont, NavLink } from "./style";
import {useTheme} from '../../utils/provider'
import { NavBar_theme } from "../../utils/variables";



const NavBar = ({
    logoText="NB.",
    themeToggle=()=>{},
    icon="",
    anchor=""
}) => {
    const {theme} = useTheme();
    return <NavCont>
        <Logo color={NavBar_theme[theme].logo} hovColor={NavBar_theme[theme].logoHover}>{logoText}</Logo>
        <LinkCont color={NavBar_theme[theme].links}>
            <NavLink href={anchor} color={NavBar_theme[theme].linkHover}>CONTACT</NavLink>
            <NavLink href={anchor} color={NavBar_theme[theme].linkHover}>ABOUT</NavLink>
            <IconCont  onClick={themeToggle}>
                {icon}
            </IconCont>
        </LinkCont>
    </NavCont>
}

export default NavBar;