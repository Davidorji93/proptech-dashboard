
import { Avatar, AvatarFallback } from "../../../../components/avatar";
import { Button } from "../../../../components/button";

import expertListingLogo from "../../../../assets/group.png";

// Utility icons (images)
import BudgetIcon from "../../../../assets/Budgeting.png";
import CalendarIcon from "../../../../assets/calendar.png";
import SearchIcon from "../../../../assets/Activity-Log.png";
import WalletIcon from "../../../../assets/wallet-2.png";
import ShoppingBagIcon from "../../../../assets/Marketplace.png";

// Navigation image icons
import ListingIcon from "../../../../assets/listing.png";
import UserIcon from "../../../../assets/userIcon.png";
import RequestIcon from "../../../../assets/Article.png";
import ApplicationIcon from "../../../../assets/Scroll.png";
import TaskIcon from "../../../../assets/task-square.png";
import HomeIcon from "../../../../assets/homeIcon.png";



type NavigationItem =
  | {
      type: "component";
      icon: React.ElementType;
      label: string;
      isActive: boolean;
    }
  | {
      type: "image";
      icon: string;
      alt: string;
      label: string;
      isActive: boolean;
    };

const navigationItems: NavigationItem[] = [
  {
    type: "image",
    icon: HomeIcon,
    alt: "Home",
    label: "Dashboard",
    isActive: true,
  },
  {
    type: "image",
    icon: ListingIcon,
    alt: "Listings",
    label: "Listings",
    isActive: false,
  },
  {
    type: "image",
    icon: UserIcon,
    alt: "Users",
    label: "Users",
    isActive: false,
  },
  {
    type: "image",
    icon: RequestIcon,
    alt: "Request",
    label: "Request",
    isActive: false,
  },
  {
    type: "image",
    icon: ApplicationIcon,
    alt: "Applications",
    label: "Applications",
    isActive: false,
  },
  {
    type: "image",
    icon: TaskIcon,
    alt: "Tasks",
    label: "Tasks",
    isActive: false,
  },
];



type UtilityIcon = {
  icon: string;
  alt: string;
};

const utilityIcons: UtilityIcon[] = [
  { icon: BudgetIcon, alt: "Budgeting" },
  { icon: CalendarIcon, alt: "Calendar" },
  { icon: SearchIcon, alt: "Search" },
  { icon: WalletIcon, alt: "Wallet" },
  { icon: ShoppingBagIcon, alt: "Shopping Bag" },
];



const DashboardHeaderSection = (): JSX.Element => {
  return (
    <header className="w-full bg-transparent">
      <div className="relative w-full">
      
        <div className="w-full bg-sec-green border-b border-zinc-100 px-[5.42%] py-[21px]">
          <div className="flex items-center justify-between">
           
            <img
              src={expertListingLogo}
              alt="Expert Listing Logo"
              className="w-[200px] h-[26.02px]"
            />

            {/* Utilities + Avatar */}
            <div className="flex items-center gap-[25px]">
              <div className="flex items-center gap-6">
                {utilityIcons.map((item, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="w-8 h-8 text-white hover:bg-white/10"
                  >
                    <img
                      src={item.icon}
                      alt={item.alt}
                      className="w-6 h-6 object-contain"
                    />
                  </Button>
                ))}
              </div>

              <Avatar className="w-[41px] h-[41px] bg-white cursor-pointer">
                <AvatarFallback className="bg-white text-sec-green font-medium">
                  D
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        {/* ---------------- Navigation ---------------- */}
        <nav className="w-full bg-main-white border-b border-zinc-100 px-[5.42%] py-[22px]">
          <div className="flex items-center justify-between">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant={item.isActive ? "secondary" : "ghost"}
                className={`flex items-center gap-2 h-[38px] px-6 rounded-lg ${
                  item.isActive
                    ? "bg-[#176d5826] hover:bg-[#176d5826]"
                    : "hover:bg-gray/10"
                }`}
              >
                {item.type === "component" ? (
                  <item.icon className="w-6 h-6" />
                ) : (
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="w-6 h-6 object-contain"
                  />
                )}

                <span
                  className={
                    item.isActive
                      ? "text-[#176d58] font-semibold"
                      : "text-deep-gray font-regular"
                  }
                >
                  {item.label}
                </span>
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default DashboardHeaderSection;
