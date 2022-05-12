import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React,{useState,useEffect} from"react"
import image1 from './0.png';
import image2 from './1.png';
import image3 from './2.png';
import image4 from './3.png';
import image5 from './4.png';
import image6 from './5.png';
import image7 from './6.png';
import WOW from 'wowjs';
import 'animate.css';
import "./Die.css"






const RollDice=({sides})=>{
    const [state,setState]=useState({
        die1:<img style={{width:"80px"}} src={image7}/>,
        die2:<img style={{width:"80px"}} src={image7}/>,
        rolling:false,
        totalScore:0,
        totalattempts:15,
        remining:15,
        usedattempts:0,
        score:0,
        extra:0,penalty:0,
        zero:0
    })
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])
    const {die1,die2,rolling,penalty,zero,totalScore,totalattempts,remining,usedattempts,score,extra}=state;

    const roll = ()=>{
        let Dice1 = sides[Math.floor(Math.random()*7)];
        let Dice2 = sides[Math.floor(Math.random()*7)];

        // let Dice1 =[0];
        // let Dice2=[0]
      
        
       console.log(Dice1);
        const dice=Object.keys(Dice1);
        const dice1 = Object.keys(Dice2);


        if(dice[0]==0&& dice1[0]==0 && zero==0){

            setState({
                die1:Object.values(Dice1),
                die2:Object.values(Dice2),
                rolling:true, totalScore:totalScore+0,remining:remining-1,usedattempts:usedattempts+1,extra:extra+0,zero:zero+1,penalty:penalty+0,
            })

        }
        else if(dice[0]==0 && dice1[0]==0 && zero >0){
            setState({
                die1:Object.values(Dice1),
                die2:Object.values(Dice2),
                rolling:true,totalScore:totalScore+0,remining:remining-zero,usedattempts:usedattempts+1,extra:extra+0,zero:zero+1,penalty:penalty+0,
            })

        }
      
       else if(dice[0]==4 &&dice1[0]==5 ){
            setState({
                die1:Object.values(Dice1),
                die2:Object.values(Dice2),
                
                rolling:true,totalScore:totalScore+1 ,remining:remining-1,usedattempts:usedattempts+1,score:totalScore+score,extra:extra+0,zero:zero+0

            })
    }else if(dice[0]==1 && dice1[0]==1){
        setState({
            die1:Object.values(Dice1),
            die2:Object.values(Dice2),
            rolling:true,totalScore:totalScore+10 ,remining:remining+0,usedattempts:usedattempts+1,extra:extra+1,penalty:penalty+0,zero:zero+0
        })
    }else if(dice[0]==2 && dice1[0]==2){
        setState({
            die1:Object.values(Dice1),
            die2:Object.values(Dice2),
            rolling:true,totalScore:totalScore+0,remining:remining-2,usedattempts:usedattempts+1,extra:extra+0,penalty:penalty+0,zero:zero+0
        })
    } else if(dice[0]==3 && dice1[0]==3){
        setState({
            die1:Object.values(Dice1),
            die2:Object.values(Dice2),
            rolling:true,totalScore:totalScore+0,remining:remining-2,usedattempts:usedattempts+1,extra:extra+0,penalty:penalty+0,zero:zero+0
        })
    }else if(dice[0]==5&& dice1[0]==6){
        setState({
            die1:Object.values(Dice1),
            die2:Object.values(Dice2),
            rolling:true,totalScore:totalScore+2,remining:remining-1,usedattempts:usedattempts+1,extra:extra+0,penalty:penalty+0,zero:zero+0

        })
    }else if(dice[0]==4 && dice1[0]==4){
        setState({
            die1:Object.values(Dice1),
            die2:Object.values(Dice2),
            rolling:true,totalScore:totalScore+4,remining:remining-1,usedattempts:usedattempts+1,extra:extra+0,penalty:penalty+0,zero:zero+0
        })
    }else if(dice[0]==5 && dice1[0]==5){
        setState({
            die1:Object.values(Dice1),
            die2:Object.values(Dice2),
            rolling:true,totalScore:totalScore+6,remining:remining-1,usedattempts:usedattempts+1,extra:extra+0,penalty:penalty+0,zero:zero+0

        })
    }else if(dice[0]==6 && dice1[0]==6){
        setState({
            die1:Object.values(Dice1),
            die2:Object.values(Dice2),
            rolling:true,totalScore:totalScore+8,remining:remining-1,usedattempts:usedattempts+1,extra:extra+0,penalty:penalty+0,zero:zero+0
        })
    }else{
        setState({
            die1:Object.values(Dice1),
            die2:Object.values(Dice2),
            rolling:true, remining:remining-1,totalScore:totalScore+0,usedattempts:usedattempts+1,extra:extra+0,penalty:penalty+0,zero:zero+0
        })

    }

    
 
       
       
        setTimeout(()=>{
            setState((prevState)=>({...prevState,rolling:false}))
        },1000)

        
     
    }

  
    return(
        <>
        
        <div  className="" >
            <div  >

                
       
        <h1 className=" shaking" rolling={rolling}>{die1}  {die2} </h1>
        
            </div>
           
            <TableContainer  sx={{ml:30,width:"900px",'&:last-child td, &:last-child th': { border: 1 } }} component={Paper}>
                <Table sx={{background:"#b5d4d7", '&:last-child td, &:last-child th': { border: 1 }}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell  sx={{ width: "100px"}} variant="h1">
                                <h1>Total Attempts</h1>
                            </TableCell>
                            <TableCell>
                                <h1>Used Attempts</h1>

                            </TableCell>
                            <TableCell>
                                <h1>Remining Attempts</h1>
                            </TableCell>
                            <TableCell>
                                <h1>Extra Attempts</h1>
                            </TableCell>
                            <TableCell>
                                <h1>Penalty </h1>
                            </TableCell>
                            <TableCell>
                                <h1>Points </h1>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell><h1>15</h1></TableCell>
                            <TableCell><h1>{usedattempts}</h1></TableCell>
                            <TableCell><h1>{remining}</h1></TableCell>
                            <TableCell><h1>{extra}</h1></TableCell>
                            <TableCell><h1>{penalty}</h1></TableCell>
                            <TableCell><h1>{totalScore}</h1></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            
          
      </div>
           
 {/* {((remining<=0)&&(totalScore>=20&&totalScore<35))?<h1>You Won Brzone </h1>:((remining<=0)&&(totalScore>=35&&totalScore<50))?<h1>You Won Silver </h1>:((remining<=0)&&(totalScore>=50&&totalScore<50))?<h1>You Won Gold</h1>:((remining<=0&&totalScore<20))?<h1>did not win</h1>:<button onClick={roll} disabled={rolling}> {rolling?"Rolling....": "Roll dice"} </button>} */}

        
        {((remining<=0)&&(totalScore>=20&&totalScore<35))?
            
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                    TotalScore:{totalScore}
                    </TableCell>
                    <TableCell> <h1>You Won Brzone </h1></TableCell>
                    <TableCell> <img style={{width:"200px"}} src = "https://i5.walmartimages.com/asr/04ffdfb5-f206-4e8e-a832-b349ca29bca2_1.4fefde12ba99f6c4484fba3ded3d770f.jpeg"/>  </TableCell>
                </TableRow>
            </TableHead>
        </Table>

        :((remining<=0)&&(totalScore>=35&&totalScore<50))?
     
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                    TotalScore:{totalScore}
                    </TableCell>
                    <TableCell><h1>You Won Sliver </h1></TableCell>
                    <TableCell> <img style={{width:"100px"}} src = "https://3.imimg.com/data3/RG/NJ/MY-1862029/silver-medal-500x500.jpg"/>  </TableCell>

                </TableRow>
            </TableHead>
        </Table>

      :((remining<=0)&&(totalScore>=50&&totalScore<50))?
        <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                    TotalScore:{totalScore}
                    </TableCell>
                    <TableCell> <h1>You Won Gold </h1></TableCell>
                    <TableCell> <img style={{width:"100px"}} src = "https://image.invaluable.com/housePhotos/julienent/42/670642/H1088-L206660398.jpg"/>  </TableCell>

                </TableRow>
            </TableHead>
        </Table>

        </TableContainer>:((remining<=0&&totalScore<20))? <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                   <h1>  TotalScore:{totalScore}</h1>
                    </TableCell>
                    <TableCell>
                    <h1>Better Luck Next Time </h1>
                    </TableCell>
                    <TableCell> <img style={{width:"100px"}} src = "https://th.bing.com/th/id/OIP.egsRxRj3Rps82ojyd8ap-gHaHz?pid=ImgDet&rs=1"/>  </TableCell>

                </TableRow>
            </TableHead>
        </Table>

        </TableContainer>:<Button variant="contained"  onClick={roll} disabled={rolling} > {rolling?"Rolling....": "Roll dice"} </Button>
        }
        
        </>
    )
}

RollDice.defaultProps={
    sides:[
        {0:<img  style={{width:"80px"}}  src={image1}/>},
        {1:<img style={{width:"80px"}} src={image2}/>},
        {2:<img style={{width:"80px"}} src={image3}/>},
        {3:<img style={{width:"80px"}} src={image4}/>},
        {4:<img style={{width:"80px"}} src={image5}/>},
        {5:<img style={{width:"80px"}} src={image6}/>},
        {6:<img style={{width:"80px"}} src={image7}/>}
    ]
}

export default RollDice
