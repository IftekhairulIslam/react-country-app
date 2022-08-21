import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { motion } from "framer-motion";

import useOutsideClick from "./../../hooks/useOutsideClick";
import "./Modal.css";
import useCreateDivForPortal from "../../hooks/useCreateDivForPortal";

const Modal = ({
  children,
  className,
  setModalVisibility,
  closeOnClickOutside = false,
  hasBackdrop = true,
}) => {
  const modalRef = useOutsideClick(() => {
    if (closeOnClickOutside) setModalVisibility(false);
  });

  const newDivForPortal = useCreateDivForPortal("root-modal");
  return ReactDOM.createPortal(
    <div className="modal-container">
      {hasBackdrop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0 }}
          className="backdrop"
        ></motion.div>
      )}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, top: "unset", transition: { delay: 0.1 } }}
        exit={{ scale: 0 }}
        className={`modal ${className}`}
        ref={modalRef}
      >
        {children}
      </motion.div>
    </div>,
    newDivForPortal
  );
};

Modal.propTypes = {
  /** @param {func} [Required] - This is the boolen setter func of modal component */
  setModalVisibility: PropTypes.func.isRequired,

  /** @param {bool} [Optinal] - This takes boolean value. If set true, clicking outside of the popup will close the popup */
  closeOnClickOutside: PropTypes.bool,

  /** @param {bool} [Optinal] - This takes boolean value. By default it will show the black semi transparent backdrop */
  hasBackdrop: PropTypes.bool,
};

export default Modal;
