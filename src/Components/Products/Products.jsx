import React from 'react';
import '../Products/products.css'
import doodh from '../../img/doodh.jpg';
import dahi from '../../img/dahi.jpg';
import ghee from '../../img/ghee.jpg';
import paneer from '../../img/paneer.jpg';


const Products = () => {
    return (
        <section id='product'>
            <h1>Our Products</h1>
            <div className='card-container'>

                {/* Card 1 */}
                <div class="card">
                    <img src={doodh} alt="doodh" />
                    <div class="card-content">
                        <h2>Milk</h2>
                        <p>Fresh Buffalo Milk. <br />Price: 30<span>&#8377;</span> for 500 ml</p>
                        <button className='btn'>Add to cart</button>
                        <button className='btn'>Buy Now</button>
                    </div>
                </div>

                {/* Card 2 */}
                <div class="card">
                    <img src={dahi} alt="dahi" />
                    <div class="card-content">
                        <h2>Dahi</h2>
                        <p>Fresh Dahi of buffalo's milk. <br />Price: 80<span>&#8377;</span> for 1 Kg.</p>
                        
                        <button className='btn'>Add to cart</button>
                        <button className='btn'>Buy Now</button>
                    </div>
                </div>

                {/* Card 3 */}
                <div class="card">
                    <img src={ghee} alt="ghee" />
                    <div class="card-content">
                        <h2>Shuddh Desi Ghee</h2>
                        <p>Pure ghee of buffalo's milk. <br />Price: 800<span>&#8377;</span> for 1 Kg.</p>
                        <button className='btn'>Add to cart</button>
                        <button className='btn'>Buy Now</button>
                    </div>
                </div>

                {/* Card 4 */}
                <div class="card">
                    <img src={paneer} alt="paneer" />
                    <div class="card-content">
                        <h2>Paneer</h2>
                        <p>Fresh high protein paneer . <br />Price: 280<span>&#8377;</span> for 1 Kg. </p>
                        <button className='btn'>Add to cart</button>
                        <button className='btn'>Buy Now</button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Products;