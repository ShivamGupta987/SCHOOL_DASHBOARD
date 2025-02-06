import Announcement from "@/components/Announcement";

import AttendanceChartContainer from "@/components/AttendanceChartContainer";

import CountChartContainer from "@/components/CountChartContainer";

import EventCalendarContainer from "@/components/EventCalendarContainer";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";
const AdminPage = ({
  searchParams,
}: {
  searchParams: { [keys: string]: string | undefined };
}) => {
  
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User acrds */}
        <div className="flex gap-4 justify-between flex-wrap ">
          <UserCard type="admin" />
          <UserCard type="teacher" /> 
          <UserCard type="student" />
          <UserCard type="parent" />
        </div>
        {/* MIDDLE CHARTS  */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count charts */}
          <div className="w-full lg:w-1/3 h-[500px]">
            <CountChartContainer />
          </div>

          {/* attenddance charts */}
          <div className="w-full lg:w-2/3 h-[500px]">
            <AttendanceChartContainer />
          </div>
        </div>
        {/* bOTTOM CHARTS */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
      {/* search params only on page not componenets */}
        <EventCalendarContainer searchParams={searchParams} />
        <Announcement />
      </div>
    </div>
  );
};

export default AdminPage;
