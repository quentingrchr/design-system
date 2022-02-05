import React from "react";
import "./style.scss";

import { ColorsType } from "../../types";


export interface IProps {
    color?: ColorsType;
}

export default function Checkbox({color}:IProps) {
    return(
        <div>
            <label htmlFor="rememberMe">remember me ?</label>
            <input 
                id="rememberMe" 
                className={`checkbox checkbox--${color}`} 
                type="checkbox" 
            />
        </div>
    )
}