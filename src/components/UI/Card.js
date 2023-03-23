import React from "react";

import classes from './Card.module.css';


const Card = (props) => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default Card;


//props.children executed because it is a js expression that should be 
//evaluated inside of the JSX code.