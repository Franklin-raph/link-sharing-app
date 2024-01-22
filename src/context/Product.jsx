import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'

const Product = (props) => {

    const {id, img, name, price} = props.data
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

  return (
    <div>
        <div>
            <div className='flex items-center justify-start flex-col'>
                <img src={img} alt="" className='w-[30%]' />
                <p className='font-bold'>{name}</p>
                <p>${price}</p>
                <button className='bg-black rounded-full py-1 px-3 text-white text-[13px] mt-2' onClick={() => addToCart(id)}>
                    Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Product