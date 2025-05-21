import React from 'react'
import Products from './products/Products'
import Hero from './hero/Hero'

const Main = () => {
  return (
    <div>
        <Hero/>
        <Products/>
    </div>
  )
}

export default React.memo(Main)