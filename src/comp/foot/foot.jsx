import './foot.css'
import { useEffect } from 'react'

function Foot(){
    const d = new Date();
    let year = d.getFullYear();
    return(
        <>
            <footer>
                <h3>Our Location <i className="ri-map-pin-line" /></h3>
                <section className='iframe-container'>

                    <iframe className='loco' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.5570632162044!2d80.18414107604575!3d13.190304210043742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527ca06318406f%3A0x6172bd3651734ff0!2sSri%20Harikrishna%20Textiles!5e0!3m2!1sen!2sin!4v1754321136996!5m2!1sen!2sin' />
                        
                </section>

                <section className='foot-container'>
                    <div className='foot-card'>
                        
                                    
                                    <div className="tip">

                                            <div className='icon'><i class="ri-refresh-line"></i></div>
                                            <div>Obsessively Curated</div> 
                                        
                                    </div>
        <p>Shop the new luxury featuring the best of the best in Design, Style, and Art.</p>
                        
                    </div>

                    <div className='foot-card'>
                        
                                    <div className="tip">
                                        <div className='icon'><i class="ri-checkbox-circle-line"></i></div>
                                        <div>Sellers You Can Trust</div>
                                        </div>
                             <p>Access our exclusive community of trusted sellers, hand-picked by our team.</p>
                        
                    </div>

                    <div className='foot-card'>
                        
                                     <div className="tip">
                                        <div className='icon'><i class="ri-inbox-unarchive-line"></i></div>
                                        <div>Shipping Tailored to You </div>
                                        </div>
        <p>We take extra care with your orders with custom shipping options and premium, white glove service offerings.</p>
                        
                    </div>

                </section>




                <section className='foot-container'>
                        <div className="foot-card">
                                <div className="copyright">
                                 <i class="ri-copyright-line" /> {year} Basic.Space Inc. All rights reserved.
                                </div>
                        </div>

                </section>


            </footer>

        </>
    )



}

export default Foot