import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import Grid from '../grid/ForU-grid'
import Foot from '../foot/foot';
import './page.css';

function Page() {
  const { index } = useParams();
  const productIndex = parseInt(index, 10);


  const product = !isNaN(productIndex) && productIndex >= 0 && productIndex < products.length
    ? products[productIndex]
    : products[0];

  return (
    <>
      <section className="product-page">
        <div className="product-images">
          <img src={product.src} alt={product.name} />
        </div>
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">{product.price}</p>
          <p className="product-description">
            This is a high quality {product.name} from Harikrishna Textiles.
          </p>
          <button className="btn btn-add-to-cart">Add to Cart</button>
          <button className="btn btn-buy-now">Buy Now</button>
        </div>
      </section>

      <Grid />
      <Foot />
    </>
  );
}

export default Page;
