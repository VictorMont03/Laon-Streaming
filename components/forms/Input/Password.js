import { useState } from "react";

//Using input default like wrapper
import { Input } from "./Input";

export function Password({ ...props }) {
  //Password state
  const [isVisible, setVisible] = useState(false);

  function handleVisibility() {
    setVisible(!isVisible);
  }

  function EyeElement() {
    if (isVisible) {
      return (
        <img
          src="/icons/eye.svg"
          onClick={handleVisibility}
          alt="Password visible"
        />
      );
    } else {
      return (
        <img
          src="/icons/eye.svg"
          onClick={handleVisibility}
          alt="Password not visible"
        />
      );
    }
  }

  return <Input type={isVisible ? "text" : "password"} {...props} />;
}
