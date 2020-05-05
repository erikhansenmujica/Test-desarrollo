import React, { useEffect } from "react";
import "./css.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../store/actions/cars";
import Carousel from "../Carousel";

export default () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const allCars = useSelector((state) => state.allCars);
  useEffect(() => {
    if (name) dispatch(filter(null, "One", null, allCars, name));
  }, []);
  const car = useSelector((state) => state.uniqueCar);
  console.log(car);
  return (
    <div>
      <div className="firstBlock">
        <img
          src={car.img ? `/cars/${car.img[1]}` : "/img.png"}
          className="firstPhoto"
          alt="img"
        />
        <div className="titleContent">
          <h3>{car.name ? `${car.name}` : "Hilux DX/SR"}</h3>
          <h1>Preparada para cualquier desafio</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui illum
            velit nulla? Est laudantium, ratione sed porro earum, suscipit modi
            ex dolorum sit quod, eligendi ab et ea optio laborum!
          </p>
        </div>
      </div>
      <Carousel />
      <div className="firstBlock1">
        <div className="titleContent1">
          <h3>Titulito</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui illum
            velit nulla? Est laudantium, ratione sed porro earum, suscipit modi
            ex dolorum sit quod, eligendi ab et ea optio laborum!
          </p>
        </div>
        <img src="/3.png" className="layer"></img>
      </div>

      <div className="firstBlock">
        <img src="/1.png" className="layer"></img>
        <div className="titleContent1">
          <h3>Titulovich</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui illum
            velit nulla? Est laudantium, ratione sed porro earum, suscipit modi
            ex dolorum sit quod, eligendi ab et ea optio laborum!
          </p>
        </div>
      </div>
    </div>
  );
};
