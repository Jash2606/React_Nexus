import { GlareCard } from "./glare-card";
import AttendeeList from "../Maincontent/Attendeelist";

interface Attendee {
  id: number;
  name: string;
  company: string;
  position: string;
}

interface GlareCardDemoProps {
  attendees: Attendee[];
}

export function GlareCardDemo({ attendees }: GlareCardDemoProps) {
  return (
    <div className="flex flex-wrap justify-center items-center space-y-6 m-7">
        <GlareCard className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl shadow-2xl transform transition-transform hover:scale-105 hover:shadow-none ring-2 ring-cyan-30">
        {/* <GlareCard className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-lg shadow-2xl transform transition-transform hover:scale-105 hover:shadow-none ring-2 ring-blue-500"> */}
            <div className="text-white font-bold text-2xl text-center">
            <AttendeeList attendees={attendees} />
            </div>
        </GlareCard>
    </div>
  );
}

