import React, { useState, useEffect } from 'react';
import './Pages.css';

// Dummy flashcard data
const dummyFlashcards = [
  { id: 1, question: 'John Smith', answer: 'Met at conference, works in marketing' },
  { id: 2, question: 'Sarah Johnson', answer: 'Software developer, likes hiking' },
  { id: 3, question: 'Michael Brown', answer: 'Project manager, has two kids' },
  { id: 4, question: 'Emily Davis', answer: 'Designer, loves coffee' },
  { id: 5, question: 'David Wilson', answer: 'Sales representative, plays guitar' },
];

const FlashcardsPage = () => {
  const [flashcards, setFlashcards] = useState(dummyFlashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  if (loading) {
    return <div className="page loading">Loading flashcards...</div>;
  }

  const currentCard = flashcards[currentIndex];

  return (
    <div className="page flashcards-page">
      <h1>Flashcards</h1>
      <p className="subtitle">Practice remembering details</p>
      
      <div className="flashcard-container">
        <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
          <div className="flashcard-front">
            <h2>{currentCard.question}</h2>
            <p className="flashcard-hint">Tap to reveal details</p>
          </div>
          <div className="flashcard-back">
            <p>{currentCard.answer}</p>
          </div>
        </div>
        
        <div className="flashcard-controls">
          <button onClick={handlePrev} className="control-button">Previous</button>
          <span className="card-counter">{currentIndex + 1} / {flashcards.length}</span>
          <button onClick={handleNext} className="control-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default FlashcardsPage;