import React from 'react';
import {RangeSlider} from "../../../components/rangeSlider/RangeSlider";
import {FilterProps} from "../../../consts/types";

export const PriceFilter = ({value, title, type, onChange}: FilterProps) => {

    return (
        <div>
            <h3>{title}</h3>
            <RangeSlider value={value} onChange={(value) => onChange(type, value)}/>
        </div>
    );
};
