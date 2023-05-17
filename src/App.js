
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tour from './Tour';

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
  return (
    <div className='flex justify-center items-center' >
      {loading ? <p>Loading...</p> : <Tour tour={tours}/>}
    </div>
  );
}


export default App;
