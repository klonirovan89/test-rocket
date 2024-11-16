import React from 'react';
import s from "./Input.module.scss";
import {Icon} from "../icon/Icon";
import {clsx} from "clsx";

type InputProps = {
    placeholder: string;
    name: string;
    icon?: string;
    value?: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({placeholder, name, icon, onChange, value}: InputProps) => {


    console.log(name)

    return (
        <div className={s.container}>
            {icon && <Icon iconId={'magnifier'} height={'17'} width={'17'} className={s.magnifier}/>}
            <input
                type="text"
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
                className={clsx(s.input, name === "search" && s.searchActive)}/>
        </div>
    );
};
