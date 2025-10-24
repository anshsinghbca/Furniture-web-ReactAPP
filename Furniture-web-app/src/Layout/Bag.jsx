import React from 'react'
import Footer from '../Components/Footer'

import BagJS from '../Components/BagJS'
import Bagitem from '../Components/Bagitem'
import Header from '../Components/Header'
import Bagheader from '../Components/Bagheader'
import { useSelector } from 'react-redux'


function Bag() {

   const bagitems=useSelector(state=>state.bag)
    const items=useSelector(state=>state.items)

    const finalitems=items.filter(item=>{
      const itemIndex=bagitems.indexOf(item.id);
      return itemIndex>=0
    })
  

  return (
    <>
    <Bagheader/>
      <main className="bag-main">
        <div className="bag-box">
         
          <div className="bag-left">
            {finalitems.map(item=> <Bagitem item={item} />)}
           
          </div>

         
          <div className="bag-right">
            <BagJS />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Bag
