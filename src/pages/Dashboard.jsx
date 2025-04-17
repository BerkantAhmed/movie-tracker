import { useEffect, useState } from "react";

const Dashboard = () => {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:5000/movies")
        .then((res) => res.json())
        .then((data) => setMovies(data))
        .catch((err) => console.error("Error fetching movies:", err));
    }, []);
   
    return (
      <div>
        <h2 >Welcome to your movie dashboard!</h2>
        <div>
        <h2>Your Movies</h2>
        {movies.length > 0 ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                🎬 {movie.title} ({movie.year})
              </li>
            ))}
          </ul>
        ) : (
          <p>No movies yet.</p>
        )}
      </div>
      </div>
    );
    
  };

  
    
  
    
  
  
  
  export default Dashboard;
  