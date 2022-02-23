import React from "react";
import Image from 'next/image'
import ToolTag from "../ToolTag"
import {BsCodeSlash} from 'react-icons/bs'; 
import {MdLaunch} from 'react-icons/md'; 
import {ProjCardCont, ProjHeading, ProjDescrip, ToolTagCont, IconCont, Icons } from "./style";
import { ProjCard_theme } from "../../utils/variables";
import {useTheme} from '../../utils/provider'
import VideoPlayer from "../ReactVideo";

const ProjCard = ({
    projHeading="",
    projDescrip="",
    tool1="default",
    tool2="default",
    tool3="default",
    tool4="default",
    onSrcCodepress=()=>{},
    onGitPress=()=>{},
    thumbSrc=""
}) => {
    const {theme} = useTheme();
    return <ProjCardCont bgcolor={ProjCard_theme[theme].cardbg}>
            <ProjHeading  color={ProjCard_theme[theme].color}>{projHeading}</ProjHeading>
            <VideoPlayer thumbSrc={thumbSrc}/>
            <ProjDescrip color={ProjCard_theme[theme].color}>{projDescrip}</ProjDescrip>
            <ToolTagCont>
                <ToolTag tool={tool1}/>
                <ToolTag tool={tool2}/>
                <ToolTag tool={tool3}/>
                <ToolTag tool={tool4}/> 
            </ToolTagCont>
            
            <Icons>
                <IconCont brdrColor={ProjCard_theme[theme].toolColor} bgColor={ProjCard_theme[theme].toolColor} color={ProjCard_theme[theme].toolColor} hovcolor={ProjCard_theme[theme].cardbg}onClick={onSrcCodepress}>
                    <BsCodeSlash size="2em"/>
                </IconCont>
                <IconCont brdrColor={ProjCard_theme[theme].toolColor} bgColor={ProjCard_theme[theme].toolColor} color={ProjCard_theme[theme].toolColor} hovcolor={ProjCard_theme[theme].cardbg}onClick={onGitPress}>
                    <MdLaunch size="2em"/>
                </IconCont>
            </Icons>    
       </ProjCardCont> 

    
}

export default ProjCard;