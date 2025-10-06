import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Múltiplas tentativas para garantir o scroll
    const scrollToTopInstant = () => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      window.scrollTo(0, 0);
    };

    scrollToTopInstant();
    
    // Tenta novamente após um pequeno delay
    setTimeout(scrollToTopInstant, 10);
    setTimeout(scrollToTopInstant, 50);
    setTimeout(scrollToTopInstant, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
