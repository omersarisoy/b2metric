"use client";
import ChartMetrixCard from "@/components/ChartMetrixCard";
import { LineCharts } from "@/components/LineChart";

const topMetric = [
  { title: "Active Users", value: "14.592" },
  { title: "Sessions", value: "16.921" },
  { title: "Returned Users", value: "4.562" },
  { title: "Registered Users", value: "649" },
];

const chartMetrix = [
  { title: "Active Sessions", value: "449" },
  { title: "Received", value: "426" },
  { title: "Average Session Time", value: "33m" },
  { title: "Bounce Rate", value: "47%" },
  { title: "Events per User", value: "36.22" },
];

function Dashboard() {
  return (
    <div className="bg-overviewBg px-7 w-full h-full flex flex-col border-none">
      <div className="flex align-center justify-between py-6 h-[180px]">
        {topMetric.map(({ title, value }) => (
          <div
            key={title}
            className="group border border-gray-initial bg-white px-8 flex flex-col justify-center items-center rounded-lg hover:border-blue transition-all cursor-pointer"
          >
            <p className="text-xl font-bold text-gray-scale pb-3  group-hover:text-blue">{title}</p>
            <p className="text-[40px] text-black font-bold  group-hover:text-blue">{value}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-10  bg-white m-4 md:flex-row">
        <div className="flex-1 pl-8 pt-8  border-gray-lightest">
          <LineCharts />
        </div>
        <div className="">
          {chartMetrix.map(({ title, value }) => (
            <ChartMetrixCard key={title} title={title} value={value} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
