import styled from "styled-components";

export const NavCont = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:20vh;
width:100%;
padding-left:1em;
padding-right:1em;
position:fixed;
z-index:1000;
background:${props=>props.bgColor};
transition: ${props => props.transitionEnabled ? 'background-color 0.3s ease' : 'none'};
box-shadow: ${props => props.boxShadow || "none"}; 
`;

export const Logo = styled.div`
font-size:3em;
margin:1em;
font-weight:bold;
color:${props=>props.color};
&:hover{
color: ${props=>props.hovColor}; 
cursor:pointer;
}
@media only screen and (max-width: 768px) {
    margin:0;
    }
@media only screen and (max-width: 600px) {
    margin:0;
    font-size:2.8em;
    }
`;

export const LinkCont = styled.div`
display:flex;
font-size:1.3em;
justify-content:space-evenly;
align-items:center;
width:40%;
height:100%;
color:${props=>props.color};
// Used to adjust width and font size for mobile screens
@media (max-width: 768px) {
    background-color:${props=>props.bgcolor};
    display: flex;
    flex-direction: column;
    width: 100vw; 
    height: 100vh; 
    position: fixed;
    top: ${props => (props.open ? '0' : '-100vh')}; // Set to '0' to show, '-100vh' to hide above the screen
    left: 0;
    overflow-y: auto;
    transition: top 0.5s ease-in-out;
    align-items: flex-start;
    justify-content: space-evenly;
    z-index: 2000;
    padding:5em 0 15em 1.5em;
    font-size:30px;
`;

export const IconCont= styled.div`
&:hover{
    opacity: 0.5; 
    cursor:pointer;
    }
`;

export const NavLink = styled.a`
&:hover{
    color:${props=>props.color};
}
`;


export const MenuIcon = styled.div`
z-index: 2001;
cursor: pointer;
@media (min-width: 769px) {
        display: none;
}
`;

export const Hamburger = styled.div`
    width: 30px;
    height: 3px;
    background-color: ${props=>props.bgcolor};
    position: relative;
    transform: ${props => (props.open ? "rotate(45deg)" : "rotate(0)")};
    transition: transform 0.3s ease-in-out;

    &:before, &:after {
        content: "";
        background-color:  ${props=>props.bgcolor};
        position: absolute;
        width: 100%;
        height: 3px;
        transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }

    &:before {
        top: ${props => (props.open ? "0" : "-8px")};
        transform: ${props => (props.open ? "rotate(-90deg)" : "rotate(0)")};
    }

    &:after {
        bottom: ${props => (props.open ? "0" : "-8px")};
        opacity: ${props => (props.open ? "0" : "1")};
    }
`;