import { useRef, useEffect } from "react";

/**
 * This will detect outside clicking and let you set a callback function for that.
 * @param {func} callback - function to call when outside clicking occurs.
 * @return {object} - ref object to point the DOM element.
 */
const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    function handleOutsideClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (callback) callback();
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return ref;
};

export default useOutsideClick;
