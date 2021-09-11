import React, { useRef, useEffect } from "react";
import { AnotherComponent } from "./AnotherComponent";

export const RefExample = () => {
  const inputRef = useRef();
  const funcRef = useRef();
  useEffect(() => {
    funcRef.current();
  });

  return (
    <>
      <input type="text" ref={inputRef} />
      <AnotherComponent ref={{ inputRef, funcRef }} />
    </>
  );
};
