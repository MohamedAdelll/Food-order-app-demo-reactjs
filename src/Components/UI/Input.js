import { forwardRef } from 'react';
import style from './Input.module.css';

export default forwardRef(function Input(props, ref) {
    return (
        <div className={style.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    );
})
