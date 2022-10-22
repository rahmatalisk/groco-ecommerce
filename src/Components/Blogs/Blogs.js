import React from 'react';
import BlogBox from '../BlogBox/BlogBox';
import blog1 from '../../image/blog-1.jpg'
import blog2 from '../../image/blog-2.jpg'
import blog3 from '../../image/blog-3.jpg'
import './Blogs.css'

const Blogs = () => {
    return (
        <section id='blogs'>
            <div className='container'>
                <div className='features py-5'>
                    <h2 className='heading'>Our<span>Blogs</span></h2>
                </div>
                <div className="blog-content-container">
                    <BlogBox img={blog1}></BlogBox>
                    <BlogBox img={blog2}></BlogBox>
                    <BlogBox img={blog3}></BlogBox>
                </div>

            </div>
        </section>

    );
};

export default Blogs;