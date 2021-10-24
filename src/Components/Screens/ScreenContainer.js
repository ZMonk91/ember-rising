import React, {Component} from "react";
import { Route, Routes } from "react-router";
import HomeScreen from "./Home/Home";
import InventoryScreen from "./Inventory/Inventory"

class ScreenContainer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
					<div className="ScreenContainer">

							<Routes>
								<Route exact path="/" component={HomeScreen} />
								<Route exact path="/inventory" component={InventoryScreen} />
							</Routes>
					</div>
				)
    }
}

export default ScreenContainer