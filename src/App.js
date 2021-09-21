import "./App.css";
import Axios from "axios";
import { useState } from "react";
import ReceipeTile from "./ReceipeTile";

function App() {
  const [query, setquery] = useState("");

  const [receipes, setreceipes] = useState([]);

  const [healthLabel, sethealthLabel] = useState("vegan");

  const YOUR_APP_ID = "4922dbc0";
  const YOUR_APP_KEY = "292b19a57f04a5c3b7d9ec7136ab9de0";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

  async function getReceipe() {
    var result = await Axios.get(url);
    setreceipes(result.data.hits);
    console.log(result.data);
  }

  const submit = (e) => {
    e.preventDefault();
    getReceipe();
  };
  return (
    <div className="app">
      <h1 onClick={getReceipe}>Food Receipe App</h1>

      <form className="app__searchForm" onSubmit={submit}>
        <input
          className="app__input"
          type="text"
          placeholder="Enter ingridient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />

        <select className="app__healthlabel" name="" id="">
          <option value="" onClick={() => sethealthLabel("vegan")}>
            Vegan
          </option>

          <option value="" onClick={() => sethealthLabel("vegitarian")}>
            Vegitarian
          </option>

          <option value="" onClick={() => sethealthLabel("paleo")}>
            Paleo
          </option>

          <option value="" onClick={() => sethealthLabel("egg-free")}>
            Egg-free
          </option>

          <option value="" onClick={() => sethealthLabel("low-sugar")}>
            Low-sugar
          </option>
        </select>

        <input className="app__submit" type="submit" value="Search" />
      </form>

      <div className="app__recipes">
        {receipes.map((recipe) => {
          return <ReceipeTile recipe={recipe} />;
          // <p>{recipe["recipe"]["label"]}</p>
        })}
      </div>
    </div>
  );
}

export default App;
