import React from 'react'
import Productmac from './Productmac.jsx'
import Collegemac from './Collegemac.jsx'
import Ipadair from './Ipadair.jsx'
import Macpro from './Macpro.jsx'
import Airpods from './Airpods.jsx'
import Appletrade from './Appletrade.jsx'

const Productgrid = () => {
  return (
    <section className='mt-2 grid  md:grid-cols-2 gap-2 bg-white ' >
        <Productmac/>
        <Collegemac/>
        <Ipadair/>
        <Macpro/>
        <Airpods/>
        <Appletrade/>
    </section>
  )
}

export default Productgrid