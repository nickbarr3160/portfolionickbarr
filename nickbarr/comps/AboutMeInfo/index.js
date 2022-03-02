import React from "react";
import { AboutMeCont, AboutMeImg, AboutMeTextCont,AboutMeTxtCol, AboutMeHeading } from "./style";
import {useTheme} from '../../utils/provider'
import { About_Me_theme } from "../../utils/variables";

const AboutMe = ({
    info="",
    imgSrc="",
    heading=""
}) => {
    const {theme} = useTheme();
    return <AboutMeCont>
        
        <AboutMeTxtCol>
            <AboutMeHeading color={About_Me_theme[theme].headingCol}>{heading}</AboutMeHeading>
            <AboutMeTextCont color={About_Me_theme[theme].parCol}>
                {info}
            </AboutMeTextCont> 
        </AboutMeTxtCol>

        <AboutMeImg src={imgSrc}/>
    </AboutMeCont>
}

export default AboutMe;