import { useRef, useEffect } from "react";

/**
 * Use this to make your component focus.
 * @param {ref} [Optional] Takes ref to call focus on current DOM object.
 * @return Given or new ref object to point the element for focusing.
 */
const useGiveFocus = (ref) => {
  const newRef = useRef();

  useEffect(() => {
    if (ref || newRef) {
      if (ref) ref.current.focus();
      else newRef.current.focus();
    }
  });

  return ref || newRef;
};

export default useGiveFocus;
