import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Sahifa topilmadi</h2>
        <p className="text-gray-600 mb-6">
          Kechirasiz, siz qidirgan sahifa mavjud emas yoki o‘chirilgan.
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
        >
          Bosh sahifaga qaytish
        </Link>
      </div>
    </section>
    </div>
  )
}

export default NotFound 