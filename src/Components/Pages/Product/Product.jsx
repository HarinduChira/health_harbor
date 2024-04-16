import React from 'react'
import Header from '../../Navigation/Header'
import Footer from '../../Navigation/Footer'
import ProductDisplay from '../ProductDisplay/ProductDisplay'

const Product = () => {

  return (
    <div>
      <Header/>
      <ProductDisplay name = {window.location.pathname.split('/')[2]}/>
      <Footer/>
    </div>
  )
}

export default Product
