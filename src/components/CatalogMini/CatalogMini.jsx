import React, { useState } from "react";
import './CatalogMini.scss'
import { Link } from "react-router-dom";
import sofa2 from "../../images/sofa2.svg"
import sofa3 from "../../images/sofa3.svg"
import sofa4 from "../../images/sofa4.svg"
import chair from "../../images/chair.svg"
import chair2 from "../../images/chair2.svg"
import chair3 from "../../images/chair3.svg"
import bed from "../../images/bed.svg"
import bed2 from "../../images/bed2.svg"
import CatalogItem from "../CatalogItem/CatalogItem";
const CatalogMini = () => {
  const [catalog, setCatalog] = useState([
    { id: 1, name: 'Диван', title: 'Диана', price: '50 000p', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', articul: 'A-SDR12', image: sofa4 },
    { id: 2, name: 'Диван', title: 'Джейн', price: '50 000p', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', articul: 'A-SDR12', image: sofa2 },
    { id: 3, name: 'Диван', title: 'Элизабет', price: '50 000p', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', articul: 'A-SDR12', image: sofa3 },
    { id: 4, name: 'Кресло', title: 'Морисон', price: '50 000p', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', articul: 'A-SDR12', image: chair },
    { id: 5, name: 'Кресло', title: 'Гарольд', price: '50 000p', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', articul: 'A-SDR12', image: chair2 },
    { id: 6, name: 'Кресло', title: 'Кинг', price: '50 000p', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', articul: 'A-SDR12', image: chair3 },
    { id: 7, name: 'Кровать', title: 'Софи', price: '50 000p', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', articul: 'A-SDR12', image: bed },
    { id: 8, name: 'Кровать', title: ' Кассель', price: '50 000p', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', articul: 'A-SDR12', image: bed2 },
    { id: 9, name: 'Кровать', title: 'Акре', price: '50 000p', material: 'массив дерева, фанера, микро-велюр', hasgot: 'в наличии', articul: 'A-SDR12', image: bed },
  ])

  return (
    <div id='cataloglist' className="block_catalog">
      <p className="catalog_title"> Каталог</p>
      <div>
        <p className="name_category">Диваны</p>
        <div className="one_card_category">
          {catalog.map((catalog) => {
            if (catalog.id < 4) {
              return <CatalogItem catalog={catalog} key={catalog.id} />
            }
          }
          )}
          <Link to='/catalog/sofa'> <button className="seeAll">Смотреть все</button></Link>
        </div>
      </div>

      <p className="name_category">Кресла</p>
      <div className="one_card_category">
        {catalog.map((catalog) => {
          if (catalog.id > 3 && catalog.id < 7) {
            return <CatalogItem catalog={catalog} key={catalog.id} />
          }
        }
        )}
        <Link to='/catalog/chair'> <button className="seeAll">Смотреть все</button></Link>
      </div>
      <p className="name_category">Кровати</p>
      <div className="one_card_category">
        {catalog.map((catalog) => {
          if (catalog.id > 6) {
            return <CatalogItem catalog={catalog} key={catalog.id} />
          }
        }
        )}
        <Link to='/catalog/bed'> <button className="seeAll">Смотреть все</button></Link>
      </div>

    </div>
  )
}
export default CatalogMini