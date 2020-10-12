import React, { useContext, useEffect } from "react"
 import RestaurentFinder from "../api/RestaurentFinder"
import { RestaurentsContext } from "../context/Restaurentcontext"

const Restaurentlist =(props)=>{
   const {restaurents,setRestaurents}= useContext(RestaurentsContext)
    useEffect(()=>{
        const fetchData =async()=>{
            try{
                const response= await RestaurentFinder.get("/")
                setRestaurents(response.data.data.restaurents)
               } catch(err){
          
               }
        } 
           fetchData()
    },[])
    return(
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Restaurents</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>

                    </tr>
                </thead>
                <tbody>
               {restaurents && restaurents.map(restaurent =>{
                   return (
                   <tr key={restaurent.id}>
                       <td>{restaurent.name}</td>
                       <td>{restaurent.location}</td>
                       <td>{"$".repeat(restaurent.price_range)}</td>
                       <td>reviews</td>
                       <td><button className="btn btn-warning">Update</button></td>
                       <td><button className="btn btn-danger">Delete</button></td>
                   </tr>
                   )
               })}



                    {/* <tr>
                        <td>McDonals</td>
                        <td>New York</td>
                        <td>$$</td>
                        <td>rating</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>

                    </tr> */}
                </tbody>
            </table>

        </div>
    )
}
export default Restaurentlist