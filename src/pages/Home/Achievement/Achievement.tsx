import React from 'react'
import s from './Achievement.module.scss'
import photo from './../../../assets/images/photo3.jpg'
import { ReactComponent as ProfessionalShoot } from './../../../assets/icons/ProfessionalShoot_icon.svg'
import { ReactComponent as Skills } from './../../../assets/icons/Skills_icon.svg'
import { ReactComponent as Portfolio } from './../../../assets/icons/Portfolio.svg'
import { ReactComponent as PhotoEditing } from './../../../assets/icons/PhotoEditing.svg'

const Achievement = () => {
    return (
        <section className={`${s.wrapper} container`}>
            <h2 className='title'>Что вы достигнете?</h2>
            <div className={s.content}>
                <div className={s.img}>
                    <img src={photo} alt="img" />
                </div>
                <ul>
                    <div>
                        <ProfessionalShoot />
                        <h2>Искусство профессиональной съемки</h2>
                        <p>Научитесь создавать профессиональные фотографии с использованием разнообразных техник и стилей.</p>
                    </div>
                    <div>
                        <Skills />
                        <h2>Мастерство фотографии и обработки</h2>
                        <p>Повысите уровень своего мастерства, овладев профессиональными методами фотографии и обработки изображений.</p>
                    </div>
                    <div>
                        <Portfolio />
                        <h2>Уникальное портфолио фотографа</h2>
                        <p>Создадите собственное уникальное портфолио, которое поможет вам выделиться в мире фотографии.</p>
                    </div>
                    <div>
                        <PhotoEditing />
                        <h2>Профессиональное редактирование фото</h2>
                        <p>Научитесь редактировать фотографии в профессиональных программках, придавая им выдающееся качество.</p>
                    </div>

                </ul>
            </div>
        </section>
    )
}

export default Achievement