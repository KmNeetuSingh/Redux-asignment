import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './redux/actions';

const ItemList = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items);

    const handleAddItem = () => {
        const item = prompt('Enter an item:');
        if (item) {
            dispatch(addItem(item));
        }
    };

    return (
        <div>
            <h1>Item List</h1>
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
