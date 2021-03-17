import { MovieCard } from "./MovieCard";

interface MovieProps { //code -> App.tsx
  Title: string;
  Poster: string;
  Ratings: Array <{
    Source: string;
    Value: string; 
  }>;
  Runtime: string;
}

interface ContentProps {
  movies: MovieProps[];
  selectedGenre: { title: String }
}

export function Content({
  //Complete aqui
  movies,
  selectedGenre
} : ContentProps) {
  return ( //code -> App.tsx
    <div className="container">
      <header>
        <span className="category">Categoria:<span>{selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard 
              title={movie.Title} 
              poster={movie.Poster} 
              runtime={movie.Runtime} 
              rating={movie.Ratings[0].Value} 
            />
          ))}
        </div>
      </main>
    </div>
  )
}