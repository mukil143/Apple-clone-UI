import React from "react";
import { FaApple } from "react-icons/fa6";
const Appletrade = () => {
  return (
    <section style={{}}  className='bg-[url("https://www.apple.com/v/home/ce/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_small.jpg")] bg-cover bg-no-repeat bg-center h-96  md:h-svh '>
        <div className=' container h-full justify-between flex flex-col   text-center py-5  ' >
            <div>

            <h1 className='text-3xl font-semibold font-sans flex justify-center items-center ' ><FaApple className="inline"/>Trade In</h1>
            <h2 className= 'text-lg mt-0.5 md:'>Upgrade and save.It's easy</h2>
            
            <div className='mt-0.5 md:mt-2'>
                <button className=' bg-sky-500 text-white px-4 py-2 text-xs rounded-full hover:bg-sky-600 hover:cursor-pointer md:'  >Get your estimate</button>
                
            </div>
            </div>
           


        </div>

    </section>
  );
};

export default Appletrade;
