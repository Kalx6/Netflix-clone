import React from "react";
import styles from "./SlideShow.module.css";
import MovieCard from "../MovieCard/MovieCard";

function SlideShow({ title, movies }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
