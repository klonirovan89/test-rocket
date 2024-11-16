import {Stars} from "../stars/Stars";
import {Price} from "../price/Price";
import {BookingButton} from "../bookingButton/BookingButton";
import {Icon} from "../../components";
import {HotelsType} from "../../consts/types";

import s from './Hotel.module.scss';

type HotelProps = {
    hotel: HotelsType;
}

export const Hotel = ({hotel}: HotelProps) => {

    return (
        <div className={s.hotel}>
            <div className={s.info}>
                <div className={s.details}>
                    <h2>{hotel.name}</h2>
                    <div className={s.rating_location}>
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
            <div className={s.booking}>
                <Price price={hotel.price}/>
                <BookingButton/>
            </div>
        </div>
    );
};
