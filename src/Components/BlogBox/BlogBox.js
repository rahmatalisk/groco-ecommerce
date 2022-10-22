import React from 'react';
import './BlogBox.css'

const BlogBox = ({ img }) => {
    return (
        <div className='blogbox mb-5'>
            <img src={img} alt="" />
            <div className="content bg-white">
                <div class="icons ">
                    <a href="#"> <i class="fas fa-user"></i> by user </a>
                    <a href="#"> <i class="fas fa-calendar"></i> 1st may, 2021 </a>
                </div>
                <h3>Fresh And Organic Vegitables And Fruits </h3>
                <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Veniam, Expedita. </p>
                <button className="button">Read More</button>
            </div>
            
        </div>
    );
};

export default BlogBox;