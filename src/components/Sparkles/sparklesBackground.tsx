"use client";
import { SparklesCore } from "./sparkles";
import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/searchBar';
import '../../App.css';
import { GlareCardDemo } from "../AttendeeCard/card";


interface Attendee {
  id: number;
  name: string;
  company: string;
  position: string;
}

export function SparklesPreview() {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetch('/attendees.json')
      .then(response => response.json())
      .then(data => setAttendees(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredAttendees = attendees.filter(attendee =>
    attendee.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="h-[350vh] relative w-full  bg-black flex flex-col items-center justify-center rounded-md component">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="w-full absolute top-0 z-20 py-4">
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-yellow-400 to-blue-500 text-center">
          ReactNexus Attendees
        </h1>
        <div className="app">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 ml-8 flex justify-center items-center  mt-8 card">
            {filteredAttendees.map(attendee => (
              <GlareCardDemo key={attendee.id} attendees={[attendee]} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}