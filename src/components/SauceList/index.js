import React from 'react';

const SauceList = ({sauces, deleteSauce}) => (
    <ol>
        {sauces.map(sauce =>
            <li key={sauce._id}>{sauce.name} <strong>{sauce.rating}</strong> 
            <button onClick={deleteSauce.bind(this, sauce)}>Delete</button>
            </li>
        )}
    </ol>
)

export default SauceList;