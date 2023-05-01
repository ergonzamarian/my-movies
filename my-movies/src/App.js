import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { MoviesList } from "./components/MoviesList";
import { MoviesContainer } from "./styles/MoviesContainer";
import { MoviesService } from "./services/MoviesService";

function App() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const data = await MoviesService.getMovies();
    console.log(data);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header></Header>

      <MoviesContainer>
        <MoviesList movies={[]} />
      </MoviesContainer>
    </div>
  );
}

export default App;
