import React from "react";
import styles from "./GhostButton.module.css";

type Props = {
  children: React.ReactNode;
};

function GhostButton({ children }: Props) {
  return <button className={styles.button}>{children}</button>;
}

export default GhostButton;
