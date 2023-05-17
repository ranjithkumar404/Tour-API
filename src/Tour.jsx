import React, { useState } from 'react'
import Tours from './Tours'
const Tour = ({ tour ,remove}) => {
    return (
        <div className='mt-3 mb-4'>
            <div className='grid place-items-center '>
            <p className='text-center font-bold text-3xl'>Tours</p>
              <div className='bg-orange-500 rounded-md w-[100px] h-[5px]'></div>
            </div>
            {
                tour.map((i) => {
                   
                    return (
                        <Tours key={i.id} {...i} remove={remove} />
                    )
                })
            }
        </div>

    )
}

export default Tour
