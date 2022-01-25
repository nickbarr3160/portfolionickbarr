import styled from 'styled-components'

export const ButtCont = styled.button`
background-color:black;
border: none;
color: white;
padding: 16px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
transition-duration: 0.4s;
cursor: pointer;
border-radius:30px;
&:hover{
    background-color: white; 
    color: black; 
    border: 2px solid black;
}
`;