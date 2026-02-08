import { MessageSquareIcon } from "lucide-react";
import { Button } from "../../components/button";
import DashboardHeaderSection  from "./sections/DashboardHeaderSection/DashboardHeaderSection";
import FeaturedListingsSection from "./sections/FeaturedListingsSection/FeaturedListingsSection";
import SalesAndOverviewSection from "./sections/SalesAndOverviewSection/SalesAndOverviewSection";


 const Dashboard = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[1440px] min-h-screen relative">
      <div className="absolute inset-0 bg-[#fbfcfc]" />

      <div className="relative flex flex-col w-full">
        <DashboardHeaderSection />

        <div className="px-[78px] pt-[24px]">
          <h1 className="font-type-face-b4-semibold font-[number:var(--type-face-b4-semibold-font-weight)] text-main-black text-[length:var(--type-face-b4-semibold-font-size)] tracking-[var(--type-face-b4-semibold-letter-spacing)] leading-[var(--type-face-b4-semibold-line-height)] [font-style:var(--type-face-b4-semibold-font-style)] mb-4">
            Welcome, Ahmed
          </h1>
        </div>

        <div className="w-full relative">
          <SalesAndOverviewSection />
        </div>

        <div className="w-full relative">
          <FeaturedListingsSection />
        </div>
      </div>

      <Button
        size="icon"
        className="fixed right-[78px] bottom-[212px] w-[56px] h-[56px] bg-[#242526] hover:bg-[#242526]/90 rounded-full border border-[#ffffff33] shadow-lg"
      >
        <MessageSquareIcon className="w-6 h-6 text-white" />
      </Button>
    </div>
  );
};

export default Dashboard;