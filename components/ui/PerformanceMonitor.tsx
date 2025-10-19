import { useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
}

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Ensure we're in the browser
    if (typeof window === 'undefined') return;
    
    // Wait for the page to fully load
    const measurePerformance = () => {

      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        const metrics: Partial<PerformanceMetrics> = {
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        };

        // First Paint and First Contentful Paint
        paint.forEach((entry) => {
          if (entry.name === 'first-paint') {
            metrics.firstPaint = entry.startTime;
          }
          if (entry.name === 'first-contentful-paint') {
            metrics.firstContentfulPaint = entry.startTime;
          }
        });

        // Largest Contentful Paint
        if ('PerformanceObserver' in window) {
          try {
            const lcpObserver = new PerformanceObserver((entryList) => {
              const entries = entryList.getEntries();
              if (entries.length > 0) {
                const lastEntry = entries[entries.length - 1] as PerformanceEntry;
                metrics.largestContentfulPaint = lastEntry.startTime;
              }
            });
            lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

            // Cumulative Layout Shift
            const clsObserver = new PerformanceObserver((entryList) => {
              let clsValue = 0;
              entryList.getEntries().forEach((entry) => {
                const layoutShiftEntry = entry as LayoutShiftEntry;
                if (!layoutShiftEntry.hadRecentInput) {
                  clsValue += layoutShiftEntry.value;
                }
              });
              metrics.cumulativeLayoutShift = clsValue;
            });
            clsObserver.observe({ entryTypes: ['layout-shift'] });

            // First Input Delay
            const fidObserver = new PerformanceObserver((entryList) => {
              entryList.getEntries().forEach((entry) => {
                const firstInputEntry = entry as FirstInputEntry;
                metrics.firstInputDelay = firstInputEntry.processingStart - firstInputEntry.startTime;
              });
            });
            fidObserver.observe({ entryTypes: ['first-input'] });
          } catch (e) {
            console.warn('Performance Observer not supported:', e);
          }
        }

        // Log metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.group('🚀 Performance Metrics');
          console.log('Load Time:', metrics.loadTime?.toFixed(2), 'ms');
          console.log('DOM Content Loaded:', metrics.domContentLoaded?.toFixed(2), 'ms');
          console.log('First Paint:', metrics.firstPaint?.toFixed(2), 'ms');
          console.log('First Contentful Paint:', metrics.firstContentfulPaint?.toFixed(2), 'ms');
          if (metrics.largestContentfulPaint) {
            console.log('Largest Contentful Paint:', metrics.largestContentfulPaint.toFixed(2), 'ms');
          }
          if (metrics.cumulativeLayoutShift) {
            console.log('Cumulative Layout Shift:', metrics.cumulativeLayoutShift.toFixed(4));
          }
          if (metrics.firstInputDelay) {
            console.log('First Input Delay:', metrics.firstInputDelay.toFixed(2), 'ms');
          }
          console.groupEnd();
        }

      } catch (error) {
        console.warn('Performance monitoring error:', error);
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);
};

// Lazy loading hook for components
export const useLazyLoading = (threshold = 0.1, rootMargin = '50px') => {
  useEffect(() => {
    // Ensure we're in the browser
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    // Preload critical images
    const criticalImages = document.querySelectorAll('img[data-priority="true"]');
    criticalImages.forEach((img) => {
      if (img instanceof HTMLImageElement && !img.complete) {
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.as = 'image';
        preloadLink.href = img.src;
        document.head.appendChild(preloadLink);
      }
    });

    // Lazy load non-critical images
    const lazyImages = document.querySelectorAll('img[data-lazy="true"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              const src = img.dataset.src;
              if (src) {
                img.src = src;
                img.removeAttribute('data-src');
                img.removeAttribute('data-lazy');
                imageObserver.unobserve(img);
              }
            }
          });
        },
        {
          threshold,
          rootMargin,
        }
      );

      lazyImages.forEach((img) => imageObserver.observe(img));

      return () => {
        lazyImages.forEach((img) => imageObserver.unobserve(img));
      };
    }
  }, [threshold, rootMargin]);
};

// Resource hints for better performance
export const ResourceHints: React.FC = () => {
  useEffect(() => {
    // Ensure we're in the browser
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    
    // Preload critical fonts
    const fontPreloads = [
      '/fonts/inter-var.woff2',
      // Add other critical fonts here
    ];

    fontPreloads.forEach((fontUrl) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.href = fontUrl;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const dnsPrefetchDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
    ];

    dnsPrefetchDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

  }, []);

  return null;
};

export default usePerformanceMonitor;