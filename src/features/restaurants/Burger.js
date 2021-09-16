import { useDispatch, useSelector } from "react-redux"
import { getBurger } from "./burgerSlice"
import { useEffect, useState } from "react"
import { selectBurger } from "./burgerSlice"
import "./Burger.css"
import { LoadMore } from "../../components/LoadMore"
import { setCurrentPage } from "./currentPageSlice"



export const Burger = () => {




    const dispatch = useDispatch()
    const currentPage = useSelector((state) => state.currentPage.currentPage)
    const itemsPerPage = useSelector((state) => state.itemsPerPage.items)
    const burger = useSelector(selectBurger)
    const burgerList = burger.list

    // console.log(itemsPerPage)
    useEffect(() => {
        dispatch(getBurger(
            { limit: 100 }
        ))
    }, [dispatch])



    //show only items of chosen page

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = burgerList.slice(indexOfFirstItem, indexOfLastItem)


    //render list


    const renderBurger = (burgerList) => {
        return (<ul className="burgerList">
            {burgerList.map(burger => {
                const { addresses, description, id, ingredients, name, restaurant, web } = burger
                return (<li key={id}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </li>)
            })}</ul>)
    }



    return (
        <div>
            {renderBurger(currentItems)}

        </div>
    )
}
