import React from "react";
import cn from 'classnames/bind';
import { ColorsType } from '../../types'
import styles from "./style.module.scss";

export interface IProps {
  label: string;
  backgroundColor: ColorsType;
  color: ColorsType;
}

export default function index({ label, backgroundColor = "primary-base", color ="primary-white" }: IProps) {
  return <button className={cn(styles.btn, `bg-${backgroundColor}`, `text-${color}`)}>{label}</button>;
}
