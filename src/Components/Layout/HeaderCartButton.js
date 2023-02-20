import { useContext } from 'react'

import style from './HeaderCartButton.module.css'

import CartIcon from '../Cart/CartIcon'
import cartContext from '../../store/cart-context'
import modalContext from '../../store/modal-context'

export default function HeaderCartButton() {
  const cartCtx = useContext(cartContext)
  const modalCtx = useContext(modalContext)
  return (
    <button onClick={modalCtx.setShowModal.bind(null, true)} className={style.button}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{cartCtx.totalAmount}</span>
    </button>
  )
}