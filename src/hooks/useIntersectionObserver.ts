import { useState, useEffect, RefObject } from 'react';

export default function useIntersectionObserver(
  targetElRef: RefObject<Element>,
  options?: Object,
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!targetElRef) {
      return;
    }

    /**
     * Create intersection observer
     */
    function createObserver(): IntersectionObserver {
      return new IntersectionObserver(observerCallback, options);
    }

    /**
     * Callback for intersection observer
     */
    function observerCallback(
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver,
    ) {
      const [entry] = entries;

      if (entry.isIntersecting) {
        setIsIntersecting(true);

        if (targetElRef.current) {
          // No need to observe anymore
          observer.unobserve(targetElRef.current);
        }
      }
    }

    const observer = createObserver();
    const target = targetElRef.current;

    if (target) {
      // Check if the target element is visible on the viewport
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [targetElRef, options]);

  return isIntersecting;
}
