import React,{useEffect,useState} from "react";
import "./Intro.css";

function Intro(){

  const text="STRANGER THINGS";
  const [display,setDisplay]=useState("");

  useEffect(()=>{
    let i=0;

    const typing=setInterval(()=>{
      setDisplay(text.slice(0,i+1));
      i++;

      if(i===text.length)
        clearInterval(typing);

    },120);

    return()=>clearInterval(typing);

  },[]);

  return(
    <div className="intro-container">
      <h1 className="intro-text">{display}</h1>
    </div>
  );
}

export default Intro;