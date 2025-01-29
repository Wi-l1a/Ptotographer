import React from 'react'
import s from './FormFeedback.module.scss'
import { Link } from 'react-router-dom'
const FormFeedback = () => {
    return (
        <form className={s.form}>
            <input
                required
                id="name"
                type="text" placeholder='Имя*' />
            <input
                required
                id="email"
                type="email" placeholder='Введите Email адрес*' />
            <input
                required
                id="phone"
                type="text" placeholder='Введите номер телефона*' />
            <textarea
                rows={6}
                id="message"
                placeholder='Сообщение (необязательно)'
            />
            <button>Отправить заявку</button>
        </form>
    )
}

export default FormFeedback