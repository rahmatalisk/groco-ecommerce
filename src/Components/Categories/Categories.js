import React from 'react';
import featureimg1 from '../../image/cat-1.png'
import featureimg2 from '../../image/cat-2.png'
import featureimg3 from '../../image/cat-3.png'
import featureimg4 from '../../image/cat-4.png'

import './Categories.css'

const Categories = () => {
    return (
        <section id='catagories'>
        <div className='container'>
            <div className='features py-5'>
                <h2 className='heading'>Product<span>Categories</span></h2>
                <div className="categories-container ">
                    <div className="box">
                        <img src={featureimg1} alt="" />
                        <h3 className="box-heading">Vegitables
                        </h3>
                        <p>Upto 45% Off</p>
                        <button className='button'>Read More</button>
                    </div>
                    <div className="box">
                        <img src={featureimg2} alt="" />
                        <h3 className="box-heading">Vegitables
                        </h3>
                        <p>Upto 45% Off</p>
                        <button className='button'>Read More</button>
                    </div>
                    <div className="box">
                        <img src={featureimg3} alt="" />
                        <h3 className="box-heading">Vegitables
                        </h3>
                        <p>Upto 45% Off</p>
                        <button className='button'>Read More</button>
                    </div>
                    <div className="box">
                        <img src={featureimg4} alt="" />
                        <h3 className="box-heading">Vegitables
                        </h3>
                        <p>Upto 45% Off</p>
                        <button className='button'>Read More</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    );
};

export default Categories;