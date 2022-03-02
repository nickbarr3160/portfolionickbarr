import { MainCont } from "../styles/styles"
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

export default function About() {
  
  const {theme, setTheme} = useTheme()
  const router = useRouter();
  
  return <MainCont>
       <NavBar 
        anchor="#anchor"
        themeToggle={()=>setTheme(
        theme=== 'light'?'default':'light')}
        icon={theme==='light'?<BsFillMoonStarsFill color={toggle_theme[theme].icon} size="1.5em"/>:<FaSun color={toggle_theme[theme].icon} size="1.5em"/>}
        />
      <AboutIntro/>
        <Header heading="about me"/>
      <AboutMeInfo />

      <Header heading="Get in touch"/>
      
      <Footer footerText='Nicholas Sameer Barr 2022'/>
  
  </MainCont>
}

