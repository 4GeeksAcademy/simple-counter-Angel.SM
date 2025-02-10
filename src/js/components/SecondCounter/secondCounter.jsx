import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons"
import  "./secondCounter.css"

const SecondCounter = (props) => {

    const count = props.time.toString().padStart(6, "0");
    
    


    return (
    
    <div className="Contador d-flex justify-content-center"> 
     <FontAwesomeIcon icon={faClock} className="icono-reloj "/>
    <div><h2>{count}</h2> </div>
    </div>)
}


    export default SecondCounter