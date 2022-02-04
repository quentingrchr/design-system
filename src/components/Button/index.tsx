import React from "react";
import cn from 'classnames/bind';
import styles from "./style.module.scss";

export interface IProps {
  label: string;
}

export default function index(props: IProps) {
  return <button className={styles.btn}>{props.label}</button>;
}
