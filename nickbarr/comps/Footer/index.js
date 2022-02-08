import React from "react";
import { FooterCont } from "./style";
import {RiCopyrightLine} from 'react-icons/ri'
import { Footer_theme } from "../../utils/variables";
import {useTheme} from '../../utils/provider'

const Footer = ({
    footerText=""
}) => {
    const {theme} = useTheme();
    return <FooterCont  bgcolor={Footer_theme[theme].bgcolor}  color={Footer_theme[theme].color}>
        <RiCopyrightLine/>
        {footerText} 
    </FooterCont>
}

export default Footer;