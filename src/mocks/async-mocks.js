const products = [
    { id: "1", category: "vehiculos", name: "Auto", price: 50000 },
    { id: "2", category: "electronica", name: "Televisor", price: 1000 },
    { id: "3", category: "ropa", name: "Camisa", price: 50 },
    // Agrega más productos según sea necesario.
];

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                categoryId
                    ? products.filter((prod) => prod.category === categoryId)
                    : products
            );
        }, 1000);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === id));
        }, 1000);
    });
};