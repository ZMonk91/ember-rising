import React, {Component} from "react";
import {Box} from '@chakra-ui/react'
import { CurrentHome } from "./CurrentHome";

class HomeScreen extends Component{


    render(){
        return(

            <Box>
            <CurrentHome/>
            </Box>
        )
    }
}

export default HomeScreen