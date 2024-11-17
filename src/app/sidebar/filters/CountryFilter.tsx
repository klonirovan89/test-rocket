import {SearchableDropdown} from "../../searchableDropdown/SearchableDropdown";
import {FilterProps} from "../../../consts/types";

import s from './Filter.module.scss';

export const CountryFilter = ({value, options, type, title, onChange}: FilterProps) => {

    return (
        <div className={s.container}>
            <h3>{title}</h3>
            {options &&
                <SearchableDropdown
                    value={value}
                    options={options}
                    name={type}
                    onChange={(value) => onChange(type, value)}
                />}
        </div>
    );
};
