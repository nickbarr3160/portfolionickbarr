import React from "react";
import { AboutMeCont, AboutMeImg, AboutMeTextCont,AboutMeTxtCol } from "./style";


const AboutMe = ({
    info="",
    imgSrc="",
    heading=""
}) => {
    return <AboutMeCont>
        
        <AboutMeTxtCol>
            <h1>{heading}</h1>
            <AboutMeTextCont>
                {info}
            </AboutMeTextCont> 
        </AboutMeTxtCol>

        <AboutMeImg src={imgSrc}/>
    </AboutMeCont>
}

export default AboutMe;