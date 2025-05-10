import React from 'react'

const Airpods = () => {
  return (
    <section style={{}}  className='bg-[url("https://www.apple.com/v/home/ce/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_medium.jpg")] bg-cover bg-no-repeat bg-center h-96  md:h-svh '>
        <div className=' container h-full justify-end flex flex-col text-white   text-center py-5 md:pt-10 ' >
            <div>

            <h1 className='text-3xl font-semibold font-sans  ' >Airpods 4</h1>
            <h2 className= 'text-md font-semibold mt-0.5 md:'>iconic.Now supersonic</h2>
            <h2 className= 'text-md mt-0 font-semibold md:'>Available with Active Noise</h2>
            <h2 className= 'text-md mt-0 font-semibold md:'>Cancellation.<sup>1</sup></h2>
            <div className='mt-0.5 md:mt-2'>
                <button className=' bg-sky-500 text-white px-4 py-2 text-xs rounded-full hover:bg-sky-600 hover:cursor-pointer md:'  >Learn more</button>
                <button className=' bg-transparent text-xs border-1 border-sky-500 hover:bg-sky-500 hover:text-white hover:cursor-pointer text-sky-500 px-4 py-2  rounded-full ml-2 md: '>Buy</button>
            </div>
            </div>
            


        </div>

    </section>
  )
}

export default Airpods