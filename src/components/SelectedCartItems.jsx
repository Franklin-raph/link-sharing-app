import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'

export default function SelectedCartItems(props) {

    const {id, img, name, price} = props.data
    const { addToCart, removeFromCart, cartItems } = useContext(ShopContext)

  return (
    <div>
        <div className='flex items-center justify-start flex-col'>
            {!cartItems && <>Empty Cart</>}
            <img src={img} alt="" className='w-[30%]' />
            <p className='font-bold'>{name}</p>
            <p>${price}</p>
            <div className='flex items-center justify-between'>
                <button className='bg-black rounded-full py-1 px-3 text-white text-[13px] mt-2' onClick={() => removeFromCart(id)}>
                    -
                </button>
                <p className='px-10'>{cartItems[id]}</p>
                <button className='bg-black rounded-full py-1 px-3 text-white text-[13px] mt-2' onClick={() =>  addToCart(id)}>
                    +
                </button>
            </div>
            <p className='font-bold'>${price * Number(cartItems[id])}</p>
        </div>
    </div>
  )
}
