import React from "react";
import styles from "./MovieCard.module.css";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { IoIosArrowDropdownCircle } from "react-icons/io";

function MovieCard({ movie }) {
  let gener = ["Adventure", "Action", "Thriller"];
  return (
    <div className={styles.movieCardWrapper}>
      <img
        src={movie?.poster_path}
        className={styles.poster}
        alt="poster image"
      />

      <div className={styles.hoverCard}>
        <img
          src={movie?.poster_path}
          className={styles.hoverImage}
          alt="hover image"
        />

        <div className={styles.badge}>Recently Added </div>
        <div className={styles.buttonRow}>
          <FaCirclePlay
            color="white"
            size={40}
            className={styles.circleButton}
          />
          <BsPlusCircle
            color="white"
            size={40}
            className={styles.circleButton}
          />
          <GoCheckCircleFill
            color="white"
            size={40}
            className={styles.circleButton}
          />
          <IoIosArrowDropdownCircle
            className={styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>

        <div className={styles.metaRow}>
          <span>U/A 16+</span>
          <span>Movie</span>
          <span>HD</span>
        </div>

        <div className={styles.gener}>
          {gener?.map((a, index) => (
            <span key={index}>
              {a}
              <span> </span>
              {index < gener.length - 1 && (
                <span className={styles.dot}>•</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
