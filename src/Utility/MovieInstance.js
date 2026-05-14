import axios from "axios";

export const movieInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// 7f1e13a8ae7ad75a2d684ddb3c939b2e
