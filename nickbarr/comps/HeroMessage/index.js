import React from "react";
import {HeroCont, IntroMessage, IntroDescrip, IntroMessageName, ButtonCont} from './style'
import Button from '../Button'
import { HeroMessageData, ButtonData } from "../../data/data";
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
    var buttonData=ButtonData
    const {theme} = useTheme();
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
                    {buttonData.map((o,i)=>{
                    return <Button
                    key={i}
                    icon={o.icon}
                    onButClick={()=>{window.open(`${o.route}`, '_blank')}}
                    />
                    })}     
                </ButtonCont>      
        </IntroDescrip>

    </HeroCont>
}

export default HeroMessage;