import styled from 'styled-components';

export const HeroCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:40vh;
border:2px solid black;
@media only screen and (max-width: 600px) {
    flex-direction:column;
    height:100%;
    }
`;

export const IntroMessage = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:50%;
border:2px solid green;
height:100%;
font-size:4em;

@media only screen and (max-width: 600px) {
    width:90%;
}   
`;

export const IntroDescrip = styled.div`
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
width:50%;
border:2px solid pink;
height:100%;
padding:1em;
@media only screen and (max-width: 600px) {
    width:90%;
}   
`;

