import React from 'react';
import {Icon} from "../../components/icon/Icon";


type StarsProps = {
    stars: number;
}

export const Stars = ({stars}: StarsProps) => {


    return (
        <div>
            {Array.from({ length: 5 }, (_, index) =>
                index < stars ? (
                    <Icon iconId={'starFilled'} height={'24'} width={'24'}/>
                ) : (
                    <Icon iconId={'starEmpty'} height={'24'} width={'24'}/>
                )
            )}
        </div>
    );
};
