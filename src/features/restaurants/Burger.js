import { useDispatch } from "react-redux"
import { getBurger } from "./burgerSlice"
import { useEffect } from "react"

export const Burger = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBurger({ limit: 10 }))
    }, [dispatch])

    return (
        <div>
            <h1>Burger...</h1>
        </div>
    )
}
