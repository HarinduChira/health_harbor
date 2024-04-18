import React from 'react'
import Header from '../../Navigation/Header'
import Footer from '../../Navigation/Footer'
import ProductDisplay from '../ProductDisplay/ProductDisplay'

const Product = () => {

  return (
    <div>
      <Header logStatus={true}/>
      <ProductDisplay name = {window.location.pathname.split('/')[2]}/>
      <Footer/>
    </div>
  )
}

export default Product
