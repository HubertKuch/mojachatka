import React from "react";

const UserItem = ({ chat, isActive }) => {
  console.log(chat);
  return (
    <div className="list-item" style={{ borderRadius: "1rem" }}>
      <a href="#">
        <div className="d-flex align-items-center position-relative">
          <div className="d-sm-flex">
            <div
              className="d-inline-block"
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <div>
                <div className="fz14 fw600 mb-0">
                  {chat?.receiver?.firstName}
                </div>
                <div>{chat.lastMessage?.message || ""}</div>
              </div>
              <span className={`m_notif`}>{chat.unReadedMessages}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const UserInboxList = ({ chats, activeChat }) => {
  return (
    <>
      {chats.map((chat, index) => (
        <>
          <UserItem
            key={index}
            chat={chat}
            isActive={chat.id === activeChat?.id}
          />
          <hr />
        </>
      ))}
    </>
  );
};

export default UserInboxList;
