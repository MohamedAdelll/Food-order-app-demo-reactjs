import style from './CartItem.module.css';


export default function CartItem(props) {
    const { name, price, amount } = props.item
    return (
        <li className={style['cart-item']}>
            <div>
                <h2>{name}</h2>
                <div className={style.summary}>
                    <span className={style.price}>{price}</span>
                    <span className={style.amount}>x {amount}</span>
                </div>
            </div>
            <div className={style.actions}>
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
}