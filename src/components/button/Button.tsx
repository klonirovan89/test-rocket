import React from 'react';
import {Icon} from "../icon/Icon";

type ButtonProps = {
    disabled?: boolean;
    text: string;
    iconId?: string;
    size?: string;
    color?: string;
}

export const Button = ({disabled, text, iconId, size = '', color = 'transparent'}: ButtonProps) => {

    return (
        <div>
            <button disabled={disabled} className={`button ${size} ${color}`}>
                {iconId && <Icon iconId={iconId} height={'16'} width={'16'}/>}
                <span>{text}</span>
            </button>
        </div>
    );
};
