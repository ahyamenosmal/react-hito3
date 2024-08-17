import React from "react";

const CardPizza = ({ img, name, ingredients, price, desc }) => {
  return (
    <>
      <div className="card mx-2 my-3 mt-5" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title fw-light mb-3">{name}</h5>
          <p className="card-text mb-3">{desc}</p> 
          
          <h6 className="fw-light">Ingredientes:</h6>
          <ul className="list-group">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="list-group-item">
                {ingredient}
              </li>
            ))}
          </ul>
          
          <hr />
          <ul className="list-group list-group-flush text-right">
            <li className="list-group-item ms-auto fw-light">
              <span className="h5 fw-bold green ms-3">Precio: ${price}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CardPizza;