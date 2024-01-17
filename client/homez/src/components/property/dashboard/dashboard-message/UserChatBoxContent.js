import React from "react";

const ChatMessage = ({ message }) => {
  const sentAt = new Date(message.sentAt).toLocaleString();

  return (
    <li className={message.own ? "sent float-end" : "reply float-start"}>
      <div
        className={`d-flex align-items-center ${
          message.own ? "mb15" : "justify-content-end mb15"
        }`}
      >
        <div className={`title fz14 ${message.own ? "mr10" : "ml10"}`}>
          {message.own ? (
            <small>{sentAt} </small>
          ) : (
            <>
              {message.sender?.username}{" "}
              <small className="ml10">{sentAt} </small>
            </>
          )}
        </div>
      </div>
      <p>{message.message}</p>
    </li>
  );
};

const UserChatBoxContent = ({ messages }) => {
  return (
    <>
      {messages?.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </>
  );
};

export default UserChatBoxContent;
