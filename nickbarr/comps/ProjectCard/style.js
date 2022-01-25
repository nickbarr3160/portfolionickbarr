import styled from 'styled-components'


export const ProjCardCont = styled.div`
width 80%;
height:40%;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
border: 2px solid black;

`;
export const ProjHeading = styled.div`
font-size:3vw;
border:2px solid black;
width:50%;
display:flex;
justify-content:center;


// Used to adjust font size for mobile screens
@media only screen and (max-width: 500px) {
        font-size:6vw;
        }    
`;

export const ProjDescrip = styled.div`
width:90%;

text-align:center;
border:2px solid black;

// Used to adjust font size for mobile screens
@media only screen and (max-width: 500px) {
height:40%;
font-size:3vw;
}
`;


export const ToolTagCont = styled.div`
width 90%;
height:10%;
display:flex;
justify-content:space-evenly;
align-items:center;
border:2px solid black;
`;


export const Icons = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;
width:40%;
border:2px solid black;
`;

export const IconCont = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:3em;
height:3em;
border-radius:50%;
border:2px solid black;
cursor: pointer;
&:hover{
    background-color:black;
    color:white;
}
`;

