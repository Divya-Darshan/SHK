import './grid.css';
import { useMemo } from 'react';
import { products } from '../../data/products';

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
        {
          shuffledProducts.map((product) => (
            <div key={product.id} className='card'>
              <a href={product.anchor}> <img src={product.src} alt={product.name} /></a>
              <div className='info'>
                <a href={product.anchor}>
                  <div>
                    <p className='name'>{product.name}</p>
                    <p className='price'>{product.price}</p>
                  </div>
                </a>
                <button className='btn'>Add to Cart <i className="ri-shopping-cart-line"></i></button>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Grid;
