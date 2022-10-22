import React from 'react';

import picimg1 from '../../image/pic-1.png'
import picimg2 from '../../image/pic-2.png'
import picimg3 from '../../image/pic-3.png'
import picimg4 from '../../image/pic-4.png'

import './Review.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

const Review = () => {
    return (
        <section id='review'>
            <div className="container">
                <div className='features '>
                    <h2 className='heading mb-5'>Customer's<span>Review</span></h2>
                </div>
                <div className="review-container  pb-5">
                    <Swiper
                        rewind={true}
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                          clickable: true,
                        }}
                        breakpoints={{
                          640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                          },
                          768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                          }
                        }}
                        modules={[Navigation]}
                        className="mySwiper" 

                    >
                        <SwiperSlide>
                            <div className="box p-0 px-3">
                                <img src={picimg1} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur neque maxime.</p>
                                <h3 className="box-heading">Jhon Deo
                                </h3>
                                
                                <div class="stars pb-3">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box p-0 px-3">
                                <img src={picimg2} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur neque maxime.</p>
                                <h3 className="box-heading">Jhon Deo
                                </h3>
                                
                                <div class="stars pb-3">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box p-0 px-3">
                                <img src={picimg3} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur neque maxime.</p>
                                <h3 className="box-heading">Jhon Deo
                                </h3>
                                
                                <div class="stars pb-3">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box p-0 px-3">
                                <img src={picimg4} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur neque maxime.</p>
                                <h3 className="box-heading">Jhon Deo
                                </h3>
                                
                                <div class="stars pb-3">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            
                            </div>
                        </SwiperSlide>
                        
                        

                    </Swiper>


                </div>
            </div>
        </section>
    );
};

export default Review;