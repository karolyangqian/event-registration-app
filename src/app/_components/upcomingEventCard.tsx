import React from 'react'

export enum STATE {
    enrolled,
    open,
    closed
}

interface UpcomingEventCardProps {
    title: string;
    description: string;
    state: STATE;
}

const StateColor = new Map<STATE, string> ([
    [STATE.enrolled, "bg-[#34a853]"],
    [STATE.open, "bg-indigo-600"],
    [STATE.closed, "bg-[#C1C1C1]"] 
])

const StateButtonText = new Map<STATE, string> ([
    [STATE.enrolled, "Enrolled"],
    [STATE.open, "Enroll"],
    [STATE.closed, "Closed"]
])

export default function UpcomingEventCard( {
    title,
    description,
    state
} : UpcomingEventCardProps) {
  return (
    <div className="w-full bg-white rounded-[39px] drop-shadow-xl border border-[#e8e8e8]">
      <div className="w-full h-full px-16 py-10">
        <h1 className="text-[#1e1e1e] text-5xl font-bold">
          {title}
        </h1>
        <p className="text-[#1e1e1e] text-2xl font-normal mt-5">
          {description}
        </p>
        <div className="flex justify-end">
          <button className={`w-[200px] aspect-[280/91] ${StateColor.get(state)} hover:drop-shadow-lg hover:opacity-80 rounded-[15px] mt-14 text-white text-3xl`}>
            {StateButtonText.get(state)}
          </button>
        </div>
      </div>
    </div>
  )
}
