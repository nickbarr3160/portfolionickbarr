import React from "react";
import {ButtCont} from "./style";
import { button_theme } from "../../utils/variables";
import {useTheme} from '../../utils/provider'
const Button = ({
    icon="",
    onButClick=()=>{}
}) => {
    const {theme} = useTheme();
    return <ButtCont onClick={onButClick} color={button_theme[theme].buttbgColor}  hovColor={button_theme[theme].buttHover}>
        {icon}
    </ButtCont>
}

export default Button;