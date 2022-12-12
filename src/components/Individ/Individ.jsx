import React from "react";
import './Individ.scss'
import consultant from '../../images/consultant.svg'
const Individ = () => {
    return (
        <div className="Individ_back">
            <img className="consultant" src={consultant} />
            <div className="block_individ">
                <p className="text_business">Индивидуальная мебель</p>
                <p className="text_individ" >Полный цикл производства.</p>
                <p className="text_individ" >Качество мягкой мебели начинается задолго до начала ее производства.</p>
                    <button className="button_individ">Индивидуальная мебель</button>
            </div>
        </div>
    )
}
export default Individ