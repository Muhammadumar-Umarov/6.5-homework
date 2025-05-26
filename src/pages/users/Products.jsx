import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://dummyjson.com/product")
      .then(res => {
        setData(res.data)
        console.log(res.data);

      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <section id="products" className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-bold text-gray-800 mb-4">Mahsulotlar Egasi</h2>
          <p className="text-lg text-gray-500">Har bir mahsulot ortida ishonchli va tajribali insonlar turadi</p>
        </div>

        {loading && (
          <div className="text-center text-blue-500 text-lg font-medium">Yuklanmoqda...</div>
        )}
        {error && (
          <div className="text-center text-red-500">Xatolik yuz berdi: {error.message}</div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.products?.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center p-4">
                <img
                  src={product.images[0]}
                  alt={`${product.firstName}`}
                  className="w-full h-full  rounded-full  object-contain "
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 text-center mb-1">{product.title}</h3>
                <p className="text-sm text-gray-500 text-center italic mb-4">{product.category}</p>

                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-medium text-gray-700">💰 Narxi:</span> ${product.price}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">⭐ Reyting:</span> {product.rating}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">📦 Mavjud miqdor:</span> {product.stock} dona
                  </p>
                </div>

                <button className="mt-6 w-full bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200">
                  Xarid qilish
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>


  )
}

export default Products