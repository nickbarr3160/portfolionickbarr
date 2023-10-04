import React, { useCallback } from 'react';
import NavBar from '../comps/NavBar'
import ProjCard from '../comps/ProjectCard';
import ToolStackGraphic from '../comps/ToolStackGraphic';
import Header from '../comps/Header';
import HeroMessage from '../comps/HeroMessage'
import { ProjCardData, StackData, ButtonData } from '../data/data';
import { 
  MainCont, 
  ProjCardCont, 
  ToolStackCont, 
  HeroMessageCont, 
  StyledParticlesCont,
  GlobalStyle 
} from '../styles/styles';
import ScrollButton from '../comps/ScrollToTop'
import Footer from '../comps/Footer'
import {useTheme} from '../utils/provider'
import {BsFillMoonStarsFill } from 'react-icons/bs';
import {FaSun} from 'react-icons/fa'
import { toggle_theme, global_theme } from "../utils/variables";
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; 
import { getParticlesOptions } from '../data/particlesConfig';
import { Highlight_theme } from '../utils/variables';


//data used for component data mapping
var cardData = ProjCardData
var stackData = StackData


export default function Nick() {
    
  const {theme, setTheme} = useTheme()

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine); 
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);


    return (
    <>
      <GlobalStyle bg={Highlight_theme[theme].bg} color={Highlight_theme[theme].color} />
      <MainCont>
          {theme === 'default' && (
          <StyledParticlesCont>
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className="particles"
            options={getParticlesOptions(theme, global_theme)}
            />
          </StyledParticlesCont>  
          )}
          <NavBar 
          bgColor={global_theme[theme].body}
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
                            onSrcCodepress={()=>{window.open(`${o.codeSrc}`, '_blank')}}
                            onLaunchAppPress={()=>{window.open(`${o.appSrc}`, '_blank')}}
                            thumbSrc={o.thumbSrc}
                            videoSrc={o.videoSrc}
                            />
                          })}

          </ProjCardCont>

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
          
            <Footer footerText='Nicholas Sameer Barr 2023'/>
          
      </MainCont>
    </>
    )
    
}