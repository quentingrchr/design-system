import React from "react";
import "./style.scss";

import Icon from "./../../components/Icon";

export default function Checkbox() {
    return(
        <div className="checkbox">
            <input 
                id="rememberMe" 
                className="checkbox__box"
                type="checkbox" 
            />
            <label htmlFor="rememberMe" className="checkbox__custom">
                <Icon type="check"/>
            </label>
        </div>
    )
}