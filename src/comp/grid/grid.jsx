import './grid.css';

function Grid() {
  const products = [
    { id: 1, name: "Black T-shirt", price: "$69.69", src: "./shirt.jpg" },
    { id: 2, name: "White Hoodie", price: "$89.99", src: "./shirt.jpg" },
    { id: 3, name: "Red Jacket", price: "$129.49", src: "./shirt.jpg" },
    { id: 4, name: "Blue Shirt", price: "$49.99", src: "./shirt.jpg" },
    { id: 5, name: "Green Polo", price: "$59.59", src: "./shirt.jpg" },
    { id: 6, name: "Grey Sweatshirt", price: "$79.79", src: "./shirt.jpg" },
  ];    

  return (
    <section>
      <div className="product-grid-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img className="pro1" src={product.src} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Grid;
