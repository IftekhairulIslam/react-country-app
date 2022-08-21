import { useEffect } from "react";

/**
 * This will create a div and add this into body.
 * @param {String} id for new div. Which will be appended into body. Also remove automatically when component unmounted.
 * @return newly created div,which is added to body. Use return ReactDOM.createPortal(Component, div) instead of return component.
 */
const useCreateDivForPortal = (id) => {
  const divForPortal = document.createElement("div");
  divForPortal.id = id;

  useEffect(() => {
    document.body.append(divForPortal);

    return () => {
      divForPortal.remove();
    };
  });
  return divForPortal;
};

export default useCreateDivForPortal;
