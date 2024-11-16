import React, {useEffect, useState} from 'react';
import MultiRangeSlider, {ChangeResult} from "multi-range-slider-react";
import {Input} from "../input/Input";
import {Prices} from "../../app/App";

type RangeSliderProps = {
    value: Prices;
    onChange: (value: Prices) => void;
}

export const RangeSlider = ({value, onChange}: RangeSliderProps) => {
    const [minValue, setMinValue] = useState(value.minValue);
    const [maxValue, setMaxValue] = useState(value.maxValue);

    const defaultValue = {minValue: 0, maxValue: 10000};

    const handleMinValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (isNaN(+e.currentTarget.value)) {
            return;
        }

        setMinValue(+e.currentTarget.value);

        onChange({minValue: +e.currentTarget.value, maxValue});
    }

    const handleMaxValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value);

        onChange({minValue, maxValue: +e.currentTarget.value});
    }

    const handleRangeSliderChange = (e: ChangeResult) => {
        setMinValue(e.minValue);
        setMaxValue(e.maxValue);

        onChange({minValue: e.minValue, maxValue: e.maxValue});
    }

    useEffect(() => {
        setMinValue(value.minValue);
        setMaxValue(value.maxValue);
    }, [value]);

    return (
        <div>
            <Input
                placeholder={`от ${defaultValue.minValue} ₽`}
                name={'minValue'}
                onChange={handleMinValueChange}
                value={minValue !== null ? minValue : ''}
            />
            -
            <Input
                placeholder={`от ${defaultValue.maxValue} ₽`}
                name={'maxValue'}
                onChange={handleMaxValueChange}
                value={maxValue || ''}
            />
            <MultiRangeSlider
                min={defaultValue.minValue}
                max={defaultValue.maxValue}
                step={100}
                minValue={minValue || defaultValue.minValue}
                maxValue={maxValue || defaultValue.maxValue}
                label={false}
                ruler={false}
                className={'custom-range-slider'}
                onChange={handleRangeSliderChange}
            />
        </div>
    );
};
