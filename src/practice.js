import React,{useState} from "react";


function Practice(){
    setInterval(latestTime,1000)

    var date=new Date()
let time=date.toLocaleTimeString();
    const [times,getTime]= useState(time)
    function latestTime(){
        var date=new Date()
let newtime=date.toLocaleTimeString();
        getTime(newtime)
    }
    return(
        <div>
        <h1>{times}</h1>
        <button onClick={latestTime}>GET TIME</button>
        </div>
    )
}
export default Practice;