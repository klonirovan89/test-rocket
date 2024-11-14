import React from 'react';
import {FilterProps} from "../../App";
import {RangeSlider} from "../../../components/rangeSlider/RangeSlider";

export const PriceFilter = ({name, title}: FilterProps) => {

    return (
        <div>
            <h3>{title}</h3>
            <RangeSlider name={name}/>
        </div>
    );
};
