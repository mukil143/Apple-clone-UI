import React from 'react'

const Hero = () => {
  return (
    <section className='bg-[url("https://www.apple.com/v/home/ce/images/heroes/iphone-family/hero_iphone_family__fuz5j2v5xx6y_large_2x.jpg")] bg-cover bg-no-repeat bg-center h-96  md:h-96 '>
        <div className='text-center pt-5 md:pt-2 ' >
            <h1 className='text-3xl font-semibold font-sans md:text-5xl ' >iPhone</h1>
            <h2 className= 'text-xl mt-0.5 md:text-3xl'>Meet the iPhone 16 family</h2>
            <div className='mt-0.5 md:mt-2'>
                <button className=' bg-sky-500 text-white px-4 py-2 text-xs rounded-full hover:bg-sky-600 hover:cursor-pointer md:text-sm'  >Learn more</button>
                <button className=' bg-transparent text-xs border-1 border-sky-500 hover:bg-sky-500 hover:text-white hover:cursor-pointer text-sky-500 px-4 py-2  rounded-full ml-2 md:text-sm '>Shop iPhone</button>
            </div>
            <div>
                </div><p  className='text-sm font-semibold mt-5  text-transparent  bg-gradient-to-r from-[#007aff] via-[#af52de] to-[#ff3b30]   bg-clip-text md:text-xl ' >Build for Apple Intelligence</p>
        </div>

    </section>
  )
}

export default Hero