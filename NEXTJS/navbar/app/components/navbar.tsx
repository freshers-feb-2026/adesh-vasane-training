import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-center items-center  bg-amber-400 p-4 font-bold">
        Website
     

      <div className="flex gap-4 p-4">
        <ul className="flex gap-4">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/product">Product</a></li>
        </ul>
      </div>
       </div>
    </div>
  )
}

export default Navbar