import { useEffect, useState } from "react";
import Pelicula from "./components/Pelicula";
import peliculas from "./services/peliculas";
import "./styles.css";

const App = () => {
  const [pelis, setPelis] = useState([]);
  function mostrarPelis() {
    peliculas.get().then((resp) => {
      console.log("resp", resp);
      setPelis(resp.data.results);
    });
  }
  useEffect(() => {
    mostrarPelis();
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {pelis.map((peli) => {
        return <Pelicula {...peli} />;
      })}
    </div>
  );
};
export default App;
