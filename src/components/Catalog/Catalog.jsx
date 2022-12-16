import React, { useState } from "react";
import Header from "../header/Header";
import './Catalog.scss'
import CatalogItem from "../CatalogItem/CatalogItem";
import { useSelector } from "react-redux";
import CategoryCatalog from "../CategoryCatalog/CategoryCatalog";
import Pagination from "../Pagination/Pagination";
import Footer from '../Footer/Footer'
import { useMediaQuery } from 'react-responsive'

const Catalog = () => {
    const catalog = useSelector(state => state.catalog.catalog)
    const currentPage = useSelector(state => state.pagination.currentPage)
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
    return (
        <div className="container">
            <div className="content">
                <Header />
                <CategoryCatalog />
                <p className="all">Вся мебель</p>
                <div className="list_cards">
                    {catalog.slice(firstIndex, lastIndex).map(catalog => {
                        return <CatalogItem catalog={catalog} key={catalog.id} />
                    })}
                </div>
                <Pagination />
            </div>
            <div className="catalog_footer">
                <Footer />
            </div>
        </div>
    )
}
export default Catalog