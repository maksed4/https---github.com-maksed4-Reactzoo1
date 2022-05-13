import axios from "axios";
import { useEffect, useState } from "react";
import { Ianimals } from "../models/Ianimal";
import "./Style.css";

export const Animal = () => {
  const [animal, setAnimal] = useState<Ianimals[]>([]);
  const URL = "https://animals.azurewebsites.net/api/animals";

  var currentUrl: string = window.location.pathname.replace("/animal/", "");
  var currentNumber = parseInt(currentUrl);

  const feed = () => {
    var isFed = localStorage.getItem(currentUrl);
    if (isFed == null) {
      var currentDate = new Date();
      localStorage.setItem(currentUrl, currentDate.toString());
      console.log("Matade djuret!");
    }
  };

  useEffect(() => {
    if (animal.length !== 0) return;
    axios
      .get("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        setAnimal(response.data);
      });
  });

  let animalHtml = animal.map((animal) => {
    var currentDate;
    currentDate = localStorage.getItem(currentUrl);
    if (animal.id == currentNumber) {
      var isFed = localStorage.getItem(currentUrl);

      if (isFed != null) {
        return (
          <div key={animal.id} className="container">
            <h2>{animal.name}</h2>
            <img src={animal.imageUrl} alt={animal.latinName}></img>
            <h2>{animal.longDescription}</h2>
            <h3>Matades senast {currentDate} </h3>
          </div>
        );
      } else {
        return (
          <div key={animal.id} className="img-container">
            <h2>{animal.name}</h2>
            <img src={animal.imageUrl} alt={animal.latinName}></img>
            <h2>{animal.longDescription}</h2>
            <h2>Behöver matas!</h2>
            <button onClick={feed}> mata {animal.name}</button>
          </div>
        );
      }
    }
  });

  return <div className="">{animalHtml}</div>;
};
