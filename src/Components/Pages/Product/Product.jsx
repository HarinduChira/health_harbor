import React from 'react'
import Header from '../../Navigation/Header'
import Footer from '../../Navigation/Footer'
import ProductDisplay from '../ProductDisplay/ProductDisplay'

const Product = () => {

  return (
    <div>
      <Header logStatus={true}/>
      <ProductDisplay name = {decodeURIComponent(window.location.pathname.split('/').pop())}/>
      <Footer/>
    </div>
  )
}

export default Product
