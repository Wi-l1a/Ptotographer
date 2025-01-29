import React, { useState } from 'react';
import s from './FormFeedback.module.scss';
import { Link } from 'react-router-dom';
import SuccessModal from '../SuccessModal/SuccessModal';

const FormFeedback = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSuccess, setIsSuccess] = useState(false);
    const botToken = '7880118105:AAGNoyg0OjmLrsYCEqtQQru1C7dLNkoTcno';
    const chatId = '7069409257';

    const handleChange = (e: { target: { id: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const message = `\u2709 Новая заявка:\n\n` +
            `Имя: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Телефон: ${formData.phone}\n` +
            `Сообщение: ${formData.message || 'Не указано'}`;

        try {
            await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' })
            });
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 3000);
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            alert('Ошибка отправки!');
            console.error('Ошибка:', error);
        }
    };
    return (
        <>
            {isSuccess && <SuccessModal />}
            <form className={s.form} onSubmit={handleSubmit}>
                <input required id="name" type="text" placeholder='Имя*' value={formData.name} onChange={handleChange} />
                <input required id="email" type="email" placeholder='Введите Email адрес*' value={formData.email} onChange={handleChange} />
                <input required id="phone" type="text" placeholder='Введите номер телефона*' value={formData.phone} onChange={handleChange} />
                <textarea rows={6} id="message" placeholder='Сообщение (необязательно)' value={formData.message} onChange={handleChange} />
                <button type="submit">Отправить заявку</button>
            </form>
        </>
    );
};

export default FormFeedback;