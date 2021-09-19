import React from 'react'
import { ItemPerPageSelector } from '../components/ItemPerPageSelector'
import { LoadMore } from '../components/LoadMore'
import { Pagination } from '../components/Pagination'
import { Spinner } from '../components/Spinner'
import { Burger } from '../features/restaurants/Burger'
import { useSelector } from 'react-redux'
import { selectBurger } from '../features/restaurants/burgerSlice'
export const Home = () => {

    const burger = useSelector(selectBurger)
    const burgerList = burger.list

    return (<div className="Home__wrapper">
        <ItemPerPageSelector />
        {burgerList.length === 0 ? <Spinner /> : null}
        <Burger />
        <LoadMore />
        <Pagination />
    </div>
    )
}
