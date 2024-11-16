import React from 'react';
import {Hotel} from "../hotel/Hotel";
import {HotelsType} from "../../consts/types";
import ReactPaginate from "react-paginate";

type ContentProps = {
    hotels: HotelsType[];
    itemsPerPage: number;
}

export const Content = ({hotels, itemsPerPage}: ContentProps) => {

    const [itemOffset, setItemOffset] = React.useState(0);

    const hotelsOnPage = hotels.slice(itemOffset, itemOffset + itemsPerPage);
    const totalPages = Math.ceil(hotels.length / itemsPerPage);

    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * itemsPerPage) % hotels.length;

        setItemOffset(newOffset);
    };

    return (
        <div>
            {hotelsOnPage.map(hotel => <Hotel hotel={hotel} key={hotel.id}/>)}

            <ReactPaginate
                breakLabel="..."
                nextLabel="Следующая >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                pageCount={totalPages}
                previousLabel="< Назад"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};