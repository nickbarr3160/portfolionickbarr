import styled from 'styled-components'

export const AboutMeCont = styled.div`
display:flex;
width:80vw;
justify-content:space-around;
align-items:center;
padding:1em;
border:2px solid green;
color:white;
@media only screen and (max-width: 770px) {
    flex-direction:column;
    width:100%;
    height:50%;
    }
`;

export const AboutMeTextCont = styled.div`
height:100%;
width:50%;
border: 2px solid blue;
@media only screen and (max-width: 500px) {
    
    width:90%;
    }
`;

export const AboutMeImg = styled.img`
border-radius:10px;
width:40%;
@media only screen and (max-width: 500px) {
    margin-top:3em;
    width:100%;
    height:50%;
    }

@media only screen and (max-width: 1200px) {
    margin-top:0em;
    width:40%;
    height:50%;
    }
`;