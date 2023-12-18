"use client";

import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import Footer from "@/components/property/dashboard/Footer";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";
import TopStateBlock from "@/components/property/dashboard/dashboard-home/TopStateBlock";
import PropertyViews from "@/components/property/dashboard/dashboard-home/property-view";
import useStatistics from "@/hooks/useStatistics";
import useUser from "@/hooks/useUser";

const DashboardHome = () => {
  const user = useUser();
  const stats = useStatistics();

  return (
    <>
      {/* Main Header Nav */}
      <DashboardHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* dashboard_content_wrapper */}
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
                    <h2>Witaj, {user.username}!</h2>
                  </div>
                </div>
                {/* col-lg-12 */}
              </div>
              {/* End .row */}

              <div className="row">
                <TopStateBlock user={user} stats={stats} />
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-xl-12">
                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <div className="row">
                      <PropertyViews data={stats} />
                    </div>
                  </div>
                </div>
                {/* End col-xl-8 */}
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

export default DashboardHome;
