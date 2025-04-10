import React, { useState } from 'react';
import Gallery from './Gallery';

function App() {
  const [tours, setTours] = useState([]);

  const addTour = (newTour) => {
    setTours((prevTours) => [...prevTours, newTour]);
  };

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <div>
      <h1>Gallery</h1>
      <Gallery tours={tours} addTour={addTour} removeTour={removeTour} />
    </div>
  );
};

export default App;