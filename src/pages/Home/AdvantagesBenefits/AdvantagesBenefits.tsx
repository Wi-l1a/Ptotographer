import React from 'react'
import s from './AdvantagesBenefits.module.scss'
import photo from './../../../assets/images/photo5.jpg'
import { ReactComponent as Plan_icon } from './../../../assets/icons/Plan_icon.svg'
import { ReactComponent as Time_icon } from './../../../assets/icons/Time_icon.svg'

const AdvantagesBenefits = () => {
    return (
        <section className={s.wrapper}>
            <div className='container'>
                <h2 className='title'>Преимущества курса</h2>
                <div className={s.content}>
                    <div className={s.box_img}>
                        <img src={photo} alt="img" />
                    </div>
                    <div className={s.cards}>
                        <div>
                            <Time_icon />
                            <h3>Уроки доступны в любое время</h3>
                            <p>Записи уроков доступны всегда, чтобы вы могли возвращаться к ним в любое время</p>
                        </div>
                        <div>
                            <Plan_icon />
                            <h3>План роста для новых высот</h3>
                            <p>Получите план развития в профессии, который поможет вам двигаться дальше и достигать новых высот.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AdvantagesBenefits