import React from 'react'

const Macpro = () => {
  return (
     <section style={{}}  className='bg-[url("https://www.apple.com/v/home/ce/images/promos/macbook-pro/promo_macbookpro_announce__gdf98j6tj2ie_medium_2x.jpg")] bg-cover bg-no-repeat bg-center h-96 text-white md:h-svh '>
        <div className=' container h-full justify-between flex flex-col   text-center py-5 md:pt-10 ' >
            <div>

            <h1 className='text-3xl font-semibold font-sans  ' >Macbook Pro</h1>
            <h2 className= 'text-lg mt-0.5 md:'>A work of smart</h2>
           
            <div className='mt-0.5 md:mt-2'>
                <button className=' bg-sky-500 text-white px-4 py-2 text-xs rounded-full hover:bg-sky-600 hover:cursor-pointer md:'  >Learn more</button>
                <button className=' bg-transparent text-xs border-1 border-sky-500 hover:bg-sky-500 hover:text-white hover:cursor-pointer text-sky-500 px-4 py-2  rounded-full ml-2 md: '>Buy</button>
            </div>
            </div>
            <div className=''>
                <p  className='text-sm font-semibold   text-transparent  bg-gradient-to-r from-[#007aff] via-[#af52de] to-[#ff3b30]   bg-clip-text md:text-xl  ' >Build for Apple Intelligence</p>
            </div>


        </div>

    </section>
  )
}

export default Macpro