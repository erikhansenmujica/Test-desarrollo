import {
  CAT_FILTER,
  MOST_EXPENSIVE_FILTER,
  CHEAPER_FILTER,
  NEWEST_FILTER,
  OLDEST_FILTER,
  ONLY_ONE,
} from "../constants";

const initialState = {
  allCars: [
    {
      name: "Etios",
      year: 2019,
      price: 815000.0,
      category: "Autos",
      img: ["etios.png", "etios@2x.png", "etios@3.png"],
    },
    {
      name: "Yaris",
      year: 2020,
      price: 1038900.0,
      category: "Autos",
      img: ["yaris.png", "yaris@2x.png", "yaris@3.png"],
    },
    {
      name: "Corolla",
      year: 2018,
      price: 1430700.0,
      category: "Autos",
      img: ["corolla.png", "corolla@2x.png", "corolla@3.png"],
    },
    {
      name: "Prius",
      year: 2019,
      price: 2882000.0,
      category: "Autos",
      img: ["prius-1.png", "prius-1@2x.png", "prius-1@3.png"],
    },
    {
      name: "Camry",
      year: 2018,
      price: 3753200.0,
      category: "Autos",
      img: ["camry.png", "camry@2x.png", "camry@3.png"],
    },
    {
      name: "Toyota 86",
      year: 2019,
      price: 3812100.0,
      category: "Autos",
      img: ["toyota-86.png", "toyota-86@2x.png", "toyota-86@3.png"],
    },
    {
      name: "Innova",
      year: 2020,
      price: 2596400.0,
      category: "Comerciales",
      img: ["innova.png", "innova@2x.png", "innova@3.png"],
    },
    {
      name: "SW4",
      year: 2019,
      price: 3236200.0,
      category: "SUV",
      img: ["sw-4.png", "sw-4@2x.png", "sw-4@3.png"],
    },
    {
      name: "RAV4",
      year: 2019,
      price: 3170200.0,
      category: "SUV",
      img: ["rav-4.png", "rav-4@2x.png", "rav-4@3.png"],
    },
    {
      name: "Land Cruiser Prado",
      year: 2017,
      price: 815900.0,
      category: "SUV",
      img: ["prado.png", "prado@2x.png", "prado@3.png"],
    },
    {
      name: "Land Cruiser 200",
      year: 2018,
      price: 7873100.0,
      category: "SUV",
      img: ["cruiser.png", "cruiser@3.png"],
    },
    {
      name: "Hilux",
      year: 2020,
      price: 1507000.0,
      category: "Pickups",
      img: ["hilux.png", "hilux@2x.png", "hilux@3.png"],
    },
  ],
  uniqueCar: {},
  cars: [
    {
      name: "Etios",
      year: 2019,
      price: 815000.0,
      category: "Autos",
      img: ["etios.png", "etios@2x.png", "etios@3.png"],
    },
    {
      name: "Yaris",
      year: 2020,
      price: 1038900.0,
      category: "Autos",
      img: ["yaris.png", "yaris@2x.png", "yaris@3.png"],
    },
    {
      name: "Corolla",
      year: 2018,
      price: 1430700.0,
      category: "Autos",
      img: ["corolla.png", "corolla@2x.png", "corolla@3.png"],
    },
    {
      name: "Prius",
      year: 2019,
      price: 2882000.0,
      category: "Autos",
      img: ["prius-1.png", "prius-1@2x.png", "prius-1@3.png"],
    },
    {
      name: "Camry",
      year: 2018,
      price: 3753200.0,
      category: "Autos",
      img: ["camry.png", "camry@2x.png", "camry@3.png"],
    },
    {
      name: "Toyota 86",
      year: 2019,
      price: 3812100.0,
      category: "Autos",
      img: ["toyota-86.png", "toyota-86@2x.png", "toyota-86@3.png"],
    },
    {
      name: "Innova",
      year: 2020,
      price: 2596400.0,
      category: "Comerciales",
      img: ["innova.png", "innova@2x.png", "innova@3.png"],
    },
    {
      name: "SW4",
      year: 2019,
      price: 3236200.0,
      category: "SUV",
      img: ["sw-4.png", "sw-4@2x.png", "sw-4@3.png"],
    },
    {
      name: "RAV4",
      year: 2019,
      price: 3170200.0,
      category: "SUV",
      img: ["rav-4.png", "rav-4@2x.png", "rav-4@3.png"],
    },
    {
      name: "Land Cruiser Prado",
      year: 2017,
      price: 815900.0,
      category: "SUV",
      img: ["prado.png", "prado@2x.png", "prado@3.png"],
    },
    {
      name: "Land Cruiser 200",
      year: 2018,
      price: 7873100.0,
      category: "SUV",
      img: ["cruiser.png", "cruiser@3.png"],
    },
    {
      name: "Hilux",
      year: 2020,
      price: 1507000.0,
      category: "Pickups",
      img: ["hilux.png", "hilux@2x.png", "hilux@3.png"],
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CAT_FILTER:
      if (action.cat === "Todos") {
        return Object.assign({}, state, {
          cars: action.cars,
        });
      }
      return Object.assign({}, state, {
        cars: action.cars.filter((car) => car.category === action.cat),
      });
    case MOST_EXPENSIVE_FILTER: {
      let carsToBeFiltered = JSON.parse(JSON.stringify(action.cars));
      return Object.assign({}, state, {
        cars: carsToBeFiltered.sort((a, b) => {
          if (a.price > b.price) {
            return -1;
          }
          if (a.price < b.price) {
            return 1;
          }
          return 0;
        }),
      });
    }
    case CHEAPER_FILTER: {
      let carsToBeFiltered = JSON.parse(JSON.stringify(action.cars));
      return Object.assign({}, state, {
        cars: carsToBeFiltered.sort((a, b) => {
          if (a.price > b.price) {
            return 1;
          }
          if (a.price < b.price) {
            return -1;
          }
          return 0;
        }),
      });
    }
    case NEWEST_FILTER: {
      let carsToBeFiltered = JSON.parse(JSON.stringify(action.cars));
      return Object.assign({}, state, {
        cars: carsToBeFiltered.sort((a, b) => {
          if (a.year > b.year) {
            return -1;
          }
          if (a.year < b.year) {
            return 1;
          }
          return 0;
        }),
      });
    }
    case OLDEST_FILTER: {
      let carsToBeFiltered = JSON.parse(JSON.stringify(action.cars));
      return Object.assign({}, state, {
        cars: carsToBeFiltered.sort((a, b) => {
          if (a.year > b.year) {
            return 1;
          }
          if (a.year < b.year) {
            return -1;
          }
          return 0;
        }),
      });
    }
    case ONLY_ONE: {
      let carsToBeFiltered = JSON.parse(JSON.stringify(action.allCars));
      return Object.assign({}, state, {
        uniqueCar: carsToBeFiltered.filter((car) => car.name === action.name)[0],
      });
    }

    default:
      return state;
  }
}
