import React from "react";
import { Link } from "react-router-dom";
import './CategoryCatalog.scss'

const CategoryCatalog = () => {
    return (
        <div className="category_main_catalog">
            <Link className = 'link' to='/catalog/sofa'>
                <div className="card_category_main">
                    <img className="cover" src="https://sarmamebel.ru/upload/iblock/634/franko.jpg" />
                    <p className="name_main_category">Диваны</p>
                </div>
            </Link>
            <Link className = 'link' to='/catalog/bed'>
                <div className="card_category_main">
                    <img className="cover" src='https://ormamebel.ru/wa-data/public/shop/products/40/26/2640/images/14229/14229.970.jpeg' />
                    <p className="name_main_category">Кровати</p>
                </div>
            </Link>
            <Link className = 'link' to='/catalog/chair'>
                <div className="card_category_main">
                    <img className="cover" src='https://icondesigne.ru/wa-data/public/shop/products/22/10/121022/images/135408/135408.750.JPG' />
                    <p className="name_main_category"> Кресла</p>
                </div>
            </Link>
            <Link className = 'link' to='/catalog/puf' >
                <div className="card_category_main">
                    <img className="cover" src='https://art-puf.com.ua/_sh/12/1266.jpg' />
                    <p className="name_main_category"> Пуфы</p>
                </div>
            </Link>
            <Link className = 'link' to='/catalog/matrac'>
                <div className="card_category_main">
                    <img className="cover" src='https://www.estetica.ru/upload/iblock/4c1/file_30226.jpg' />
                    <p className="name_main_category"> Матрасы</p>
                </div>
            </Link>
        </div>
    )
}
export default CategoryCatalog