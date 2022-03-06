import React, {useState} from "react";



//function component
 const Piles = ({came, herName}) =>{
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState("pedro");
   
    
    
    const increment = () => {
     setCounter(counter + 1);
    
     
    };

    let onchange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
    } 
    return (
    <div>
        
  
    <br></br>
                     {counter} 
    <br></br>
                  <button onClick={increment}     /*do not put this () in your event handler function it will not work in react */
                 style={ { backgroundColor:"red"}} 
                         >increment</button>

    <br />
                 <h1>Hello welcome {came} {herName} </h1>
    <br></br>
                 <input placeholder ="Enter something...." onChange={onchange}></input>

   <br></br>
                {inputValue}
    <br></br>
  
    </div>)
};


export default Piles