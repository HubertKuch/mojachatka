import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import Footer from "@/components/property/dashboard/Footer";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";
import ChatBoxForm from "@/components/property/dashboard/dashboard-message/ChatBoxForm";
import SearchBox from "@/components/property/dashboard/dashboard-message/SearchBox";
import UserChatBoxContent from "@/components/property/dashboard/dashboard-message/UserChatBoxContent";
import UserInboxList from "@/components/property/dashboard/dashboard-message/UserInboxList";
import Image from "next/image";

export const metadata = {
  title: "Dashboard Message || Homez - Real Estate NextJS Template",
};

const DashboardMessage = () => {
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
                    <h2>Messages</h2>
                  </div>
                </div>
                {/* col-lg-12 */}
              </div>
              {/* End .row */}

              <div className="row mb40">
                <div className="col-lg-6 col-xl-5 col-xxl-4">
                  <div className="message_container">
                    <div className="inbox_user_list">
                      <div className="chat-member-list pr20">
                        <UserInboxList />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-7 col-xxl-8">
                  <div className="message_container mt30-md">
                    <div className="user_heading px-0 mx30">
                      <div className="wrap">
                        <div className="meta d-sm-flex justify-content-sm-between align-items-center">
                          <div className="authors">
                            <h6 className="name mb-0">Arlene McCoy</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End .user_heading */}

                    <div className="inbox_chatting_box">
                      <ul className="chatting_content">
                        <UserChatBoxContent />
                      </ul>
                    </div>
                    {/* End inbox-chatting */}

                    <div className="mi_text">
                      <div className="message_input">
                        <ChatBoxForm />
                      </div>
                    </div>
                    {/* End button */}
                  </div>
                </div>
                {/* End .col-6 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .dashboard__content */}

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
