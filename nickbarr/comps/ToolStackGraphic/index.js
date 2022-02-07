import React from "react";
import {ToolGraphicCont} from './style'
import {MdLaunch} from 'react-icons/md';

const ToolStackGraphic = ({
    toolLabel="JavaScript",
    icon="hi"
}) => {
    return <ToolGraphicCont>
            {icon}
            {toolLabel}
        </ToolGraphicCont>
}

export default ToolStackGraphic;