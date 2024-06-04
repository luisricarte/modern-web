import { useState, useEffect } from 'react';

const List = ({getItems}) => {
    const [items, setItems] = useState([]);

    useEffect(()=>{
        getItems().then((result) => setItems(result))
    }, [getItems]);

    return (
        <>
        {
            items && items.slice(0,10).map((item) => <p key={item.id}>{
                item?.title || item?.name
            }</p>)
        }
        </>
    )
}

export default List;