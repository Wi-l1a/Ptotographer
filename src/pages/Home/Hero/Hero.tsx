import React from 'react'
import s from './Hero.module.scss'
import photo2 from './../../../assets/images/photo2.jpg'
import photo1 from './../../../assets/images/photo3.jpg'
import { ReactComponent as Telegram } from './../../../assets/icons/telegram.svg'
import { ReactComponent as Insta } from './../../../assets/icons/insta.svg'

const Hero = () => {
    return (
        <section className={s.Hero}>
            <div className={`${s.wrapper} container`}>
                <div className={s.wrapper__content}>
                    <h2 className='title'>LOGO</h2>
                    <div className={s.text}>
                        <h1 className='title'>Откройте для себя искусство фотографии</h1>
                        <article>Ваш уникальный стиль начинается здесь - воплотите в реальность
                            ваши модные мечты с нашими эксклюзивными услугами пошива.   </article>
                    </div>
                    <ul>
                        <li><a target='_blank' href="https://telegram.org/"><Telegram /></a></li>
                        <li><a target='_blank' href="https://www.instagram.com/"><Insta /></a></li>
                    </ul>
                </div>
                <div className={s.wrapper__images}>
                    <img src={photo1} alt="img" />
                    <img src={photo2} alt="img" />
                </div>
            </div>
            <div className={s.bg} />
        </section>
    )
}

export default Hero