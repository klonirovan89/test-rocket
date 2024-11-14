import React from 'react';
import {FilterProps} from "../../App";
import {SearchableDropdown} from "../../searchableDropdown/SearchableDropdown";

export const CountryFilter = ({options, name, title}: FilterProps) => {

    return (
        <div>
            <h3>{title}</h3>
            {options && <SearchableDropdown options={options} name={name}/>}
        </div>
    );
};
