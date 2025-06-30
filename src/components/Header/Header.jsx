import React from 'react'

const Header = () => {
  return (
   <>
     {/* Header Section */}
     <header className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-2">
            <img
              src="logo.png" // Replace with your logo image
              alt="Bistro Bliss Logo"
              className="h-12"
            />
            <h1 className="text-2xl font-semibold text-red-600 ">Bistro Bliss</h1>
          </div>
          <div className="hidden md:flex ml-90">
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700">Home</a>
            <a href="/mainabout" className="text-gray-700">About</a>
            <a href="/ourmenu" className="text-gray-700">Menu</a>
            <a href="/articalpage" className="text-gray-700">Pages</a>
            <a href="#contact" className="text-gray-700">Contact</a>
          </nav>
          </div>
          <button
           className=" border border-gray-100 px-6 py-2 rounded-2xl hover:bg-red-100 text-black hover:border-none"
         
          >
            Book A Table
          </button>
        </div>
      </header>
   </>
  )
}

export default Header