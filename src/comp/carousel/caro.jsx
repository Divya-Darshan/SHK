import './caro.css';

function Caro() {
  return (
    <>
    <section>
        <span className='lable'>Shop Our Collections <i class="fa-solid fa-wand-magic-sparkles"></i></span>
      <dev className="caro">
            <div className='img-container'>
                <img src="./img/mens.jpg" alt="Image 1" />
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, recusandae ea voluptatibus labore, nobis non libero fugiat voluptatem sequi iusto repudiandae perspiciatis facilis repellat quaerat doloremque quasi adipisci dolorem molestias.
                        </p>
                    </div>
            </div>
            <div className='img-container'>
                <img src="./img/womens.jpg" alt="Image 2" />
            </div>
            <div className='img-container'>
                <img src="./img/kids.jpg" alt="Image 3" />        
            </div>
      </dev>
    </section>
    </>
  );
}

export default Caro;
