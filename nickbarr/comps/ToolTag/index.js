import styled from "styled-components";
import React from "react";
import Link from 'next/link';


const TagCont = styled.div`
height:90%;
width:20%;
display:flex;
justify-content:center;
align-items:center;
padding:0.2em;
border-radius:20px;
background-color:black;
color:white;
`;


const ToolTag = ({
    tool="JavaScript"
}) => {
    return <TagCont>
            {tool}
        </TagCont>
}

export default ToolTag;