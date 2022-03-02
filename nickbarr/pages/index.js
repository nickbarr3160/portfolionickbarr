import NavBar from '../comps/NavBar'
import ProjCard from '../comps/ProjectCard';
import ToolStackGraphic from '../comps/ToolStackGraphic';
import Header from '../comps/Header';
import HeroMessage from '../comps/HeroMessage'
import { ProjCardData, StackData, ButtonData } from '../data/data';
import {useRouter} from 'next/router';
import { MainCont, ProjCardCont, DesignProjCont, ToolStackCont, HeroMessageCont, ButtonCont } from '../styles/styles';
import ScrollButton from '../comps/ScrollToTop'
import Button from '../comps/Button'
import Footer from '../comps/Footer'
import {useTheme} from '../utils/provider'
import {BsFillMoonStarsFill } from 'react-icons/bs';
import {FaSun} from 'react-icons/fa'
import { toggle_theme } from "../utils/variables";
import DesignProj from '../comps/DesignProjects';
import { HashLink as Link } from 'react-router-hash-link';

//data used for component data mapping
var cardData = ProjCardData
var stackData = StackData
var buttonData = ButtonData


export default function Nick() {
    
  const {theme, setTheme} = useTheme()
  const router = useRouter();

    return (
    <MainCont>
        <NavBar 
        anchor="#anchor"
        themeToggle={()=>setTheme(
        theme=== 'light'?'default':'light')}
        icon={theme==='light'?<BsFillMoonStarsFill color={toggle_theme[theme].icon} size="1.5em"/>:<FaSun color={toggle_theme[theme].icon} size="1.5em"/>}
        />
        
        <HeroMessageCont>
            <HeroMessage/>
        </HeroMessageCont>
        
        <br></br>
        <br></br>
        <br></br>
        
        <Header heading="Development Projects"/>
        
        <ProjCardCont>
            {cardData.map((o,i)=>{
                           return <ProjCard 
                           key={i}
                           projHeading={o.projHeading} 
                           projDescrip={o.projDescrip}
                           tool1={o.tool1}
                           tool2={o.tool2}
                           tool3={o.tool3}
                           tool4={o.tool4}
                           onSrcCodepress={()=>router.push(o.codeSrc)}
                           onGitPress={()=>router.push(o.appSrc)}
                           thumbSrc={o.thumbSrc}
                           videoSrc={o.videoSrc}
                          />
                        })}

        </ProjCardCont>

        {/* <Header heading="design projects"/>

        <DesignProjCont>
           <DesignProj/>
        </DesignProjCont> */}

        <Header heading="Tech Stack"/>
        
        <ToolStackCont>
            {stackData.map((o,i)=>{
                           return <ToolStackGraphic 
                           key={i}
                           toolLabel={o.toolLabel}
                           icon={o.toolIcon}
                          />
                        })}
        </ToolStackCont>
        
        <Header heading="Get in touch"/>
       
        <ScrollButton/>
        
          <Footer footerText='Nicholas Sameer Barr 2022'/>
        
    </MainCont>
    )
    
}