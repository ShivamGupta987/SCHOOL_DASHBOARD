"use client";
import Image from "next/image";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 92, fill: "#C3EBFA" },
  { name: "Group B", value: 8, fill: "#FAE27C" },
];

const Performance = () => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg h-80 relative">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-gray-700">Performance</h1>
        <Image
          src="/moreDark.png" // Corrected filename
          alt="Performance Image"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>

      {/* Pie Chart */}
      <ResponsiveContainer width="100%" height="70%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            labelLine={false}
            isAnimationActive={true}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Center Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-bold text-gray-800">9.2</h1>
        <p className="font-medium text-sm text-gray-500">of 10 max LTS</p>
      </div>

      {/* Footer Label */}
      <h2 className="font-medium text-center text-gray-600 absolute bottom-4 w-full">
        1st Semester - 2nd Semester
      </h2>
    </div>
  );
};

export default Performance;
