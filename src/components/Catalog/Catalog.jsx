import React, { useState } from "react";
import Header from "../header/Header";
import './Catalog.scss'
import CatalogItem from "../CatalogItem/CatalogItem";
import { useSelector } from "react-redux";
import CategoryCatalog from "../CategoryCatalog/CategoryCatalog";
import Pagination from "../Pagination/Pagination";
import Footer from '../Footer/Footer'

const Catalog = () => {
    const catalog = useSelector(state => state.catalog.catalog)
    const currentPage = useSelector(state => state.pagination.currentPage)
    const perPage = useSelector(state => state.pagination.perPage)
    let lastIndex = currentPage * perPage
    let firstIndex = lastIndex - perPage
    return (
        <div className="container">
            <Header />
            <CategoryCatalog />
            <p className="all">Вся мебель</p>
            <div className="list_cards">
                {catalog.slice(firstIndex, lastIndex).map(catalog => {
                    return <CatalogItem catalog={catalog} key={catalog.id} />
                })}
            </div>
           <Pagination/>
           <Footer/>
        </div>
    )
}
export default Catalog