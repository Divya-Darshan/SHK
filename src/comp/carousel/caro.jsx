import './caro.css';

function Caro() {
  return (
    <>
      <section>
        <span className='lable'>
          Shop Our Collections <i className="fa-solid fa-wand-magic-sparkles"></i>
        </span>
        <div className="caro">
          <div className='img-container'>
            <img src="./img/mens.jpg" alt="Men's Collection" />
            <div>
              <p>
                Explore stylish and comfortable menswear designed for everyday elegance.
              </p>
            </div>
          </div>
          <div className='img-container'>
            <img src="./img/womens.jpg" alt="Women's Collection" />
            <div>
              <p>
                Discover fashion-forward outfits perfect for every occasion and mood.
              </p>
            </div>
          </div>
          <div className='img-container'>
            <img src="./img/kids.jpg" alt="Kids' Collection" />
            <div>
              <p>
                Bright, playful, and cozy styles for your little ones to shine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Caro;
