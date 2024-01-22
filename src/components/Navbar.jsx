import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'

const Navbar = () => {

    const navigate = useNavigate()
    const { addToCart, getTotalItemsInCart } = useContext(ShopContext)
    const totalItems = getTotalItemsInCart()

  return (
    <div className='flex items-center justify-between py-5 px-8 bg-black'>
        <Link to="/" className='block text-[18px] font-bold text-white'>Logo</Link>
        <div className='flex items-center gap-2 cursor-pointer' onClick={() => navigate("/cart")}>
          <p className='text-white text-18px'>Shop</p>
          <p className='text-white'>[{totalItems}]</p>
        </div>
    </div>
  )
}

export default Navbar