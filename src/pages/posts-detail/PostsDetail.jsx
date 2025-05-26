import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'

const PostsDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    setLoading(true)
    api.get(`/posts/${id}`)
      .then(res => {
        setData(res.data)
        console.log(res.data)
      })
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="container mx-auto py-10 px-5 md:px-20 bg-[#f9f9ff] min-h-screen">
        <div className="space-y-6 animate-pulse">
          <div className="h-10 bg-gray-300 rounded w-2/3" />
          <div className="h-6 bg-gray-300 rounded w-1/4" />
          <div className="h-4 bg-gray-300 rounded w-[100px]" />

          <div className="space-y-3 mt-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full" />
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-6 w-[80px] bg-gray-300 rounded-full" />
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            <div className="h-8 w-[80px] bg-gray-300 rounded" />
            <div className="h-8 w-[80px] bg-gray-300 rounded" />
            <div className="h-8 w-[100px] bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10 px-5 md:px-20 bg-[#f9f9ff] min-h-screen">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{data?.title}</h1>
        <p className="text-sm text-gray-500">Post ID: {data?.id} | User ID: {data?.userId}</p>
        <p className="text-gray-700 leading-relaxed">{data?.body}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {data?.tags?.map((tag, i) => (
            <span
              key={i}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 text-sm text-gray-600">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded">
            👍 Likes: {data?.reactions?.likes}
          </span>
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded">
            👎 Dislikes: {data?.reactions?.dislikes}
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded">
            👁️ Views: {data?.views}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PostsDetails
