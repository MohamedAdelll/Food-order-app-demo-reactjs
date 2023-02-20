import { useContext } from "react";

import style from './Cart.module.css'

import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import cartContext from "../../store/cart-context";
import modalContext from "../../store/modal-context";

export default function Cart() {
    const cartCtx = useContext(cartContext)
    const hasItems = cartCtx.items.length > 0
    const modalCtx = useContext(modalContext)
    const CartList = cartCtx.items.map(item => <CartItem key={item.id} onRemove={cartCtx.removeCartItem.bind(null, item.id)} onAdd={cartCtx.addCartItem.bind(null, { ...item, amount: 1 })} item={item} />)
    return (
        modalCtx.showModal && <Modal>
            <ul>
                {CartList}
            </ul>
            <div className={style.total}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount}</span>
            </div>
            <div className={style.actions}>
                {hasItems && <button className={style.button}>Order</button>}
            </div>
        </Modal>
    )
}

