import React from "react";
import {ButtCont} from "./style";
import { button_theme } from "../../utils/variables";
import {useTheme} from '../../utils/provider'
const Button = ({
    label="default",
    icon="",
    onButClick=()=>{}
}) => {
    const {theme} = useTheme();
    return <ButtCont onClick={onButClick} color={button_theme[theme].buttColor} bgcolor={button_theme[theme].buttbgColor}  hovColor={button_theme[theme].buttHover}>
        {icon}
        {label}
    </ButtCont>
}

export default Button;