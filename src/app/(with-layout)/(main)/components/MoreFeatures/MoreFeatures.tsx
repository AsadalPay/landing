import styles from "./MoreFeatures.module.css";
import Image from "next/image";
import payment_subs from "../../../../../public/payment_subs.gif";
import payment_link from "../../../../../public/payment_link.gif";
import payment_qr from "../../../../../public/payment_qr.gif";

export default function MoreFeatures() {
  return (
    <section className={styles.section} id="features">
      <h2 className={styles.header}>Дополнительные возможности ASADAL PAY</h2>
      <div className={styles.container}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <Image
              src={payment_subs}
              alt="payment subs icon"
              width={195}
              height={195}
            />
          </div>
          <div className={styles.featureText}>
            <h2>Система подписки (реккурентные платежи)</h2>
            <p>
              После привязки карты вашего клиента в системе, будем снимать
              оплату с клиента в самый неожиданный момент.
            </p>
            <p>Данная система оплаты очень популярна во всем мире</p>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <Image
              src={payment_link}
              alt="payment link icon"
              width={195}
              height={195}
            />
          </div>
          <div className={styles.featureText}>
            <h2>Оплата по ссылке (удаленная оплата)</h2>
            <p>
              После успешных переговоров с клиентом в социальных сетях или
              мессенджерах Вам останется скинуть ссылку на оплату
            </p>
          </div>
        </div>

        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <Image
              src={payment_qr}
              alt="payment qr icon"
              width={195}
              height={195}
            />
          </div>
          <div className={styles.featureText}>
            <h2>Оплата по QR</h2>
            <p>
              Если вы провели встречу и Вам необходимо быстро закрыть клиента на
              оплату, то просто попросите оплатить его посредством QR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
