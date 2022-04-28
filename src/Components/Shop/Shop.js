import React, { useEffect, useState } from 'react';
import IndividualItems from '../Individual Items/IndividualItems';
import './Shop.css';
import Packages from '../Packages/Packages';

const Shop = () => {
    const [dataa, setData] = useState([]);
    const [searchText, setSearchText] = useState('');

    const [pageCount, setpageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(3);

    useEffect(() => {
        fetch(`https://mysterious-ravine-14785.herokuapp.com/photos?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                const match = data.filter(item => item.name.toLowerCase().includes(searchText));
                setData(match);
            })
    }, [searchText, page, size]);

    useEffect(() => { // For pagination
        fetch('https://mysterious-ravine-14785.herokuapp.com/photosCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 2);
                setpageCount(pages);
            })
    }, [])

    const textChange = (event) => { // getting search result
        console.log(event.target.value);
        setSearchText(event.target.value);
    }
    return (
        <div>
            <Packages></Packages>
            <h1 className='text-center shop-header container'>To The Wild Life</h1>
            <div className=''>
                <input id='input-text' onChange={textChange} className='my-5' type="text" placeholder='Search pictures..' />
            </div>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {
                    dataa.map(items => <IndividualItems key={items.id} items={items}></IndividualItems>)
                }
            </div>
            <div className='pagination mx-auto justify-content-center'>
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button onClick={() => setPage(number)} className={page === number ? 'selected' : 'button-33'}>{number + 1}</button>)
                }
                <select className='button-33 my-3 m-0' onChange={e => setSize(e.target.value)} name="" id="">
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                </select>
            </div>
        </div>
    );
};

export default Shop;