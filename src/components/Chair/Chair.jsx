import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { paginationFunction } from "../../Redux/PaginationReducer";
import CatalogItem from "../CatalogItem/CatalogItem";
import CategoryCatalog from "../CategoryCatalog/CategoryCatalog";
import Footer from "../Footer/Footer";
import Header from "../header/Header";
import Pagination from "../Pagination/Pagination";
import { useMediaQuery } from 'react-responsive'

const Chair = () => {
    const catalog = useSelector(state => state.catalog.catalog)
    const currentPage = useSelector(state => state.pagination.currentPage)
    const dispatch = useDispatch()
    let perPage = 9
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 350px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' })
    if (isDesktopOrLaptop) {
        perPage = 8
    }
    if (isBigScreen) {
        perPage = 9
    }
    let lastIndex = currentPage * perPage
    let firstIndex = lastIndex - perPage
    let chairCatalog = []
    catalog.forEach(el => {
        if (el.name === 'Кресло') {
            chairCatalog.push(el)
        }
    })
    useEffect(() => {
        dispatch(paginationFunction(chairCatalog.length))
    }, [currentPage])
    return (
        <div className="container">
            <div className="content">
            <Header />
            <CategoryCatalog />
            <div className="list_cards">
                {chairCatalog.slice(firstIndex,lastIndex).map(el => {
                        return <CatalogItem catalog={el} key={el.id} />
                })}
            </div>
            <Pagination />
            <Link className="button_link" to ='/catalog'>
                <button className="seeall">Смотреть весь каталог</button>
            </Link>
            </div>
           <div className="catalog_footer">
           <Footer/>
           </div>

    
        </div>
    )
}

export default Chair