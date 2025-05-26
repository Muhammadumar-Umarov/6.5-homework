import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'

const ProductDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [image, setImage] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    setLoading(true)
    api
      .get(`/products/${id}`)
      .then((res) => {
        setData(res.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <div className="container mx-auto grid grid-cols-2 gap-10 h-screen p-10">
        <div className="animate-pulse">
          <div className="bg-gray-300 rounded-lg w-full h-[400px]" />
          <div className="flex gap-3 mt-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-[100px] h-[80px] bg-gray-300 rounded" />
            ))}
          </div>
        </div>
        <div className="pt-[80px] animate-pulse">
          <div className="bg-gray-300 h-10 w-3/4 mb-4 rounded" />
          <div className="bg-gray-300 h-8 w-1/4 mb-2 rounded" />
          <div className="bg-gray-300 h-6 w-1/3 rounded" />
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto gap-10 p-10">
      <div>
        <img
          className="max-w-[600px] w-full rounded-xl shadow-md"
          src={data?.images[image]}
          alt={data?.title}
        />
        <div className="flex gap-3 mt-4 overflow-x-auto">
          {data?.images?.map((item, index) => (
            <img
              onClick={() => setImage(index)}
              className={`w-[100px] h-[80px] object-cover rounded-md cursor-pointer border-2 ${image === index ? 'border-blue-500' : 'border-transparent'}`}
              src={item}
              alt={`img-${index}`}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className="pt-8 md:pt-[80px] flex flex-col justify-start space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">{data?.title}</h2>
        <p className="text-2xl font-semibold text-green-600">${data?.price}</p>
        <p className="italic text-gray-500">Brend: {data?.brand}</p>
        <p className="text-gray-700 leading-relaxed">{data?.description}</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg w-fit transition duration-200">
          Savatga qo‘shish
        </button>
      </div>
    </div>
  )
}

export default React.memo(ProductDetail)
