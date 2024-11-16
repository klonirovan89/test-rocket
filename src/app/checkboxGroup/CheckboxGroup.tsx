import React from 'react';
import {Checkbox} from "../../components/checkbox/Checkbox";
import {CheckboxType} from "../../consts/types";

type CheckboxGroupProps = {
    name: string;
    options: CheckboxType[];
    onChange: (value: string) => void;
}

export const CheckboxGroup = ({name, options, onChange}: CheckboxGroupProps) => {

    return (
        <div>
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
