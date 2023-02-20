import style from './Button.module.css'

export default function Button(props) {
    const classes = props.className || style.btn
    return (
        <button className={classes} onClick={props.onClick}>{props.textCont}</button>
    )
}