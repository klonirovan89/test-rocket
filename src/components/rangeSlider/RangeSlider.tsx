import React, {useEffect, useState} from 'react';
import {Input} from "../input/Input";
import {Prices} from "../../consts/types";
import * as RadixSlider from '@radix-ui/react-slider'

import s from './RangeSlider.module.scss';

type RangeSliderProps = {
    value: Prices;
    onChange: (value: Prices) => void;
}

export const RangeSlider = ({value, onChange}: RangeSliderProps) => {
    const [minValue, setMinValue] = useState(value[0]);
    const [maxValue, setMaxValue] = useState(value[1]);

    const defaultValue = [0, 100500];
    const handleMinValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinValue(+event.currentTarget.value);

        onChange([+event.currentTarget.value, maxValue]);
    }

    const handleMaxValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+event.currentTarget.value);

        onChange([minValue, +event.currentTarget.value]);
    }

    const handleRangeSliderChange = (event: number[]) => {
        setMinValue(event[0]);
        setMaxValue(event[1]);

        onChange([event[0], event[1]]);
    }

    useEffect(() => {
        setMinValue(value[0]);
        setMaxValue(value[1]);
    }, [value]);

    return (
        <div className={s.container}>
            <div className={s.rangeInput}>
                <Input
                placeholder={`от ${defaultValue[0].toLocaleString('ru-RU')} ₽`}
                name={'minValue'}
                onChange={handleMinValueChange}
                value={minValue ?? ''}
            />
                <span></span>
                <Input
                    placeholder={`от ${defaultValue[1].toLocaleString('ru-RU')} ₽`}
                    name={'maxValue'}
                    onChange={handleMaxValueChange}
                    value={maxValue ?? ''}
                />
            </div>
            <RadixSlider.Root
                className={s.root}
                max={defaultValue[1]}
                min={defaultValue[0]}
                onValueChange={handleRangeSliderChange}
                step={100}
                value={value.length > 0 ? value : defaultValue}
            >
                <RadixSlider.Track className={s.track}>
                    <RadixSlider.Range className={s.range} />
                </RadixSlider.Track>
                <RadixSlider.Thumb className={s.thumb}>
                    <span>{minValue ?? defaultValue[0]}</span>
                </RadixSlider.Thumb>
                <RadixSlider.Thumb className={s.thumb}>
                    <span>{maxValue ?? defaultValue[1]}</span>
                </RadixSlider.Thumb>
            </RadixSlider.Root>
        </div>
    );
};
