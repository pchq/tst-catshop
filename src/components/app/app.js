import React from 'react';

import Header from '../header';
import Catalog from '../catalog';

import './app.scss';

const App = () => {
    const products = [
        {
            id: 1, 
            filling: 'с фуа-гра', 
            note: <span>10 порций<br/> мышь в подарок</span>,
            weight: '0,5',
            description: 'Печень утки разварная с артишоками.',
            disabled: false,
        },
        {
            id: 2, 
            filling: 'с рыбой', 
            note: <span>40 порций<br/> 2 мыши в подарок</span>,
            weight: '2',
            description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            disabled: false,
        },
        {
            id: 3, 
            filling: 'с курой', 
            note: <span>100 порций<br/> 5 мышей в подарок<br/> заказчик доволен</span>,
            weight: '5',
            description: 'Филе из цыплят с трюфелями в бульоне.',
            disabled: true,
        }
    ];
    
    return (
        <main className="app">
            <div className="app__inner">
                <Header/>
                <Catalog products={products}/>
            </div>
        </main>
    )
};

export default App;
