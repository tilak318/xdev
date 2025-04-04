import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Get the previous path from sessionStorage
    const previousPath = sessionStorage.getItem('previousPath');
    
    // Only maintain scroll position if we're navigating within the same section
    // (e.g., from /portfolio to /portfolio/project)
    const isSubRoute = previousPath && pathname.startsWith(previousPath + '/');
    
    if (!isSubRoute) {
      // Scroll to top for all other route changes
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    
    // Store the current path for the next navigation
    sessionStorage.setItem('previousPath', pathname);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 