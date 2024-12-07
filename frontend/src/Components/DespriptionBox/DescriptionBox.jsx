import React from "react";
import './DescriptionBox.css';


const DescriptionBox = () => {
  return (
   <div className="descriptionbox">
    <div className="discriptionbox-avigator">
        <div className="discriptionbox-nav-box">Description</div>
       <div className='discriptionbox-nav-box-fade'>Reviews(120)</div>

    </div>
    <div className="discriptionbox-discription">
        <p>A jacket is a versatile outerwear garment 
            designed to keep you warm and stylish. Typically made from various materials like wool, leather, or synthetic fabrics, jackets come in different styles: bomber jackets, pea coats, puffer jackets, and more. They’re like the Swiss Army knives of clothing—functional,
            fashionable, and ready for any weather!</p>
            <p>Now, if you’ll excuse me, I’m off to find my own jacket.
             It’s getting chilly in here! 😄</p>
    </div>
   </div>
  );
};

export default DescriptionBox;
