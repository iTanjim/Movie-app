import { useState } from "react";
import "./app.css";

const searchedMovies = [
  {
    title: "MovieA",
    year: 2010,
    image: "https://picsum.photos/300/400",
  },
  {
    title: "MovieB",
    year: 2009,
    image: "https://picsum.photos/300/400",
  },
  {
    title: "MovieC",
    year: 2008,
    image: "https://picsum.photos/300/400",
  },
];

const savedMovies = [
  {
    title: "MovieE",
    year: 2010,
    image: "https://picsum.photos/300/400",
  },
  {
    title: "MovieF",
    year: 2009,
    image: "https://picsum.photos/300/400",
  },
  {
    title: "MovieG",
    year: 1789,
    image: "https://picsum.photos/300/400",
  },
];

export default function App() {
  const [movies, setMovies] = useState(searchedMovies);
  return (
    <div className="app">
      <NavBar>
        {" "}
        <Logo />
        <Search />
        <ResultSummary />{" "}
      </NavBar>
      <Main>
        {/* <MovieCont>
          <MovieList sampMovies={movies} />
        </MovieCont>
        <MovieSummary>
          <SummaryHeader />
          <MovieList sampMovies={savedMovies} />
        </MovieSummary> */}
        <Box>
          <MovieList sampMovies={movies} />
        </Box>
        <Box>
          <SummaryHeader />
          <MovieList sampMovies={savedMovies} />
        </Box>
      </Main>
    </div>
  );
}

function Movie({ movie }) {
  return (
    <li className="movies-list-movie">
      <div className="movies-img-cont">
        <img src={movie.image} alt={`cover of ${movie.title}`} />
      </div>

      <h4>{movie.title}</h4>
      <p>{movie.year}</p>
    </li>
  );
}

function Button({ isOpen, onClick }) {
  return (
    <button
      className={`toggle-btn ${isOpen ? "open" : "close"}`}
      onClick={onClick}
    >
      {isOpen ? "-" : "+"}
    </button>
  );
}

function Main({ children }) {
  return <div className="main">{children}</div>;
}

// function MovieCont({ children }) {
//   const [isOpen, setIsOpen] = useState("true");

//   return (
//     <div className="main-movies">
//       <Button isOpen={isOpen} onClick={() => setIsOpen((curr) => !curr)} />
//       {isOpen && children}
//     </div>
//   );
// }

function Box({ children }) {
  const [isOpen, setIsOpen] = useState("true");

  return (
    <div className="main-movies">
      <Button isOpen={isOpen} onClick={() => setIsOpen((curr) => !curr)} />
      {isOpen && children}
    </div>
  );
}

// function MovieSummary({ children }) {
//   const [isOpen, setIsOpen] = useState(true);
//   return (
//     <div className="main-summary">
//       <Button isOpen={isOpen} onClick={() => setIsOpen((curr) => !curr)} />
//       {isOpen ? <>{children}</> : null}
//     </div>
//   );
// }

function MovieList({ sampMovies }) {
  return (
    <ul className="movies-list">
      {sampMovies.map((movie) => {
        return <Movie movie={movie} />;
      })}
    </ul>
  );
}

function SummaryHeader() {
  return (
    <div className="summary-header">
      <h3>Movies You watched</h3>

      <p>X movies</p>
      <p>⭐ 10</p>
      <p>💰10.00</p>
      <p>⌛X min</p>
    </div>
  );
}

function NavBar({ children }) {
  return <div className="nav">{children}</div>;
}
function Logo() {
  return <div className="nav-logo">🍿🥤MovieApp</div>;
}

function Search() {
  return <input type="text" placeholder="Search movies..." />;
}
function ResultSummary() {
  return <div className="nav-result">Found X Results</div>;
}
