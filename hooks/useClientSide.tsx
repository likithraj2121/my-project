import { useEffect, useState } from 'react';

/**
 * Hook that returns true only after the component has mounted on the client.
 * Prevents hydration mismatches by ensuring server and initial client render are identical.
 */
export const useClientSide = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

/**
 * Hook that safely provides window dimensions, avoiding hydration issues
 */
export const useWindowSize = () => {
  const [size, setSize] = useState({
    width: 800, // Default fallback values
    height: 600,
  });

  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    updateSize();

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};

/**
 * Component that only renders children on the client side
 * Useful for components that rely heavily on browser APIs
 */
export const ClientOnly: React.FC<{ 
  children: React.ReactNode;
  fallback?: React.ReactNode;
}> = ({ children, fallback = null }) => {
  const isClient = useClientSide();
  
  return isClient ? <>{children}</> : <>{fallback}</>;
};