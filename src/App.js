
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tour from './Tour';
import Loading from './Loading';
function App() {
  const [loading, setLoading] = useState(true);
  const url = 'https://course-api.com/react-tours-project';
  const [tours, setTours] = useState([]);

  const myFn = async () => {
    try {
      setLoading(true);
      let res = await fetch(url);
      let tours = await res.json();
      setTours(tours);
      setLoading(false);
    }
    catch (er) {
      console.log(er);
    }
  }
  useEffect(() => {
    myFn();
  }, [])
  const remove = (id) => {
    const x = tours.filter((a) => a.id !== id)
    setTours(x);

  };
  if(loading){
    return(
      <Loading/>
    )
  }
  if (tours.length===0) {
    return (
      <div className='grid mt-[100px] place-content-center place-items-center gap-4'>
        <p className='text-3xl'>No Tours left</p>
        <button className=' bg-orange-500 rounded-md p-2 text-white text-lg' onClick={() => myFn()}>Refresh</button>
      </div>
    )
  }
  return (
    <div className='flex justify-center items-center' >
       <Tour tour={tours} remove={remove} />
    </div>
  );
}


export default App;
