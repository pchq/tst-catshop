import React from 'react';

import Product from '../product';

import './catalog.scss';

const Catalog = ({products}) => {

    const elements = products.map((item) => {
        const {id, ...data} = item;
        return (
            <Product key={id} data={data}/>
        )
    });
        
    return (
        <section className="catalog">
            { elements }
        </section>
    )
};

export default Catalog;