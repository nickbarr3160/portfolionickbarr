import React from "react";
import {ButtCont} from "./style";

const Button = ({
    label="default",
    onButClick=()=>{}
}) => {
    return <ButtCont onClick={onButClick}>
        {label}
    </ButtCont>
}

export default Button;