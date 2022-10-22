import React from 'react';
import './Features.css'
import featureimg1 from '../../image/feature-img-1.png'
import featureimg2 from '../../image/feature-img-2.png'
import featureimg3 from '../../image/feature-img-3.png'

const Features = () => {
    return (
        <section id='feature'>
            <div className='container'>
                <div className='features py-5'>
                    <h2 className='heading'>Our <span>Features</span></h2>
                    <div className="feature-container ">
                        <div className="box">
                            <img src={featureimg1} alt="" />
                            <h3 className="box-heading">Fresh And Organic
                            </h3>
                            <p>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Deserunt, Earum!</p>
                            <button className='button'>Read More</button>
                        </div>
                        <div className="box">
                            <img src={featureimg2} alt="" />
                            <h3 className="box-heading">Free Delivery

                            </h3>
                            <p>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Deserunt, Earum!</p>
                            <button className='button'>Read More</button>
                        </div>
                        <div className="box">
                            <img src={featureimg3} alt="" />
                            <h3 className="box-heading">Easy Payments
                            </h3>
                            <p>Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Deserunt, Earum!</p>
                            <button className='button'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Features;