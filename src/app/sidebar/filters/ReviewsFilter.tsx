import React from 'react';
import {FilterProps} from "../../App";
import {Input} from "../../../components/input/Input";

export const ReviewsFilter = ({name, title}: FilterProps) => {

    return (
        <div>
            <h3>{title}</h3>
            <Input placeholder={'Количество отзывов (от)'} name={name} onChange={() => {}}/>
        </div>
    );
};
