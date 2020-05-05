import {
  CAT_FILTER,
  MOST_EXPENSIVE_FILTER,
  CHEAPER_FILTER,
  NEWEST_FILTER,
  OLDEST_FILTER,
  ONLY_ONE
} from "../constants";
export function categoryFilter(cars, cat) {
  return {
    cars: cars,
    type: CAT_FILTER,
    cat,
  };
}
export function filter(cars, type, cat, allCars, name) {
  switch (type) {
    case "De menor a mayor precio":
      return {
        cars: cars,
        type: CHEAPER_FILTER,
      };
    case "De mayor a menor precio":
      return {
        cars: cars,
        type: MOST_EXPENSIVE_FILTER,
      };
    case "Más nuevos primero":
      return {
        cars: cars,
        type: NEWEST_FILTER,
      };
    case "Más viejos primero":
      return {
        cars: cars,
        type: OLDEST_FILTER,
      };
    case "One":
      return {
        allCars: allCars,
        type: ONLY_ONE,
        name:name
      };
    case "Nada":
      return {
        cars: allCars,
        type: CAT_FILTER,
        cat,
      };

    default:
      break;
  }
}
