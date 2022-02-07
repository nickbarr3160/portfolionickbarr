import NavBar from '../comps/NavBar'
import styled from 'styled-components'
import ProjCard from '../comps/ProjectCard';
import ToolStackGraphic from '../comps/ToolStackGraphic';
import Header from '../comps/Header';
import HeroMessage from '../comps/HeroMessage'
import { ProjCardData, StackData, ButtonData } from '../data/data';
import {useRouter} from 'next/router';
import { MainCont, ProjCardCont, ToolStackCont, HeroMessageCont, ScrollTopCont } from '../styles/styles';
import ScrollButton from '../comps/ScrollToTop'
import Button from '../comps/Button'

//data used for component data mapping
var cardData = ProjCardData
var stackData = StackData
var buttonData = ButtonData

export default function Nick() {
    const router = useRouter();
    return (
    <MainCont>
        <NavBar/>
        <HeroMessageCont>
            <HeroMessage/>
        </HeroMessageCont>
        <Header heading="PROJECTS"/>
        <ProjCardCont>
            {cardData.map((o,i)=>{
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
        <Header heading="TOOL STACK"/>
        <ToolStackCont>
            {stackData.map((o,i)=>{
                           return <ToolStackGraphic 
                           toolLabel={o.toolLabel}
                           icon={o.toolIcon}
                          />
                        })}
        </ToolStackCont>
        <Header heading="GET IN TOUCH"/>
        <ScrollButton/>
        {buttonData.map((o,i)=>{
                           return <Button
                           label={o.label}
                           icon={o.icon}
                           onButClick={()=>router.push(o.route)}
                          />
                        })}
    </MainCont>
    )
    
}