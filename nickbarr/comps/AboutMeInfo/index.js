import React, {useState, useEffect}from "react";
import { AboutMeCont, AboutMeTextCont, AboutMeTxtCol, AboutMeHeading, ImageContainer, TabletImageContainer } from "./style";
import { useTheme } from '../../utils/provider';
import { About_Me_theme } from "../../utils/variables";
import Image from 'next/image';
import { Controller, Scene } from 'react-scrollmagic';
import { Timeline, Tween } from "react-gsap";

const INITIAL_ANIMATION_DURATION = 5000;
const AboutMe = ({
    info,
    imgSrc,
    heading,
    order
}) => {
    const { theme } = useTheme();
    const [isInitialAnimationCompleted, setIsInitialAnimationCompleted] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        const timeoutRef = setTimeout(() => {
            setIsInitialAnimationCompleted(true);
        }, INITIAL_ANIMATION_DURATION);

        return () => {
            clearTimeout(timeoutRef);
        };
    }, []);




    return (
        <Controller>
            <Scene
                duration={'70%'}
                triggerElement=".trigger" 
                triggerHook={isImageLoaded === true ? 0.9 : -100}
                // indicators={true}
                enabled={isInitialAnimationCompleted}
            >
                {(progress) => (
                    <>
                        <AboutMeCont bgcolor={About_Me_theme[theme].bgCol} className='trigger'>
                            
                            <AboutMeTxtCol>
 
                                <TabletImageContainer order={order}>
                                    <Image src={imgSrc} layout='fill' objectFit='cover' />
                                </TabletImageContainer>
                        
                                <AboutMeTextCont color={About_Me_theme[theme].parCol}>
                                    <AboutMeHeading color={About_Me_theme[theme].headingCol}>{heading}</AboutMeHeading>
                                    {info}
                                </AboutMeTextCont>

                            </AboutMeTxtCol>

                            <Timeline
                            paused
                            progress={progress}
                            target={
                                <ImageContainer order={order}>
                                    <Image src={imgSrc} layout='fill' objectFit='cover' onLoad={() => setIsImageLoaded(true)} />
                                </ImageContainer>
                            }
                            >
                                <Tween
                                    from={{
                                        x: order === 0 ? '-1100px' : '1100px',
                                        opacity: 0,
                                        ease: 'power1.inOut'
                                    }}
                                    to={{ x: 0, opacity: 1, ease: 'power1.inOut' }}
                                />
                            </Timeline>
                        </AboutMeCont>
                    </>
                )}
            </Scene>
        </Controller>
    );
}

export default AboutMe;
