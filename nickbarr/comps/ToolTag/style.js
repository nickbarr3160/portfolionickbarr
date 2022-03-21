import styled from "styled-components";

export const TagCont = styled.div`
height:80%;
width:15%;
display:flex;
justify-content:center;
align-items:center;
padding:0.5em;
border-radius:20px;
font-size:1em;
background-color:${props=>props.bgcolor};
color:${props=>props.color};
@media only screen and (max-width: 1300px) {
    font-size:0.7em;
    height:90%;
    width:20%;
}   
`;