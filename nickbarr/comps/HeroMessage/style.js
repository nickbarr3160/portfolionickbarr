import styled from 'styled-components';

export const HeroCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:40vh;
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

export const IntroMessageName = styled.div`
color:${props=>props.color};
width:50%;
height:100%;
display:flex;
justify-content:flex-start;
text-align:left;
flex-wrap:wrap;
font-weight:bold;
font-size:4em;
@media only screen and (max-width: 900px) {
    width:90%;
    font-size:3em;
} 

`;

export const IntroDescrip = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
width:50%;
color:${props=>props.color};
height:100%;
padding:1em;
@media only screen and (max-width: 600px) {
    width:90%;
}   
`;

