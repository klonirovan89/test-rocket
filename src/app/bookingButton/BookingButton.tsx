import React from 'react';
import {Button} from "../../components/button/Button";

type BookingButtonProps = {
    isBooked: boolean;
}

export const BookingButton = ({isBooked}: BookingButtonProps) => {

    return (
        <div>
            {isBooked
                ? <Button disabled={true} text={"Забронировано"} iconId={"сheckMark"} size={"small"}/>
                : <Button text={"Забронировать"} iconId={"calendar"} size={"small"}/>
            }
        </div>
    );
};
