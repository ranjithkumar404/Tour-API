import React, { useState } from 'react'
import Tours from './Tours'
const Tour = ({ tours }) => {
    return (
        <div>
            {
                tours.map((i) => {
                    const { id, name, info, image, price } = i;
                    return (
                        <Tours key={id} {...tours}/>
                    )



                })
            }
        </div>

    )
}

export default Tour
