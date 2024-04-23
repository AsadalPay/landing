"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import demoMenu from "../../../../public/icons/demo_menu.svg";
import demoAccount from "../../../../public/icons/demo_account.svg";
import demoAsus from "../../../../public/demo/demo_asusrog.jpg";
import demoGalaxyS23 from "../../../../public/demo/demo_galaxyS23.jpg";
import demoGalaxyZFold from "../../../../public/demo/demo_galaxyZFold5.jpg";
import demoIphone13 from "../../../../public/demo/demo_iphone13.jpg";
import demoIphone15 from "../../../../public/demo/demo_iphone15.jpg";
import demoPixel from "../../../../public/demo/demo_pixel.jpg";
import demoXiaomi from "../../../../public/demo/demo_xiaomi13.jpg";
import styles from "./page.module.css";
import makeID from "./utils/makeId";
import { useRouter } from "next/navigation";

export default function Demo() {
  const [apiKey, setApiKey] = useState<string | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    setApiKey(process.env.NEXT_PUBLIC_API_KEY?.toString());
  }, []);

  const mockRequestData = {
    products: [
      {
        name: "Телефон",
        price: 250000,
        quantity: 1,
      },
    ],
    currency: "KZT",
    external_id: makeID(7),
    description: "Оплата за телефон",
    attempts: 5,
    mcc: "5533",
    capture_method: "HOLD",
    back_url: "https://asadalpay.com",
    notify_url: "https://asadalpay.com",
  };

  const handleButtonClick = async () => {
    try {
      const response = await fetch(
        "https://api-dev.asadalpay.com/api/orders/create-order",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            "api-key": apiKey as string,
          },
          body: JSON.stringify(mockRequestData),
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        router.push(responseData.checkout_url);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.iconWrapper}>
          <div className={styles.iconContainer}>
            <Image src={demoMenu} alt="menu icon" fill />
          </div>
        </div>
        <div>
          <h1 className={styles.headerText}>Acme Store</h1>
        </div>
        <div className={styles.iconWrapper}>
          <div className={styles.iconContainer}>
            <Image src={demoAccount} alt="account icon" fill />
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.itemsContainer}>
          <div className={styles.item}>
            <div className={styles.itemImage}>
              <div className={styles.iconContainer}>
                <Image src={demoAsus} alt="iphone icon" fill />
              </div>
            </div>
            <div>
              <p className={styles.itemTitle}>Asus Rog</p>
            </div>
            <button className={styles.button} onClick={handleButtonClick}>
              Купить
            </button>
          </div>

          <div className={styles.item}>
            <div className={styles.itemImage}>
              <div className={styles.iconContainer}>
                <Image src={demoXiaomi} alt="macbook icon" fill />
              </div>
            </div>
            <div>
              <p className={styles.itemTitle}>Xiaomi 13</p>
            </div>
            <button className={styles.button} onClick={handleButtonClick}>
              Купить
            </button>
          </div>

          <div className={styles.item}>
            <div className={styles.itemImage}>
              <div className={styles.iconContainer}>
                <Image src={demoGalaxyZFold} alt="iphone icon" fill />
              </div>
            </div>
            <div>
              <p className={styles.itemTitle}>Galaxy Z Fold5</p>
            </div>
            <button className={styles.button} onClick={handleButtonClick}>
              Купить
            </button>
          </div>

          <div className={styles.item}>
            <div className={styles.itemImage}>
              <div className={styles.iconContainer}>
                <Image src={demoIphone15} alt="iphone icon" fill />
              </div>
            </div>
            <div>
              <p className={styles.itemTitle}>Iphone 15</p>
            </div>
            <button className={styles.button} onClick={handleButtonClick}>
              Купить
            </button>
          </div>

          <div className={styles.item}>
            <div className={styles.itemImage}>
              <div className={styles.iconContainer}>
                <Image src={demoPixel} alt="iphone icon" fill />
              </div>
            </div>
            <div>
              <p className={styles.itemTitle}>Google Pixel</p>
            </div>
            <button className={styles.button} onClick={handleButtonClick}>
              Купить
            </button>
          </div>

          <div className={styles.item}>
            <div className={styles.itemImage}>
              <div className={styles.iconContainer}>
                <Image src={demoGalaxyS23} alt="iphone icon" fill />
              </div>
            </div>
            <div>
              <p className={styles.itemTitle}>Galaxy S23</p>
            </div>
            <button className={styles.button} onClick={handleButtonClick}>
              Купить
            </button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div>Acme Inc</div>
          <div>info@acme.com</div>
        </div>
      </footer>
    </div>
  );
}
