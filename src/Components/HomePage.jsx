import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const HomePage = () => {
  const [e,setE]= useState([])
  // console.log(e);
   useEffect(()=>{
     axios.get("http://localhost:3001/data").then((data)=>{
       console.log(data.data)
      setE(data.data)
     })
   },[])
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "175px",
        }}
      >
        {/* Iterate over products and show links */}
        {e.map((el) => {
          return <Link to={`/products/${el.id}`}>{/* Show product image and name */ }<img src={el.img}/> {el.name}</Link>;
        })}
      </div>
    </>
  );
};
