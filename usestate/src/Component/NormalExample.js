import React from 'react'
import { useState } from 'react'

const NormalExample = () => {

  const counterStyle = {
    padding: '10px',
    fontSize: '44px',
    textAlign: 'center',
    margin: '5px',
    backgroundColor:'lightcoral',
    color: 'darkblue',
    border: '2px solid',
    borderColor: 'blue',
    borderRadius: '10px',
  };

 
  const number={
    color:'black',
    margin:'100px 700px 1px'
  }

  const btn={
    height:'100px',
    width:'150px',
    border:'1px solid black',
    fontSize: '24px'
  }

        
        /* The Use State Hook function Start form Here
        num --> This is a Variable
        setnum --> This is a Function name
        useState() --> useState Hold the Intial Value/String. we can set initial value in useState('any intial value')\
        
        Example--> const[num , setnum] = useState(1);
        */
        const[num , Setnum] = useState(1);

        function inc()
        {
            Setnum(num + 1);
        }
        function dec()
        {
            Setnum(num - 1);
        }

  return (
    <div style={{ textAlign: 'center',backgroundColor:'lightblue'}}>
      <div style={counterStyle}>

        <h1>This is The normal usestate hook program without any Parameter</h1>

            <h1 style={number}>{num}</h1>

      </div>

        <button style={btn} onClick={inc}>increment</button>

        <button style={btn} onClick={dec}>decrement</button>

    </div>
 
  )
  
}
export default NormalExample