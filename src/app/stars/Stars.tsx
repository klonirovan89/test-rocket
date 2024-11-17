import {Icon} from "../../components";

import s from './Stars.module.scss';

type StarsProps = {
    stars: number;
}

export const Stars = ({stars}: StarsProps) => {

    return (
        <div className={s.stars}>
            {Array.from({ length: 5 }, (_, index) =>
                index < stars ? (
                    <Icon iconId={'starFilled'} height={'14'} width={'14'} key={index}/>
                ) : (
                    <Icon iconId={'starEmpty'} height={'14'} width={'14'} key={index}/>
                )
            )}
        </div>
    );
};
