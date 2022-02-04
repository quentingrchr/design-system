import React from "react";
import cn from 'classnames/bind';
import { ColorsType } from '../../types';
import "./style.scss";

export interface IProps {
  label: string;
  backgroundColor: ColorsType;
  color: ColorsType;
  disabled?: boolean;
}

export default function Button({ label, backgroundColor, color, ...othersProps }: IProps) {
  return <button className={cn('btn', `bg-${backgroundColor}`, `text-${color}`)} {...othersProps} >{label}</button>;
}
