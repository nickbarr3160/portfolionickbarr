import styled from 'styled-components'

export const ButtCont = styled.button`
background-color:black;
width:7em;
border: none;
color: white;
padding:1em;
text-align: center;
display: flex;
align-items:center;
justify-content:space-evenly;
font-size: 16px;
transition-duration: 0.4s;
cursor: pointer;
border-radius:30px;
margin:1em;
&:hover{
    background-color: white; 
    color: black; 
    border: 2px solid black;
}
`;