import s from './Price.module.scss';

type PriceProps = {
    price: string;
}

export const Price = ({price}: PriceProps) => {

    return (
        <div className={s.price}>
            <h3>{price} ₽</h3>
            <p>Цена за 1 ночь</p>
        </div>
    );
};
