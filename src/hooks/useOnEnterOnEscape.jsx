import { useEffect } from "react";

/**
 * This will let you set callback function for both enter or escape key pressing.
 * @param {func} enterCallback function for pressing the enter key from keyboard.
 * @param {func} escapeCallback function for pressing the escape key from keyboard.
 */
const useOnEnterOnEscape = (enterCallback, escapeCallback) => {
  useEffect(() => {
    function onKeydown(e) {
      var code = e.keyCode || e.which;
      /* Enter Key */
      if (code === 13) {
        if (enterCallback) enterCallback();
      }

      /* Escape Key */
      if (code === 27) {
        if (escapeCallback) escapeCallback();
      }
    }

    document.addEventListener("keydown", onKeydown);
    return () => {
      document.removeEventListener("keydown", onKeydown);
    };
  });

  return null;
};

export default useOnEnterOnEscape;
