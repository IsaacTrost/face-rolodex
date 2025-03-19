import React, { useState } from 'react';
import './Pages.css';

// Dummy data for prepare page
const dummyPrepareData = [
  { id: 1, name: 'Upcoming Conference', attendees: ['John Smith', 'Sarah Johnson', 'Michael Brown'] },
  { id: 2, name: 'Team Meeting', attendees: ['Emily Davis', 'David Wilson', 'John Smith'] },
  { id: 3, name: 'Client Presentation', attendees: ['Sarah Johnson', 'Michael Brown'] },
];

const PreparePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<typeof dummyPrepareData>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Filter dummy data based on search term
    const filteredResults = dummyPrepareData.filter(
      item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
              item.attendees.some(attendee => attendee.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setResults(filteredResults);
    setSearched(true);
  };

  return (
    <div className="page prepare-page">
      <h1>Prepare</h1>
      <p className="subtitle">Get ready for upcoming events</p>
      
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for events or attendees..."
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </div>
      </form>
      
      <div className="results-container">
        {searched && results.length === 0 ? (
          <p className="no-results">No events found</p>
        ) : (
          results.map(item => (
            <div key={item.id} className="result-card event-card">
              <h3>{item.name}</h3>
              <h4>Attendees:</h4>
              <ul className="attendees-list">
                {item.attendees.map((attendee, index) => (
                  <li key={index}>{attendee}</li>
                ))}
              </ul>
              <button className="action-button">Prepare for this event</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PreparePage;