import { useDispatch, useSelector } from "react-redux"
import { getBurger } from "./burgerSlice"
import { useEffect } from "react"
import { selectBurger } from "./burgerSlice"

export const Burger = () => {
    const dispatch = useDispatch()
    const burger = useSelector(selectBurger)
    const burgerList = burger.list

    console.log(burgerList)
    useEffect(() => {
        dispatch(getBurger({ limit: 10 }))
    }, [dispatch])

    return (
        burgerList.map(burger => {
            const { addresses, description, id, ingredients, name, restaurant, web } = burger
            return (<div key={id}>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>)
        })
    )
}
