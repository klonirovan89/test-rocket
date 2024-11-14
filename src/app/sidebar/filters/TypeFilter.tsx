import React, {useEffect, useState} from 'react';
import {CheckboxType, FilterProps} from "../../App";
import {CheckboxGroup} from "../../checkboxGroup/CheckboxGroup";


export const TypeFilter = ({options, name, title}: FilterProps) => {

    const [checkboxOptions, setCheckboxOptions] = useState<CheckboxType[]>([]);

    const onCheckboxChange = (value: string) => {
        const checkboxIndex = checkboxOptions.findIndex(option => option.label === value);
        if (!checkboxIndex) return;

        checkboxOptions[checkboxIndex].isChecked = !checkboxOptions[checkboxIndex].isChecked;
        setCheckboxOptions([...checkboxOptions]);
    };

    useEffect(() => {
        if (!options) return;

        setCheckboxOptions(options.map(option => ({label: option, isChecked: false})));
    }, [options]);

    return (
        <div>
            <h3>{title}</h3>
            {options && <CheckboxGroup options={checkboxOptions} name={name} onChange={onCheckboxChange}/>}
        </div>
    );
};
