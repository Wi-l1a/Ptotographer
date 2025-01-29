import { FC, ReactNode, useState, useEffect } from 'react';
import s from './Slider.module.scss';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as ArrowIcon } from './../../../assets/icons/arrow_Icon.svg';
import './Slider.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface SwiperProps {
    title?: string;
    children: ReactNode[];
    slidesPerView?: number;
    spaceBetween?: number;
    slidesPerGroup?: number;
    breakpoints?: Record<number, { slidesPerView: number; slidesPerGroup: number; spaceBetween: number }>;
}

export const Slider: FC<SwiperProps> = ({
    title,
    children,
    slidesPerView = 4,
    spaceBetween = 20,
    slidesPerGroup = 4,
    breakpoints = {
        0: { slidesPerView: 1.1, slidesPerGroup: 1, spaceBetween: 10 },
        960: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 20 },
        1250: { slidesPerView: 4, slidesPerGroup: 4, spaceBetween: 30 },
    }
}) => {
    const [sliderId] = useState(`swiper-pagination-${Math.random().toString(36).substr(2, 9)}`);

    return (
        <div className={s.slider}>
            {title && (
                <div className={s.header}>
                    <h2 className="title">{title}</h2>
                    <div className={s.customs}>
                        <div className={`${s.customButtonPrev} review-swiper-button-prev`}>
                            <ArrowIcon color="#B59A6C" />
                        </div>
                        <div id={sliderId} className={`${s.customPagination} swiper-pagination`}></div>
                        <div className={`${s.customButtonNext} review-swiper-button-next`}>
                            <ArrowIcon color="#47667B" />
                        </div>
                    </div>
                </div>
            )}
            <Swiper
                className={s.swiper}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                slidesPerGroup={slidesPerGroup}
                pagination={{
                    type: 'fraction',
                    el: `#${sliderId}`,
                    formatFractionCurrent: (number: number) => (number < 10 ? `0${number}` : `${number}`),
                    formatFractionTotal: (number: number) => (number < 10 ? `0${number}` : `${number}`),
                }}
                navigation={{
                    nextEl: ".review-swiper-button-next",
                    prevEl: ".review-swiper-button-prev",
                }}
                breakpoints={breakpoints}
                modules={[Pagination, Navigation]}
            >
                {children.map((child, index) => (
                    <SwiperSlide key={index} className={s.sliders}>
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
