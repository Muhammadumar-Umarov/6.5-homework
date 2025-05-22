import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo */}
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="ml-3 text-2xl font-bold">TechTeam</span>
            </div>
            
            {/* Navigation */}
            <nav className="flex justify-center space-x-8 mb-8">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Bosh sahifa</a>
              <a href="#users" className="text-gray-400 hover:text-white transition-colors">Jamoa</a>
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Xizmatlar</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Aloqa</a>
            </nav>
            
            {/* Contact */}
            <div className="flex justify-center space-x-8 mb-8 text-gray-400">
              <span>info@techteam.uz</span>
              <span>+998 90 123 45 67</span>
            </div>
            
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2024 TechTeam. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default React.memo(Footer)