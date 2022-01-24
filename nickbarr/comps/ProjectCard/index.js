import styled from "styled-components";
import React from "react";
import Link from 'next/link';
import ToolTag from "../ToolTag"

const CardCont = styled.div`
display:flex;
width:80%;
height:50%;
justify-content:space-around;
align-items:center;
background-color:blue;
border-radius:10px;
`;

const ProjHeading = styled.p`
font-size:2em;
`;

const ProjDescrip = styled.p`
font-size:1em;
`;

const ProjImg = styled.img`
width 40%;
height:80%;
border-radius:10px;
`;

const ProjDescripCont = styled.div`
width 40%;
height:80%;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
background-color:pink;
`;

const ToolTagCont = styled.div`
width 90%;
height:10%;
display:flex;
justify-content:space-evenly;
align-items:center;
background-color:green;
`;




const ProjCard = ({
    projHeading="Project 1",
    projDescrip="default",
    img="http://placekitten.com/g/300/200",
    tool="default"
}) => {
    return <CardCont>
       <ProjImg src={img}></ProjImg> 
       
       <ProjDescripCont>
            <ProjHeading>{projHeading}</ProjHeading>
            <ProjDescrip>{projDescrip}</ProjDescrip>
            <ToolTagCont>
                <ToolTag tool={tool}/>
                <ToolTag tool={tool}/>
                <ToolTag tool={tool}/>
                <ToolTag tool={tool}/> 
            </ToolTagCont>
       </ProjDescripCont> 

    </CardCont>
}

export default ProjCard;