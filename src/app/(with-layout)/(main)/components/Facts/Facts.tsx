import styles from "./Facts.module.css";
import flying_payments from "/public/flying_payments.png";
import dev_team from "/public/dev_team.png";
import strong_defense from "/public/strong_defense.png";
import Image from "next/image";

export default function Facts() {
  return (
    <div className={styles.mainContainer}>
      <article className={styles.article} id="facts">
        <h2 className={styles.header}>ASADAL PAY на языке фактов</h2>
        <div className={styles.container}>
          <div className={styles.fact}>
            <div className={styles.iconContainer}>
              <Image
                src={flying_payments}
                alt="flying payments icon"
                layout="responsive"
                style={{objectFit: "cover", paddingTop: '30px'}}
              />
            </div>
            <div className={styles.factText}>
              <p>
                Наши оплаты летают: работаем напрямую с крупными банками
                Казахстана
              </p>
            </div>
            <div className={`${styles.line} ${styles.green}`}></div>
          </div>

          <div className={styles.fact}>
            <div className={styles.iconContainer}>
              <Image
                src={strong_defense}
                alt="strong defence icon"
                layout="responsive"
              />
            </div>
            <div className={styles.factText}>
              <p>Бронированная защита.</p>
              <p>Соответствуем стандарту самых крутых ребят в мире PCI DSS.</p>
              <p>
                Токенизация, 3DSecure и остальные новейшие разработки защиты
              </p>
            </div>
            <div className={`${styles.line} ${styles.gold}`}></div>
          </div>

          <div className={styles.fact}>
         
            <div className={styles.iconContainer}>
              <Image src={dev_team} alt="dev team icon" layout="responsive" 
                style={{objectFit: "cover", paddingTop: '35px'}}
              
              />
            </div>
            <div className={styles.factText}>
              <p>
                Команда разработчиков устраняет ошибки быстрее, чем вы их
                заметите и внедряет новейшие разработки, чтобы клиенты были от
                вас без ума
              </p>
            </div>
            <div className={`${styles.line} ${styles.blue}`}></div>
          </div>
        </div>
      </article>
    </div>
  );
}
