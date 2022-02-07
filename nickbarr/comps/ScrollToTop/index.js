import React, {useState, useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './style';
  
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
    
    
  
  return (
    <Button>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} size="1em" />
    </Button>
  );
}
  
export default ScrollButton;