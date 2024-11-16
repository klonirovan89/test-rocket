import React from 'react';
import s from "./Input.module.scss";

type InputProps = {
    placeholder: string;
    name: string;
    icon?: string;
    value?: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({placeholder, name, icon, onChange, value}: InputProps) => {

    return (
        <div className={s.container}>
            <input type="text" placeholder={placeholder} name={name} onChange={onChange} value={value} />
        </div>
    );
};
