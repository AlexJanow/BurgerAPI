import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../features/restaurants/currentPageSlice'
import { selectBurger } from '../features/restaurants/burgerSlice'

export const Pagination = () => {

    const dispatch = useDispatch()
    const currentPage = useSelector((state) => state.currentPage.currentPage)
    const itemsPerPage = useSelector((state) => state.itemsPerPage.items)
    const burger = useSelector(selectBurger)
    const burgerList = burger.list




    const pages = []
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = burgerList.slice(indexOfFirstItem, indexOfLastItem)

    const handleClick = (event) => {
        dispatch(setCurrentPage(Number(event.target.id)))
        // setCurrentPage(Number(event.target.id))
    }

    for (let i = 1; i <= Math.ceil(burgerList.length / itemsPerPage); i++) {
        pages.push(i)
    }

    const renderPageNumbers =
        pages.map(number => {
            return (
                <li key={number} id={number} onClick={handleClick} className={currentPage === number ? "active" : null}>
                    {number}
                </li>
            )
        })
    return (
        <div>
            <ul className="pageNumbers">{renderPageNumbers}</ul>
        </div>
    )
}
