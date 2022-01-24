import styled from "styled-components";
import React from "react";
import Link from 'next/link';
import {TagCont} from './style'


const ToolTag = ({
    tool="JavaScript"
}) => {
    return <TagCont>
            {tool}
        </TagCont>
}

export default ToolTag;