import React from "react";
import { AboutCont, IntroText, HeadingCont, IntroPar } from "./style";
import Button from "../Button";
import {AiFillLinkedin} from 'react-icons/ai';
const AboutIntro = ({
    introText="Hey, my name is",
    name="Nicholas Barr",
    phrase="I build things for the web",
    introPar="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
}) => {
    return <AboutCont>
        <IntroText>{introText}</IntroText>
        <HeadingCont>{name}</HeadingCont>
        <HeadingCont>{phrase}</HeadingCont>
        <IntroPar>{introPar}</IntroPar>
        <Button label="LinkedIn" icon={<AiFillLinkedin />} onButClick={()=>router.push("https://www.linkedin.com/in/nicholas-barr-689765227/")}/>
    </AboutCont>
}

export default AboutIntro;