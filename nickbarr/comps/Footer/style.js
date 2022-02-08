import styled from 'styled-components'

export const FooterCont = styled.div`
display:flex;
align-items:center;
box-shadow:0 -0.1em 1em rgb(0 0 0 / 10%);
justify-content:center;
height:20vh;
width:100%;
color:${props=>props.color};
background-color:${props=>props.bgcolor};
`;