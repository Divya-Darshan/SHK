import './foot.css'
import { useEffect } from 'react'

function Foot(){
    const d = new Date();
    let year = d.getFullYear();
    return(
        <>
            <footer>
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