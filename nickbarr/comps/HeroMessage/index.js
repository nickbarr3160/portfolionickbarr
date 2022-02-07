import React from "react";
import {HeroCont, IntroMessage, IntroDescrip} from './style'
import Button from '../Button'
import { HeroMessageData } from "../../data/data";
import {AiFillGithub} from 'react-icons/ai';

const HeroMessage = ({
    message=HeroMessageData.IntroMessage,
    descrip=HeroMessageData.IntroDescrip
}) => {
    return <HeroCont>
        <IntroMessage>  
            {message}
        </IntroMessage>
        <IntroDescrip>
            {descrip}
            <Button label="GitHub" icon={<AiFillGithub/>}/>
        </IntroDescrip>
    </HeroCont>
}

export default HeroMessage;