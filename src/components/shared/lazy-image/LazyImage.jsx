import React, { useState, useEffect, useRef } from 'react';
import { PropTypes } from 'prop-types';

import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

/**
 * Lazy loaded image or div with background image
 */
export default function LazyImage({ src, alt, isBackgroundImage, ...props }) {
  const imageRef = useRef(null);
  const [isImageLoaded, setImageLoaded] = useState(false);
  const isIntersecting = useIntersectionObserver(imageRef);

  /**
   * Image loaded
   */
  function onLoadImage() {
    setImageLoaded(true);
  }

  /**
   * Load image
   */
  function loadImage() {
    const img = new Image();
    img.src = src;
    img.onload = onLoadImage;
  }

  useEffect(() => {
    if (!isIntersecting || isImageLoaded) {
      return;
    }

    // Load image as the section is visible in viewport
    loadImage();
  }, [imageRef.current, isIntersecting]);

  return (
    <>
      {!isImageLoaded && (
        <div
          className={`image--placeholder ${props.className}`}
          ref={imageRef}
        />
      )}

      {isBackgroundImage && (
        <div
          className={`image ${props.className} ${
            isImageLoaded ? 'image--loaded' : ''
          }`}
          style={isImageLoaded ? { backgroundImage: `url(${src})` } : null}
        />
      )}

      {!isBackgroundImage && (
        <img
          src={isImageLoaded ? src : ''}
          alt={alt}
          className={`image ${props.className} ${
            isImageLoaded ? 'image--loaded' : ''
          }`}
          onLoad={onLoadImage}
        />
      )}
    </>
  );
}

LazyImage.defaultProps = {
  isBackgroundImage: false,
  alt: '',
  className: '',
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  isBackgroundImage: PropTypes.bool,
};
