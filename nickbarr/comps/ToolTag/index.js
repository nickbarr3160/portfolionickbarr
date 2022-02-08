import styled from "styled-components";
import React from "react";
import Link from 'next/link';
import {TagCont} from './style'
import { ProjCard_theme } from "../../utils/variables";
import {useTheme} from '../../utils/provider'

const ToolTag = ({
    tool="JavaScript"
}) => {
    const {theme} = useTheme();
    return <TagCont bgcolor={ProjCard_theme[theme].toolbgColor} color={ProjCard_theme[theme].toolColor}>
            {tool}
        </TagCont>
}

export default ToolTag;