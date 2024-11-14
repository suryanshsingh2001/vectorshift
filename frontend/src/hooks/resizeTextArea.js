import { useEffect } from "react";

const useAutosizeTextArea = (
  textAreaRef,
  value
) => {
  useEffect(() => {
    if (textAreaRef) {
      // Request animation frame to prevent ResizeObserver loop
      requestAnimationFrame(() => {
        textAreaRef.style.height = "0px";
        const scrollHeight = textAreaRef.scrollHeight;
        textAreaRef.style.height = `${scrollHeight}px`;
      });
    }
  }, [textAreaRef, value]);
};

export default useAutosizeTextArea;
