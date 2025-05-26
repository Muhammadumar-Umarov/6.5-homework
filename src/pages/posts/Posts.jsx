import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Posts = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    axios.get("https://dummyjson.com/posts")
      .then(res => {
        setData(res.data.posts)
        console.log(res.data.posts);
        
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="py-16 bg-gray-900 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Postlar</h2>
          <p className="text-lg text-gray-400 mt-2">So‘nggi foydalanuvchi postlari bilan tanishing</p>
        </div>

        {loading && <div className="text-center text-blue-400 text-lg">Yuklanmoqda...</div>}
        {error && <div className="text-center text-red-400">Xatolik yuz berdi: {error.message}</div>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map(post => (
            <div
              key={post.id}
              onClick={()=> navigate(`${post.id}`)}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2 h-[56px]">{post.title}</h3>
              <p className="text-sm text-gray-400 mb-4 italic">By User ID: {post.userId}</p>
              <p className="text-gray-300 text-sm line-clamp-4">{post.body}</p>

              <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition">
                Batafsil o‘qish
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Posts
