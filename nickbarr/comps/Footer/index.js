import React from "react";
import { FooterCont, CopyrightCont } from "./style";
import {RiCopyrightLine} from 'react-icons/ri'
import { Footer_theme } from "../../utils/variables";
import {useTheme} from '../../utils/provider'
import { ButtonData } from "../../data/data";
import Button from "../Button";
import { ButtonCont} from "../../styles/styles";
import { useRouter } from "next/router";

const Footer = ({
footerText=""
}) => {
    const {theme} = useTheme();
    const router = useRouter();
    var buttonData=ButtonData
    
    return <FooterCont id="anchor" bgcolor={Footer_theme[theme].bgcolor}  color={Footer_theme[theme].color}>
                <ButtonCont>
                    {buttonData.map((o,i)=>{
                    return <Button
                    key={i}
                    label={o.label}
                    icon={o.icon}
                    onButClick={()=>{window.open(`${o.route}`, '_blank')}}
                    />
                    })}     
                </ButtonCont>          
                <CopyrightCont>
                    <RiCopyrightLine/>
                    {footerText} 
                </CopyrightCont>
    </FooterCont>
}

export default Footer;