"use client";

import Slide from "./Slide";
import Slider from "react-slick";

const Hero = () => {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/banner-1.jpg",
            title: "Trending Item",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "Rs.2000",
        },
        {
            id: 1,
            img: "/banner-2.jpg",
            title: "Trending Accessories",
            mainTitle: "MODERN SUNGLASSES",
            price: "Rs1500",
        },
        {
            id: 2,
            img: "/banner-3.jpg",
            title: "Sale Offer",
            mainTitle: "NEW FASHION SUMMER SALE",
            price: "Rs.3000",
        },
    ];

    return (
        <div>
            <div className="container pt-4 lg:pt-0">
                <Slider {...settings}>
                {slideData.map((item) => (
                    <Slide
                        key={item.id}
                        img={item.img}
                        title={item.title}
                        mainTitle={item.mainTitle}
                        price={item.price}
                    />
                ))}
                </Slider>
            </div>
        </div>
    );
};

export default Hero;