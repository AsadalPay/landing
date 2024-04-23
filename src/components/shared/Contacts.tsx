import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <address className={styles.address}>
          <a
            href="mailto:sales@asadalpay.com"
            className={`${styles.link} ${styles.mail}`}
          >
            sales@asadalpay.com
          </a>
          <a href="tel:+77066069906" className={styles.link}>
            +7 706 606 99 06
          </a>
          <p className={styles.realAddress}>
            Алматы, Алмалинский район, ул. Желтоксан 134
          </p>
        </address>
        <div className={styles.actionButtonsArea}>
          <button className={styles.button}>
            <a
              href="https://2gis.kz/almaty/search/%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%96%D0%B5%D0%BB%D1%82%D0%BE%D0%BA%D1%81%D0%B0%D0%BD%2C%C2%A0134/geo/9430047374967635/76.940518%2C43.250619?m=76.940713%2C43.250705%2F20"
              target="_blank"
              className={`${styles.link} ${styles.twogis}`}
            >
              2GIS
            </a>
          </button>
          <button className={styles.button}>
            <a
              href="https://api.whatsapp.com/send/?phone=77066069906&text&type=phone_number&app_absent=0"
              target="_blank"
              className={`${styles.link} ${styles.whatsapp}`}
            >
              WhatsApp
            </a>
          </button>
        </div>
      </div>
    </article>
  );
}
