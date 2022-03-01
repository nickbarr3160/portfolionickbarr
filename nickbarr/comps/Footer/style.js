import styled from 'styled-components'

export const FooterCont = styled.div`
display:flex;
align-items:center;
flex-direction:column;
margin-top:1em;
box-shadow:0 -0.1em 1em rgb(0 0 0 / 10%);
justify-content:space-evenly;
align-items:center;
height:100%;
width:100%;
color:${props=>props.color};
background-color:${props=>props.bgcolor};
`;
export const CopyrightCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin:1em
`;