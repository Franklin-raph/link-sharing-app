import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import SelectedCartItems from "../components/SelectedCartItems"
import phone from "../assets/iphone.png"
import bag from "../assets/bag.png"
import fridge from "../assets/fridge.png"
import laptop from "../assets/laptop.png"
import gym from "../assets/gym.png"
import shoe from   "../assets/shoe.png"
import Product from '../context/product'
import { useNavigate } from "react-router-dom"

const Cart = () => {

  const { cartItems, getTotalCartAmont } = useContext(ShopContext)
  const totalAmount = getTotalCartAmont()

  const navigate = useNavigate()

  const products = [
    {
        id:1,
        name:"Iphone",
        price:999,
        img:phone
    },
    {
        id:2,
        name:"Bag",
        price:99,
        img:bag
    },
    {
        id:3,
        name:"Gym",
        price:399,
        img:gym
    },
    {
        id:4,
        name:"Fridge",
        price:199,
        img:fridge
    },
    {
        id:5,
        name:"Laptop",
        price:1999,
        img:laptop
    },
    {
        id:6,
        name:"Shoe",
        price:90,
        img:shoe
    },
]

  return (
    <div className='my-[4rem]'>
        <h1 className='font-bold text-[30px] text-center mt-5 mb-3'>Your Cart Items</h1>
        {totalAmount === 0 && <div className="font-bold text-center my-10">Empty Cart</div>}
        <div className='grid grid-cols-3 gap-[50px]'>
            {products.map(product => {
              if(cartItems[product.id] !== 0 ){
                return <SelectedCartItems data={product}/>
              }
            })}
        </div>
        {totalAmount &&
          <div className="flex items-center justify-center flex-col mt-10">
            <p className="mb-3">Subtotal: ${totalAmount}</p>
            <div className="flex items-center gap-7">
              <button className="bg-black text-white py-2 px-4 rounded-sm" onClick={() => navigate("/")}>Continue Shoping</button>
              <button className="bg-black text-white py-2 px-4 rounded-sm" onClick={() => alert("You are a very stupid boy Glory Come checkout make i see you")}>Checkout</button>
            </div>
          </div>
        }
    </div>
  )
}

export default Cart