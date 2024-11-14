import React from 'react';

type CheckboxProps = {
    name: string;
    label: string;
    id: number;
    isChecked: boolean;
    onChange: () => void;
}

export const Checkbox = ({name, label, id, isChecked, onChange}: CheckboxProps) => {

    return (
        <div>
            <input type="checkbox" name={name} id={`${name}-${id}`} onChange={onChange} defaultChecked={isChecked}/>
            <label htmlFor={`${name}-${id}`}>{label}</label>
        </div>
    );
};
