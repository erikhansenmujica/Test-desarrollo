import React from "react";
import "./gridController.css";
import { categoryFilter } from "../store/actions/cars";

export default ({ content, active, setActive, dispatch, cars }) => (
  <button
    className={
      content === active ? "controllerButtonActive" : "controllerButton"
    }
    onClick={() => {
        dispatch(categoryFilter(cars, content));
        setActive(content)}}
  >
    {content}
  </button>
);
