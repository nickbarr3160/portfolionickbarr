import React from "react";
import {useTheme} from '../../utils/provider'
import ReactPlayer from 'react-player/lazy'
import { VideoCont } from "./style";
import {BsSunFill} from 'react-icons/bs';

const VideoPlayer= ({
    
}) => {
    const {theme} = useTheme();
    return <VideoCont>
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'  width={'100%'} height={'100%'} style={{bordeRadius:'30px'}} playIcon={BsSunFill} playing={false} controls={true}/>
    </VideoCont>
}

export default VideoPlayer;