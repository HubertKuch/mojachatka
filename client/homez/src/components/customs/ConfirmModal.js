import Modal from "./Modal";

export default function ConfirmModal({ trigger, title, setState }) {
  return (
    <Modal title={title} trigger={trigger}>
      <form style={{ display: "flex", gap: "20px" }}>
        <button
          style={{ background: "#7ce05e", padding: "10px 40px" }}
          className="form-control"
          type="submit"
          onClick={() => setState(true)}
        >
          Tak
        </button>
        <button
          style={{ background: "#fc4254", padding: "10px 40px" }}
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
