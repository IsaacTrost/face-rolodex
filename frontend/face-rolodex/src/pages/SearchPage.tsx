import React, { useState } from 'react';
import './Pages.css';

// Dummy data to simulate server response
const dummyData = [
  { id: 1, name: 'John Smith', details: 'Met at conference, works in marketing' },
  { id: 2, name: 'Sarah Johnson', details: 'Software developer, likes hiking' },
  { id: 3, name: 'Michael Brown', details: 'Project manager, has two kids' },
  { id: 4, name: 'Emily Davis', details: 'Designer, loves coffee' },
  { id: 5, name: 'David Wilson', details: 'Sales representative, plays guitar' },
];

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<typeof dummyData>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Filter dummy data based on search term
    const filteredResults = dummyData.filter(
      item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
              item.details.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
    setSearched(true);
  };

  return (
    <div className="page search-page">
      <h1>Search</h1>
      <p className="subtitle">Find people in your database</p>
      
      <form onSubmit={handleSearch} className="search-form">
        <div className="search-input-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for names or details..."
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </div>
      </form>
      
      <div className="results-container">
        {searched && results.length === 0 ? (
          <p className="no-results">No results found</p>
        ) : (
          results.map(item => (
            <div key={item.id} className="result-card">
              <h3>{item.name}</h3>
              <p>{item.details}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;