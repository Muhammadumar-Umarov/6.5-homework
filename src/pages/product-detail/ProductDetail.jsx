import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'

const ProductDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => {
        setData(res.data)
        console.log(res.data);
        
      })

  }, [])


  return (
    <div className='grid grid-cols-2 h-screen '>
      <div>
        <img className='max-w-[600px] w-full' src={data?.images[0]} alt="" />
      </div>
      <div className='pt-[40px]'>
        <h2 className='text-[36px] font-semibold'>{data?.title}</h2>
        <p className='text-[24px] font-bold'>{data?.price}$</p>
        <p className='italic'>{data?.brand}</p>
      </div>
    </div>
  )
}

export default React.memo(ProductDetail)