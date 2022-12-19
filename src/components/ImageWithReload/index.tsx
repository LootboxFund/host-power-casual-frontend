import { uuidv4 } from "@firebase/util";
import React, { FunctionComponent, useState } from "react";

const nAttempts = 3;

interface ImageWithReloadProps {
  imageUrl: string;
  alt: string;
  className: string;
}
const ImageWithReload: FunctionComponent<ImageWithReloadProps> = (props) => {
  const [imageUrl, setImageUrl] = useState(props.imageUrl);
  const [_imageError, setImageError] = useState(false);
  const [attempts, setNAttempts] = useState<number>(0);

  const handleError = () => {
    if (attempts > nAttempts) {
      return;
    }
    setNAttempts(attempts + 1);
    console.log("error");
    const timeout = setTimeout(() => {
      const url = new URL(props.imageUrl);
      url.searchParams.append("errnonce", uuidv4());
      setImageError(true);
      setImageUrl(url.toString()); // Set the src attribute to a new URL to trigger the image to be reloaded
    }, 2000);
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
