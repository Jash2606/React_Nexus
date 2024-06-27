import React, { useState, useEffect } from 'react';
import AttendeeList from './components/Maincontent/Attendeelist';
import SearchBar from './components/ok/searchBar';
import './App.css';


// Define the Attendee interface
interface Attendee {
  id: number;
  name: string;
  company: string;
  position: string;
}

const App: React.FC = () => {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetch('/attendees.json')
      .then(response => response.json())
      .then(data => setAttendees(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Filter attendees based on name starting with searchTerm
  const filteredAttendees = attendees.filter(attendee =>
    attendee.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* <ThreeDCardDemo></ThreeDCardDemo> */}
      {/* <SparklesPreview></SparklesPreview> */}
      {/* <SparklesPreview></SparklesPreview> */}
      <div className="app">
        <h1>ReactNexus Attendees</h1>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <AttendeeList attendees={filteredAttendees} />
      </div>
    </>
  );
};

export default App;