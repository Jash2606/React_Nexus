import React from 'react';

interface Attendee {
  id: number;
  name: string;
  company: string;
  position: string;
}

interface AttendeeListProps {
  attendees: Attendee[];
}

const AttendeeList: React.FC<AttendeeListProps> = ({ attendees }) => {
  return (
    <div className="attendee-list">
      {attendees.map(attendee => (
        <div key={attendee.id} className="attendee-card">
          <h2>{attendee.name}</h2>
          <p>{attendee.company}</p>
          <p>{attendee.position}</p>
        </div>
      ))}
    </div>
  );
};

export default AttendeeList;
