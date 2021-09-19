import { useDispatch, useSelector } from "react-redux"
import { getBurger } from "./burgerSlice"
import { useEffect, useState } from "react"
import { selectBurger } from "./burgerSlice"
import "./Burger.css"
import { Link } from "react-router-dom"


export const Burger = () => {




    const dispatch = useDispatch()
    const currentPage = useSelector((state) => state.currentPage.currentPage)
    const itemsPerPage = useSelector((state) => state.itemsPerPage.items)
    const burger = useSelector(selectBurger)
    const burgerList = burger.list






    // console.log(itemsPerPage)
    useEffect(() => {
        dispatch(getBurger({}))
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
                return (<li className="Burger__card" key={id}>
                    <Link className="Link" to={`/${id}`}>
                        <h2>{name}</h2>
                        <p>{description}</p></Link>
                </li>)
            })}</ul>)
    }



    return (
        <div>
            {renderBurger(currentItems)}

        </div>
    )
}
