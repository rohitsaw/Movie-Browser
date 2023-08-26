import { Outlet } from "react-router-dom";
import Header from "../components/pageHeader.js";
import { useDispatch, useSelector } from "react-redux";
import { getMoreMovie } from "../redux/action.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import {
  getSearchMovies,
  redirectToHome,
  loadFilters,
} from "../redux/action.js";
import PersistentDrawerLeft from "../components/sidebar.js";
import "./root-page.css";

export default () => {
  const dispatch = useDispatch();
  const observerTarget = useRef(null);
  const navigate = useNavigate();

  const { error } = useSelector((state) => ({
    erro: state.searchMovieError || state.upcomingMovieError,
  }));

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(getMoreMovie());
    dispatch(loadFilters());
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
    dispatch(getSearchMovies(e.target.value));
  };

  const handleHomeRedirect = () => {
    dispatch(redirectToHome());
    navigate("/");
  };

  const handleMovieLoad = () => {
    dispatch(getMoreMovie());
  };

  return (
    <>
      <PersistentDrawerLeft
        handleDrawerClose={handleDrawerClose}
        isDrawerOpen={open}
      >
        <Header
          handleDrawerOpen={handleDrawerOpen}
          isDrawerOpen={open}
          handleChange={handleChange}
          handleHomeRedirect={handleHomeRedirect}
        />
        <Outlet />
      </PersistentDrawerLeft>
      {!error && <div ref={observerTarget}></div>}
    </>
  );
};
