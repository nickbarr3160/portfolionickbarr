import React from "react";
import {HeaderCont, Underline} from './style';


const Header = ({
    heading="default heading"
}) => {
    return <HeaderCont>
        {heading}
        <Underline/>
        
          
    </HeaderCont>
}

export default Header;