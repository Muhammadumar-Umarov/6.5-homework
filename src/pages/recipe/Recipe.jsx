import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Recipe = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://dummyjson.com/recipe")
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
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[40px] font-bold text-gray-800">Retseptlar Mualliflari</h2>
          <p className="text-lg text-gray-500 mt-3">Har bir retsept ortida haqiqiy shaxs va tajriba bor</p>
        </div>

        {loading && <div className="text-center text-blue-500 text-lg font-medium">Yuklanmoqda...</div>}
        {error && <div className="text-center text-red-500">Xatolik yuz berdi: {error.message}</div>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data?.recipes?.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-cover object-center transition-transform duration-300 hover:scale-105"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-2xl font-bold text-gray-800 mb-2 line-clamp-1">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {item.desc || "Mazali va foydali taom! Tayyorlash oson, ta’mi ajoyib."}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>⏱ {`${item.cookTimeMinutes} daqiqa` }</span>
                  <span>🔥 {`${item.caloriesPerServing} kcal`}</span>
                  <span>⭐ {item.rating || "4.5"}</span>
                </div>

                <button className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition duration-200">
                  Retseptni ko‘rish
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(Recipe)
