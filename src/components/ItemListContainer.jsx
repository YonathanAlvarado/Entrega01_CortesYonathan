import React from "react";
import Item from "./Item";

const ItemListContainer = ({ greeting, products }) => {
    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <div className="item-list">
                {products.map(product => (
                    <Item key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ItemListContainer;