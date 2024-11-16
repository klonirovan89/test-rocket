import React from 'react';
import {SearchableDropdown} from "../../searchableDropdown/SearchableDropdown";
import {FilterProps} from "../../../consts/types";

export const CountryFilter = ({value, options, type, title, onChange}: FilterProps) => {

    return (
        <div>
            <h3>{title}</h3>
            {options &&
                <SearchableDropdown
                    value={value}
                    options={options}
                    name={type}
                    onChange={(value) => onChange(type, value)}
                />
            }
        </div>
    );
};
