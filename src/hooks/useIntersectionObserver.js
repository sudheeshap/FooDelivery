import { useState, useEffect } from 'react';

export default function useIntersectionObserver(targetElRef, options) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  /**
   * Callback for intersection observer
   */
  function observerCallback(entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      setIsIntersecting(true);

      // No need to observe anymore
      observer.unobserve(targetElRef.current);
    }
  }

  /**
   * Create intersection observer
   */
  function createObserver() {
    return new IntersectionObserver(observerCallback, options);
  }

  useEffect(() => {
    if (!targetElRef) {
      return null;
    }

    const observer = createObserver();

    // Check if the target element is visible on the viewport
    observer.observe(targetElRef.current);

    return () => {
      if (targetElRef.current) {
        observer.unobserve(targetElRef.current);
      }
    };
  }, [targetElRef]);

  return isIntersecting;
}
