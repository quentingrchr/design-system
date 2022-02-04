import React from "react";
import cn from 'classnames/bind';
import { ColorsType } from '../../types';
import "./style.scss";

export interface IProps {
  label: string;
  backgroundColor: ColorsType;
  color: ColorsType;
}

export default function Button({ label, backgroundColor, color }: IProps) {
  return <button className={cn('btn', `bg-${backgroundColor}`, `text-${color}`)}>{label}</button>;
}
