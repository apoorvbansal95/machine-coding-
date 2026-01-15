import { useRef, useState } from "react";
import "./style.css"

function Stopwatch(){

    const [time , setTime]= useState(0)
    const stopwatchRef= useRef(0)
    const intervalRef= useRef(0)
    function handleStart(){
     stopwatchRef.current= new Date().getTime()-time
     intervalRef.current= setInterval(()=>{
        setTime(new Date().getTime()-stopwatchRef.current)
     }, 10)
    }

    function handlePause(){
     clearInterval(intervalRef.current)
    }
    function handleReset(){
    clearInterval(intervalRef.current)
    setTime(0)
    }

    function formatTime(time){
        const ms=Math.floor((time%1000)/10).toString().padStart(2, "0")
        const s= Math.floor((time/1000)%60).toString().padStart(2, "0")
        const m= Math.floor((time/(1000*60))%60).toString().padStart(2, "0")
        const h= Math.floor((time/(1000*60*60))).toString().padStart(2, "0")

        return `${h}:${m}:${s}:${ms}`
    }
    return(
        <div className="stopwatch">
            <span className="time">{formatTime(time)}</span>
            <div>
                <button  onClick={handleStart}>Start</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}

export default Stopwatch;