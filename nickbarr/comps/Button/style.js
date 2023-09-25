import styled from 'styled-components'

export const ButtCont = styled.div`
color: ${props=>props.color};
text-align: center;
display: flex;
align-items:flex-start;
justify-content:center;
font-size: 60px;
transition-duration: 0.4s;
cursor: pointer;
&:hover{
    color: ${props=>props.hovColor}; 
}
@media only screen and (min-width: 400px) {
    margin:0 20px 0 0;
}  

`;