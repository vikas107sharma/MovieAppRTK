import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleMoviePageCard from "./SingleMoviePageCard";
import { useDispatch, useSelector } from "react-redux";
import { getSingleMovie, removeSingleMovie } from "../redux/MovieSlice";
import { fetchSingleMovie } from "../redux/MovieSlice";

const SingleMoviepage = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector(getSingleMovie);

  useEffect(() => {
    dispatch(fetchSingleMovie(imdbID));
    return ()=>{
      dispatch(removeSingleMovie());
    }
  }, [dispatch,imdbID]);

  return (
    <>
    {Object.keys(movie).length=== 0 ? (<div>...Loading</div>) :
      <div>
          <SingleMoviePageCard movie={movie} />
      </div>
    }
    </>
  );
};

export default SingleMoviepage;
