import React from 'react'
import s from './ForWhom.module.scss'
import { ReactComponent as BasicsPhoto } from './../../../assets/icons/BasicsPhoto_icon.svg'
import { ReactComponent as BusinessPhoto } from './../../../assets/icons/BusinessPhoto_icon.svg'
import { ReactComponent as DevelopmentPhoto } from './../../../assets/icons/DevelopmentPhoto_icon.svg'
import { ReactComponent as VisualPhoto } from './../../../assets/icons/VisualPhoto_icon.svg'
const ForWhom = () => {
    return (
        <section className={`${s.wrapper} container`}>
            <h2 className='title'>Для кого подходит курс</h2>
            <ul>
                <div>
                    <BasicsPhoto />
                    <h2>Основы фотографии</h2>
                    <p>Без необходимости больших инвестиций в оборудование и помещения.</p>
                </div>
                <div>
                    <BusinessPhoto />
                    <h2>Фото для бизнеса</h2>
                    <p>Предприниматели, желающие сделать профессиональные фотографии для своего бизнеса и продвижения.</p>
                </div>
                <div>
                    <VisualPhoto />
                    <h2>Визуальная коммуникация</h2>
                    <p>Топ-менеджеры, стремящиеся расширить свои навыки в сфере визуальной коммуникации.</p>

                </div>
                <div>
                    <DevelopmentPhoto />
                    <h2>Развитие мастерства</h2>
                    <p>Опытные фотографы, желающие развивать мастерство и открывать новые горизонты в своём деле.</p>
                </div>
            </ul>
        </section>
    )
}

export default ForWhom