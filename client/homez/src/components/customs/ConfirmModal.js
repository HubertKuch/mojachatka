import Modal from "./Modal";

export default function ConfirmModal(
  { trigger, title, setState, buttonType, isOpen } = {
    buttonType: "submit",
    modalError: "",
    isOpen: false,
  },
) {
  return (
    <Modal title={title} trigger={trigger} isOpen={isOpen}>
      <form style={{ display: "flex", gap: "20px" }}>
        <button
          style={{ background: "#26aca1", padding: "10px 40px" }}
          className="form-control"
          type={buttonType}
          onClick={() => setState(true)}
        >
          Tak
        </button>
        <button
          style={{ background: "#a9dddc", padding: "10px 40px" }}
          className="form-control"
          type="button"
          onClick={(ev) => {
            ev.currentTarget.parentElement.parentElement.parentElement
              .querySelector(".close")
              .click();

            setState(false);
          }}
        >
          Nie
        </button>
      </form>
    </Modal>
  );
}
