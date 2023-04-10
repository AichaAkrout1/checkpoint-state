import './App.css';
import { useState } from 'react';

function App() {
  const [Person, setPerson] = useState ({
    fullName:"Aicha Akrout",
    bio:"Student",
    imgSrc:"akrout.png",
    profession:"Full Stack Js",

  })
  const [show, setshow] = useState(false);

  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const handleClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    const newIntervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    setIntervalId(newIntervalId);
  };
  return (
    <div className="Profile">
      {show ?<div className='contenair'>
      <div className='image'>
        <img src={Person.imgSrc} alt=''/>
      </div>
      <div className='user'>
        <h1>{Person.fullName}</h1>
        <h3>{Person.bio}</h3>
        <p>{Person.profession}</p>
      </div>
      </div>: null}
        <button onClick={()=> setshow(!show)}>Click here to show profile user</button>
      <div className='time'>
      <h1>The component has been rendered for {count} seconds</h1>
      <button onClick={handleClick}>
        {intervalId ? "Stop counting" : "Start counting"}
      </button>
    </div>
    </div>
  );
}

export default App;
