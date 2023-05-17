import React, { useState } from 'react'

const Tour = ({ tours }) => {
    const [r, setr] = useState(false)
    return (
        <div>
            {
                tours.map((i) => {
                    const { id, name, info, image, price } = i;
                    return (
                        <div key={id} className='text-black grid w-[550px] p-5 shadow-xl mt-4 gap-4 rounded-xl' >
                            <img className='rounded' src={image} alt="" />
                            <div className='flex justify-between items-center'>
                                <p className='font-semibold text-2xl' >{name}</p>
                                <p>${price}</p>
                            </div>
                            <p>{r ? info : `${info.substring(0, 200)}... `}<button className='text-lime-500' onClick={() => setr(!r)}> {r ? ' show less' : ' read more'}</button></p>

                        </div>
                    )



                })
            }
        </div>

    )
}

export default Tour