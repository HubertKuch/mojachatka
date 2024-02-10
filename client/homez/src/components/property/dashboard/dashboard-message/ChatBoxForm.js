import React, { useRef } from "react";

const ChatBoxForm = ({ chat, socket }) => {
  const inputRef = useRef();

  return (
    <form
      className="d-flex align-items-center"
      onSubmit={(e) => {
        e.preventDefault();
        const value = inputRef.current.value;

        socket.emit("message", chat.receiver.id, value);
      }}
    >
      <input
        ref={inputRef}
        className="form-control"
        type="search"
        placeholder="Type a Message"
        aria-label="Search"
        required
      />
      <button type="submit" className="btn ud-btn btn-thm">
        Wyślij
        <i className="fal fa-arrow-right-long" />
      </button>
    </form>
  );
};

export default ChatBoxForm;
