import {Button} from "../../components";
import {useState} from "react";

export const BookingButton = () => {

const [isBooked, setIsBooked] = useState<boolean>(false);

    return (
        <div>
            {isBooked
                ? <Button
                    text={"Забронировано"}
                    iconId={"сheckMark"}
                    size={"small"}
                    color={'lightGreen'}
                    onClick={() => setIsBooked(!isBooked)}/>
                : <Button
                    text={"Забронировать"}
                    iconId={"calendar"}
                    size={"small"}
                    color={'lightPurple'}
                    onClick={() => setIsBooked(!isBooked)}/>
            }
        </div>
    );
};
