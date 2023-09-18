import React, { useState, useEffect } from "react";
import { NavCont, Logo, LinkCont, IconCont, NavLink } from "./style";
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

    const [boxShadow, setBoxShadow] = useState("none");
    const [currentBgColor, setCurrentBgColor] = useState(NavBar_theme[theme].initialBg);

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

    useEffect(() => {
        updateBgColor(); // Initialize the background color based on the scroll position and theme

        const handleScroll = () => {
            updateBgColor(); // Update the background color whenever scrolling
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [theme]);

    return (
        <NavCont bgColor={currentBgColor} boxShadow={boxShadow}>
            <Logo onClick={() => router.push('/')} color={NavBar_theme[theme].logo} hovColor={NavBar_theme[theme].logoHover}>{logoText}</Logo>
            <LinkCont color={NavBar_theme[theme].links}>
                <NavLink href={anchor} color={NavBar_theme[theme].linkHover}>CONTACT</NavLink>
                <NavLink href='/about' color={NavBar_theme[theme].linkHover}>ABOUT</NavLink>
                <IconCont onClick={themeToggle}>
                    {icon}
                </IconCont>
            </LinkCont>
        </NavCont>
    );
}

export default NavBar;
