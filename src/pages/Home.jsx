import phone from "../assets/iphone.png"
import bag from "../assets/bag.png"
import fridge from "../assets/fridge.png"
import laptop from "../assets/laptop.png"
import gym from "../assets/gym.png"
import shoe from   "../assets/shoe.png"
import Product from '../context/product'

const Home = () => {

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
        <h1 className='font-bold text-[30px] text-center mt-5 mb-3'>Frank Shop</h1>
        <div className='grid grid-cols-3 gap-[50px]'>
            {products.map(product => (
                <Product data={product}/>
            ))}
        </div>
    </div>
  )
}

export default Home