import {useEffect, useState} from 'react';
import {CheckboxGroup} from "../checkboxGroup/CheckboxGroup";
import {Search} from "../../components/search/Search";
import {CheckboxType} from "../../consts/types";

type SearchableDropdownProps = {
    value: CheckboxType[];
    options: string[];
    name: string;
    onChange: (options: CheckboxType[]) => void;
}
export const SearchableDropdown = ({value, options, name, onChange}: SearchableDropdownProps) => {

    const [search, setSearch] = useState('');
    const [checkboxOptions, setCheckboxOptions] = useState<CheckboxType[]>(value);

    const filteredOptions = checkboxOptions.filter(
        option => option.label.toLowerCase().includes(search.toLowerCase())
    );

    const onCheckboxChange = (value: string) => {
        const checkboxIndex = checkboxOptions.findIndex(option => option.label === value);
        if (checkboxIndex === -1) return;

        checkboxOptions[checkboxIndex].isChecked = !checkboxOptions[checkboxIndex].isChecked;
        setCheckboxOptions([...checkboxOptions]);

        onChange(checkboxOptions.filter(option => option.isChecked));
    };

    useEffect(() => {
        setCheckboxOptions(options.map(option => {
            const isChecked = value.findIndex((value: CheckboxType) => value.label === option) !== -1;

            return {label: option, isChecked: isChecked};
        }));
    }, [options, value]);

    return (
        <div>
            <Search onSearch={setSearch} />

            <div className="options">
                <CheckboxGroup options={filteredOptions} name={name} onChange={onCheckboxChange}/>
            </div>
        </div>
    );
};
