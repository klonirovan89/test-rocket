import React from 'react';

import {Content} from "./content/Content";
import {Sidebar} from "./sidebar/Sidebar";

import './App.css';

function App() {

    const hotels = [
        {
            id: 1,
            name: 'Marina Inn',
            description: 'Этот 4-звездочный отель расположен в центре города. На его территории есть бассейн с терассой и сауна. Из номеров открывается вид на море.',
            price: 4600,
            country: 'Албания',
            type: 'Отель',
            stars: 3,
            isBooked: true,
            reviewsCount: 23,
        },
        {
            id: 2,
            name: 'Mondrian Suites',
            description: 'Этот 2-звездочный отель расположен в центре города.',
            price: 2600,
            country: 'Азербайджан',
            type: 'Апартаменты',
            stars: 2,
            isBooked: false,
            reviewsCount: 4,
        },
        {
            id: 3,
            name: 'The Ritz',
            description: 'Этот 3-звездочный отель расположен в центре города.',
            price: 3500,
            country: 'Австралия',
            type: 'Отель',
            stars: 4,
            isBooked: false,
            reviewsCount: 5,
        },
    ];

    return (
        <div className="container">
            <Sidebar/>
            <Content hotels={hotels}/>
        </div>
    );
}

export default App;


export type FilterProps = {
    name: string,
    title: string,
    options?: string[],
};

export type CheckboxType = {
    label: string,
    isChecked: boolean,
}