import React, {Component} from "react";
import {Container} from '@chakra-ui/react'
import { CurrentHome } from "./CurrentHome";

class HomeScreen extends Component{


    render(){
        return(

            <Container>
            <CurrentHome/>
            </Container>
        )
    }
}

export default HomeScreen