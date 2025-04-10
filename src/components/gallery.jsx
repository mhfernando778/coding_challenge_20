import React, { useEffect, useState } from 'react'; // Importing React and the useEffect and useState hooks

function Gallery() { // Defining the Gallery component
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { // useEffect hook to fetch data when the component mounts
        const fetchTours = async () => {
            try {
                const response = await fetch('https://course-api.com/react-tours-project');
                const data = await response.json();
                setTours(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching tours:', error);
                setLoading(false);
            }
        };

        fetchTours(); // Call the fetchTours function to fetch data
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return ( // Rendering the Gallery component 
        <div>
            <h1>Tour Gallery</h1>
            <ul>
                {tours.map((tour) => (
                    <li key={tour.id}>
                        <h2>{tour.name}</h2>
                        <p>{tour.info}</p>
                        <img src={tour.image} alt={tour.name} style={{ width: '300px' }} />
                        <p>Price: ${tour.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Gallery;