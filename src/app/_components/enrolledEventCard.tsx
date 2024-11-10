import React from 'react'

interface EnrolledEventCardProps {
    title: string;
    description: string;
}

export default function EnrolledEventCard( {
    title,
    description,
} : EnrolledEventCardProps) {
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
          <button className={`w-[200px] aspect-[280/91] bg-red-800 hover:drop-shadow-lg hover:opacity-80 rounded-[15px] mt-14 text-white text-3xl`}>
            Unenroll
          </button>
        </div>
      </div>
    </div>
  )
}
