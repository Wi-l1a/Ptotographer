import React from 'react'
import s from './Results.module.scss'
import photo1 from './../../../assets/images/photo2.jpg'
import photo2 from './../../../assets/images/photo1.webp'
import photo3 from './../../../assets/images/photo3.jpg'
import photo4 from './../../../assets/images/photo4.jpg'
import photo5 from './../../../assets/images/photo5.jpg'
import photo6 from './../../../assets/images/photo6.jpg'
import { Slider } from '../../../components/Slider'

const Results = () => {
    const data = [
        {
            img: photo1,
            text: 'Создадите собственное уникальное портфолио, которое поможет вам выделиться в мире фотографии.'
        },
        {
            img: photo2,
            text: 'Получили поддержку от опытных менторов и разбор своих работ в режиме лайв.'
        },
        {
            img: photo4,
            text: 'Понимаете структуру рынка фотографии и умеете анализировать тренды и монеты в этой сфере.'
        },
        {
            img: photo6,
            text: 'Успешно провели свои первые профессиональные съемки и вышли в плюс.'
        },
        {
            img: photo3,
            text: 'Получили доступ к богатой аналитике, видеозаписям уроков и всем необходимым материалам для успешной карьеры в фотографии.'
        },
        {
            img: photo5,
            text: 'Научились составлять свое уникальное портфолио, отбирая лучшие моменты и работы на долгий и короткий срок.'
        },
    ]

    return (
        <section className={`${s.wrapper} container`}>
            <Slider title='Результаты обучения' slidesPerView={3} slidesPerGroup={3}
                breakpoints={{
                    0: { slidesPerView: 1.3, slidesPerGroup: 1, spaceBetween: 10 },
                    960: { slidesPerView: 2.3, slidesPerGroup: 2, spaceBetween: 20 },
                    1250: { slidesPerView: 3.5, slidesPerGroup: 3, spaceBetween: 10 },
                }}
            >
                {
                    data.map((e, index) => (
                        <div className={s.card} key={index}>
                            <img src={e.img} alt="img" />
                            <p>{e.text}</p>
                        </div>
                    ))}
            </Slider>
        </section>
    )
}

export default Results