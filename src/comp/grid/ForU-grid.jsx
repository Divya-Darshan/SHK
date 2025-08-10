import { products } from '../../data/products';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './grid.css'

function Grid() {
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
        {shuffledProducts.map((product) => {
          const index = products.findIndex(p => p.src === product.src);
          return (
            <div key={product.id + '-' + index} className='card'>
              {/* Pass index as param in URL */}
              <Link to={`/product/${index}`}>
                <img src={product.src} alt={product.name} />
              </Link>
              <div className='info'>
                <Link to={`/product/${index}`}>
                  <div>
                    <p className='name'>{product.name}</p>
                    <p className='price'>{product.price}</p>
                  </div>
                </Link>
                <button className='btn'>Add to Cart <i className="ri-shopping-cart-line"></i></button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default Grid;
