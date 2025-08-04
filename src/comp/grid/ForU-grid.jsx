import './grid.css';
import { useMemo } from 'react';

function Grid() {
  const products = [
    { id: 1, name: "Black T-shirt", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/92c2dbed-7e46-42f4-a6df-09e01ce00bd5/image-3ea75c3c-cb1c-46d4-8692-e542ba05ec34-original.jpg?v=63817968938&width=1024" },
    { id: 2, name: "White Hoodie", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/f7403b31-3ed8-4bda-8fe7-cfda992f3c85/image-c1e171eb-153c-4070-8319-de2a8ec944b9-original.jpg?v=63825576997&width=1024" },
    { id: 3, name: "Red Jacket", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/42dc333b-427c-4f3a-ac02-733686b70f90/image-6c3f215a-8978-4d04-be21-3b154e6707f6-original.png?v=63890796739&width=1024" },
    { id: 4, name: "Blue Shirt", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/22dfa559-6d3b-4123-bc28-45df6ffea2e6/image-c105566e-1608-4eef-b39e-335dc718dbd9-original.png?v=63890795886&width=1024" },
    { id: 5, name: "Green Polo", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/09b6f912-d04a-465b-a249-c3fa4ae2a58a/image-6ee3fad8-f199-45b7-9868-2797db8b76ea-original.png?v=63890793708&width=1024" },
    { id: 6, name: "Black T-shirt", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/92c2dbed-7e46-42f4-a6df-09e01ce00bd5/image-3ea75c3c-cb1c-46d4-8692-e542ba05ec34-original.jpg?v=63817968938&width=1024" },
    { id: 7, name: "White Hoodie", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/f7403b31-3ed8-4bda-8fe7-cfda992f3c85/image-c1e171eb-153c-4070-8319-de2a8ec944b9-original.jpg?v=63825576997&width=1024" },
    { id: 8, name: "Red Jacket", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/42dc333b-427c-4f3a-ac02-733686b70f90/image-6c3f215a-8978-4d04-be21-3b154e6707f6-original.png?v=63890796739&width=1024" },
    { id: 9, name: "Blue Shirt", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/22dfa559-6d3b-4123-bc28-45df6ffea2e6/image-c105566e-1608-4eef-b39e-335dc718dbd9-original.png?v=63890795886&width=1024" },
    { id: 10, name: "Green Polo", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/09b6f912-d04a-465b-a249-c3fa4ae2a58a/image-6ee3fad8-f199-45b7-9868-2797db8b76ea-original.png?v=63890793708&width=1024" },
    { id: 11, name: "Black T-shirt", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/92c2dbed-7e46-42f4-a6df-09e01ce00bd5/image-3ea75c3c-cb1c-46d4-8692-e542ba05ec34-original.jpg?v=63817968938&width=1024" },
    { id: 12, name: "White Hoodie", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/f7403b31-3ed8-4bda-8fe7-cfda992f3c85/image-c1e171eb-153c-4070-8319-de2a8ec944b9-original.jpg?v=63825576997&width=1024" },
    { id: 13, name: "Red Jacket", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/42dc333b-427c-4f3a-ac02-733686b70f90/image-6c3f215a-8978-4d04-be21-3b154e6707f6-original.png?v=63890796739&width=1024" },
    { id: 14, name: "Blue Shirt", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/22dfa559-6d3b-4123-bc28-45df6ffea2e6/image-c105566e-1608-4eef-b39e-335dc718dbd9-original.png?v=63890795886&width=1024" },
    { id: 15, name: "Green Polo", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/09b6f912-d04a-465b-a249-c3fa4ae2a58a/image-6ee3fad8-f199-45b7-9868-2797db8b76ea-original.png?v=63890793708&width=1024" },
    { id: 16, name: "Black T-shirt", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/92c2dbed-7e46-42f4-a6df-09e01ce00bd5/image-3ea75c3c-cb1c-46d4-8692-e542ba05ec34-original.jpg?v=63817968938&width=1024" },
    { id: 17, name: "White Hoodie", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/f7403b31-3ed8-4bda-8fe7-cfda992f3c85/image-c1e171eb-153c-4070-8319-de2a8ec944b9-original.jpg?v=63825576997&width=1024" },
    { id: 18, name: "Red Jacket", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/42dc333b-427c-4f3a-ac02-733686b70f90/image-6c3f215a-8978-4d04-be21-3b154e6707f6-original.png?v=63890796739&width=1024" },
    { id: 19, name: "Blue Shirt", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/22dfa559-6d3b-4123-bc28-45df6ffea2e6/image-c105566e-1608-4eef-b39e-335dc718dbd9-original.png?v=63890795886&width=1024" },
    { id: 20, name: "Green Polo", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/09b6f912-d04a-465b-a249-c3fa4ae2a58a/image-6ee3fad8-f199-45b7-9868-2797db8b76ea-original.png?v=63890793708&width=1024" },
    { id: 21, name: "Green Polo", price: "₹499", src: "https://d3ffkb7uf3bq3r.cloudfront.net/image/09b6f912-d04a-465b-a249-c3fa4ae2a58a/image-6ee3fad8-f199-45b7-9868-2797db8b76ea-original.png?v=63890793708&width=1024" },

  ];

  // Shuffle the array once per component mount
  const shuffledProducts = useMemo(() => {
    const shuffled = [...products];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);


  return (
    <section>
      <h3>For You <i className="ri-arrow-right-up-line"></i></h3>
      <div className="grid-container">
        {
          shuffledProducts.map((product) => (
            <div key={product.id + Math.random()} className='card'>
              <a href={product.src}> <img src={product.src} alt={product.name} /></a>
              <div className='info'>
                <a href={product.src}>
                  <div>
                    <p className='name'>{product.name}</p>
                    <p className='price'>{product.price}</p>
                  </div>
                </a>
                <button className='btn'  >Add to Cart <i className="ri-shopping-cart-line"></i></button>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Grid;
