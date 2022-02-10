import React, {useState, useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './style';
import { ScrollTop_theme } from "../../utils/variables";
import {useTheme} from '../../utils/provider'  

const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 700){
          setVisible(true)
        } 
        else if (scrolled <= 700){
          setVisible(false)
        }
      };
      
      
      window.addEventListener('scroll', toggleVisible);
    });
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    const {theme} = useTheme();
  
  return (
    <Button bgcolor={ScrollTop_theme[theme].bgcolor}>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} size="1em" />
    </Button>
  );
}
  
export default ScrollButton;