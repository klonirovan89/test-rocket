import {useEffect, useState} from 'react';
import {Hotel} from "../hotel/Hotel";
import {HotelsType} from "../../consts/types";
import ReactPaginate from "react-paginate";
import empty from './../../assets/images/noData.png';
import {Button} from "../../components";

import s from './Content.module.scss';

type ContentProps = {
    hotels: HotelsType[];
    itemsPerPage: number;
    onFilterClear: () => void;
}

export const Content = ({hotels, itemsPerPage, onFilterClear}: ContentProps) => {

    const [itemOffset, setItemOffset] = useState(0);

    const hotelsOnPage = hotels.slice(itemOffset, itemOffset + itemsPerPage);
    const totalPages = Math.ceil(hotels.length / itemsPerPage);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % hotels.length;

        setItemOffset(newOffset);
    };

    useEffect(() => {
        if (totalPages === 1 && itemOffset !== 0) {
            setItemOffset(0);
        }
    }, [totalPages, itemOffset]);

    return (
        <div>
            {hotelsOnPage.length > 0 ?
                hotelsOnPage.map((hotel, index) => <Hotel hotel={hotel} key={index}/>)
                :
                <div className={s.empty}>
                    <img src={empty} alt={'No results'} className={s.img}/>
                    <h3>По данным параметрам ничего не найдено</h3>
                    <p>Попробуйте изменить параметры фильтрации
                        или вернуться в общий каталог</p>
                    <Button
                        text={"Очистить фильтр"}
                        color={'lightPurple'}
                        onClick={onFilterClear}/>
                </div>
            }
            <ReactPaginate
                breakLabel="..."
                nextLabel="Следующая >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={totalPages}
                previousLabel="< Назад"
                renderOnZeroPageCount={null}
                containerClassName={s.pagination}
                pageClassName={s.page_item}
                pageLinkClassName={s.page_link}
                previousClassName={s.prev_item}
                previousLinkClassName={s.prev_link}
                nextClassName={s.next_item}
                nextLinkClassName={s.next_link}
                breakClassName={s.break_item}
                breakLinkClassName={s.break_link}
                activeClassName={s.active}
                disabledClassName={s.disabled}
            />
        </div>
    );
};