import React from 'react';
import {RangeSlider} from "../../../components";
import {FilterProps} from "../../../consts/types";

import s from "./Filter.module.scss";

export const PriceFilter = ({value, title, type, onChange}: FilterProps) => {

    return (
        <div className={s.container}>
            <h3>{title}</h3>
            <RangeSlider value={value} onChange={(value) => onChange(type, value)}/>
        </div>
    );
};
