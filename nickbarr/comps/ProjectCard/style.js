import styled from 'styled-components'


export const ProjCardCont = styled.div`
width 45%;
height:120vh;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;
background-color:${props=>props.bgcolor};
margin:1em;
box-shadow:0 2px 4px rgb(0 0 0/20%);;
border-radius:1em;
padding:1em;
@media only screen and (max-width: 700px) {
    height:90vh;
    width:85%;
    }  
`;
export const ProjHeading = styled.div`
font-size:3vw;
color:${props=>props.color};
width:60%;
display:flex;
justify-content:center;
text-align:center;
// Used to adjust font size for mobile screens
@media only screen and (max-width: 500px) {
        font-size:6vw;
        }    
`;

export const ProjDescrip = styled.div`
width:90%;
height:20%;
text-align:center;
color:${props=>props.color};
// Used to adjust font size for mobile screens
@media only screen and (max-width: 500px) {
font-size:3vw;
}
`;


export const ToolTagCont = styled.div`
width 90%;
display:flex;
justify-content:space-evenly;
align-items:center;
flex-wrap:wrap;
`;


export const Icons = styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;
width:40%;
@media only screen and (max-width: 400px) {
    width:60%;
}  
`;

export const IconCont = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:3em;
height:3em;
border-radius:50%;
border:2px solid ${props=>props.brdrColor};
color:${props=>props.color};
cursor: pointer;
&:hover{
    background-color: ${props=>props.bgColor};
    color:${props=>props.hovcolor};
}
`;

