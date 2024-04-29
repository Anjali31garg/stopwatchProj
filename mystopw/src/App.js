import React,{useState, useEffect} from 'react';
import './App.css';


function App() {
  const[seconds, setSeconds] =  useState(0);
  const[active,setActive] = useState(false);

  const formatTime = (calculatedTime) =>{
    const mins = Math.floor(calculatedTime/60);
    const sec = calculatedTime%60;
    return `${mins}:${sec<10 ? "0":""}${sec}`;
  }

  const startW = ()=>{
    setActive(!active);
  }

  const resetwatch = () =>{
    setActive(false);
    setSeconds(0);
  }

  useEffect(()=>{
    // this helps in avoiding issues like starting multiple intervals unintentionally due to frequent re-renders;
    let intervalId;

    if(active){
      intervalId = setInterval(()=>{
        setSeconds((prev)=>prev+1);
      },1000);
    }

    return () => clearInterval(intervalId);

  },[active])

  return (
    <div className="App">
     <h1>Stopwatch</h1>
     <p>Time: {formatTime(seconds)}</p>
     <button onClick={startW}>{active ?"Stop":"Start"}</button>
     <button onClick={resetwatch}>Reset</button>
    </div>
  );
}

export default App;
