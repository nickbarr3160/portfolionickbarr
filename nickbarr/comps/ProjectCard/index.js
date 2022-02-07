import React from "react";
import ToolTag from "../ToolTag"
import {BsCodeSlash} from 'react-icons/bs'; 
import {MdLaunch} from 'react-icons/md'; 
import {ProjCardCont, ProjHeading, ProjDescrip, ToolTagCont, IconCont, Icons } from "./style";


const ProjCard = ({
    projHeading="Project 1",
    projDescrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tool1="default",
    tool2="default",
    tool3="default",
    tool4="default",
    onSrcCodepress=()=>{},
    onGitPress=()=>{}
}) => {
    return <ProjCardCont>
            <ProjHeading>{projHeading}</ProjHeading>
            <ProjDescrip>{projDescrip}</ProjDescrip>
            <ToolTagCont>
                <ToolTag tool={tool1}/>
                <ToolTag tool={tool2}/>
                <ToolTag tool={tool3}/>
                <ToolTag tool={tool4}/> 
            </ToolTagCont>
            
            <Icons>
                <IconCont onClick={onSrcCodepress}>
                    <BsCodeSlash size="2em"/>
                </IconCont>
                <IconCont  onClick={onGitPress}>
                    <MdLaunch size="2em"/>
                </IconCont>
            </Icons>    
       </ProjCardCont> 

    
}

export default ProjCard;