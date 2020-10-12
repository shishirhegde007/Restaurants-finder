import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import { RestaurentsContextProvider } from './context/Restaurentcontext';
import Home from './routes/Home';
import RestaurentDetail from './routes/RestaurentDetail';
import UpdatePage from './routes/UpdatePage';


const App = () =>{
    return( 
        <RestaurentsContextProvider>
    <div className="container">
        <Router>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/restaurants/:id/update" component={RestaurentDetail}/>
            <Route exact path="/restaurants/:id" component={UpdatePage}/>
            </Switch>
        </Router>
    </div>
    </RestaurentsContextProvider>
    )
}

export default  App;