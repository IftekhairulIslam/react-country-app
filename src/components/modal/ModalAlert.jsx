import PropTypes from "prop-types";

import Modal from "./Modal";
import useOnEnter from "./../../hooks/useOnEnter";
import useOnEscape from "./../../hooks/useOnEscape";
import useGiveFocus from "./../../hooks/useGiveFocus";

const ModalAlert = ({
  setModalVisibility,
  closeOnClickOutside,
  hasBackdrop,
  title,
  description,
  confirmButtonText = "Okay",
  confirmCallback,
  isDanger,
}) => {
  const confirmHandler = () => {
    if (confirmCallback) confirmCallback();
    setModalVisibility(false);
  };

  const confirmBtnRef = useGiveFocus();
  useOnEnter(confirmHandler);
  useOnEscape(() => setModalVisibility(false));

  return (
    <Modal
      setModalVisibility={setModalVisibility}
      closeOnClickOutside={closeOnClickOutside}
      hasBackdrop={hasBackdrop}
      className="modal-confirm"
    >
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div className="buttons">
        <button
          ref={confirmBtnRef}
          type="button"
          className={isDanger ? "danger" : "confirm"}
          onClick={confirmHandler}
        >
          {confirmButtonText}
        </button>
      </div>
    </Modal>
  );
};

ModalAlert.propTypes = {
  /** @param {func} [Required] - This is the boolen setter func of modal component. */
  setModalVisibility: PropTypes.func.isRequired,

  /** @param {bool} [Optinal] - This takes boolean value.
   * If set true, clicking outside of the popup will close the popup. */
  closeOnClickOutside: PropTypes.bool,

  /** @param {bool} [Optinal] - This takes boolean value.
   * By default it will show the black semi transparent backdrop. */
  hasBackdrop: PropTypes.bool,

  /** @param {string} [Required] Please pass a message for your user */
  title: PropTypes.string.isRequired,

  /** @param {string} [Optional] Please pass additional message for your user */
  description: PropTypes.string,

  /** @param {string} [Optinal] Modify confirm button text. */
  confirmButtonText: PropTypes.string,

  /** @param {func} [Optional] - Callback function for calling after user make it confirm. */
  confirmCallback: PropTypes.func,

  /** @param {bool} [Optional] - True will make confirm button red color. */
  isDanger: PropTypes.bool,
};

export default ModalAlert;
