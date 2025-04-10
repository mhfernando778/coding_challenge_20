import React, { useState } from 'react'; // Importing React and the useState hook from the React library
import Gallery from './Gallery';

function App() { // Defining the App component
  const [tours, setTours] = useState([]);

  const addTour = (newTour) => { // Function to add a new tour to the list
    setTours((prevTours) => [...prevTours, newTour]);
  };

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return ( // Rendering the App component
    <div>
      <h1>Gallery</h1>
      <Gallery tours={tours} addTour={addTour} removeTour={removeTour} />
    </div>
  );
};

// Exporting the App component as the default export of this file
export default App;