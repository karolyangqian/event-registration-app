import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import UpcomingEventCard, { STATE } from "./_components/upcomingEventCard";

interface Event {
  id: number;
  title: string;
  desc: string;
  status: STATE;
}

const events: Event[] = [
  {
    id: 0,
    title: "Competition",
    desc: "An arena for those who seek challenges.",
    status: STATE.open
  },
  {
    id: 1,
    title: "Talkshow",
    desc: "A fun and interactive event.",
    status: STATE.enrolled
  },
  {
    id: 2,
    title: "Closing Ceremony",
    desc: "A night to remember.",
    status: STATE.closed
  }
]

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col w-3/4 gap-10 mt-20 mb-20">
        <div className="text-[#1e1e1e] text-7xl font-bold ">
          Upcoming events
        </div>
        {events.map((event) => (
          <UpcomingEventCard
            key={event.id}
            title={event.title}
            description={event.desc}
            state={event.status}
          />
        ))}
      </div>
    </div>
  );
}
