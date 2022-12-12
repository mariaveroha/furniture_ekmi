import React from "react";
import beard from '../../images/beard.svg'
import './Review.scss'
const Review = () => {
    return (
<div className="review">
<p className="text_review">Спасибо! Понравилось все : предварительное сообщение о времени доставки, пунктуальность,  общение сотрудников доставки и сборка мебели. Спасибо сотрудникам- Павлу и Сергею за профессионализм, качество сборки и вежливость в общении. Будем рекомендовать этот магазин всем знакомым! </p>
   <div>
   <img className="beard" src={beard}/>
    <p className="textRW">Клиент</p>
    <p className="textR">Николай</p>
   </div>
   
</div>
    )
}
export default Review