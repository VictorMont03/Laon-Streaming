import { useRef } from "react";

import { Base } from "./Base";

export function Input({
  name,
  register,
  required,
  isErrored,
  errorMessage,
  ...props
}) {
  const inputRef = useRef(null);

  //focus
  const setInputFocus = (e) => {
    if (!inputRef.current) return;

    inputRef.current.focus();
  };

  return (
    <Base>
      <div className="tw-flex tw-items-center">
        <input
          ref={inputRef}
          id={`${name}_login`}
          className="tw-w-full tw-py-[20px] tw-px-[30px] tw-rounded-[10px]  tw-bg-transparent tw-placeholder-lightPink tw-border-none focus:tw-border-0 desktop:tw-py-[14px]"
          tabIndex="-1"
          onClick={(e) => setInputFocus(e)}
          {...register(name, { required })}
          {...props}
        />
      </div>
    </Base>
  );
}
