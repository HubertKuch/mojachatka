"use client";

import DashboardHeader from "@/components/common/DashboardHeader";
import MobileMenu from "@/components/common/mobile-menu";
import DboardMobileNavigation from "@/components/property/dashboard/DboardMobileNavigation";
import Footer from "@/components/property/dashboard/Footer";
import SidebarDashboard from "@/components/property/dashboard/SidebarDashboard";
import PackageDataTable from "@/components/property/dashboard/dashboard-package/PackageDataTable";
import useAuth from "@/hooks/useAuth";
import useBoughtedPackets from "@/hooks/useBoughtedPackets";
import useUser from "@/hooks/useUser";

const DashboardMyPackage = () => {
  useAuth();
  const packets = useBoughtedPackets();
  const user = useUser({ reload: true });

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
              </div>
              {/* End .row */}

              <div className="row align-items-center pb40">
                <div className="col-lg-12">
                  <div className="dashboard_title_area">
                    <h2>Pakiety</h2>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-xl-12">
                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <div className="packages_table table-responsive">
                      <PackageDataTable packages={packets} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row align-items-center pb40">
                <div className="col-lg-12">
                  <div className="dashboard_title_area">
                    <h2>Podbicia</h2>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-xl-12">
                  <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                    <div className="packages_table table-responsive">
                      <table className="table-style3 table">
                        <thead className="t-head">
                          <tr>
                            <th scope="col">Dni</th>
                            <th scope="col">Rodzaj</th>
                            <th scope="col">Użyte</th>
                          </tr>
                        </thead>
                        <tbody className="t-body">
                          {user.UserBoosts.sort(
                            (p1, p2) => p1.properties.used - p2.properties.used,
                          ).map((packageItem, index) => (
                            <tr key={index}>
                              <th scope="row">
                                {packageItem.properties.days} dni
                              </th>
                              <td>
                                {packageItem.properties.type === "MAIN"
                                  ? "Na Strone Główną"
                                  : "Na Liste"}
                              </td>
                              <td>
                                <p
                                  className="
                rounded
                "
                                  style={{
                                    background: packageItem.properties.used
                                      ? "#ff6962"
                                      : "#009edd",
                                    textAlign: "center",
                                  }}
                                >
                                  {packageItem.properties.used ? "Tak" : "Nie"}
                                </p>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
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

export default DashboardMyPackage;
