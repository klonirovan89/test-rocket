import React from 'react';
import {Stars} from "../stars/Stars";
import {Price} from "../price/Price";
import {BookingButton} from "../bookingButton/BookingButton";
import {Icon} from "../../components/icon/Icon";

type HotelProps = {
    hotel: any;
}

export const Hotel = ({hotel}: HotelProps) => {

    return (
        <div>
            <h2>{hotel.name}</h2>
            <Stars stars={hotel.stars}/>
            <p>{hotel.type}</p>
            <p>{hotel.reviewsCount} отзывов</p>
            <Icon iconId={'mapMarker'} height={'13'} width={'9'}/>
            <p>{hotel.country}</p>
            <p>{hotel.description}</p>
            <Price price={hotel.price}/>
            <BookingButton isBooked={hotel.isBooked}/>
        </div>
    );
};
