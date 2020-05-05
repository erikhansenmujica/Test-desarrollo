import React from "react";
import "./grid.css";
import { useHistory  } from "react-router-dom";

export default ({ item }) => {
    const history=useHistory()
    function goTo(where) {
      history.push(where);
    }
  return (
    <div className="item">
      <h3>{item.name}</h3>
      <p>
        {item.year} | ${item.price}
      </p>
      <img src={`/cars/${item.img[0]}`} alt="itemimg" className="itemImg"></img>
      <button onClick={()=>goTo(`/ficha/${item.name}`)}>Ver Modelo</button>
    </div>
  );
};
