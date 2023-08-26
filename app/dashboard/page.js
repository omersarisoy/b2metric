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
    <div className="flex flex-col px-8 bg-overviewBg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topMetric.map(({ title, value }) => (
          <div
            key={title}
            className="group border border-gray-initial bg-white px-8 py-6 flex flex-col justify-center items-center rounded-lg hover:border-blue transition-all cursor-pointer"
          >
            <p className="text-xl font-bold text-gray-scale pb-3 group-hover:text-blue">{title}</p>
            <p className="text-4xl text-black font-bold group-hover:text-blue">{value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row rounded-lg lg:mt-8 bg-white border border-gray-initial">
        <div className="w-5/6 mx-auto lg:p-8">
          <LineCharts />
        </div>
        <div>
          {chartMetrix.map(({ title, value }) => (
            <ChartMetrixCard
              key={title}
              title={title}
              value={value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
