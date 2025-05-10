import React from 'react'

const Collegemac = () => {
  return (
    <section style={{}}  className='bg-[url("https://www.apple.com/in/home/promos/college-students/images/promo_college_students__bxqdcoxgjzw2_small.jpg")] bg-cover bg-no-repeat bg-center h-96  md:h-svh '>
        <div className=' container h-full justify-between flex flex-col   text-center pt-5 md:pt-10 ' >
            <div>

            <h1 className='text-3xl font-semibold font-sans  ' >College Students</h1>
            <h2 className= 'text-lg mt-0.5 md:'>Mac and ipad.</h2>
            <h2 className= 'text-lg mt-0 md:'>Major.in any field.</h2>
            <div className='mt-0.5 md:mt-2'>
                <button className=' bg-sky-500 text-white px-4 py-2 text-xs rounded-full hover:bg-sky-600 hover:cursor-pointer md:'  >Learn more</button>
                
            </div>
            </div>
            


        </div>

    </section>
  )
}

export default Collegemac