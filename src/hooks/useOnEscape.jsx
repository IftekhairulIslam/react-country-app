import { useEffect } from "react";

/**
 * This will let you set callback function for escape key pressing.
 * @param {func} callback function for pressing the escape key from keyboard.
 */
const useOnEscape = (callback) => {
  useEffect(() => {
    function onKeydown(e) {
      var code = e.keyCode || e.which;
      /* Escape Key */
      if (code === 27) {
        if (callback) callback();
      }
    }

    document.addEventListener("keydown", onKeydown);
    return () => {
      document.removeEventListener("keydown", onKeydown);
    };
  });
  return null;
};

export default useOnEscape;
