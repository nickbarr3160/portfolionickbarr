import React from "react";
import { AboutCont, IntroText, HeadingCont, IntroPar, ButtonCont } from "./style";
import Button from "../Button";
import { ButtonData } from "../../data/data";
import {useTheme} from '../../utils/provider'
import { About_Intro_theme } from "../../utils/variables";

const AboutIntro = ({
    introText="Hey, my name is",
    name="Nicholas Barr",
    phrase="Get to know me",
    introPar="I am a Front-End Developer with a focus on crafting exceptional digital experiences. Beyond development, I also dabble in creating striking graphics and visuals, blending technical proficiency with aesthetic intuition to bring ideas to life. Check out a ",
    blogLink="blog",
    postText=" I wrote about my first year in the industry !"
}) => {
    const {theme} = useTheme();
    var buttonData=ButtonData
    return <AboutCont>
        <IntroText  color={About_Intro_theme[theme].heading1Col} >{introText}</IntroText>
        <HeadingCont color={About_Intro_theme[theme].heading2Col}>{name}</HeadingCont>
        <HeadingCont color={About_Intro_theme[theme].heading3Col}>{phrase}</HeadingCont>
        <IntroPar color={About_Intro_theme[theme].parCol}>
            {introPar}
            <a 
                href="https://mellenger.com/blog/ready-player-one-sharing-best-cheat-codes-my-first-year-front-end-development" 
                style={{ color:About_Intro_theme[theme].heading1Col, textDecoration: 'underline' }}
                target="_blank"
                rel="noopener noreferrer"
            >
                {blogLink}
            </a>
            {postText}
        </IntroPar>
        <ButtonCont>
                    {buttonData.map((o,i)=>{
                    return <Button
                    key={i}
                    icon={o.icon}
                    onButClick={()=>{window.open(`${o.route}`, '_blank')}}
                    />
                    })}     
        </ButtonCont>  
    </AboutCont>
}

export default AboutIntro;