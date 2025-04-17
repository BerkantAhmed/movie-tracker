import { useEffect, useState } from "react";

const Dashboard = () => {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    useEffect(() => {
    fetchMovies();
      fetch("http://localhost:5000/movies")
        .then((res) => res.json())
        .then((data) => setMovies(data))
        .catch((err) => console.error("Error fetching movies:", err));
    }, []);
    const fetchMovies = async () => {
        const res = await fetch("http://localhost:5000/movies");
        const data = await res.json();
        setMovies(data);
    };
    const handleAddMovie = async (e) => {
        e.preventDefault();
    
        if (!title || !year) return;
    
        const newMovie = {
          title,
          year: Number(year),
        };
        const res = await fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    });

    if (res.ok) {
      setTitle("");
      setYear("");
      fetchMovies();
    }
  };
    return (
      <div>
        <h2 >Welcome to your movie dashboard!</h2>
        <div>
        <h2>Your Movies</h2>
        <form onSubmit={handleAddMovie} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>
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
  