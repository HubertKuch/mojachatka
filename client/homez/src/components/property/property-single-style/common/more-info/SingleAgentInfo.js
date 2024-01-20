import useProfile from "@/hooks/useProfile";
import React, { useState } from "react";
import Modal from "react-modal";

const SingleAgentInfo = ({ id }) => {
  const user = useProfile(id);
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Kontakt z {user?.username}</span>{" "}
          <span
            onClick={() => setIsOpen(false)}
            className="text"
            style={{ fontSize: "24px" }}
          >
            <i className="fa-solid fa-xmark" />
          </span>
        </div>
        <p>Czat bedziesz mogl podejrzec w panelu</p>
        <form>
          <textarea className="form-control" required cols={10} rows={60}>
            {" "}
          </textarea>
          <br />
          <button className="btn-thm rounded">Wyslij</button>
        </form>
      </Modal>
      <div className="agent-single d-sm-flex align-items-center bdrb1 mb30 pb25">
        <div className="flex g5 ml30 ml0-xs">
          <div>
            <h3 className="title mb-1">{user?.username}</h3>
          </div>

          <div>
            <span className="title mb-1">
              <i className="flaticon-call pe-1 ps-1" />
              {user?.telephone}
            </span>
          </div>

          <br />
        </div>
      </div>
    </>
  );
};

export default SingleAgentInfo;
