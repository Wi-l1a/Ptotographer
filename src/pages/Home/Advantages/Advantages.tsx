import React from 'react'
import s from './Advantages.module.scss'
import photo from './../../../assets/images/photo4.jpg'

const Advantages = () => {
    return (
        <section className={s.Advantages}>
            <div className={`${s.wrapper} container`}>
                <div className={s.content}>
                    <h2 className='title'>Преимущества обучения</h2>
                    <ul>
                        <li>
                            <span>1</span>
                            Получите навыки, которые могут изменить вашу жизнь и карьеру.
                        </li>
                        <li>
                            <span>2</span>
                            Увеличьте свой доход и шансы на карьерный рост с помощью профессиональной фотографии.
                        </li>
                        <li>
                            <span>3</span>
                            Гибкий график обучения, который подстраивается под ваши потребности и обстоятельства.
                        </li>
                        <li>
                            <span>4</span>
                            Самостоятельность в обучении без ограничений, вы ставите себе темп и цели.
                        </li>
                        <li>
                            <span>5</span>
                            Без необходимости больших инвестиций в оборудование и помещения.
                        </li>
                    </ul>
                </div>
                <div className={s.img}>
                    <img src={photo} alt="img" />
                </div>
            </div>
        </section>
    )
}

export default Advantages