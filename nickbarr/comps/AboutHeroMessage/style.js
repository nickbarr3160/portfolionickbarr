import styled from 'styled-components'

export const AboutCont = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
padding:1em;
justify-content:space-evenly;
width:80vw;
height:100%;
margin:15em 0 0 0;
@media only screen and (max-width: 500px) {
    width:90vw;
    }
`

export const IntroText = styled.p`
color:${props=>props.color};
`;


export const HeadingCont = styled.h1`
color:${props=>props.color};
margin:0;
font-size:70px;
@media only screen and (max-width: 700px) {
font-size:40px;
}
`;

export const IntroPar = styled.p`
color:${props=>props.color};
margin-bottom:3em;
@media only screen and (max-width: 500px) {
    font-size:3vw;
    }
`;


export const ButtonCont = styled.div`
display:flex;
width:100%;
padding:1em 0 0em 0;
justify-content:flex-start;
`;