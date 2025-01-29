import React from 'react'
import s from './RequiredExpa.module.scss'
import { ReactComponent as Camera } from './../../../assets/icons/camera_icon.svg'

const RequiredExpa = () => {
    return (
        <section className={s.RequiredExpa}>
            <div className={`${s.wrapper} container`}>
                <Camera />
                <h2 className='title'>Необходимый опыт</h2>
                <p className={s.description}>Научитесь создавать выдающиеся фотографии, захватывающие моменты и эмоции.</p>
                <div className={s.line}>
                    <span />
                    <span />
                    <span />
                </div>
                <div className={s.text}>
                    <p>Курс подходит как для новичков, так и для опытных фотографов</p>
                    <p>Вы получите все необходимые навыки и знания для успешной фотографии</p>
                </div>
            </div>
        </section >
    )
}

export default RequiredExpa