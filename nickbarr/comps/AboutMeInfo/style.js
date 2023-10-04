import styled from 'styled-components'

export const AboutMeCont = styled.div`
display:flex;
width:90vw;
height:400px;
justify-content:space-between;
margin:1em;
align-items:center;
color:white;
border-radius:12px;
box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
overflow:hidden;
background-color: ${props => props.bgcolor};
@media only screen and (min-width: 1700px) {
    width:60vw;
}
@media only screen and (max-width: 1100px) {
    align-items:flex-start;
    height:500px;
    width:95%;
    }
@media only screen and (max-width: 800px) {
    justify-content:flex-start;
    overflow:auto;
    height:auto;
    padding:2em;
    }
@media only screen and (max-width: 480px) {
    justify-content:flex-start;
    overflow:auto;
    height:auto;
    padding:2em;
    width:95%;
    padding:0;
    }
`;

export const AboutMeTextCont = styled.div`
width:100%;
color:${props=>props.color};
@media only screen and (max-width: 800px) {
    height:100%;
}
@media only screen and (max-width: 480px) {
    padding:2em;
}
`;

export const ImageContainer = styled.div`
order:${props=>props.order};
width: 30%;
height: 100%;
position: relative;
overflow:hidden;
@media only screen and (max-width: 1100px) {
    width:40%;
}
@media only screen and (max-width: 800px) {
    display:none;
}
`;
export const TabletImageContainer = styled.div`
order:${props=>props.order};
width: 30%;
height: 100%;
position: relative;
overflow:hidden;
display:none;
@media only screen and (max-width: 1100px) {
    width:40%;
}
@media only screen and (max-width: 800px) {
    display:block;
    order:-1;
    width:250px;
    height:300px;
    position: relative;
    margin:0 1em 0em 0;
    top: 0px;
    left: 0px;
    float:left;
}
@media only screen and (max-width: 480px) {
    width:100%;
    margin:0;
`;
export const AboutMeHeading = styled.h1`
color:${props=>props.color};
@media only screen and (max-width: 800px) {
    padding:0;
    margin:0 0 0.5em 0;
}
`

export const AboutMeTxtCol=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
padding:0 2em 0 2em ;
height:100%;
width:65%;
@media only screen and (max-width: 1100px) {
    width:100%;
    padding:0 1.5em 1.5em 1.5em ;
    }
@media only screen and (max-width: 800px) {
    display:block;
    flex-direction:row;
    padding:0;
    height:auto;
}
@media only screen and (max-width: 480px) {
    display:flex;
    flex-direction:column;
    width:100%;
}
`;