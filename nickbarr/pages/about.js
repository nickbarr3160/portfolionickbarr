import { MainCont, DesignProjCont } from "../styles/styles"
import NavBar from "../comps/NavBar"
import Footer from "../comps/Footer"
import AboutIntro from "../comps/AboutHeroMessage"
import {useTheme} from '../utils/provider'
import { toggle_theme } from "../utils/variables";
import {BsFillMoonStarsFill } from 'react-icons/bs';
import {FaSun} from 'react-icons/fa'
import {useRouter} from 'next/router';
import Header from "../comps/Header"
import AboutMeInfo from "../comps/AboutMeInfo"
import ScrollButton from "../comps/ScrollToTop"
import { AboutMeData } from "../data/data"
import DesignProj from "../comps/DesignProjects"
import { useEffect, useState } from "react"


export default function About() {
  
  var aboutMeData = AboutMeData
  
  const {theme, setTheme} = useTheme()
  const router = useRouter();
  const [width, setWidth] = useState()
  
  // useEffect hook to extract screen width
  useEffect(()=>{
    let screenWidth = window.innerWidth;
    setWidth(screenWidth)
  },[])

  if (width>900){
    return <MainCont>
       <NavBar 
        anchor="#anchor"
        themeToggle={()=>setTheme(
        theme=== 'light'?'default':'light')}
        icon={theme==='light'?<BsFillMoonStarsFill color={toggle_theme[theme].icon} size="1.5em"/>:<FaSun color={toggle_theme[theme].icon} size="1.5em"/>}
        />
      <AboutIntro/>
       {/* add screen size condition here */}
       <Header heading="design samples"/>

        <DesignProjCont>
           <DesignProj/>
        </DesignProjCont>
      <Header heading="about me"/>
      
      {aboutMeData.map((o,i)=>{
                           return <AboutMeInfo 
                           key={i}
                           heading={o.heading}
                           info={o.text}
                           imgSrc={o.imgSrc}
                          />
                        })}

      <Header heading="Get in touch"/>
      
      <ScrollButton/>
      <Footer footerText='Nicholas Sameer Barr 2022'/>
  
  </MainCont>
  }
  
  // If the screen size is below 900 do no return the design project component
  else{
  return <MainCont>
       <NavBar 
        anchor="#anchor"
        themeToggle={()=>setTheme(
        theme=== 'light'?'default':'light')}
        icon={theme==='light'?<BsFillMoonStarsFill color={toggle_theme[theme].icon} size="1.5em"/>:<FaSun color={toggle_theme[theme].icon} size="1.5em"/>}
        />
      <AboutIntro/>
      <Header heading="about me"/>
      
      {aboutMeData.map((o,i)=>{
                           return <AboutMeInfo 
                           key={i}
                           heading={o.heading}
                           info={o.text}
                           imgSrc={o.imgSrc}
                          />
                        })}

      <Header heading="Get in touch"/>
      
      <ScrollButton/>
      <Footer footerText='Nicholas Sameer Barr 2022'/>
  
  </MainCont>
  }
}

