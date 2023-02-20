import style from './Card.module.css'

export default function Card(props) {
    const classes = `${props.className} ${style.card}`
    return (
        <div className={classes}>{props.children}</div>
    )
}