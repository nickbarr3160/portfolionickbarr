import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import ProjCard from '../comps/ProjectCard';

const MainCont = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:100vh;
justify-content:flex-start;
align-items:center;

`;


export default function Nick() {
    
    return (
    <MainCont>
        <NavBar/>
        <ProjCard/>
    </MainCont>
    )
    
}