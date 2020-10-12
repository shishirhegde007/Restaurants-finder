import React,{useState,createContext} from "react"

export const RestaurentsContext = createContext();

export const RestaurentsContextProvider=props =>{
    const [restaurents,setRestaurents]=useState([])

    const addRestaurants =(restaurent) =>{
        setRestaurents([...restaurents,restaurent])
    }

    return(
        <RestaurentsContext.Provider value={{restaurents:restaurents,setRestaurents,addRestaurants}}>
            {props.children}
        </RestaurentsContext.Provider>
    )
}