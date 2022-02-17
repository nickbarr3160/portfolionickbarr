import styled from 'styled-components'

export const HeaderCont = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
text-align:center;
width:10em;
height:25vh;
font-size:2em;
flex-wrap:nowrap;
color:${props=>props.color};
`;

export const Underline = styled.div`
width:50px;
height:0.7vh;
background-color:${props=>props.bgcolor};
margin:0.5em;
`;