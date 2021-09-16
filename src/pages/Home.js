import React from 'react'
import { ItemPerPageSelector } from '../components/ItemPerPageSelector'
import { LoadMore } from '../components/LoadMore'
import { Pagination } from '../components/Pagination'
import { Burger } from '../features/restaurants/Burger'

export const Home = () => {
    return (<div className="Home__wrapper">
        <ItemPerPageSelector />
        <Burger />
        <LoadMore />
        <Pagination />
    </div>
    )
}
