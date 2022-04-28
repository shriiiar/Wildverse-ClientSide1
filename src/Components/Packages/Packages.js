import React, { useEffect, useState } from 'react';
import './Packages.css';
import IndividualPackages from '../IndividualPackages/IndividualPackages';

const Packages = () => {
    const [data, setData] = useState([]);
    useEffect(() => { // fetching data from fakePackages.JSON
        fetch('https://mysterious-ravine-14785.herokuapp.com/packages')
            .then(res => res.json())
            .then(newData => setData(newData));
    }, []);
    return (
        <div id='shop'>
            <h1 className='text-center shop-header container'>Shop <hr /></h1>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {
                    data.map(items => <IndividualPackages key={items.id} items={items}></IndividualPackages>)
                }
            </div>
        </div>
    );
};

export default Packages;