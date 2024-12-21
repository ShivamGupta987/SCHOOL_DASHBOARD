"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
// TEMPORARY
const events = [
  {
    id: 1,
    title: "Tech Conference",
    time: "Jan 15, 2024, 10:00 AM",
    description: "Discussing tech trends.",
  },
  {
    id: 2,
    title: "Art Festival",
    time: "Feb 20, 2024, 2:00 PM",
    description: "Celebrating creativity.",
  },
  {
    id: 3,
    title: "Coding Hackathon",
    time: "Apr 5, 2024, 9:00 AM",
    description: "24-hour coding event.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center my-4">
        <h1 className="text-xl font-semibold">EVENTS</h1>
        <Image src="/moreDark.png" alt="Options" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple" key={event.id}>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
          
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
