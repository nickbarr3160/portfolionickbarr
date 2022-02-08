import React from "react";
import {HeaderCont, Underline} from './style';
import {useTheme} from '../../utils/provider'
import { Header_theme } from "../../utils/variables";

const Header = ({
    heading="default heading"
}) => {
    const {theme} = useTheme();
    return <HeaderCont color={Header_theme[theme].color}>
        {heading.toUpperCase()}  
        <Underline bgcolor={Header_theme[theme].underline}/>
    </HeaderCont>
}

export default Header;