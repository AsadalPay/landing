import styles from "./PayMore.module.css";

export default function PayMore() {
  return (
    <article className={styles.article}>
      <h2 className={styles.header}>С ASADAL PAY клиенты платят еще больше</h2>
      <div className={styles.container}>
        <div className={styles.banner}>
          <p className={`${styles.bannerText} ${styles.designText}`}>
            Ваш брендированный дизайн и интуитивно понятный интерфейс
          </p>
          <div className={`${styles.bannerImage} ${styles.design}`}>
            <p className={`${styles.designText} ${styles.descText}`}>
              Ваш брендированный дизайн и интуитивно понятный интерфейс
            </p>
          </div>
        </div>

        <div className={styles.banner}>
          <p className={`${styles.bannerText} ${styles.serversText}`}>
            Быстрые сервера на AWS и никаких внезапных ошибок / зависаний
          </p>
          <div className={`${styles.bannerImage} ${styles.servers}`}>
            <p className={`${styles.serversText} ${styles.descText}`}>
              Быстрые сервера на AWS и никаких внезапных ошибок / зависаний
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
