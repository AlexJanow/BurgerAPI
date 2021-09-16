import { useDispatch, useSelector } from "react-redux"
import { getBurger } from "./burgerSlice"
import { useEffect, useState } from "react"
import { selectBurger } from "./burgerSlice"
import "./Burger.css"



export const Burger = () => {


    // states
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(5)


    const dispatch = useDispatch()
    const burger = useSelector(selectBurger)
    const burgerList = burger.list

    console.log(burgerList)
    useEffect(() => {
        dispatch(getBurger(
            { limit: 100 }
        ))
    }, [dispatch])



    //pagination

    const pages = []
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = burgerList.slice(indexOfFirstItem, indexOfLastItem)

    const handleClick = (event) => {
        setCurrentPage(Number(event.target.id))
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
            <ul className="pageNumbers">{renderPageNumbers}</ul>

        </div>
    )
}
