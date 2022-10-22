import React from 'react';
import productimg8 from '../../image/product-8.png'
import productimg1 from '../../image/product-1.png'
import productimg2 from '../../image/product-2.png'
import productimg3 from '../../image/product-3.png'
import productimg4 from '../../image/product-4.png'
import productimg5 from '../../image/product-5.png'
import productimg6 from '../../image/product-6.png'
import productimg7 from '../../image/product-7.png'

import './Products.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

const Products = () => {
    return (
        <section id='product'>
            <div className='container '>
                <div className='features py-5'>
                    <h2 className='heading mb-5'>Our <span>Products</span></h2>
                    <div className="product-container  ">
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
                                <div className="box">
                                    <img src={productimg1} alt="" />
                                    <h3 className="box-heading">Fresh And Organic
                                    </h3>
                                    <div class="price"> $4.99/- - 10.99/- </div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <button className='button'>Add To Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box">
                                    <img src={productimg3} alt="" />
                                    <h3 className="box-heading">Fresh And Organic
                                    </h3>
                                    <div class="price"> $4.99/- - 10.99/- </div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <button className='button'>Add To Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box">
                                    <img src={productimg4} alt="" />
                                    <h3 className="box-heading">Fresh And Organic
                                    </h3>
                                    <div class="price"> $4.99/- - 10.99/- </div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <button className='button'>Add To Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box">
                                    <img src={productimg5} alt="" />
                                    <h3 className="box-heading">Fresh And Organic
                                    </h3>
                                    <div class="price"> $4.99/- - 10.99/- </div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <button className='button'>Add To Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box">
                                    <img src={productimg6} alt="" />
                                    <h3 className="box-heading">Fresh And Organic
                                    </h3>
                                    <div class="price"> $4.99/- - 10.99/- </div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <button className='button'>Add To Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box">
                                    <img src={productimg7} alt="" />
                                    <h3 className="box-heading">Fresh And Organic
                                    </h3>
                                    <div class="price"> $4.99/- - 10.99/- </div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <button className='button'>Add To Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box">
                                    <img src={productimg8} alt="" />
                                    <h3 className="box-heading">Fresh And Organic
                                    </h3>
                                    <div class="price"> $4.99/- - 10.99/- </div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <button className='button'>Add To Cart</button>
                                </div>
                            </SwiperSlide>

                        </Swiper>


                    </div>
                    <div className="product-container  mt-5">
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
                                <div className="box">
                                    <img src={productimg1} alt="" />
                                    <h3 className="box-heading">Fresh And Organic
                                    </h3>
                                    <div class="price"> $4.99/- - 10.99/- </div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <button className='button'>Add To Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box">
                                    <img src={productimg3} alt="" />
                                    <h3 className="box-heading">Fresh And Organic
                                    </h3>
                                    <div class="price"> $4.99/- - 10.99/- </div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <button className='button'>Add To Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box">
                                    <img src={productimg4} alt="" />
                                    <h3 className="box-heading">Fresh And Organic
                                    </h3>
                                    <div class="price"> $4.99/- - 10.99/- </div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <button className='button'>Add To Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box">
                                    <img src={productimg5} alt="" />
                                    <h3 className="box-heading">Fresh And Organic
                                    </h3>
                                    <div class="price"> $4.99/- - 10.99/- </div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <button className='button'>Add To Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box">
                                    <img src={productimg6} alt="" />
                                    <h3 className="box-heading">Fresh And Organic
                                    </h3>
                                    <div class="price"> $4.99/- - 10.99/- </div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <button className='button'>Add To Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box">
                                    <img src={productimg7} alt="" />
                                    <h3 className="box-heading">Fresh And Organic
                                    </h3>
                                    <div class="price"> $4.99/- - 10.99/- </div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <button className='button'>Add To Cart</button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="box">
                                    <img src={productimg8} alt="" />
                                    <h3 className="box-heading">Fresh And Organic
                                    </h3>
                                    <div class="price"> $4.99/- - 10.99/- </div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                    </div>
                                    <button className='button'>Add To Cart</button>
                                </div>
                            </SwiperSlide>

                        </Swiper>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;