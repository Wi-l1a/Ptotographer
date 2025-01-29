import React, { FC } from 'react'
import s from './Footer.module.scss'
const Footer: FC = () => {
    return (
        <footer className={s.footer}>
            <p>© Текст защищён авторским правом. Любое копирование или использование без согласия правообладателя запрещено.</p>
        </footer>
    )
}

export default Footer