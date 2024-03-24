const express = require('express')
const axios = require('axios')
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(cors())
 

const port =  process.env.PORT || 3000


app.listen(port, ()=>{
    
   console.log(`app is listing to port ${port}` );
     
})

 
 
app.post('/prompt' , async (req , res)=> {
    try{
        const { messages , model , variables} = await req.body
        const response = await axios.post('https://api.getknit.ai/v1/router/run', {
            messages,
            model,
            variables
        }, {
            headers: {
                'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMTEwMDk1MTc2ODM2NjUwMTkwNzcxIn0sImlhdCI6MTcxMDc1NjkzMiwiZXhwIjoxNzExODM2OTMyfQ.INFR_kz_TP0yrkRyxN-Pmm8ZUQpWpe-uaG4U-Gwqg5A', 

                'Content-Type': 'application/json'
            }
        });
        
       res.json(response.data)
      
      //res.send(response.data)
      
       console.log(response);
  
    } catch (e){
        console.log("error proceesing prompt" , e);
        res.status(500).json({e : "internal seraver error"})

    }

})

 


 
 