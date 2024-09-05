import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../mocks/async-mocks";

const ItemListContainer = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        getProducts(id).then((data) => {
            setItems(data);
        });
    }, [id]);

    return (
        <div>
            <h2>{id ? `Categoría: ${id}` : "Catálogo de Productos"}</h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;