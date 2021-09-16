import React from 'react'
import { useDispatch } from 'react-redux'
import { itemsPerPage } from '../features/restaurants/itemsPerPageSlice'

export const ItemPerPageSelector = () => {
    const dispatch = useDispatch()

    const handleClick = (selection) => {
        dispatch(itemsPerPage(selection))
    }

    return (
        <div>
            <button onClick={() => handleClick(5)} >5 per page</button>
            <button onClick={() => handleClick(10)}>10 per page</button>
        </div >
    )
}
