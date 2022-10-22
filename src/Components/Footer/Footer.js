import React from 'react';
import './Footer.css'
import paymentimg from '../../image/payment.png'

const Footer = () => {
    return (
        <footer className='container'>
            <div className="footer-content py-5">
                <div className="footer-box">
                    <h3> groco <i class="fas fa-shopping-basket"></i> </h3>
                    <p>Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Aliquam, Saepe.</p>
                    <div class="share">
                        <div class="fab fa-facebook-f"></div>
                        <div class="fab fa-twitter"></div>
                        <div class="fab fa-instagram"></div>
                        <div class="fab fa-linkedin"></div>
                    </div>
                </div>
                <div className="footer-box">
                    <h3>contact info</h3>
                    <div>
                        <i class="fas fa-phone"></i> +123-456-7890
                    </div>
                    <div>
                        <i class="fas fa-phone"></i> +111-222-3333
                    </div>
                    <div>
                        <i class="fas fa-envelope"></i> shaikhanas@gmail.com
                    </div>
                    <div>
                        <i class="fas fa-map-marker-alt"></i> mumbai, india - 400104
                    </div>
                </div>
                <div className="footer-box">
                    <h3>Quick Links</h3>
                    <div> <i class="fas fa-arrow-right"></i> home </div>
                    <div> <i class="fas fa-arrow-right"></i> features </div>
                    <div> <i class="fas fa-arrow-right"></i> products </div>
                    <div> <i class="fas fa-arrow-right"></i> categories </div>
                    <div> <i class="fas fa-arrow-right"></i> review </div>
                    <div> <i class="fas fa-arrow-right"></i> blogs </div>
                </div>
                <div className="footer-box">
                    <h3>newsletter</h3>
                    <p>subscribe for latest updates</p>
                    <input type="email" placeholder="your email" class="email"/>
                        <input type="submit" value="subscribe" class="button my-4" />
                            <img src={paymentimg} class="payment-img" alt=""/>
                            </div>

                        </div>
                        <p className='text-center'>Created By <span style={{ color: 'var(--orange)' }}>Mr. Rahmat Ali</span> | All Rights Reserved</p>
                    </footer>
                    );
};

                    export default Footer;