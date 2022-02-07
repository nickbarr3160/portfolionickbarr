import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import ProjCard from '../comps/ProjectCard';
import Button from '../comps/Button'
import ToolStackGraphic from '../comps/ToolStackGraphic';
import Header from '../comps/Header';
import HeroMessage from '../comps/HeroMessage'
import { ProjCardData } from '../data/data';
import {useRouter} from 'next/router';
import heading from '../comps/Header'
//data used for project card component mapping
var data = ProjCardData


//Containers for all comps MOVE ALL TO STYLES FOLDER 
const MainCont = styled.div`
display:flex;
flex-direction:column;
width:100%;
justify-content:space-;
align-items:center;
`;

const ProjCardCont = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
width:100%;
height:120vh;
border:2px solid black;
`;


export default function Nick() {
    const router = useRouter();
    return (
    <MainCont>
        <NavBar/>
        
        <HeroMessage/>

        <ProjCardCont>
        <Header heading="Projects"/>
        {data.map((o,i)=>{
                           return <ProjCard 
                           projHeading={o.projHeading} 
                           projDescrip={o.projDescrip}
                           tool1={o.tool1}
                           tool2={o.tool2}
                           tool3={o.tool3}
                           tool4={o.tool4}
                           onSrcCodepress={()=>router.push(o.codeSrc)}
                           onGitPress={()=>router.push(o.gitSrc)}
                          />
                        })}

        </ProjCardCont>
        
        
    </MainCont>
    )
    
}