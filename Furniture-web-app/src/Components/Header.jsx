import React, { useState } from 'react'
import { IoPerson } from "react-icons/io5";
import { GiHeartBeats } from "react-icons/gi";
import { IoBagAdd } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const bag= useSelector(Store=>Store.bag);
  console.log(bag);
  

  return (
    <>
     
      <div className="modal fade" id="pakhandu">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">form submit</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div className="modal-body">
              <form className="banerForm">
                <h4>Submit your Profile</h4>
                <p>secure and private data</p>

                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <div className="input-group">
                    <span className="input-group-text">+91</span>
                    <input type="number" className="form-control" placeholder="phone" />
                  </div>
                </div>

                <div className="mb-3">
                  <button className="regiBtn">Register Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

     
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
                    {bag.length}
                  </span>
                </p>
              </div>
            </Link>
            </div>
        
      </nav>

      
      <div className="slider">
        <div className="text-on-image">𝓕𝓾𝓻𝓷𝓲𝓸</div>
        <div className="slide-img">
          <img src="/images/img1.jpeg" alt="slide1" />
          <img src="/images/img2.jpeg" alt="slide2" />
        </div>
      </div>

      <p className="mather">
        you are on 𝓕𝓾𝓻𝓷𝓲𝓸 .com, You can also shop on 𝓕𝓾𝓻𝓷𝓲𝓸 India for millions of products
      </p>
    </>
  );
}

export default Header;
