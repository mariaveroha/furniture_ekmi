import './OneCard.scss'
import React from 'react'
const OneCard = (props) => {
    return (
        <div className='one_card'>
           <div><img className='card_image' src={props.card.image}/></div> 
            <p className='title_card'>{props.card.title}</p>
            <p className='text_card'>{props.card.text}</p>
        </div>
    )
}

export default OneCard