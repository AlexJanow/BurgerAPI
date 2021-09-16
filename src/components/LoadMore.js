import React from 'react'
import { useDispatch } from 'react-redux'
import { loadMore } from '../features/restaurants/itemsPerPageSlice'

export const LoadMore = () => {

    const dispatch = useDispatch()

    return (
        <button onClick={() => dispatch(loadMore())}>Load More</button>
    )
}
