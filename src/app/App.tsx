import React, {useState} from 'react';

import {Content} from "./content/Content";
import {Sidebar} from "./sidebar/Sidebar";
import {hotels} from "../consts/constsData";

import './App.css';
import {CheckboxType, HotelsType} from "../consts/types";

function App() {

    const defaultFilter: Filter = {
        country: [],
        type: [],
        stars: [],
        reviews: null,
        price: {
            minValue: null,
            maxValue: null
        }
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

            if (filter.reviews && hotel.reviewsCount < filter.reviews ) return false;

            if (
                (filter.price.minValue && filter.price.minValue > hotel.price)
                || (filter.price.maxValue && filter.price.maxValue < hotel.price)) {
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
        <div className="container">
            <Sidebar
                currentFilter={filter}
                onFilterChange={onFilterChange}
                onFilterApply={onFilterApply}
                onFilterClear={onFilterClear}
            />
            <Content hotels={hotelsFiltered} itemsPerPage={3}/>
        </div>
    );
}

export default App;

export type Prices = {
    minValue: number | null;
    maxValue: number | null;
}

export type Filter = {
    country: CheckboxType[];
    type: CheckboxType[];
    stars: CheckboxType[];
    reviews: number | null;
    price: Prices;
}