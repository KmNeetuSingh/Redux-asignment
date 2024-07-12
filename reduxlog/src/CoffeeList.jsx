import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoffee } from './redux/actions';

const CoffeeList = () => {
    const dispatch = useDispatch();
    const { loading, coffeeList, error } = useSelector(state => state);

    useEffect(() => {
        dispatch(fetchCoffee());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Coffee List</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {coffeeList.map(coffee => (
                    <div key={coffee.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
                        <h2>{coffee.name}</h2>
                        <p>{coffee.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoffeeList;
