import './foot.css'


function CopyrightSection() {
  const year = new Date().getFullYear();
  return (
    <section className='foot-container'>

        <div className="copyright">
          <i className="ri-copyright-line" /> {year} Basic.Space Inc. All rights reserved.
        </div>

    </section>
  );
}

export default CopyrightSection
