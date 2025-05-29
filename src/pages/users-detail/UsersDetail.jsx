import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../api'

const UsersDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    setLoading(true)
    api.get(`/users/${id}`)
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
          <div className="h-10 bg-gray-300 rounded w-3/4" /> {/* Name */}
          <div className="h-6 bg-gray-300 rounded w-1/2" />  {/* Age */}
          <div className="h-6 bg-gray-300 rounded w-1/3" />  {/* Gender */}
          <div className="h-6 bg-gray-300 rounded w-2/3" />  {/* Email */}
          <div className="h-6 bg-gray-300 rounded w-1/2" />  {/* Phone */}

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
    <div className="container mx-auto py-10 px-5 md:px-20 bg-[#f9f9ff] min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Foydalanuvchi rasmi */}
        <div>
          <img
            src={data?.image}
            alt={`${data?.firstName} ${data?.lastName}`}
            className="w-full max-w-md mx-auto rounded-xl shadow-md border"
          />
        </div>

        {/* Foydalanuvchi ma'lumotlari */}
        <div className="space-y-4 text-gray-800">
          <h2 className="text-4xl font-bold">
            {data?.firstName} {data?.lastName}
          </h2>

          <p className="text-lg text-gray-600">
            <strong>Yoshi:</strong> {data?.age}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Jinsi:</strong> {data?.gender}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Email:</strong> {data?.email}
          </p>
          <p className="text-lg text-gray-600">
            <strong>Telefon:</strong> {data?.phone}
          </p>

          {data?.address && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-700 mb-1">📍 Manzil:</h4>
              <p className="text-gray-600">
                {data.address.address}, {data.address.city}, {data.address.state}
              </p>
            </div>
          )}

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition duration-200">
            Xabar yozish
          </button>
        </div>
      </div>
    </div>
  )
}

export default UsersDetail
