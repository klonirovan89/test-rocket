import React from 'react';

type InputProps = {
    placeholder: string;
    name: string;
    icon?: string;
    isClearable?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({placeholder, name, icon, isClearable, onChange}: InputProps) => {

    return (
        <div>
            <input type="text" placeholder={placeholder} name={name} onChange={onChange}/>
        </div>
    );
};
