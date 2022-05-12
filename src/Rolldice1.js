import React,{useState} from"react"


const Rolldice1=({sides})=>{
    const [state,setState]=useState({
        die1:6,
        die2:6,
        rolling:false,
        
    })

const ro1 =(first,second)=>{

  setState({
       die1:first,
       die2:second,
       rolling:true
   })

}
    const roll=()=>{
        const newDies1 = sides[Math.floor(Math.random()*7)];
        const newDies2 = sides[Math.floor(Math.random()*7)];
       ro1(newDies1,newDies2)
    }

    const {die1,die2,rolling,totalScore,totalattempts,usedattempts}=state;
return(
    <>
   <div style={{display:"flex" ,justifyContent:"center",padding:"5px"}}>
<h1  style={{padding:"5px"}}>{die1}</h1>
    <h1  style={{padding:"5px"}}>{die2}</h1>
    

   </div>
    <button onClick={roll}>RollDice</button>
    
    </>
)

}

export default Rolldice1