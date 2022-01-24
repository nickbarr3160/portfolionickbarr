import styled from "styled-components";
import React from "react";
import Link from 'next/link';


const CardCont = styled.div`
display:flex;
width:70%;
height:50%;
justify-content:space-evenly;
align-items:center;
background-color:blue;
border-radius:10px;
`;

const ProjHeading = styled.p`
font-size:3em;
`;

const ProjImg = styled.img`
width 50%;
height:80%;
border-radius:10px;
`;

const ProjDescripCont = styled.div`
width 50%;
height:80%;
border-radius:10px;
`;



const ProjCard = ({
    projHeading="Project 1",
    projDescrip="default",
    img="http://placekitten.com/g/300/200"
}) => {
    return <CardCont>
       <ProjImg src={img}></ProjImg> 
       {/* <ProjHeading>{projHeading}</ProjHeading>
       <p>{projDescrip}</p> */}
    </CardCont>
}

export default ProjCard;