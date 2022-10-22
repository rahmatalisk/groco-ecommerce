import React from 'react';
import './Banner.css'
import background from '../../image/banner-bg.webp'

const Banner = () => {
    return (
        <div id='home' className='banner 'style={{ backgroundImage: `url(${background})` }}>
            <h1>Fresh And <span>Organic</span> Products For Your</h1>
            <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Aliquam Libero Nostrum Veniam Facere Tempore Nisi.</p>
            <button className="button">Shop Now</button>
        </div>
    );
};

export default Banner;