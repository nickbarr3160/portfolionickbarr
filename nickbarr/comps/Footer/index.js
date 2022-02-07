import React from "react";
import { FooterCont } from "./style";
import {RiCopyrightLine} from 'react-icons/ri'
const Footer = ({
    footerText=""
}) => {
    return <FooterCont>
        <RiCopyrightLine/>
        {footerText} 
    </FooterCont>
}

export default Footer;