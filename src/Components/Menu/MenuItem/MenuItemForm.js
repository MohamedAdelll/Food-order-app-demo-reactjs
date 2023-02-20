import style from './MenuItemForm.module.css'

import Button from "../../UI/Button";
import Input from "../../UI/Input";
import { useRef } from 'react';

export default function MenuItemForm(props) {
    const amountInputRef = useRef()
    function formSubmitHandler(e) {
        e.preventDefault();
        props.handleFormSubmission(+amountInputRef.current.value)
    }
    return (
        <form className={style.form} onSubmit={formSubmitHandler}>
            <Input ref={amountInputRef} label='Amount' input={{ id: props.id, type: 'number', max: '5', min: '1', step: '1', defaultValue: '1' }} />
            <Button textCont="Add" onClick={formSubmitHandler} />
        </form>
    )
}