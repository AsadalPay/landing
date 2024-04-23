import React from "react";
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

function Button({ children, onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
