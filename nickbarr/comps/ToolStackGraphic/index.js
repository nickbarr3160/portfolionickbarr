import React from "react";
import {ToolGraphicCont} from './style'
import {MdLaunch} from 'react-icons/md';
import { ToolStack_theme } from "../../utils/variables";
import {useTheme} from '../../utils/provider'

const ToolStackGraphic = ({
    toolLabel="JavaScript",
    icon="hi"
}) => {
    const {theme} = useTheme();
    return <ToolGraphicCont bgcolor={ToolStack_theme[theme].cardbg} hoverbgcolor={ToolStack_theme[theme].hovbgcolor} color={ToolStack_theme[theme].color}  hovercolor={ToolStack_theme[theme].hovcolor}>
            {icon}
            {toolLabel}
        </ToolGraphicCont>
}

export default ToolStackGraphic;