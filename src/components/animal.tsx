import axios from "axios";
import { useEffect, useState } from "react";
import { Ianimals } from "../models/Ianimal";
import "./Style.css";
import { Link } from "react-router-dom";

export function Animals() {
  const [animals, Setanimal] = useState<Ianimals[]>([]);

  useEffect(() => {
    if (animals.length !== 0) return;
    axios
      .get("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        Setanimal(response.data);
      });
  });

  let AnimalHtml = animals.map((animal) => {
    var animalTemp: number = animal.id;
    var strungAnimal = animalTemp.toString();
    var isFed = localStorage.getItem(strungAnimal);

    if (isFed == null) {
      return (
        <div key={animal.id} className="img-container">
          <Link to={"/animal/" + animal.id}>
            <h2>{animal.name} - behöver matas!</h2>
            <img src={animal.imageUrl} alt={animal.latinName}></img>
          </Link>
          <h2>{animal.shortDescription}</h2>
        </div>
      );
    } else {
      return (
        <div key={animal.id} className="img-container">
          <Link to={"/animal/" + animal.id}>
            <h2>{animal.name}</h2>
            <img src={animal.imageUrl} alt={animal.latinName}></img>
          </Link>
          <h2>{animal.shortDescription}</h2>
        </div>
      );
    }
  });

  return <div>{AnimalHtml}</div>;
}
