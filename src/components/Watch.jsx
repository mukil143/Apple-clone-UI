import React from 'react'
import { FaApple } from 'react-icons/fa6'
const Watch = () => {
  return (
    <section className='bg-[url("https://www.apple.com/in/home/heroes/apple-watch-family/images/hero_apple_watch_family__dktodkf3g7au_medium.jpg")] bg-cover bg-no-repeat bg-center h-96 mt-2  md:h-svh '>
        <div className='text-center pt-5 md:pt-10 ' >
            <h1 className='flex justify-center items-center text-3xl font-semibold font-sans md:text-5xl ' ><FaApple className='inline'/> Watch</h1>
            <h2 className= 'text-xl mt-0.5 md:text-3xl letter tracking-normal '>Live Healthier.Train better.Stay connected</h2>
            <div className='mt-0.5 md:mt-2'>
                <button className=' bg-sky-500 text-white px-4 py-2 text-xs rounded-full hover:bg-sky-600 hover:cursor-pointer md:text-sm'  >Learn more</button>
                <button className=' bg-transparent text-xs border-1 border-sky-500 hover:bg-sky-500 hover:text-white hover:cursor-pointer text-sky-500 px-4 py-2  rounded-full ml-2 md:text-sm '>Stop Watch </button>
            </div>
            
        </div>

    </section>
  )
}

export default Watch