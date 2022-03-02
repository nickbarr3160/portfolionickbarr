import React from "react";
import Link from 'next/link';
import {BsSunFill} from 'react-icons/bs';
import { NavCont, Logo, LinkCont, IconCont, NavLink } from "./style";
import {useTheme} from '../../utils/provider'
import { NavBar_theme } from "../../utils/variables";
import { useRouter } from "next/router";


const NavBar = ({
    logoText="NB.",
    themeToggle=()=>{},
    icon="",
    anchor=""
}) => {
    const {theme} = useTheme();
    const router = useRouter();
    return <NavCont>
        <Logo onClick={()=>router.push('/')}color={NavBar_theme[theme].logo} hovColor={NavBar_theme[theme].logoHover}>{logoText}</Logo>
        <LinkCont color={NavBar_theme[theme].links}>
            <NavLink href={anchor} color={NavBar_theme[theme].linkHover}>CONTACT</NavLink>
            <NavLink href='/about' color={NavBar_theme[theme].linkHover}>ABOUT</NavLink>
            <IconCont  onClick={themeToggle}>
                {icon}
            </IconCont>
        </LinkCont>
    </NavCont>
}

export default NavBar;