import { useState } from 'react'
import './Cards.scss'
import React from 'react'
import OneCard from '../OneCard/OneCard'
const Cards = () => {
    const [card, setCard] = useState([
        {id: 1, image: 'https://cdn.icon-icons.com/icons2/3678/PNG/512/badge_prize_winner_premium_certification_award_certificate_quality_icon_228991.png', title: 'Качество', text: 'Наши профессионалы работают на лучшем оборудовании для создания мебели беспрецедентного качества'},
        {id: 2, image: 'https://cdn.icon-icons.com/icons2/1131/PNG/512/cogwheel_80413.png', title: 'Скорость', text: 'Благодаря отлаженной системе в Ekmi мы можем собирать до 20-ти единиц продукции в наших собственных цехах'},
        {id: 3, image: 'https://cdn.icon-icons.com/icons2/494/PNG/512/hand_icon-icons.com_48292.png' , title: 'Ответственность', text: 'Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Ekmi'},
    ])
    return (
        <div className='all_cards'>
            { card.map((card, key) => 
            <OneCard card = {card} key = {card.id} />
            )}
        </div>
    )
}

export default Cards