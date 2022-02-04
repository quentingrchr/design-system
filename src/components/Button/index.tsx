import React from "react";
import styles from "./style.module.scss";

export interface IProps {
  label: string;
}

export default function index(props: IProps) {
  return <div className={styles.btn}>{props.label}</div>;
}
