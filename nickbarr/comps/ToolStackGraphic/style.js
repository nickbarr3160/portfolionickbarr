import styled from 'styled-components'

export const ToolGraphicCont = styled.div`
height:9em;
width:9em;
display:flex;
flex-direction:column;
border-radius:10px;
justify-content:space-evenly;
align-items:center;
margin:1em;
background-color:${props=>props.bgcolor};
color:${props=>props.color};
transition: 0.5s;
&:hover{
    background-color:${props=>props.hoverbgcolor};
    color:${props=>props.hovercolor};
    cursor:pointer;
    }

box-shadow:0 2px 4px rgb(0 0 0/20%);
`;

