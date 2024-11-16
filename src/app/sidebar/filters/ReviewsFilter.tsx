import React from 'react';
import {Input} from "../../../components";
import {FilterProps} from "../../../consts/types";

import s from "./Filter.module.scss";

export const ReviewsFilter = ({value, type, title, onChange}: FilterProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(+event.currentTarget.value)) {
            return;
        }

        onChange(type, event.currentTarget.value);
    }

    return (
        <div className={s.container}>
            <h3>{title}</h3>
            <Input
                value={value || ''}
                placeholder={'Например, от 10'}
                name={type}
                onChange={handleChange}
            />
        </div>
    );
};
