import { Outlet } from "react-router-dom";
import Header from "../components/pageHeader.js";
import { useDispatch, useSelector } from "react-redux";
import { getMoreMovie } from "../redux/action.js";
import { useEffect, useRef } from "react";

import "./root-page.css";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMoreMovie());
  }, []);

  const observerTarget = useRef(null);

  const { error } = useSelector((state) => state.error);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(getMoreMovie());
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

  return (
    <>
      <Header />
      <Outlet />
      {!error && <div ref={observerTarget}></div>}
    </>
  );
};
