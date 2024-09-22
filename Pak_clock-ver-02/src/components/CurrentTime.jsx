import { useEffect } from "react";
import {useState} from "react";;
function CurrentTime() {
  const[time , setTime] = useState(new Date())

  useEffect(()=>{
    console.log("current time has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return ()=>{
      clearInterval(intervalId);
      console.log('cancel the interval');
    }
  },[]);
  return (
    <p className="lead">
      this is current time :{time.toLocaleDateString()} -{' '}
      {time.toLocaleTimeString()};
    </p>
  );
}
export default CurrentTime;
