import React from "react";

interface ImageProps {
  alt: string;
  width: number;
  height: number;
  src: string;
  className?: string;
}

export const CustomImage: React.FC<ImageProps> = ({
  alt,
  width,
  height,
  src,
  className,
}) => (
  <img
    alt={alt}
    loading="lazy"
    width={width}
    height={height}
    decoding="async"
    data-nimg="1"
    className={className}
    src={src}
  />
);
