import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'

const RecipeDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    setLoading(true)
    api.get(`/recipe/${id}`)
      .then(res => {
        setData(res.data)
        console.log(res.data)
      })
      .finally(() => setLoading(false))
  }, [id])

 if (loading) {
  return (
    <div className="container mx-auto py-10 px-5 md:px-20 bg-[#f9f9ff] min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start animate-pulse">
        <div>
          <div className="w-full max-w-md mx-auto h-[400px] bg-gray-300 rounded-xl shadow-md" />
        </div>

        <div className="space-y-5">
          <div className="h-10 bg-gray-300 rounded w-3/4" /> 
          <div className="h-6 bg-gray-300 rounded w-1/2" />  
          <div className="h-6 bg-gray-300 rounded w-1/3" />  
          <div className="h-6 bg-gray-300 rounded w-2/3" />  
          <div className="h-6 bg-gray-300 rounded w-1/2" />  

          <div className="mt-4 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-1/4" />
            <div className="h-6 bg-gray-300 rounded w-3/4" />
          </div>

          <div className="h-10 bg-gray-300 rounded w-[180px] mt-6" />
        </div>
      </div>
    </div>
  )
}


  return (
    <div className="container mx-auto py-10 px-5 md:px-20 bg-[#fffaf4] min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <img src={data.image} alt={data.name} className="w-full rounded-xl shadow-md" />
        </div>

        <div className="space-y-4 text-[#4b2e1f]">
          <h1 className="text-4xl font-bold">{data.name}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-white">
            {data.tags.map((tag, i) => (
              <span key={i} className="bg-orange-400 px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 text-sm mt-3 text-gray-700">
            <p><strong>Kategoriya:</strong> {data.mealType.join(', ')}</p>
            <p><strong>Osonlik darajasi:</strong> {data.difficulty}</p>
            <p><strong>Kaloriya:</strong> {data.caloriesPerServing} kcal</p>
            <p><strong>Porsiya:</strong> {data.servings}</p>
            <p><strong>Reyting:</strong> ⭐ {data.rating} ({data.reviewCount} sharhlar)</p>
          </div>

          <div className="flex gap-6 text-sm mt-2 text-gray-600">
            <p><strong>Tayyorlash:</strong> {data.prepTimeMinutes} daqiqa</p>
            <p><strong>Pishirish:</strong> {data.cookTimeMinutes} daqiqa</p>
          </div>

          <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200">
            Retseptni saqlash
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[#4b2e1f] mb-4">🧄 Ingredientlar</h2>
        <ul className="list-disc pl-6 text-gray-800 space-y-1">
          {data.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-[#4b2e1f] mb-4">🍳 Tayyorlash bosqichlari</h2>
        <ol className="list-decimal pl-6 text-gray-800 space-y-2">
          {data.instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default RecipeDetail
