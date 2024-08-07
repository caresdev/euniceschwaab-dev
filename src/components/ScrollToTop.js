import { useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp} from '@fortawesome/free-solid-svg-icons';
import '../style/ScrollToTop.css';


const ScrollToTop = () => {

  const location  = useLocation();
  const [showTop, setShowTop] = useState(false);

  // Scroll to Top behavior for Routing
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);



  // Show Top Button when scrolling
  useEffect(() => {

    // Handle button visibility 
    const handleShowButton = () => {
      const scrollPosition = document.documentElement.scrollTop; 

      if (scrollPosition > 300){
          setShowTop(true);
      }
      else{
          setShowTop(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);
    
    // Clean up event listener 
    return () => {
      window.removeEventListener('scroll', handleShowButton);

    };
  
  }, []);

  
  // Handle function for scrolling
  const handleScrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});

  };


  return(
    <>
      <Button onClick={handleScrollTop} className={`scrollToTopBtn rounded-circle btn-sm ${showTop ? 'show' : 'hide'}`}> <FontAwesomeIcon icon={faChevronUp} className='scrollToTopIcon' /> </Button>
    </>

  );

};

export default ScrollToTop;
