import React from 'react';
import bg from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto mt-20" style={{ background: `url(${bg})`, backgroundSize: "cover" }}>
            <div >
                <div className="footer pb-10">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </div>
                <div className="text-center py-10">
                    <p>Copyright © {(new Date().getFullYear())} - All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;