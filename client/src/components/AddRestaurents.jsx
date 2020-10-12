import React, { useState } from 'react'
import { useContext } from 'react'
import RestaurantFinder from "../api/RestaurentFinder"
import { RestaurentsContext } from '../context/Restaurentcontext'

const AddRestaurents = ()=> {
const {addrestaurents}=useContext(RestaurentsContext)
const [name,setName]=useState('')
const [location,setLocation]=useState('')
const [priceRange,setPriceRange]=useState('')

const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
    const response= await RestaurantFinder.post("/",{
            name:name,
            location:location,
            price_range:priceRange
        })
   addrestaurents(response.data.data.restaurent)
    } catch (err){

    }
}
    return (
        <div className="mb-4"> 
            <form action="">
               <div className="form-row">
                   <div className="col">
                       <input value={name} onChange={e=>setName(e.target.value)} type="text" className="form-control" placeholder="name"/>
                   </div>
                   <div className="col">
                      <input name={location} onChange={e=> setLocation(e.target.value)} type="text" className="form-control" placeholder="location"/>
                   </div>
                   <div className="col">
                       <select value={priceRange} onChange={(e)=> setPriceRange(e.target.value)} className="custom-select my-1 mr-sm-2">
                       <option disabled>Price Range</option>
                       <option value="1">$</option>
                       <option value="2">$$</option>
                       <option value="3">$$$</option>
                       <option value="4">$$$$</option>
                       <option value="5">$$$$$</option>
                       </select>
                         <button onClick={handleSubmit} className="btn primary">Add</button>
                   </div>
               </div>
            </form>
        </div>
    )
}

export default AddRestaurents
