import {useEffect, useState} from 'react';
import {CheckboxGroup} from "../checkboxGroup/CheckboxGroup";
import {Search} from "../../components/search/Search";
import {CheckboxType} from "../App";

type SearchableDropdownProps = {
    options: string[];
    name: string;
}
export const SearchableDropdown = ({options, name}: SearchableDropdownProps) => {

    const [search, setSearch] = useState('');
    const [checkboxOptions, setCheckboxOptions] = useState<CheckboxType[]>([]);

    const filteredOptions = checkboxOptions.filter(
        option => option.label.toLowerCase().includes(search.toLowerCase())
    );

    const onCheckboxChange = (value: string) => {
        const checkboxIndex = checkboxOptions.findIndex(option => option.label === value);
        if (!checkboxIndex) return;

        checkboxOptions[checkboxIndex].isChecked = !checkboxOptions[checkboxIndex].isChecked;
        setCheckboxOptions([...checkboxOptions]);
    };

    useEffect(() => {
        setCheckboxOptions(options.map(option => ({label: option, isChecked: false})));
    }, [options]);

    return (
        <div>
            <Search onSearch={setSearch} />

            <div className="options">
                <CheckboxGroup options={filteredOptions} name={name} onChange={onCheckboxChange}/>
            </div>
        </div>
    );
};
