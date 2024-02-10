import useProfile from "@/hooks/useProfile";
import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { io } from "socket.io-client";

const SingleAgentInfo = ({ id }) => {
  const user = useProfile(id);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [telephone, showTelephone] = useState(false);
  const message = useRef();
  const [socket, setSocket] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    setSocket(
      io(process.env.BASE_URL, {
        query: {
          token: localStorage.getItem(process.env.TOKEN_KEY),
        },
      }),
    );
  }, []);

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
      <Modal isOpen={modalIsOpen} style={customStyles}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1.5rem",
          }}
        >
          <span>Kontakt z {user?.username}</span>{" "}
          <span
            onClick={() => setIsOpen(false)}
            className="text"
            style={{ fontSize: "24px" }}
          >
            <i className="fa-solid fa-xmark pointer" />
          </span>
        </div>
        <p>Czat bedziesz mogl podejrzec w panelu</p>
        <p className="error">{error}</p>
        <form>
          <textarea
            ref={message}
            style={{ height: "200px" }}
            className="form-control"
            required
            cols={10}
            rows={120}
          >
            {" "}
          </textarea>
          <br />
          <button
            onClick={() => {
              socket.emit("message", user?.id, message.current.value);
              socket.on("message", (data) => {
                if (data.error) setError(data.error.message);
                else setIsOpen(false);
              });
            }}
            type="button"
            className="ud-btn btn-white"
            style={{ width: "100%" }}
          >
            Wyslij
          </button>
        </form>
      </Modal>
      <div className="agent-single d-sm-flex align-items-center bdrb1 mb30 pb25">
        <div className="flex g5 ml30 ml0-xs">
          <div>
            <h3 className="title mb-1">{user?.username}</h3>
          </div>

          <div class="row">
            <span className="title mb-1 col" style={{ fontSize: "1rem" }}>
              <i className="flaticon-call pe-1 ps-1" />
              {telephone ? (
                user?.telephone?.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3")
              ) : (
                <span>
                  {user?.telephone?.substring(0, 3)}...
                  <span
                    onClick={() => showTelephone(true)}
                    className="f18"
                    style={{
                      cursor: "pointer",
                      color: "#00989c",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    pokaż numer
                  </span>
                </span>
              )}
            </span>
            <div className="col">
              <button
                onClick={() => setIsOpen(true)}
                className="ud-btn btn-white mx-2 mx-xl-4"
                style={{ width: "max-content" }}
              >
                Wyslij wiadomosci
              </button>
            </div>
          </div>

          <br />
        </div>
      </div>
    </>
  );
};

export default SingleAgentInfo;
