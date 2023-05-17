import React,{useState} from 'react'

const Tours = ({ id, name, info, image, price,remove }) => {
   
  
    const [r, setr] = useState(false)
   
  return (
    <div>
         
          <div key={id}  className='text-black grid w-[550px]  p-5 bg-slate-400/20 shadow-xl mt-4 gap-4 rounded-xl' >
              <img className='rounded h-[300px] w-[500px]'  src={image} alt={name} />
              <div className='flex justify-between items-center'>
                  <p className='font-semibold text-2xl' >{name}</p>
                  <p className='bg-green-400 p-1 text-green-900 rounded-md'>${price}</p>
              </div>
              <p>{r ? info : `${info.substring(0, 200)}... `}<button className='text-lime-500' onClick={() => setr(!r)}> {r ? ' show less' : ' read more'}</button></p>
              <button onClick={()=>remove(id)} className='bg-red-500 rounded-md p-1 text-lg font-semibold'>Not interested</button>

          </div>
    </div>
  )
}

export default Tours
