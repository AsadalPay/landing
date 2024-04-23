import Form from "@/components/shared/Form";
import styles from "./Connect.module.css";
import connectCompany from "../../../../../../public/connect_company.png";
import connectAccount from "../../../../../../public/connect_account.png";
import Image from "next/image";

export default function Connect() {
  return (
    <article className={styles.article}>
      <div className={styles.container}>
        <h2 className={styles.headerText}>Для подключения вам потребуется</h2>
        <div className={styles.iconsContainer}>
          <div className={styles.iconContainer}>
            <div className={styles.iconWrapper}>
              <Image src={connectCompany} fill alt="company icon" />
            </div>
            <p>ИП / ТОО</p>
          </div>

          <div className={styles.iconContainer}>
            <div className={styles.iconWrapper}>
              <Image src={connectAccount} fill alt="account icon" />
            </div>
            <p>Счет в банке</p>
          </div>
        </div>
        <Form />
      </div>
    </article>
  );
}
