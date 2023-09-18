import React from "react";
import {HeroCont, IntroMessage, IntroDescrip, IntroMessageName, ButtonCont} from './style'
import Button from '../Button'
import { HeroMessageData } from "../../data/data";
import {AiFillGithub} from 'react-icons/ai';
import { HeroMessage_theme } from "../../utils/variables";
import {useTheme} from '../../utils/provider'
import {useRouter} from 'next/router';


const HeroMessage = ({
    message=HeroMessageData.IntroMessage,
    descrip=HeroMessageData.IntroDescrip,
    fname=HeroMessageData.IntroMessagefName,
    lname=HeroMessageData.IntroMessagelName,
}) => {
    const {theme} = useTheme();
    const router = useRouter();
    return <HeroCont>
        
        <IntroMessage >  
            <IntroMessageName color={HeroMessage_theme[theme].heroIntro}>
                {message}
            </IntroMessageName>
            <IntroMessageName color={HeroMessage_theme[theme].heroIntrofName}>
                {fname}
            </IntroMessageName>
            <IntroMessageName color={HeroMessage_theme[theme].heroIntrolName}>
                {lname}
            </IntroMessageName>
        </IntroMessage>

        <IntroDescrip color={HeroMessage_theme[theme].heroIntroDescrip}>
            {descrip}
            <ButtonCont>
                <Button label="GitHub" icon={<AiFillGithub/>} onButClick={() => window.open("https://github.com/nickbarr3160", "_blank")}/>
            </ButtonCont>
        </IntroDescrip>

    </HeroCont>
}

export default HeroMessage;