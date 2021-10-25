import React, {Component} from "react";
import { Container } from "reactstrap";
import CurrentHouse from "./CurrentHouse";

class HomeScreen extends Component{


    render(){
        return(

            <Container>
             <CurrentHouse/>
            </Container>
        )
    }
}

export default HomeScreen