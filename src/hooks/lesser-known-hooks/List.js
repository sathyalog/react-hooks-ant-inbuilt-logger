import React, {useState, useEffect} from 'react';

function List({getItems}) {
    const [items, setItems] = useState([])
    useEffect(() => {
        setItems(getItems(5));
        console.log('Updating items')
    },[getItems])
    return items.map((item) => <span key={item}> &nbsp;{item} &nbsp;</span>)
}

export default List;