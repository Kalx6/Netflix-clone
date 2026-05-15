import React, { useEffect, useState } from "react";
import styles from "./DisplayRow.module.css";
import SlideShow from "../SlideShow/SlideShow";
import { movies } from "../../Data/Data";
import MovieInstance from "../../Utility/MovieInstance";
import request from "../../Utility/MovieReference";

function DisplayRow() {
  const [movies, setMovies] = useState({
    trending: [],
    netflixOriginals: [],
    topRated: [],
    action: [],
    comedy: [],
    horror: [],
    romance: [],
    documentaries: [],
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const [
        trendingRes,
        netflixRes,
        topRatedRes,
        actionRes,
        comedyRes,
        romanceRes,
        docRes,
      ] = await Promise.all([
        MovieInstance.get(request.fetchTrending),
        MovieInstance.get(request.fetchNetflixOriginals),
        MovieInstance.get(request.fetchTopRatedMovies),
        MovieInstance.get(request.fetchActionMovies),
        MovieInstance.get(request.fetchComedyMovies),
        MovieInstance.get(request.fetchRomanceMovies),
        MovieInstance.get(request.fetchDocumentaries),
      ]);

      setMovies({
        trending: trendingRes.data.results,
        netflixOriginals: netflixRes.data.results,
        topRated: topRatedRes.data.results,
        action: actionRes.data.results,
        comedy: comedyRes.data.results,
        romance: romanceRes.data.results,
        documentaries: docRes.data.results,
      });
      console.log(movies);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Movie suggestions" movies={movies.trending} />
      <SlideShow title="Popular on Netflix" movies={movies.netflixOriginals} />
      <SlideShow title="Trending new" movies={movies.topRated} />
      <SlideShow title="Actions" movies={movies.action} />
    </div>
  );
}

export default DisplayRow;
