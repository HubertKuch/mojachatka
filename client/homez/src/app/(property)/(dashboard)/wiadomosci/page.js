"use client";

import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import Footer from "@/components/property/dashboard/Footer";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";
import ChatBoxForm from "@/components/property/dashboard/dashboard-message/ChatBoxForm";
import UserChatBoxContent from "@/components/property/dashboard/dashboard-message/UserChatBoxContent";
import UserInboxList from "@/components/property/dashboard/dashboard-message/UserInboxList";
import useUser from "@/hooks/useUser";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const DashboardMessage = () => {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState();
  const [activeChatId, setActiveChatId] = useState();
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState();
  const contentRef = useRef();
  const user = useUser();

  useEffect(() => {
    if (window) {
      window.onload = scrollToBottom;
    }
  });

  function scrollToBottom() {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: contentRef.current.scrollHeight });
    }
  }

  useEffect(() => {
    if (contentRef.current) {
      const observer = new MutationObserver(() => {
        scrollToBottom();
      });

      observer.observe(contentRef.current, { childList: true, subtree: true });
    }
  }, [activeChat]);

  useEffect(() => {
    const socket = io(process.env.BASE_URL, {
      query: {
        token: localStorage.getItem(process.env.TOKEN_KEY),
      },
    });

    setSocket(socket);

    socket.emit("chats");

    socket.on("chats", (data) => {
      setChats(data);

      if (data.length !== 0) {
        setActiveChat(data[0]);
        setActiveChatId(data[0].id);
      }
    });

    socket.on("chat", (data) => {
      setActiveChat(data);
      setMessages(data.messages);
    });

    socket.on("message", (msg) => {
      msg.own = msg.meta.sender === user.id;

      setMessages((old) => [...old, msg]);
    });
  }, []);

  useEffect(() => {
    if (socket && activeChatId) {
      socket.emit("chat", activeChatId);
    }
  }, [socket, activeChatId]);

  return (
    <>
      <DashboardHeader />
      <MobileMenu />
      <div className="dashboard_content_wrapper">
        <div className="dashboard dashboard_wrapper pr30 pr0-xl">
          <SidebarDashboard />
          {/* End .dashboard__sidebar */}

          <div className="dashboard__main pl0-md">
            <div className="dashboard__content bgc-f7">
              <div className="row pb40">
                <div className="col-lg-12">
                  <DboardMobileNavigation />
                </div>
                {/* End .col-12 */}

                <div className="col-lg-12">
                  <div className="dashboard_title_area">
                    <h2>Wiadomości</h2>
                  </div>
                </div>
                {/* col-lg-12 */}
              </div>
              {/* End .row */}
              {chats.length !== 0 ? (
                <div className="row mb40">
                  <div className="col-lg-6 col-xl-5 col-xxl-4">
                    <div className="message_container">
                      <div className="inbox_user_list">
                        <div className="chat-member-list pr20">
                          <UserInboxList
                            chats={chats}
                            activeChat={activeChat}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-xl-7 col-xxl-8">
                    <div className="message_container mt30-md">
                      <div ref={contentRef} className="inbox_chatting_box">
                        <ul className="chatting_content">
                          <UserChatBoxContent messages={messages} />
                        </ul>
                      </div>
                      {/* End inbox-chatting */}

                      <div className="mi_text">
                        <div className="message_input">
                          <ChatBoxForm chat={activeChat} socket={socket} />
                        </div>
                      </div>
                      {/* End button */}
                    </div>
                  </div>
                  {/* End .col-6 */}
                </div>
              ) : (
                <>
                  <div className="row">
                    <h2>Brak czatow</h2>
                  </div>

                  <div className="row">
                    <p>
                      Możesz utworzyć czat za pomocą przycisku &quot;wyślij
                      wiadomość&quot; na dole oferty{" "}
                    </p>
                  </div>
                </>
              )}
              {/* End .row */}
            </div>
            <Footer />
          </div>
          {/* End .dashboard__main */}
        </div>
      </div>
      {/* dashboard_content_wrapper */}
    </>
  );
};

export default DashboardMessage;
