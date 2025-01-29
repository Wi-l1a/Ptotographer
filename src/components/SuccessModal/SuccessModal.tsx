import React, { FC, useEffect } from 'react';
import s from './SuccessModal.module.scss'

const SuccessModal: FC = () => {
    return (
        <div className={s.wrapper}>
            <p>Заявка на консультацию отправлена успешно! Ожидайте с вами свяжутся в ближайшее время!</p>
        </div>
    );
};

export default SuccessModal;