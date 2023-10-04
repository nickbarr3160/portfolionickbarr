import styled, { keyframes }  from 'styled-components';
import { fadeInLeft } from 'react-animations';


export const HeroCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
margin:20em 0 0em 0;
@media only screen and (max-width: 1100px) {
    flex-direction:column;
}
@media only screen and (min-width: 700px) and (max-width: 1100px) {
    padding:0 64px 0 64px;
}
@media only screen and (max-width: 700px) {
    padding:0 0 0 0;
    }
@media only screen and (max-width: 400px) {
    padding:0 0 30px 0;
}
`;

export const IntroMessage = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:50%;
height:385px;
color:${props=>props.color};
@media only screen and (max-width: 600px) {
    width:80%;
    align-items:flex-start;
}
@media only screen and (min-width: 600px) and (max-width: 1100px) {
    justify-content:flex-start;
    height:auto;
    flex-direction:row;
    width:90%;
}
margin-right:15px;
}
@media only screen and (max-width: 700px) {
    height:auto;
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
font-size:5em;
animation: 1.5s ${fadeAnimation};
@media only screen and (max-width: 900px) {
    width:90%;
    font-size:3em;
} 
@media only screen and (min-width: 600px) and (max-width: 1100px) {
    font-size:4em;
    margin-bottom:0.2em;
    width:auto;
    margin-right:15px;
} 
@media only screen and (max-height: 700px) and (min-width: 600px) and (max-width: 850px) {
    margin-bottom:0.5em;
    } 
`;

export const IntroDescrip = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
width:50%;
height:385px;
color:${props=>props.color};
padding-right:1em;
@media only screen and (max-width: 600px) {
    width:80%;
    padding-right:0em;
}   
@media only screen and (min-width: 1300px) {
    font-size:25px;
}
@media only screen and (min-width: 600px) and (max-width: 1100px) {
    width:90%;
    font-size:20px;
    justify-content:center;
    height:50%;
}  
`;

export const ButtonCont = styled.div`
display:flex;
width:100%;
padding:1em 0 0em 0;
justify-content:flex-start;
`;
