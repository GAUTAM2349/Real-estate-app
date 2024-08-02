import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import SectionProcess from "./SectionProcess";


function Heading(){
    console.log("hello");

    useEffect(()=>{
        console.log("heading useEffect");
    },[])

   return (
        <h1 style={{height:'200px'}}>React Heading</h1>
    )

} 

function App(){

    return (
        <>
        <Heading/>
        <SectionProcess/>
        </>
    )
    
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
