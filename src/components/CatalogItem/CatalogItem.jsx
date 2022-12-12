import React, { useState } from "react";
import './CatalogItem.scss'
const CatalogItem = (props) => {
    let [unit, setUnit] = useState(false)
    return (
        <div  onMouseOver={() => setUnit(true)} onMouseOut = {() => setUnit(false)}>
            <div className= {unit === true ? 'card_info_active' : 'card_info'}>
                <div>
                    <span>{props.catalog.name}</span>
                    <span className="catalog_card_title">{props.catalog.title}</span>
                </div>
                <div>
                    <span className="articul">Артикул: </span>
                    <span className="articul">{props.catalog.articul}</span>
                </div>
                <div className="block_material">
                    <span>Материал:  </span>
                    <span className="material">{props.catalog.material}</span>
                </div>
                <div>
                    <span>Наличие:  </span>
                    <span>{props.catalog.hasgot}</span>
                </div>
                <div className="block_price">
                    <span>Цена:  </span>
                    <span>{props.catalog.price}</span>
                    <button className="button_buy">Купить</button>
                </div>

            </div>
            <div className="positionCards">
                <img className="card_category" src={props.catalog.image} />
            </div>
        </div>
    )
}
export default CatalogItem