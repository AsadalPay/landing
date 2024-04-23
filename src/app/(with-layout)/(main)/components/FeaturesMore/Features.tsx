import React from "react";
import styles from "./Features.module.css";

export default function FeaturesMore() {
  return (
    <section className={styles.section} id="features">
      <div>
        <h2 className={styles.headerText}>
          Дополнительные возможности ASADAL PAY
        </h2>
      </div>
      <div className={styles.container}>
        <div className={styles.feature}>
          <div
            className={`${styles.featureIcon} ${styles.featureIconSubs}`}
          ></div>
          <div className={styles.featureText}>
            <h2>Система подписки (рекуррентные платежи)</h2>
            <p>
              После привязки карты вашего клиента в системе, будем снимать
              оплату с клиента в самый неожиданный момент
            </p>
            <p>Данная система оплаты очень популярна во всем мире</p>
          </div>
        </div>

        <div className={styles.feature}>
          <div
            className={`${styles.featureIcon} ${styles.featureIconLink}`}
          ></div>
          <div className={styles.featureText}>
            <h2>Оплата по ссылке (удаленная оплата)</h2>
            <p>
              После успешных переговоров с клиентом в социальных сетях или
              мессенджерах Вам останется скинуть ссылку на оплату
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <div
            className={`${styles.featureIcon} ${styles.featureIconQr}`}
          ></div>
          <div className={styles.featureText}>
            <h2>Оплата по QR</h2>
            <p>
              Если вы провели встречу и Вам необходимо быстро закрыть клиента на
              оплату, то просто попросите оплатить его посредством QR
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <div
            className={`${styles.featureIcon} ${styles.featureIconGoogle}`}
          ></div>
          <div className={styles.featureText}>
            <h2>Мгновенные оплаты с Google Pay™ в ваших каналах продаж</h2>
            <p>
              Принимайте оплаты на сайте
              через Google Pay. Этот cпособ оплаты доступен по умолчанию всем
              клиентам Asadal Pay. С ним вы сможете продавать больше, ведь 72%
              владельцев смартфонов используют мобильные устройства на ОС
              Android.
            </p>

            <span className={styles.featureTextLink}>
              Ознакомьтесь с общими сведениями{" "}
              <a
                href="https://payments.developers.google.com/terms/sellertos"
              >
                предоставления услуг Google Pay
              </a>.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
