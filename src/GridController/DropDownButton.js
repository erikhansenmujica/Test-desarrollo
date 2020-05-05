import React from "react";
import { filter, categoryFilter } from "../store/actions/cars";

export default ({
  content,
  activeDropdown,
  setActiveDropdown,
  dispatch,
  cars,
  active,
  allCars,
  mobile,
}) => {
  return (
    <button
      className={
        mobile
          ? active === content
            ? "activedropdownbtn"
            : "dropdownbtn"
          : activeDropdown === content
          ? "activedropdownbtn"
          : "dropdownbtn"
      }
      onClick={() => {
        setActiveDropdown(content);

        dispatch(
          mobile
            ? categoryFilter(allCars, content)
            : filter(cars, content, active, allCars)
        );
      }}
    >
      {content
        .split(" ")
        .map((word, i) =>
          word === "menor" ||
          word === "mayor" ||
          word === "nuevos" ||
          word === "viejos" ? (
            <strong key={i}>{word} </strong>
          ) : (
            word + " "
          )
        )}
    </button>
  );
};
