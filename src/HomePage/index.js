import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <ul>
        <li><Link to="/trending">Trending Hot Sauce</Link></li>
        <li><Link to="/top">Top Rated Hot Sauce</Link></li>
    </ul>
);

export default Home;