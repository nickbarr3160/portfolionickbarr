import React from "react";
import {HeroCont, IntroMessage, IntroDescrip} from './style'
import Button from '../Button'
import { HeroMessageData } from "../../data/data";

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
            <Button label="GitHub"/>
        </IntroDescrip>
    </HeroCont>
}

export default HeroMessage;