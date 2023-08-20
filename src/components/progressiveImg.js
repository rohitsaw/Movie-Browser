import { useState, useEffect } from "react";

const ProgressiveImg = ({
  placeholderSrc = "/fallback.png",
  src,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <img
      data-testid="image"
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "/fallback.png";
      }}
    />
  );
};
export default ProgressiveImg;
