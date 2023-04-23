import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import MovieListing from "./MoviesList/MoviesListing";
import Header from "./Header";
import Form from "./Form";
import { fetchAsyncMovies, fetchAsyncSeries } from "./redux/MovieSlice";

const Home = () => {
  const [q, setQ] = useState();
  const [term, setTerm] = useState("flash");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncSeries(term));
  }, [dispatch, term]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(q);
    if (q.length > 0) {
      setTerm(q);
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Form q={q} setQ={setQ} handleSubmit={handleSubmit} />
      <div className="bg-[#03001c]">
        <div className="m-auto w-[85%] md:w-[90%] lg:w-[95%] bg-[#031933] rounded-2xl flex-col flex">
          <div className="text-white mt-10">
            <div className="flex justify-between m-4">
              <h1 className="inline-block text-3xl font-bold">Movies</h1>
              <Link to="/movies">view all</Link>
            </div>
            <MovieListing ListName={"movies"} />
          </div>
          <div className="text-white">
            <div className="flex justify-between m-4">
              <h1 className="inline-block text-3xl font-bold">TV shows</h1>
              <Link to="/series">view all</Link>
            </div>
            <MovieListing ListName={"series"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
