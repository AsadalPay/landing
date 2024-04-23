"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./Form.module.css";
import Link from "next/link";
import useAppContext from "/src/context/useAppContext";
import Spinner from "./Spinner";
import { useState } from "react";

const formSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email({ message: "Введите корректный email" }),
});

type formDataTypes = z.infer<typeof formSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<formDataTypes>({
    resolver: zodResolver(formSchema),
  });

  const { setRequestModalIsOpen } = useAppContext();
  const [isSuccess, setIsSuceess] = useState(false);

  const onSubmit = async (data: formDataTypes) => {
    const { name, phone, email } = data;
    const message = `ФИО: ${name};\nТелефон: ${phone};\nПочта: ${email};`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TELEGRAM_BOT_ID}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `chat_id=${
            process.env.NEXT_PUBLIC_TELEGRAM_GROUP_ID
          }&text=${encodeURIComponent(message)}&message_thread_id=189`,
        }
      );
      setRequestModalIsOpen(false);

      if (response.ok) {
        reset();
        setIsSuceess(true);
        setTimeout(() => {
          setIsSuceess(false);
        }, 2000);
      }
    } catch (error) {
      setIsSuceess(false);
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input type="text" placeholder="ФИО" {...register("name")}></input>
        {errors.name && <p>{`${errors.name.message}`}</p>}
        <input
          type="tel"
          placeholder="Номер телефона"
          {...register("phone")}
        ></input>
        <input type="email" placeholder="Email" {...register("email")}></input>

        {errors.email && <p>{`${errors.email.message}`}</p>}
        <button disabled={isSubmitting} className={styles.submitButton}>
          {isSubmitting ? (
            <Spinner />
          ) : isSuccess ? (
            <span className={styles["is-success"]}>Мы приняли вашу заявку</span>
          ) : (
            "Оставить заявку"
          )}
        </button>
      </form>
      <div className={styles.policy}>
        <Link href="/privacy-policy">Политика конфиденциальности</Link>
      </div>
    </div>
  );
}
