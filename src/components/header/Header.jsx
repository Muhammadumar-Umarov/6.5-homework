import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./header.css"
const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to={"/"}>
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">TechTeam</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink className={"header__link text-gray-900 hover:text-blue-600 font-medium transition-colors"} to={"/"}>Bosh sahifa</NavLink>
            <NavLink className={"header__link text-gray-900 hover:text-blue-600 font-medium transition-colors"} to={"/recipe"}>Retsept</NavLink>
            <NavLink className={"header__link text-gray-900 hover:text-blue-600 font-medium transition-colors"} to={"/users"}>Mahsulotlar</NavLink>
            <NavLink className={"header__link text-gray-900 hover:text-blue-600 font-medium transition-colors"} to={"/posts"}>Postlar</NavLink>
          </nav>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
            <Link to={"/login"}>Login</Link>
          </button>
        </div>
      </div>
    </header>
  )
}

export default React.memo(Header)