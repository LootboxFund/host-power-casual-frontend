import { uuidv4 } from "@firebase/util";
import React, { FunctionComponent, useState } from "react";

interface ImageWithReloadProps {
  imageUrl: string;
  alt: string;
  key: string;
  className: string;
}
const ImageWithReload: FunctionComponent<ImageWithReloadProps> = (props) => {
  const [imageUrl, setImageUrl] = useState(props.imageUrl);
  const [_imageError, setImageError] = useState(false);

  const handleError = () => {
    console.log("error");
    const timeout = setTimeout(() => {
      const url = new URL(props.imageUrl);
      url.searchParams.append("errnonce", uuidv4());
      setImageError(true);
      setImageUrl(url.toString()); // Set the src attribute to a new URL to trigger the image to be reloaded
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  };

  return (
    <img
      src={imageUrl}
      alt={props.alt}
      onError={handleError}
      className={props.className}
    />
  );
};

export default ImageWithReload;
