import React from 'react';
import {Button} from "../../components/button/Button";
import {CountryFilter} from "./filters/CountryFilter";
import {TypeFilter} from "./filters/TypeFilter";
import {StarsFilter} from "./filters/StarsFilter";
import {ReviewsFilter} from "./filters/ReviewsFilter";
import {PriceFilter} from "./filters/PriceFilter";
import {countries, stars, types} from "../../consts/constsData";
import {Filter} from "../App";

type SidebarProps = {
    onFilterChange: (type: string, value: any) => void;
    onFilterApply: () => void;
    onFilterClear: () => void;
    currentFilter: Filter;
}

export const Sidebar = ({onFilterChange, onFilterApply, onFilterClear, currentFilter}: SidebarProps) => {

    return (
        <div>
            <CountryFilter value={currentFilter.country} options={countries} type={"country"} title={"Страна"} onChange={onFilterChange}/>
            <TypeFilter value={currentFilter.type} options={types} type={"type"} title={"Тип"} onChange={onFilterChange}/>
            <StarsFilter value={currentFilter.stars} options={stars} type={"stars"} title={"Количество звезд"} onChange={onFilterChange}/>
            <ReviewsFilter value={currentFilter.reviews} type={"reviews"} title={"Количество отзывов (от)"} onChange={onFilterChange}/>
            <PriceFilter value={currentFilter.price} type={"price"} title={"Цена"} onChange={onFilterChange}/>
            <Button text={'Применить фильтр'} color={'purple'} onClick={onFilterApply}/>
            <Button text={'Очистить фильтр'} iconId={'cross'} color={'transparent'} onClick={onFilterClear}/>
        </div>
    );
};
