import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {

  
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
     <div className="productdisplayleft"> 
    <div className="productimage_list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
    </div>
     <div className="productdispaly-img">
     <img className = 'productdisplay-main-img' src={product.image} alt="" />
     </div>

     </div>
     <div className="productdisplayright">
     <h1>{product.name}</h1>
     <div className="productdisplayright-star">
        
     <img src={star_icon} alt="" />
     <img src={star_icon} alt="" />
     <img src={star_icon} alt="" />
     <img src={star_icon} alt="" />
     <img src={star_dull_icon} alt="" />

      <p>(122)</p>          

     </div>
     <div className="productdisplay-right-prices">
       <div className="productdisplay-price-old">${product.old_price}</div> 
       <div className="productdisplay-price-new">${product.new_price}</div> 

     </div>
 <div className="productdisplay-right-discription">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quasi dolor, neque quod eveniet, quibusdam dicta quo quidem amet quia beatae rerum recusandae nisi, corrupti ipsa numquam voluptates placeat nobis?

 </div>
 <div className="productdisplay-right-size">
    <h1>Select size</h1>
    <div className="productdisplay-sizes">
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XL</div>
        <div>XXL</div>
    </div>
 </div>
 <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
 <p className='Productdisplay_right_category'><span>Category:</span>Women,T-Shirt, Crop Top</p>
 <p className='Productdisplay_right_category'><span>Tags:</span>Modern,Latest, Stylish</p>
 <p className='Productdisplay_right_category'><span>Category:</span>Women,T-Shirt, Crop Top</p>

     </div>

    </div>
  )
}

export default ProductDisplay;