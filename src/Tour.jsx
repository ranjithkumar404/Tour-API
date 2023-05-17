import React, { useState } from 'react'
import Tours from './Tours'
const Tour = ({ tour }) => {
    return (
        <div>
            <p>Tours</p>
            {
                tour.map((i) => {
                   
                    return (
                        <Tours key={i.id} {...i} />
                    )



                })
            }
        </div>

    )
}

export default Tour
