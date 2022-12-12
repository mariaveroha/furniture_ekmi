import React from "react";
import './OneDish.scss'
const OneDish = (props) => {
    return (
        <div className="oneDish_table">
            <div>
            <img className="hamburger" src = {props.example.image}/>
            </div>
            <div className="dish_about">
                <p>{props.example.name}</p>
                <p className="tire">{props.example.p}</p>
                <p>{props.example.price}</p>
            </div>
            
        </div>
    )
}

export default OneDish