import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { paginationFunction } from "../../Redux/PaginationReducer";
import CatalogItem from "../CatalogItem/CatalogItem";
import CategoryCatalog from "../CategoryCatalog/CategoryCatalog";
import Footer from "../Footer/Footer";
import Header from "../header/Header";
import Pagination from "../Pagination/Pagination";

const Sofa = () => {
    const catalog = useSelector(state => state.catalog.catalog)
    const currentPage = useSelector(state => state.pagination.currentPage)
    const dispatch = useDispatch()
    let perPage = 9
    let lastIndex = currentPage * perPage
    let firstIndex = lastIndex - perPage
    let sofaCatalog = []
    catalog.forEach(el => {
        if (el.name === 'Диван') {
            sofaCatalog.push(el)
        }
    })
    useEffect(() => {
        dispatch(paginationFunction(sofaCatalog.length))
    }, [currentPage])
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
    return (
        <div className="container">
            <div className="content">
            <Header />
            <CategoryCatalog />
            <div className="list_cards">
                {sofaCatalog.slice(firstIndex,lastIndex).map(el => {
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

export default Sofa