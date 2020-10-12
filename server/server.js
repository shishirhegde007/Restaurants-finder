require("dotenv").config();
const express = require('express');
const morgan = require("morgan")
const db = require("./db")
const app = express();
const cors = require('cors')

const port =3000

app.use((res,req,next) =>{
    
    next();
})
app.use(cors())
app.use(express.json())

app.put("/app/vl/getRestaurant/:id",async(req,res)=>{

try {
    const result=await db.query("update restaurent  set name=$1,location=$2,price_range=$3 where id=$4 returning *",
    [req.body.name,req.body.location,req.body.price_range,req.params.id])


    res.json({
        status:"sucesss"
    })
    
} catch (err) {
    console.log(err)
}
})

app.delete("/app/vl/getRestaurant/:id",async(req,res)=>{
try {
    const result =await db.query("delete from restaurent where id =$1",[req.params.id])
       
    res.json({
        data:result
    })
} catch (err) {
    console.log(err)
}
const result =await db.query("delete from restaurent where id =$1",[req.params.id])


})
app.get("/app/vl/getRestaurant",async(req,res)=>{
   const result =await db.query("select * from restaurent")
    res.status(200).json({
        status:"success",
        result: result.rows.length,
        data:{
            restaurents:result.rows,
        },
    })
})

app.get("/app/vl/getRestaurant/:id",async (req,res)=>{
    console.log(req.params.id)
   const result = await db.query(`select * from restaurent where id= ${req.params.id}`)
  
   res.json({
       data:result.rows
   })


})

app.post("/app/vl/getRestaurant",async (req,res)=>{
   
    try{
    const result = await db.query(
      "INSERT INTO restaurent (name ,location ,price_range) values ($1,$2,$3) returning *",
    [req.body.name,req.body.location,req.body.price_range]
    )
    console.log(result)

    res.json({
        data:{
          restaurent:result.rows[0],
        },
    })

}
catch(err){
  console.log(err)
}
}
)




app.listen(port,()=>{
    console.log(`server running on ${port}`)
})