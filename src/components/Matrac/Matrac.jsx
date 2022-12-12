import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { paginationFunction } from "../../Redux/PaginationReducer";
import CatalogItem from "../CatalogItem/CatalogItem";
import CategoryCatalog from "../CategoryCatalog/CategoryCatalog";
import Footer from "../Footer/Footer";
import Header from "../header/Header";
import Pagination from "../Pagination/Pagination";

const Matrac = () => {
    const catalog = useSelector(state => state.catalog.catalog)
    const currentPage = useSelector(state => state.pagination.currentPage)
    const perPage = useSelector(state => state.pagination.perPage)
    const dispatch = useDispatch()
    let lastIndex = currentPage * perPage
    let firstIndex = lastIndex - perPage
    let matracCatalog = []
    catalog.forEach(el => {
        if (el.name === 'Матрас') {
            matracCatalog.push(el)
        }
    })
    useEffect(() => {
        dispatch(paginationFunction(matracCatalog.length))
    }, [currentPage])
    return (
        <div className="container">
            <Header />
            <CategoryCatalog />
            <div className="list_cards">
                {matracCatalog.slice(firstIndex,lastIndex).map(el => {
                        return <CatalogItem catalog={el} key={el.id} />
                })}
            </div>
            <Pagination />
            <Link className="button_link" to ='/catalog'>
                <button className="seeall">Смотреть весь каталог</button>
            </Link>
            <Footer/>
        </div>
    )
}

export default Matrac