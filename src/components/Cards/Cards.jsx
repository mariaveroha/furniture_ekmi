import { useState } from 'react'
import './Cards.scss'
import React from 'react'
import OneCard from '../OneCard/OneCard'
import quality from '../../images/quality.png'
import response from '../../images/response.png'
import fast from '../../images/fast.png'
const Cards = () => {
    const [card, setCard] = useState([
        {id: 1, image: fast , title: 'Качество', text: 'Наши профессионалы работают на лучшем оборудовании для создания мебели беспрецедентного качества'},
        {id: 2, image: quality, title: 'Скорость', text: 'Благодаря отлаженной системе в Ekmi мы можем собирать до 20-ти единиц продукции в наших собственных цехах'},
        {id: 3, image:  response, title: 'Ответственность', text: 'Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Ekmi'},
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