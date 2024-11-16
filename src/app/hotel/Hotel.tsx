import React from 'react';
import {Stars} from "../stars/Stars";
import {Price} from "../price/Price";
import {BookingButton} from "../bookingButton/BookingButton";
import {Icon} from "../../components/icon/Icon";
import {HotelsType} from "../../consts/types";

import './Hotel.css';

type HotelProps = {
    hotel: HotelsType;
}

export const Hotel = ({hotel}: HotelProps) => {

    return (
        <div className="hotel">
            <div className="info">
                <div className="details">
                    <h2>{hotel.name}</h2>
                    <div className="rating-location">
                        <Stars stars={hotel.stars}/>
                        <p>{hotel.type}</p>
                        <span></span>
                        <p>{hotel.reviewsCount} отзывов</p>
                        <Icon iconId={'mapMarker'} height={'13'} width={'9'}/>
                        <p>{hotel.country}</p>
                    </div>
                </div>
                <p>{hotel.description}</p>
            </div>
            <div className="booking">
                <Price price={hotel.price}/>
                <BookingButton isBooked={hotel.isBooked}/>
            </div>
        </div>
    );
};
