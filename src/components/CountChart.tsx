"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Total", count: 106, fill: "white" },
  { name: "Girls", count: 53, fill: "#FAE27C" },
  { name: "Boys", count: 47, fill: "#C3EBFA" },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 shadow-md">
      {/* Title Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src="/moreDark.png" alt="Options" width={20} height={20} />
      </div>

      {/* Chart Section */}
      <div className="relative w-full h-[300px] flex items-center justify-center">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={12}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute flex flex-col items-center">
          <Image src="/maleFemale.png" alt="Icon" width={50} height={50} />
          <h2 className="text-sm font-medium text-gray-600 mt-2">Total: 106</h2>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-wrap justify-around mt-6">
        {/* Boys Section */}
        <div className="flex flex-col items-center gap-2 w-1/2 sm:w-auto">
          <div className="w-12 h-12 bg-[#C3EBFA] rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-700">Male</span>
          </div>
          <h1 className="text-xl font-bold text-gray-700">47</h1>
          <h2 className="text-sm text-gray-500">Boys (47%)</h2>
        </div>

        {/* Girls Section */}
        <div className="flex flex-col items-center gap-2 w-1/2 sm:w-auto">
          <div className="w-12 h-12 bg-[#FAE27C] rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold text-gray-700">Female</span>
          </div>
          <h1 className="text-xl font-bold text-gray-700">53</h1>
          <h2 className="text-sm text-gray-500">Girls (53%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
