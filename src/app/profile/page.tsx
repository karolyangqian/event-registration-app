import React from 'react'
import EnrolledEventCard from '../_components/enrolledEventCard'
import Image from 'next/image'
import DefaultUserIconBlack from 'public/default-user-icon-black.png'

interface Event {
    id: number;
    title: string;
    desc: string;
  }

const events: Event[] = [
    {
      id: 0,
      title: "Competition",
      desc: "An arena for those who seek challenges.",
    },
    {
      id: 1,
      title: "Talkshow",
      desc: "A fun and interactive event.",
    },
    {
      id: 2,
      title: "Closing Ceremony",
      desc: "A night to remember.",
    }
  ]

export default function ProfilePage() {
    const name = "Joe Smith"
    const email = "example@example.com"
  return (
  <div className="flex w-full justify-center">
    <div className="flex flex-col w-3/4 mt-20 mb-20">
      <div className="flex justify-center">
        <Image
            src={DefaultUserIconBlack}
            alt='user-icon'
            width={150}
            height={150}/>
      </div>
      <div className="flex justify-center text-[#1e1e1e] text-5xl font-bold mt-4">
        {name}
      </div>
      <div className="flex justify-center text-[#1e1e1e] text-2xl font-normal mt-1">
        {email}
      </div>
      <div className="text-[#1e1e1e] text-4xl font-bold mt-12">
        Enrolled events
      </div>
      <div className="flex flex-col gap-10 mt-10">
        {
            events.map((event) => (
                <EnrolledEventCard
                key={event.id}
                title={event.title}
                description={event.desc}
                />
            ))
        }
      </div>
    </div>
  </div>
  )
}