import { useEffect } from "react";

/**
 * This will let you set callback function for enter key pressing.
 * @param {func} callback function for pressing the enter key from keyboard.
 */
const useOnEnter = (callback) => {
  useEffect(() => {
    function onKeydown(e) {
      var code = e.keyCode || e.which;
      /* Enter Key */
      if (code === 13) {
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

export default useOnEnter;
