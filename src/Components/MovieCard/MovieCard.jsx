import React from "react";
import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircle } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function MovieCard(movie) {
  let gener = ["Adventure", "Action", "Thriller"];
  return (
    <div>
      <img src={movie.poster_path} alt="" />

      <div>
        <img src={movie.poster_path} alt="" />
        <div>Recently Added </div>
        <div>
          <FaCirclePlay color="white" size={40} />
          <BsPlusCircle color="white" size={40} />
          <GoCheckCircle color="white" size={40} />
          <IoIosArrowDropdownCircle color="white" size={40} />
        </div>

        <div>
          <span>U/A 16+</span>
          <span>Movie</span>
          <span>HD</span>
        </div>

        <div>
          {gener.map((a, index) => (
            <span key={index}>
              {a}
              {index < gener.length - 1 && <span>•</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
