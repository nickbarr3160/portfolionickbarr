import React from "react";
import {ButtCont} from "./style";


const Button = ({
    label="default",
    icon="",
    onButClick=()=>{}
}) => {
    return <ButtCont onClick={onButClick}>
        {icon}
        {label}
    </ButtCont>
}

export default Button;