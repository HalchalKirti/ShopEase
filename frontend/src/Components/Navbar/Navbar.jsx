import React, { useContext, useState,useRef } from 'react' 
import './Navbar.css'
import cart from '../Assets/cart_icon.png'
import logo from '../Assets/logo.png'
import {Link} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'
const Navbar=()=>{
    const[menu,setMenu] = useState("shop");
    const {getTotalCartItem} = useContext(ShopContext);
    const menuRef = useRef();
    const dropdown_toggle=(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
    //when we click on this image then it will give open classname to img or remove it
    }
    return (<div className='navbar'>
        {localStorage.getItem('auth-token')?
        <button className="butt" onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:
        <Link to='/login'>
        <button className="butt">Login</button>
        </Link> }
    <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
    </div>
    <img src={nav_dropdown} className='navdropdown' alt="" />
    <ul ref ={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to ='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration: 'none'}} to ='/women'>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration: 'none'}} to ='/mens'>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration: 'none'}}to ='/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
        
    </ul>
    <div className="nav-login-cart">
       
        <Link to='/cart'>
        <img src={cart} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
    </div>
    </div>)
   
}
export default Navbar;
