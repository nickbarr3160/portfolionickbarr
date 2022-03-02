import styled from 'styled-components'

export const AboutCont = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
padding:1em;
justify-content:space-evenly;
width:80vw;
height:100%;
border:2px solid green;
@media only screen and (max-width: 500px) {
    width:90vw;
    }
`

export const IntroText = styled.p`
color:white;
`;


export const HeadingCont = styled.h1`
color:white;
margin:0;
font-size:70px;
@media only screen and (max-width: 700px) {
font-size:40px;
}
`;

export const IntroPar = styled.p`
color:white;
@media only screen and (max-width: 500px) {
    font-size:3vw;
    }
`;