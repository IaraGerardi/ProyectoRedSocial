import React from "react";
import "./Error.css";

function Error() {
  return (
    <div className="containerOne">
      <div className="containerTwo">
        <div className="containerTree">
          <div>
            <h1 className="hh1">PAGINA NO ENCONTRADA</h1>
          </div>
          <div>
            <h1 className="hh1">ERROR 404 </h1>
          </div>
        </div>

        <div className="containerimg">
          <img
            className="imgrobot"
            alt="robot"
            src={require("../Error/img/robot.png")}
          />
        </div>

        <div className="containerFour">
          <div>
            <h2 className="hh2">¡LA PAGINA NO EXISTE!</h2>
          </div>
          <div>
            <button className="botonone">Volver para atrás</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Error;
