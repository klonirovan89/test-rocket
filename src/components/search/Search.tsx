import React from 'react';
import {Input} from "../input/Input";

type SearchProps = {
    onSearch: (search: string) => void;
}

export const Search = ({onSearch}: SearchProps) => {

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.currentTarget.value);
    };

    return (
        <div>
            <Input
                name={'search'}
                placeholder={'Поиск страны'}
                icon={'search'}
                isClearable={true}
                onChange={onInputChange}
            />
        </div>
    );
};
