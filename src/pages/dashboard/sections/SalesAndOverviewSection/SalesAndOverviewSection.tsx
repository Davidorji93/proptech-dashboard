import { ChevronRightIcon } from "lucide-react";
import { Button } from "../../../../components/button";
import { Card, CardContent } from "../../../../components/card";
import { ToggleGroup, ToggleGroupItem } from "../../../../components/toggle-group";

import frame2 from "../../../../assets/frame-2.svg";
import frame from "../../../../assets/frame.svg";
import solarHomeLinear from "../../../../assets/solar-home-linear.svg";
import linearProfile from "../../../../assets/vuesax-linear-profile.svg";
import vector2 from "../../../../assets/vector-2.svg";
import vector3 from "../../../../assets/vector-3.svg";
import group1 from "../../../../assets/group-20464.png";
import group2 from "../../../../assets/group-20471.png";

const yAxisLabels = ["50m", "40m", "30m", "20m", "10m", "0"];
const xAxisLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];

const chartData = [
  {
    month: "Jan",
    bars: [
      { color: "bg-[#4444fd]", height: "h-[99px]", marginTop: "" },
      { color: "bg-[#12b669]", height: "h-[78px]", marginTop: "mt-[21px]" },
      { color: "bg-errorerror-500", height: "h-[30px]", marginTop: "mt-[69px]" },
    ],
    top: "top-[193px]",
    left: "left-[86px]",
  },
  {
    month: "Feb",
    bars: [
      { color: "bg-[#4444fd]", height: "h-[18px]", marginTop: "mt-[60px]" },
      { color: "bg-[#12b669]", height: "h-[78px]", marginTop: "" },
      { color: "bg-errorerror-500", height: "h-[30px]", marginTop: "mt-12" },
    ],
    top: "top-[214px]",
    left: "left-[122px]",
  },
  {
    month: "Mar",
    bars: [
      { color: "bg-[#4444fd]", height: "h-[42px]", marginTop: "" },
      { color: "bg-[#12b669]", height: "h-[21px]", marginTop: "mt-[21px]" },
      { color: "bg-errorerror-500", height: "h-[11px]", marginTop: "mt-[31px]" },
    ],
    top: "top-[250px]",
    left: "left-[158px]",
  },
  {
    month: "Apr",
    bars: [
      { color: "bg-[#4444fd]", height: "h-[42px]", marginTop: "mt-[30px]" },
      { color: "bg-[#12b669]", height: "h-[72px]", marginTop: "" },
      { color: "bg-errorerror-500", height: "h-[30px]", marginTop: "mt-[42px]" },
    ],
    top: "top-[220px]",
    left: "left-[194px]",
  },
  {
    month: "May",
    bars: [
      { color: "bg-[#4444fd]", height: "h-[30px]", marginTop: "" },
      { color: "bg-[#12b669]", height: "h-2", marginTop: "mt-[22px]" },
      { color: "bg-errorerror-500", height: "h-[23px]", marginTop: "mt-[7px]" },
    ],
    top: "top-[262px]",
    left: "left-[230px]",
  },
  {
    month: "Jun",
    bars: [
      { color: "bg-[#4444fd]", height: "h-[102px]", marginTop: "mt-[34px]" },
      { color: "bg-[#12b669]", height: "h-[136px]", marginTop: "" },
      { color: "bg-errorerror-500", height: "h-[23px]", marginTop: "mt-[113px]" },
    ],
    top: "top-[156px]",
    left: "left-[266px]",
  },
  {
    month: "Jul",
    bars: [
      { color: "bg-[#4444fd]", height: "h-[69px]", marginTop: "mt-[35px]" },
      { color: "bg-[#12b669]", height: "h-[104px]", marginTop: "" },
      { color: "bg-errorerror-500", height: "h-[53px]", marginTop: "mt-[51px]" },
    ],
    top: "top-[190px]",
    left: "left-[302px]",
  },
  {
    month: "Aug",
    bars: [
      { color: "bg-[#4444fd]", height: "h-[69px]", marginTop: "" },
      { color: "bg-[#12b669]", height: "h-[22px]", marginTop: "mt-[47px]" },
      { color: "bg-errorerror-500", height: "h-[53px]", marginTop: "mt-4" },
    ],
    top: "top-[225px]",
    left: "left-[338px]",
  },
  {
    month: "Sep",
    bars: [
      { color: "bg-[#4444fd]", height: "h-[104px]", marginTop: "" },
      { color: "bg-[#12b669]", height: "h-24", marginTop: "mt-2" },
      { color: "bg-errorerror-500", height: "h-[22px]", marginTop: "mt-[82px]" },
    ],
    top: "top-[190px]",
    left: "left-[374px]",
  },
];

const metricsData = [
  { value: "₦120,000,000.00", label: "Total Inflow", change: "2.5%", color: "text-[#4444fd]", icon: frame2 },
  { value: "₦200,000,000.00", label: "Commission Revenue", change: "0.5%", color: "text-teal-500", icon: frame },
  { value: "₦50,000,000.00", label: "MRR", change: "2.5%", color: "text-[#12b669]", icon: frame2 },
  { value: "₦100,000,000.00", label: "GMV", change: "0.5%", color: "text-errorerror-500", icon: frame },
];

const overviewCards = [
  {
    title: "Listings Overview",
    icon: solarHomeLinear,
    stats: [
      { label: "Total", value: "1.8k" },
      { label: "Active", value: "80" },
      { label: "Archived", value: "1k" },
    ],
  },
  {
    title: "Users Overview",
    icon: linearProfile,
    stats: [
      { label: "Total", value: "20.7k" },
      { label: "Riders", value: "8.5k" },
      { label: "Subscribers", value: "7.5k" },
    ],
  },
];

const SalesAndOverviewSection = (): JSX.Element => {
  return (
    <section className="flex gap-5 w-full">
      {/* SALES OVERVIEW CARD */}
      <Card className="flex-1 bg-white rounded-2xl border border-[#e4e4e4]">
        <CardContent className="relative h-[325px] p-0">
          <div className="absolute top-4 left-[74px] font-semibold">Sales Overview</div>
          <div className="absolute top-[53px] left-[74px] text-mid-gray text-sm">
            Showing overview Jan 2022 - Sep 2022
          </div>

          <Button
            variant="outline"
            className="absolute top-5 left-[655px] h-[46px] rounded-full px-6"
          >
            View Transactions
          </Button>

          <ToggleGroup type="single" defaultValue="year" className="absolute top-[83px] left-[571px] gap-3">
            <ToggleGroupItem value="week">1 Week</ToggleGroupItem>
            <ToggleGroupItem value="month">1 Month</ToggleGroupItem>
            <ToggleGroupItem value="year">1 Year</ToggleGroupItem>
          </ToggleGroup>

          <img className="absolute top-32 w-full" src={vector2} />
          <img className="absolute top-36 left-[70px]" src={vector3} />

          <div className="absolute top-[146px] left-[39px] flex flex-col gap-3.5">
            {yAxisLabels.map((label) => (
              <div key={label} className="text-xs text-right text-gray-400">{label}</div>
            ))}
          </div>

          <div className="absolute top-[294px] left-[84px] flex gap-3.5">
            {xAxisLabels.map((label) => (
              <div key={label} className="text-xs text-gray-400">{label}</div>
            ))}
          </div>

          {chartData.map((data, index) => (
            <div key={index} className={`absolute ${data.top} ${data.left} flex gap-[3px]`}>
              {data.bars.map((bar, i) => (
                <div key={i} className={`${bar.marginTop} ${bar.height} w-1 ${bar.color}`} />
              ))}
            </div>
          ))}

          <img className="absolute top-[205px] left-2" src={group1} />
          <img className="absolute top-[205px] left-[411px]" src={group2} />

          {/* METRICS CARDS WITH GAPS */}
          <div className="absolute top-[150px] left-[455px] flex flex-wrap gap-x-6 gap-y-6">
            {metricsData.map((metric, index) => (
              <div
                key={index}
                className="w-[189px] h-[73px] bg-white rounded-xl border border-[#e4e4e4] flex"
              >
                <div className="ml-[15px] mt-[13px] flex flex-col gap-2">
                  <div className={`${metric.color} font-semibold`}>{metric.value}</div>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-gray-600">{metric.label}</span>
                    <img src={metric.icon} className="w-3.5 h-3.5" />
                    <span className={metric.color}>{metric.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* OVERVIEW CARDS */}
      <div className="flex flex-col w-[407px] gap-5">
        {overviewCards.map((card) => (
          <Card key={card.title} className="h-[152px] rounded-2xl border">
            <CardContent className="relative h-full p-0">
              <div className="absolute top-0 w-full h-[50px] bg-[#f9fafb] border-b" />
              <div className="absolute top-[13px] left-4 flex items-center gap-2">
                <img src={card.icon} className="w-6 h-6" />
                <span className="font-medium">{card.title}</span>
              </div>

              <Button variant="link" className="absolute top-4 right-4 flex items-center">
                View all <ChevronRightIcon />
              </Button>

              <div className="absolute top-[70px] left-4 right-4 flex justify-between">
                {card.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                    <div className="text-2xl font-semibold">{stat.value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SalesAndOverviewSection;
