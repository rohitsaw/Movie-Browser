import { Outlet } from "react-router-dom";
import Header from "../components/pageHeader.js";
import { useDispatch, useSelector } from "react-redux";
import { getMoreMovie } from "../redux/action.js";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { getSearchMovies, redirectToHome } from "../redux/action.js";

import "./root-page.css";

export default () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const observerTarget = useRef(null);
  const navigate = useNavigate();

  const { error } = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getMoreMovie());
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          _.debounce(handleMovieLoad, 200)();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  const handleChange = (e) => {
    navigate("/");
    dispatch(getSearchMovies(e.target.value));
  };

  const handleHomeRedirect = () => {
    dispatch(redirectToHome());
    navigate("/");
    inputRef.current.value = "";
  };

  const handleMovieLoad = () => {
    dispatch(getMoreMovie());
  };

  return (
    <>
      <Header
        inputRef={inputRef}
        handleChange={handleChange}
        handleHomeRedirect={handleHomeRedirect}
      />
      <Outlet />
      {!error && <div ref={observerTarget}></div>}
    </>
  );
};
