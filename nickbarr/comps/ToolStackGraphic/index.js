import React from "react";
import {ToolGraphicCont} from './style'
import {MdLaunch} from 'react-icons/md';

const ToolStackGraphic = ({
    toolLabel="JavaScript",
    icon=<MdLaunch size="5em" />
}) => {
    return <ToolGraphicCont>
            {icon}
            {toolLabel}
        </ToolGraphicCont>
}

export default ToolStackGraphic;