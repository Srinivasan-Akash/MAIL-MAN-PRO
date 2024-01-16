'use client'
import React from 'react'
import styles from "./testimonials.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { testimonials } from '@/static/testimonials';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

export default function Testimonials() {
    const swiperRef = useRef(null);
    const [sliderPosition, setSliderPosition] = useState(0);
    useEffect(() => {
        const handleScroll = (event: any) => {
            const scrollDelta = event.deltaY * 0.5;
            const newSliderPosition = sliderPosition + scrollDelta;

            if (newSliderPosition >= 0) {
                setSliderPosition(newSliderPosition);
            } else {
                setSliderPosition(0);
            }
        };

        window.addEventListener('wheel', handleScroll);

        return () => window.removeEventListener('wheel', handleScroll);
    }, [sliderPosition]);
    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            className={styles.swiper}
            ref={swiperRef}
            freeMode={true}
            loop={true}

            mousewheel={{ releaseOnEdges: true }}
        >

            {testimonials.map((card, index) => {
                return (
                    <SwiperSlide key={index} style={{ transform: `translateX(${-sliderPosition}px)` }} className={styles.swiperSlider}>
                        <div className={styles.logoContainer}>
                            <img src='https://media.discordapp.net/attachments/1144663357845147790/1196697763975536640/logo_light.png?ex=65b892a4&is=65a61da4&hm=c508a0fdfbd1c018cd88a7bc56106b6ed72efcedc09c131c1c4bb22745036d0e&=&format=webp&quality=lossless&width=1141&height=172' alt='logo'></img>
                        </div>
                        <div className={styles.reviewContainer}>
                            <div>
                                <div className={styles.profilePic}>

                                </div>
                                <div>
                                    <h2>Bishal Nandi</h2>
                                    <p>FOUNDER OF GROWITRAPID</p>
                                </div>
                            </div>

                            <div>
                                <p>I liked Clean Email best. Before, I had 17,677 unread emails. Now, it’s a fraction of that.</p>
                            </div>
                        </div>
                        {/* <div
                            style={{
                                backgroundImage: `url(${card.url})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",

                            }}
                            className={`absolute inset-0 z-0 w-[100%] h-[100%] rounded-[15px] ${styles.thumbContainer}`}
                        ></div>
                        <div>
                            <p className={styles.box}>
                                <div className="profile"></div>
                                <span>{card.title}</span>
                            </p>
                        </div> */}
                    </SwiperSlide>
                )

            })}
        </Swiper>
    )
}
