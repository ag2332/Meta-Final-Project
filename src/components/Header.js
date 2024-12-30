import React from "react";
import { Link } from "react-router-dom";
import mainImg from "../images/restaurantfood.webp";

const Header = () => {
    return (
        <header className="header">
            <section>
                <div>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                        The finest mediterranean food from a family-owned restaurant,
                        with the highest quality ingredients and traditional recipes
                    </p>
                    <Link>
                        <button aria-label="On Click">Reserve a table</button>
                    </Link>
                </div>
                <div className="banner-img">
                    <img src={mainImg} alt=""/>
                </div>
            </section>
        </header>
    );
};

export default Header;