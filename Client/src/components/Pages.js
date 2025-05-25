import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "..";
import { Pagination } from "react-bootstrap";

const Pages = observer(() => {
    const {item} = useContext(Context);
    const pageCount = Math.ceil(item.totalItems / item.limit);
    const pages = [];
    for (let i=0; i < pageCount; i++){
        pages.push(i+1);
    }
    return(
        <Pagination>
            {pages.map(page=> 
                <Pagination.Item 
                key = {page}
                active = {item.page === page} 
                onClick = {() => item.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    )
})

export default Pages;