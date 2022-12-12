import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { paginationFunction } from "../../Redux/PaginationReducer";
import CatalogItem from "../CatalogItem/CatalogItem";
import CategoryCatalog from "../CategoryCatalog/CategoryCatalog";
import Footer from "../Footer/Footer";
import Header from "../header/Header";
import Pagination from "../Pagination/Pagination";

const Puf = () => {
    const catalog = useSelector(state => state.catalog.catalog)
    const currentPage = useSelector(state => state.pagination.currentPage)
    const perPage = useSelector(state => state.pagination.perPage)
    const dispatch = useDispatch()
    let lastIndex = currentPage * perPage
    let firstIndex = lastIndex - perPage
    let pufCatalog = []
    catalog.forEach(el => {
        if (el.name === 'Пуф') {
            pufCatalog.push(el)
        }
    })
    useEffect(() => {
        dispatch(paginationFunction(pufCatalog.length))
    }, [currentPage])
    return (
        <div className="container">
            <Header />
            <CategoryCatalog />
            <div className="list_cards">
                {pufCatalog.length !== 0
                    ?
                    <div>
                 {pufCatalog.slice(firstIndex,lastIndex).map(el =>
                        <CatalogItem catalog={el} key={el.id} />
                )}
                    </div>
                    :
                    <span> Временно нет в наличии</span>
                 }
                
            </div>
            <Pagination />
            <Link className="button_link" to ='/catalog'>
                <button className="seeall">Смотреть весь каталог</button>
            </Link>
            <Footer/>
        </div>
    )
}

export default Puf