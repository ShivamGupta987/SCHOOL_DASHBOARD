import Announcement from "@/components/Announcement";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User acrds */}
        <div className="flex gap-4 justify-between flex-wrap ">
          <UserCard type="student" />
          <UserCard type="teacher" />

          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHARTS  */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count charts */}
          <div className="w-full lg:w-1/3 h-[500px]">
            <CountChart />
          </div>

          {/* attenddance charts */}
          <div className="w-full lg:w-2/3 h-[500px]">
            <AttendanceChart />
          </div>
        </div>
        {/* bOTTOM CHARTS */}
        <div className="w-full h-[500px]"> 
          <FinanceChart/>
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
      <EventCalendar/>
      <Announcement/>
      </div>
    </div>
  );
};

export default AdminPage;
