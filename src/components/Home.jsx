import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

function Home() {

  const [data,setData]=useState([]);

  useEffect(()=>{

    axios
      .get("https://strangerthingsquotes.shadowdev.xyz/api/quotes/10")
      .then(res=>setData(res.data))
      .catch(err=>console.log(err));

  },[]);

  return(
    <div className="container">
      {data.map((obj,index)=>(
        <div className="home" key={index}>
          <h2>{obj.author}</h2>
          <p>"{obj.quote}"</p>
        </div>
      ))}
    </div>
  );
}

export default Home;