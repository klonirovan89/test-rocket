import React from 'react';
import {Checkbox} from "../../components";
import {CheckboxType} from "../../consts/types";
import {clsx} from "clsx";

import s from "./CheckboxGroup.module.scss";


type CheckboxGroupProps = {
    name: string;
    options: CheckboxType[];
    onChange: (value: string) => void;
    className?: string;
}

export const CheckboxGroup = ({name, options, onChange, className}: CheckboxGroupProps) => {

    return (
        <div className={clsx(s.container, className)}>
            {options.map(
                (option, index) =>
                    <Checkbox
                        id={index}
                        name={name}
                        label={option.label}
                        isChecked={option.isChecked}
                        key={index}
                        onChange={() => onChange(option.label)}
                    />
            )}
        </div>
    );
};
