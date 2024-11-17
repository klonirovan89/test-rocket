import React, {useState} from 'react';

import {Content} from "./content/Content";
import {Sidebar} from "./sidebar/Sidebar";
import {hotels} from "../consts/constsData";
import {Filter, HotelsType} from "../consts/types";

import s from './App.module.scss';

function App() {

    const defaultFilter: Filter = {
        country: [],
        type: [],
        stars: [],
        reviews: null,
        price: []
};

    const [filter, setFilter] = useState<Filter>(defaultFilter);

    const [hotelsFiltered, setHotelsFiltered] = useState<HotelsType[]>(hotels);

    const onFilterChange = (type: string, value: any) => {
        setFilter({...filter, [type]: value});
    }

    const onFilterApply = () => {
        const filteredHotels = hotels.filter(hotel => {

            if (filter.country.length > 0 && filter.country.findIndex(country => country.label === hotel.country) === -1) return false;

            if (filter.type.length > 0 && filter.type.findIndex(type => type.label === hotel.type) === -1) return false;

            if (filter.stars.length > 0 && filter.stars.findIndex(stars => +stars.label.charAt(0) === hotel.stars) === -1) return false;

            if (filter.reviews && hotel.reviews_amount < filter.reviews ) return false;

            if (
                (filter.price[0] && filter.price[0] > hotel.min_price)
                || (filter.price[1] && filter.price[1] < hotel.min_price)) {
                return false;
            }

            return true;
        });

        setHotelsFiltered(filteredHotels);
    }

    const onFilterClear = () => {
        setFilter(defaultFilter);
        setHotelsFiltered(hotels);
    }

    return (
            <div className={s.container}>
                    <Sidebar
                        currentFilter={filter}
                        onFilterChange={onFilterChange}
                        onFilterApply={onFilterApply}
                        onFilterClear={onFilterClear}
                    />
                    <Content hotels={hotelsFiltered} itemsPerPage={3} onFilterClear={onFilterClear}/>
            </div>
    );
}

export default App;