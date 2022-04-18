import React from "react";
import { AboutCont, IntroText, HeadingCont, IntroPar } from "./style";
import Button from "../Button";
import {AiFillLinkedin} from 'react-icons/ai';
import {useTheme} from '../../utils/provider'
import { About_Intro_theme } from "../../utils/variables";

const AboutIntro = ({
    introText="Hey, my name is",
    name="Nicholas Barr",
    phrase="I build things for the web",
    introPar="I’m a Front-End developer specializing in extraordinary digital experiences. Second to being a developer I also sometimes create graphics and visuals."
}) => {
    const {theme} = useTheme();
    return <AboutCont>
        <IntroText  color={About_Intro_theme[theme].heading1Col} >{introText}</IntroText>
        <HeadingCont color={About_Intro_theme[theme].heading2Col}>{name}</HeadingCont>
        <HeadingCont color={About_Intro_theme[theme].heading3Col}>{phrase}</HeadingCont>
        <IntroPar color={About_Intro_theme[theme].parCol}>{introPar}</IntroPar>
        <Button label="LinkedIn" icon={<AiFillLinkedin />} onButClick={()=>router.push("https://www.linkedin.com/in/nicholas-barr-689765227/")}/>
    </AboutCont>
}

export default AboutIntro;