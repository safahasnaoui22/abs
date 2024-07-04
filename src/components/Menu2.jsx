import "./Menu2.css";
import React from "react";

function Menu2() {
  return (
    <div className="bod">
      <div className="downmenu">
        <h1 className="hmenu">Our Menu</h1>
        <div className="container">
          <div className="btn">
            <a href="/menuit.pdf" download="menuit.pdf">Italian Menu</a>
          </div>
          <div className="btn">
            <a href="/restaurentalacarte (1).pdf" download="restaurentalacarte (1).pdf">Tunisian Menu</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu2;
