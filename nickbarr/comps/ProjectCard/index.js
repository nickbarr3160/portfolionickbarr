import React from "react";
import Image from 'next/image'
import ToolTag from "../ToolTag"
import {BsCodeSlash} from 'react-icons/bs'; 
import {MdLaunch} from 'react-icons/md'; 
import {ProjCardCont, ProjHeading, ProjDescrip, ToolTagCont, IconCont, Icons, ImageContainer } from "./style";
import { ProjCard_theme } from "../../utils/variables";
import {useTheme} from '../../utils/provider'


const ProjCard = ({
    projHeading="",
    projDescrip="",
    tool1="default",
    tool2="default",
    tool3="default",
    tool4="default",
    onSrcCodepress=()=>{},
    onLaunchAppPress=()=>{},
    thumbSrc="",
}) => {
    const {theme} = useTheme();

    const tools = [tool1, tool2, tool3, tool4].filter(tool => tool.trim() !== ""); // This will filter out empty strings
    
    return (
        <ProjCardCont bgcolor={ProjCard_theme[theme].cardbg}>
            <ImageContainer>
                <Image src={thumbSrc} layout='fill' objectFit='fill'/>
            </ImageContainer>
            <ProjHeading color={ProjCard_theme[theme].color}>{projHeading}</ProjHeading>
            <ProjDescrip color={ProjCard_theme[theme].color}>{projDescrip}</ProjDescrip>
            <ToolTagCont>
                {tools.map((tool, index) => <ToolTag key={index} tool={tool}/>)}
            </ToolTagCont>
            <Icons>
                <IconCont brdrColor={ProjCard_theme[theme].iconbrdrColor} hovBgColor={ProjCard_theme[theme].iconhovbg} bgColor={ProjCard_theme[theme].iconbgcol} color={ProjCard_theme[theme].iconcolor} hovcolor={ProjCard_theme[theme].iconhovcolor} onClick={onSrcCodepress}>
                    <BsCodeSlash size="2em"/>
                </IconCont>
                <IconCont brdrColor={ProjCard_theme[theme].iconbrdrColor} hovBgColor={ProjCard_theme[theme].iconhovbg} bgColor={ProjCard_theme[theme].iconbgcol} color={ProjCard_theme[theme].iconcolor} hovcolor={ProjCard_theme[theme].iconhovcolor} onClick={onLaunchAppPress}>
                    <MdLaunch size="2em"/>
                </IconCont>
            </Icons>    
       </ProjCardCont>
    )
}


export default ProjCard;