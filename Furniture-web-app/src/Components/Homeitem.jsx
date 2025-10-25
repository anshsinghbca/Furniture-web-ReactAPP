import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bagActions } from "../Store/bagSlice";
import "bootstrap/dist/css/bootstrap.min.css";

function Homeitem({ item }) {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToBag = () => {
    dispatch(bagActions.addTobag(item.id));
    setShowAlert(true);

    
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item" />

        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>

        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>

        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        <button className="btn-add-bag" onClick={handleAddToBag}>
          Add to Bag
        </button>

        
        {showAlert && (
          <div className="alert alert-success mt-3" role="alert">
            Item added to bag successfully!
          </div>
        )}
      </div>
    </>
  );
}

export default Homeitem;
