import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CurrentPageFunction, paginationFunction } from "../../Redux/PaginationReducer";
import './Pagination.scss'


const Pagination = (props) => {
    const currentPage = useSelector(state => state.pagination.currentPage)
    const catalog = useSelector(state => state.catalog.catalog)
    const perPage = useSelector(state => state.pagination.perPage)
    const totalCount = useSelector(state => state.pagination.totalCount)
    const dispatch = useDispatch()
    let paginationButtons = []
    for (let i = 0; i < Math.ceil(totalCount / perPage); i++) {
        paginationButtons.push(i + 1)
    }
    const ChangePage = (buttons) => {
        dispatch(CurrentPageFunction(buttons))
        window.scrollTo({
            top: 500,
            left: 0,
            behavior: 'smooth',
        })
    }
    useEffect(() => {
        dispatch(paginationFunction(catalog.length))
    }, [currentPage])
    return (
        <div>

            <div className="pagination ">
                {paginationButtons.map(buttons => {
                    return <button onClick={() => ChangePage(buttons)} className={currentPage === buttons ? ' current_page pagination_button' : 'pagination_button'} key={buttons}> {buttons}</button>
                })}
            </div>
        </div>
    )
}
export default Pagination