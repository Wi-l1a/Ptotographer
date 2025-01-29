import React from 'react'
import photo from './../../../assets/images/photo1.webp'
import s from './Stydy.module.scss'
const Study = () => {
    return (
        <section className={`${s.wrapper} container`}>
            <div className={s.img}>
                <img src={photo} alt="img" />
            </div>
            <div className={s.content}>
                <h2 className='title'>Что вы изучите?</h2>
                <ul>
                    <li>
                        <span>1</span>
                        Научитесь создавать выдающиеся фотографии, захватывающие моменты и эмоции.
                    </li>
                    <li>
                        <span>2</span>
                        Освоите искусство обработки изображений для достижения профессиональных результатов.
                    </li>
                    <li>
                        <span>3</span>
                        Поймете, как выбирать правильное оборудование и использовать его на практике.
                    </li>
                    <li>
                        <span>4</span>
                        Развивайте свой творческий взгляд и стиль в фотографии.
                    </li>
                    <li>
                        <span>5</span>
                        Научитесь работать с различными условиями съемки, включая разное освещение и местоположение.
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Study