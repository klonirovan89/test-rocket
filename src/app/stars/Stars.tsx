import React from 'react';
import {Icon} from "../../components/icon/Icon";

import './Stars.css';

type StarsProps = {
    stars: number;
}

export const Stars = ({stars}: StarsProps) => {

    return (
        <div className="stars">
            {Array.from({ length: 5 }, (_, index) =>
                index < stars ? (
                    <Icon iconId={'starFilled'} height={'14'} width={'14'} key={index}/>
                ) : (
                    <Icon iconId={'starEmpty'} height={'14'} width={'14'} key={index}/>
                )
            )}
        </div>
    );
};
