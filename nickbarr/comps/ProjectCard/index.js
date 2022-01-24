import styled from "styled-components";
import React from "react";
import Link from 'next/link';
import ToolTag from "../ToolTag"
import {BsCodeSlash} from 'react-icons/bs'; 
import {ProjCardCont, ProjHeading, ProjDescrip, ToolTagCont, IconCont, Icons } from "./style";


const ProjCard = ({
    projHeading="Project 1",
    projDescrip="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img="http://placekitten.com/g/300/200",
    tool="default",
}) => {
    return <ProjCardCont>
            <ProjHeading>{projHeading}</ProjHeading>
            <ProjDescrip>{projDescrip}</ProjDescrip>
            <ToolTagCont>
                <ToolTag tool={tool}/>
                <ToolTag tool={tool}/>
                <ToolTag tool={tool}/>
                <ToolTag tool={tool}/> 
            </ToolTagCont>
            
            <Icons>
                <IconCont>
                    <BsCodeSlash size="2em"/>
                </IconCont>
                <IconCont>
                    <BsCodeSlash size="2em"/>
                </IconCont>
            </Icons>    
       </ProjCardCont> 

    
}

export default ProjCard;