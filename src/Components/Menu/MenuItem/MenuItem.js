import { useContext } from 'react'

import style from './MenuItem.module.css'

import MenuItemForm from './MenuItemForm'
import cartContext from '../../../store/cart-context'


export default function MenuItem({ name, desc, price, id }) {
    const cartCtx = useContext(cartContext)
    function getAmountOfItem(amount) {
        if (amount < 1 || amount > 5 || !Boolean(parseInt(amount))) return
        cartCtx.addCartItem({ amount, name, id, description: desc })
    }
    return (
        <li className={style.menu}>
            <div>
                <h3>{name}</h3>
                <p className={style.description}>{desc}</p>
                <span className={style.price}>{price.toFixed(2)}</span>
            </div>
            <div>
                <MenuItemForm id={id} handleFormSubmission={getAmountOfItem} />
            </div>
        </li>
    )
} 