import React from 'react';

type PriceProps = {
    price: number;
}

export const Price = ({price}: PriceProps) => {

    return (
        <div>
            <h3>{price} ₽</h3>
            <p>Цена за 1 ночь</p>
        </div>
    );
};
