import { useState, useEffect } from "react";
import Error from "./Error.jsx";
import Resultado from "./Resultado.jsx";

function Buscador() {

  const [termino, setTermino] = useState("");
  const [resultado, setResultado] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {

      const consultarProfile = async () => {
        
        const url = `https://api.github.com/users/${termino}`;
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();   

        setResultado(resultado);
      };

      consultarProfile();
  }, [termino]);


  const validarBusqueda = (e) => {
    e.preventDefault();

    const searchInput = document.querySelector("#termino").value;
    
    if (searchInput === "") {
      setError(true)
      setTermino("")

      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    }
    else {
      setError(false);
    }
      setTermino(searchInput);
  }

  return (
    <>
      <div className="mt-5">
        <div className="rounded-lg dark:bg-slate-700 bg-slate-200 w-full flex items-center justify-between py-3 px-4 drop-shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 24 24"
          >
            <path
              fill="#888888"
              d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
            />
          </svg>

          <input
            className="w-full border-0 outline-none dark:bg-slate-700 bg-slate-200 py-2 px-4 lg:text-lg text-base dark:text-white text-black"
            placeholder="Buscar nombre de usuario en Github..."
            type="search"
            name=""
            id="termino"
          />

          <button
            className="flex items-center gap-4 bg-sky-600 h-full py-2 px-4 rounded-lg text-white lg:text-lg text-base transition ease-in-out delay-15 hover:-translate-x-1 hover:scale-110 hover:bg-sky-800 duration-300"
            onClick={validarBusqueda}
          >
            <svg
              className="lg:w-8 lg:h-8 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M11 12q-1.65 0-2.825-1.175T7 8q0-1.65 1.175-2.825T11 4q1.65 0 2.825 1.175T15 8q0 1.65-1.175 2.825T11 12m10.4 10.8l-2.5-2.5q-.525.3-1.125.5T16.5 21q-1.875 0-3.187-1.312T12 16.5q0-1.875 1.313-3.187T16.5 12q1.875 0 3.188 1.313T21 16.5q0 .675-.2 1.275t-.5 1.125l2.5 2.5q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275M16.5 19q1.05 0 1.775-.725T19 16.5q0-1.05-.725-1.775T16.5 14q-1.05 0-1.775.725T14 16.5q0 1.05.725 1.775T16.5 19m-5.475-6q-1.05 1.55-1.05 3.5t1.05 3.5H5q-.825 0-1.412-.587T3 18v-.775q0-.85.425-1.575t1.175-1.1q1.275-.65 2.875-1.1t3.55-.45"
              />
            </svg>
            Buscar
          </button>
        </div>
      </div>
      {termino ? <Resultado resultado={resultado} /> : error ? <Error /> : ""}
    </>
  );
}

export default Buscador;
