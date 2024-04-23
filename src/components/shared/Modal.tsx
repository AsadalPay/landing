import { ReactNode, MouseEvent } from "react";
import styles from "./Modal.module.css";
import x from "../../../public/icons/x.svg";
import Image from "next/image";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: ReactNode;
};

export default function Modal({ isOpen, setIsOpen, children }: Props) {
  const handleModalClick = () => {
    setIsOpen(false);
  };

  const handleModalContentClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`${
        isOpen ? styles.modal + " " + styles.active : styles.modal
      }`}
      onClick={handleModalClick}
    >
      <div
        className={`${
          isOpen
            ? styles.modalContent + " " + styles.active
            : styles.modalContent
        }`}
        onClick={handleModalContentClick}
      >
        <div onClick={onClose} className={styles.close}>
          <Image src={x} alt="close icon" fill />
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
}
