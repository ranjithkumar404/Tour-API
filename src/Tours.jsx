import React,{useState} from 'react'

const Tours = ({ id,name, info, image, price }) => {
    const [r, setr] = useState(false)
    
  return (
    <div>
         
          <div key={id}  className='text-black grid w-[550px]  p-5 shadow-xl mt-4 gap-4 rounded-xl' >
              <img className='rounded' src={image} alt={name} />
              <div className='flex justify-between items-center'>
                  <p className='font-semibold text-2xl' >{name}</p>
                  <p>${price}</p>
              </div>
              <p>{r ? info : `${info.substring(0, 200)}... `}<button className='text-lime-500' onClick={() => setr(!r)}> {r ? ' show less' : ' read more'}</button></p>

          </div>
    </div>
  )
}

export default Tours
