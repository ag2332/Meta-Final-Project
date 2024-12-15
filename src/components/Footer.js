import React from "react";

const Footer = () => {
    return (
        <footer className="">
            <section>
                <div className="company-info">
                    <img/> // insert photo here
                    <p>The finest family owned Mediterranean restaurant, with local ingredients and modern recipes</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Main St, Anytown, USA 12345</li>
                        <li>Email: <br/> info@mediterranean.com</li>
                        <li>Phone: <br/> (123) 456-7890</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">TikTok</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;