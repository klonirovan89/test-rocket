import React from 'react';
import {Hotel} from "../hotel/Hotel";

type ContentProps = {
    hotels: any[];
}

export const Content = ({hotels}: ContentProps) => {
    return (
        <div>
            {hotels.map(hotel => <Hotel hotel={hotel} key={hotel.id}/>)}
        </div>
    );
};