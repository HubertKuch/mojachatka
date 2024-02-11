import Popup from "reactjs-popup";
import "@/../public/scss/_modal.scss";

function Modal({ trigger, actions, children, title, isOpen }) {
  return (
    <>
      <Popup trigger={trigger} modal open={isOpen}>
        {(close) => (
          <div className="popup-modal">
            <button className="close" onClick={close}>
              {" "}
              &times;{" "}
            </button>{" "}
            {title ? (
              <div className="header" style={{ height: "auto" }}>
                {title}{" "}
              </div>
            ) : null}
            <div className="content">{children ?? ""}</div>
            <div className="actions">{actions ?? ""}</div>
          </div>
        )}
      </Popup>
    </>
  );
}

export default Modal;
