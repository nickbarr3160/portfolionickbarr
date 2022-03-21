import styled, { keyframes }  from 'styled-components';
import { fadeInLeft } from 'react-animations';


export const HeroCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:50vh;
margin:1em;
@media only screen and (max-width: 950px) {
    flex-direction:column;
}
`;

export const IntroMessage = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:50%;
height:100%;
color:${props=>props.color};
@media only screen and (max-width: 600px) {
    width:90%;
}   
`;

// variable storing the animation for the intro name
const fadeAnimation = keyframes`${fadeInLeft}`;

export const IntroMessageName = styled.div`
color:${props=>props.color};
width:50%;
// height:100%;
display:flex;
justify-content:flex-start;
text-align:left;
flex-wrap:wrap;
font-weight:bold;
font-size:4em;
animation: 1.5s ${fadeAnimation};
@media only screen and (max-width: 900px) {
    width:90%;
    font-size:3em;
} 

`;

export const IntroDescrip = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:50%;
color:${props=>props.color};
height:100%;
padding-right:1em;
@media only screen and (max-width: 600px) {
    width:80%;
    padding-right:0em;
}   
@media only screen and (min-width: 1300px) {
    font-size:25px;
}   
`;

export const ButtonCont = styled.div`
display:flex;
margin-top:2em;
width:100%;
justify-content:flex-start;
`;
