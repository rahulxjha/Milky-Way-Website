import React from 'react';
import '../Products/products.css'
import doodh from '../../img/doodh.jpg';
import dahi from '../../img/dahi.jpg';
import ghee from '../../img/ghee.jpg';
import paneer from '../../img/paneer.jpg';


const Products = () => {
    return (
        <div class="card">
            <img src={doodh} alt="doodh" />
            <div class="card-content">
                <h2>Milk</h2>
                <p>Fresh Buffalo Milk.</p>
            </div>

        </div>
        
    )
}

export default Products;