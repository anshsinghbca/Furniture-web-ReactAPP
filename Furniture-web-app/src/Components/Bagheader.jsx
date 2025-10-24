import React from 'react'
import  { useState } from 'react'
import { IoPerson } from "react-icons/io5";
import { GiHeartBeats } from "react-icons/gi";
import { IoBagAdd } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Bagheader() {
   const [menuOpen, setMenuOpen] = useState(false);
   const bag= useSelector(Store=>Store.bag);
     console.log(bag);
  return (
   <>
    <nav className="navbar">
           <div className="nav1">
             <Link to="/" style={{ color: "black", textDecoration: "none" }}>
               <h1 className="logo">𝓕𝓾𝓻𝓷𝓲𝓸</h1>
             </Link>
   
             <div className={`nav-links ${menuOpen ? "open" : ""}`} style={{backgroundColor:""}} >
             
               <p>Chairs</p>
               <p>Sofa</p>
               <p>Bed</p>
               <p>Wardrobes</p>
               <p>Dining Chairs</p>
               <p>Kids Furnitures</p>
   
              
   
   
   
              
             </div>
   
             {/* Hamburger icon */}
             <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
               {menuOpen ? <FaTimes /> : <FaBars />}
             </div>
   
            
              <div id="inp">
                 <input type="text" placeholder="search for product" id="search-input" />
                 <i className="fa-solid fa-magnifying-glass" id="ansh"></i>
               </div>
               
               <div className="profile">
                 <IoPerson  className='chullmull'/>
                 <p id="pro" data-bs-toggle="modal" data-bs-target="#pakhandu">Profile</p>
               </div>
               
               <div className="wish">
                 <GiHeartBeats   className='chullmull' />
                 <p id="wishh">Wishlist</p>
               </div>
                <Link to="/bag" style={{ color: "black", textDecoration: "none" }}>
                 <div className="bag">
                   <IoBagAdd   className='chullmull'/>
                   <p id="bagg">
                     Bag
                     <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                       
                     </span>
                   </p>
                 </div>
               </Link>
               </div>
           
         </nav>
   
   
   </>
  )
}

export default Bagheader