// import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [bgColor, setBgColor] = useState('lightblue');
  

//     useEffect(() => {
//     document.body.style.backgroundColor = bgColor;
//   }, [bgColor]); 
//   return (
//     <>
//       <h1 class="text-3xl font-bold underline">
//     Hello world!
//   </h1>
//   <div className='gap-3 bg-transparent p-5 flex flex-row items-center justify-center rounded-3xl'>
//     {/* <button onClick={color(red)}></button> */}
//      <button className="rounded-full px-4 py-1 outline-none"  style={{justifyContent: 'center'}} onClick={()=> setBgColor('lightgreen')}>green</button>
//      <button onClick={()=> setBgColor('red')}>red</button>
//      <button onClick={()=> setBgColor('blue')}>blue</button>
//      <button onClick={()=> setBgColor("yellow")}>yellow</button>
//      <button onClick={()=> setBgColor('pink')}>pink</button>
//      <button onClick={()=> setBgColor('purple')}>purple</button>
//      <button onClick={()=> setBgColor('black')}>black</button>
//      <button onClick={()=> setBgColor("pink")}>pink</button>
     

//   </div>
 
 
//     </>
//   )
// }

// export default App


import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color, height: "100vh", width: "100vw"}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App

