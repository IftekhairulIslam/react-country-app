import Modal from "./Modal";
import PropTypes from "prop-types";
import useOnEnterOnEscape from "../../hooks/useOnEnterOnEscape";
import useGiveFocus from "./../../hooks/useGiveFocus";

const ModalConfirm = ({
  setModalVisibility,
  closeOnClickOutside,
  hasBackdrop,
  title,
  description,
  confirmButtonText = "Confirm",
  cancelButtonText = "Cancel",
  confirmCallback,
  cancelCallback,
  isDanger,
}) => {
  const confirmHandler = () => {
    if (confirmCallback) confirmCallback();
    setModalVisibility(false);
  };

  const cancelHandler = () => {
    if (cancelCallback) cancelCallback();
    setModalVisibility(false);
  };

  const confirmBtnRef = useGiveFocus();
  useOnEnterOnEscape(confirmHandler, cancelHandler);

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
        <button type="button" className="cancel" onClick={cancelHandler}>
          {cancelButtonText}
        </button>
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

ModalConfirm.propTypes = {
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

  /** @param {string} [Optinal] Modify cancel button text. */
  cancelButtonText: PropTypes.string,

  /** @param {func} [Optional] - Callback function for calling after user make it confirm. */
  confirmCallback: PropTypes.func,

  /** @param {func} [Optional] - Callback function for calling after user make it cancel. */
  cancelCallback: PropTypes.func,

  /** @param {bool} [Optional] - True will make confirm button red color. */
  isDanger: PropTypes.bool,
};

export default ModalConfirm;
