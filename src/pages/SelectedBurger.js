import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { selectBurger } from '../features/restaurants/burgerSlice'
import { getBurger } from '../features/restaurants/burgerSlice'
export const SelectedBurger = () => {

    const burger = useSelector(selectBurger)
    const burgerList = burger.list

    const { id } = useParams()
    const dispatch = useDispatch()

    // const renderBurger = (burgerList) => {
    //     return (<ul className="burgerList">
    //         {burgerList.map(burger => {
    //             const { addresses, description, id, ingredients, name, restaurant, web } = burger
    //             return (<li key={id}>
    //                 <Link to={`/${id}`}>
    //                     <h2>{name}</h2>
    //                     <p>{description}</p></Link>
    //             </li>)
    //         })}</ul>)
    // }

    useEffect(() => {
        dispatch(getBurger(
            { limit: 100 }
        ))
    }, [dispatch])

    const renderBurgerCard = (burgerList) => {
        const selectedId = Number(id)
        const selectedBurger = burgerList.find((burger) => burger.id === selectedId)
        const { adresses, description, ingredients, name, restaurant, web } = selectedBurger
        console.log(selectedBurger)
        return (<div>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{ingredients}</p>
            <p>{restaurant}</p>
            <p>{web}</p>
        </div>)
    }



    return (
        <div>
            selected Burger
            <p>{id}</p>
            {renderBurgerCard(burgerList)}
        </div>
    )
}
