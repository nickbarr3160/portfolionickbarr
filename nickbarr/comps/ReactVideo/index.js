import React from "react";
import {useTheme} from '../../utils/provider'
import ReactPlayer from 'react-player/lazy'
import { VideoCont } from "./style";
import {BsSunFill} from 'react-icons/bs';

const VideoPlayer= ({
    thumbSrc="",
    videoSrc=""
}) => {
    const {theme} = useTheme();
    return <VideoCont>
        <ReactPlayer url={videoSrc}  
        width={'100%'} 
        height={'100%'} 
        style={{borderRadius:'30px'}} 
        light={thumbSrc}
        />
    </VideoCont>
}

export default VideoPlayer;