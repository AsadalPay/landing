import Image from "next/image";
import whatsappIcon from "../../../../../../public/icons/whatsapp.svg";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
  return (
    <article className={styles.article}>
      <h2>Остались вопросы? Напишите нам</h2>
      <a
        className={styles.button}
        href="https://api.whatsapp.com/send/?phone=77066069906&text&type=phone_number&app_absent=0"
        target="_blank"
      >
        <div className={styles.iconWrapper}>
          <Image src={whatsappIcon} fill alt="whatsapp icon" />
        </div>
        <p>Написать</p>
      </a>
    </article>
  );
}
