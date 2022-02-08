import styled from "styled-components";

export const NavCont = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:15vh;
width:100%;
padding-left:1em;
padding-right:1em;
`;

export const Logo = styled.div`
font-size:3em;
color:${props=>props.color};
&:hover{
color: ${props=>props.hovColor}; 
}
`;

export const LinkCont = styled.div`
display:flex;
font-size:1.3em;
justify-content:space-evenly;
align-items:center;
width:50%;
height:100%;
color:${props=>props.color};
// Used to adjust width and font size for mobile screens
@media only screen and (max-width: 500px) {
width:80%;
font-size:1.1em;
}

.link{
    &:hover{
        color: ${props=>props.hovColor}; 
        }
}

`;