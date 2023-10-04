import React, { useState, useEffect } from "react";
import { NavCont, Logo, LinkCont, IconCont, NavLink, MenuIcon, Hamburger } from "./style";
import { useTheme } from '../../utils/provider';
import { NavBar_theme } from "../../utils/variables";
import { useRouter } from "next/router";

const NavBar = ({ 
    logoText = "NB.",
    themeToggle = () => {},
    icon = "",
    anchor = "",
}) => {
    const { theme } = useTheme();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const [boxShadow, setBoxShadow] = useState("none");
    const [currentBgColor, setCurrentBgColor] = useState(NavBar_theme[theme].initialBg);

    useEffect(() => {
        setIsClient(true);

        const handleResize = () => {
            if (window.innerWidth > 768) setIsMenuOpen(false);
        };

        const updateBgColor = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 50) {
                setCurrentBgColor(NavBar_theme[theme].scrollBg);
                setBoxShadow("0px 4px 12px rgba(0, 0, 0, 0.1)");
            } else {
                setCurrentBgColor(NavBar_theme[theme].initialBg);
                setBoxShadow("none");
            }
        };

        updateBgColor(); 
        window.addEventListener("scroll", updateBgColor);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", updateBgColor);
            window.removeEventListener("resize", handleResize);
        };
    }, [theme]);

    return (
        <NavCont bgColor={currentBgColor} boxShadow={boxShadow}>
        <Logo onClick={() => router.push('/')} color={NavBar_theme[theme].logo} hovColor={NavBar_theme[theme].logoHover}>{logoText}</Logo>
        <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Hamburger open={isMenuOpen} bgcolor={NavBar_theme[theme].hamburgerLines}/>
        </MenuIcon>
        {(isMenuOpen || (isClient && window.innerWidth > 768)) && (
            <LinkCont color={NavBar_theme[theme].links} open={isMenuOpen} bgcolor={NavBar_theme[theme].hamburgerMenuBg}>
                <NavLink
                    href={anchor}
                    color={NavBar_theme[theme].linkHover}
                    onClick={() => setIsMenuOpen(false)}
                >
                    CONTACT
                </NavLink>
                <NavLink
                    href='/about'
                    color={NavBar_theme[theme].linkHover}
                    onClick={() => setIsMenuOpen(false)}
                >
                    ABOUT
                </NavLink>
                <IconCont onClick={themeToggle}>
                    {icon}
                </IconCont>
            </LinkCont>
        )}
    </NavCont>
);
}

export default NavBar;
