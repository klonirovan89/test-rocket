import {Icon} from "../icon/Icon";
import {clsx} from "clsx";

import s from "./Button.module.scss";

type ButtonProps = {
    disabled?: boolean;
    text: string;
    iconId?: string;
    size?: string;
    color?: string;
    onClick?: () => void;
}

export const Button = ({disabled, text, iconId, size, color = 'transparent', onClick}: ButtonProps) => {

    return (
        <div>
            <button onClick={onClick} disabled={disabled} className={clsx(s.button, size && s[size], color && s[color])}>
                {iconId && <Icon iconId={iconId} height={'16'} width={'16'}/>}
                <span>{text}</span>
            </button>
        </div>
    );
};
