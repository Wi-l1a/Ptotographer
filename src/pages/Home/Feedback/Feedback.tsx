import React from 'react'
import s from './Feedback.module.scss'
import { ReactComponent as Telegram } from './../../../assets/icons/telegram.svg'
import { ReactComponent as Insta } from './../../../assets/icons/insta.svg'
import FormFeedback from '../../../components/FormFeedback/FormFeedback'

const Feedback = () => {
    return (
        <section className={`${s.wrapper}`}>
            <div className={s.container}>
                <div className={s.content}>
                    <h2 className='title'>Запишитесь на вебинар</h2>
                    <p>Стоимость обучения: бесплатно</p>
                    <ul>
                        <li><a target='_blank' href="https://telegram.org/"><Telegram /></a></li>
                        <li><a target='_blank' href="https://www.instagram.com/"><Insta /></a></li>
                    </ul>
                </div>
                <FormFeedback />
            </div>
        </section>
    )
}

export default Feedback