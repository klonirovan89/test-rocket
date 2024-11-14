import React from 'react';
import {Button} from "../../components/button/Button";
import {CountryFilter} from "./filters/CountryFilter";
import {TypeFilter} from "./filters/TypeFilter";
import {StarsFilter} from "./filters/StarsFilter";
import {ReviewsFilter} from "./filters/ReviewsFilter";
import {PriceFilter} from "./filters/PriceFilter";

export const Sidebar = () => {

    const countries = [
        'Австрия',
        'Австралия',
        'Азербайджан',
        'Албания',
        'Алжир',
        'Ангола',
        'Ангилья',
        'Андорра',
        'Антарктида',
        'Аргентина',
    ];

    const types = [
        'Апартаменты',
        'Отель',
    ];

    const stars = [
        '1 звезда',
        '2 звезды',
        '3 звезды',
        '4 звезды',
        '5 звезд',
    ];

    return (
        <div>
            <CountryFilter options={countries} name={"country"} title={"Страна"}/>
            <TypeFilter options={types} name={"type"} title={"Тип"}/>
            <StarsFilter options={stars} name={"stars"} title={"Количество звезд"}/>
            <ReviewsFilter name={"reviews"} title={"Количество отзывов (от)"}/>
            <PriceFilter name={"price"} title={"Цена"}/>

            <Button text={'Применить фильтр'} color={'purple'}/>
            <Button text={'Очистить фильтр'} iconId={'cross'} color={'transparent'}/>
        </div>
    );
};
