import React from 'react'
import Header from "../components/Header"
import AddRestaurents from "../components/AddRestaurents"
import Restaurentlist from '../components/Restaurentslist'
const Home = () => {
    return (
        <div>
           <Header/>
           <AddRestaurents/>
           <Restaurentlist/>
        </div>
    )
}

export default Home
