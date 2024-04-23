"use client";

import useEmblaCarousel from "embla-carousel-react";
import styles from "./Carousel.module.css";
import { useCallback } from "react";
import Image from "next/image";

import store from "/public/online_payments_stores.gif";
import sme from "/public/online_payments_sme.gif";
import bloggers from "/public/online_payments_bloggers.gif";
import infobusiness from "/public/online_payments_infobusiness.gif";
import problems from "/public/online_payments_problems.gif";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <article className={styles.article}>
      <h2 className={styles.headerText}>Подключаем к онлайн-платежам</h2>
      <div className={styles.carousel} ref={emblaRef}>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselSlide}>
            <div className={styles.imageContainer}>
              <Image src={store} fill alt="internet stores logo" />
            </div>
            <p className={styles.carouselSlideText}>
              Создадим для вас интернет магазин
            </p>
          </div>
          <div className={styles.carouselSlide}>
            <div className={styles.imageContainer}>
              <Image src={sme} fill alt="sme logo" />
            </div>
            <p className={styles.carouselSlideText}>Быстрое подключение</p>
          </div>
          <div className={styles.carouselSlide}>
            <div className={styles.imageContainer}>
              <Image src={infobusiness} fill alt="infobusiness logo" />
            </div>
            <p className={styles.carouselSlideText}>
              Достаточно странички в соц сетях
            </p>
          </div>
          <div className={styles.carouselSlide}>
            <div className={styles.imageContainer}>
              <Image src={bloggers} fill alt="bloggers logo" />
            </div>
            <p className={styles.carouselSlideText}>Нет скрытых комиссий</p>
          </div>
          <div className={styles.carouselSlide}>
            <div className={styles.imageContainer}>
              <Image src={problems} fill alt="problems logo" />
            </div>
            <p className={styles.carouselSlideText}>
              Сертификат PCI DSS Level 1
            </p>
          </div>
        </div>
      </div>
      <div className={styles.buttonArea}>
        <button className={styles.buttonLeft} onClick={scrollPrev}>
          <div
            className={`${styles.buttonIcon} ${styles.buttonLeftIcon}`}
          ></div>
        </button>
        <button className={styles.buttonRight} onClick={scrollNext}>
          <div
            className={`${styles.buttonIcon} ${styles.buttonRightIcon}`}
          ></div>
        </button>
      </div>
    </article>
  );
}
