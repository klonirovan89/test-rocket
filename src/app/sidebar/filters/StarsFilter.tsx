import React, {useEffect, useState} from 'react';
import {CheckboxGroup} from "../../checkboxGroup/CheckboxGroup";
import {CheckboxType, FilterProps} from "../../../consts/types";

export const StarsFilter = ({value, options, type, title, onChange}: FilterProps) => {

    const [checkboxOptions, setCheckboxOptions] = useState<CheckboxType[]>(value);

    const onCheckboxChange = (value: string) => {
        const checkboxIndex = checkboxOptions.findIndex(option => option.label === value);
        if (checkboxIndex === -1) return;

        checkboxOptions[checkboxIndex].isChecked = !checkboxOptions[checkboxIndex].isChecked;
        setCheckboxOptions([...checkboxOptions]);

        onChange(type, checkboxOptions.filter(option => option.isChecked));
    };

    useEffect(() => {
        if (!options) return;

        setCheckboxOptions(options.map(option => {
            const isChecked = value.findIndex((value: CheckboxType) => value.label === option) !== -1;

            return {label: option, isChecked: isChecked};
        }));
    }, [options, value]);

    return (
        <div>
            <h3>{title}</h3>
            {options && <CheckboxGroup options={checkboxOptions} name={type} onChange={onCheckboxChange}/>}
        </div>
    );
};
