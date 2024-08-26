import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const products = [
    {
      id: 1,
      name: "Producto 1",
      description: "Descripción del producto 1",
      price: 100,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Producto 2",
      description: "Descripción del producto 2",
      price: 200,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Producto 3",
      description: "Descripción del producto 3",
      price: 300,
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer Bienvenido="Tienda en construccion" products={products} />
    </div>
  );
}

export default App;