import { useCallback } from "react";
import { MainCont, StyledParticlesCont, GlobalStyle} from "../styles/styles";
import NavBar from "../comps/NavBar";
import Footer from "../comps/Footer";
import AboutIntro from "../comps/AboutHeroMessage";
import {useTheme} from '../utils/provider';
import { toggle_theme, global_theme } from "../utils/variables";
import {BsFillMoonStarsFill } from 'react-icons/bs';
import {FaSun} from 'react-icons/fa';
import Header from "../comps/Header";
import AboutMeInfo from "../comps/AboutMeInfo";
import ScrollButton from "../comps/ScrollToTop";
import { AboutMeData } from "../data/data";
import { getParticlesOptions } from '../data/particlesConfig';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; 
import { Highlight_theme } from "../utils/variables";

export default function About() {
  
  var aboutMeData = AboutMeData
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
          anchor="#anchor"
          themeToggle={()=>setTheme(
          theme=== 'light'?'default':'light')}
          icon={theme==='light'?<BsFillMoonStarsFill color={toggle_theme[theme].icon} size="1.5em"/>:<FaSun color={toggle_theme[theme].icon} size="1.5em"/>}
          />
        <AboutIntro/>
        
        {/* 
        <Header heading="design samples"/>
          <DesignProjCont>
            <DesignProj/>
          </DesignProjCont> */}

        <Header heading="about me"/>
        
        {aboutMeData.map((o,i)=>{
          return <AboutMeInfo 
          key={i}
          heading={o.heading}
          info={o.text}
          imgSrc={o.imgSrc}
          order={o.order}
        />
        })}

        <Header heading="Get in touch"/>
        <ScrollButton/>
        <Footer footerText='Nicholas Sameer Barr 2022'/>

    </MainCont>
  </>
)
}

