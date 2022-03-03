import styled from 'styled-components'

export const AboutMeCont = styled.div`
display:flex;
width:80vw;
justify-content:space-around;
margin:1em;
align-items:center;
padding:1em;
color:white;
@media only screen and (max-width: 900px) {
    flex-direction:column;
    width:100%;
    height:50%;
    }
`;

export const AboutMeTextCont = styled.div`
height:100%;
width:100%;
color:${props=>props.color};
@media only screen and (max-width: 770px) {
    width:95%;
    }
`;

export const AboutMeImg = styled.img`
border-radius:10px;
width:30%;
aspect-ratio: auto 500 / 500;
box-shadow:0 2px 4px rgb(0 0 0/40%);
@media only screen and (max-width: 500px) {
    margin-top:3em;
    width:80%;
    }

@media only screen and (min-width: 500px) and (max-width: 1000px) {
    margin-top:3em;
    width:50%;
    }

`;

export const AboutMeHeading = styled.h1`
color:${props=>props.color};
`

export const AboutMeTxtCol=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
height:100%;
width:50%;
@media only screen and (max-width: 770px) {
    width:90%;
    }
`;