import React from 'react';
import { Link } from 'react-router-dom';

const Trending = () => (
    <div>
        <h1>Trending Hot Sauces</h1>
        <ol>
            <li>Brain Melter</li>
            <li>Atomic Destruction</li>
            <li>Burnanator</li>
        </ol>
        <Link to="/">Back</Link>
    </div>
);

export default Trending;