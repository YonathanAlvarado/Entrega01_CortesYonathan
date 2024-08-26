import React from "react";

const Item = ({ product }) => {
    return (
        <div className="item-card">
            <img src={product.image} alt={product.name} className="item-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>Precio: ${product.price}</strong></p>
            <button className="btn btn-primary">Añadir al carrito</button>
        </div>
    );
}

export default Item;