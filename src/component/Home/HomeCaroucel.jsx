import React from 'react';
import rightArrow from "../../assets/right-arrow.png"
import leftArrow from "../../assets/left-arrow.png"
import { Link } from 'react-router-dom';

function HomeCarousel() {
    const items = [
        {
            id: 1,
            img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/73c4a613-c354-4bd5-9df8-e0cc7705c467/nike-just-do-it.jpg",
        },
        {
            id: 2,
            img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/32a8910a-96a5-4e36-9fbd-b9b729f56b09/nike-just-do-it.png",
        },
        {
            id: 3,
            img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/59a78130-6d08-4bb7-ad13-0d4f8d03e620/nike-just-do-it.png",
        },
        {
            id: 4,
            img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/15f840ee-ecb2-4d30-af30-6ac8893947ce/nike-just-do-it.png",
        },
        {
            id: 5,
            img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/f1c1e89f-6b14-41e0-80a6-a1332bf01ccc/nike-just-do-it.png",
        },
        {
            id: 6,
            img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/4150ed95-006a-4e59-9fec-6503c0b1f752/nike-just-do-it.png",
        },
        {
            id: 7,
            img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/548ccaf6-1b5f-421c-8234-ef0b56b6aa1b/nike-just-do-it.png",
        },
        {
            id: 8,
            img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/f42ab353-78a0-4162-85f7-9c6d9cad5afe/nike-just-do-it.png",
        },
        {
            id: 9,
            img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1519,c_limit/c8263ba6-42f3-47c8-9580-c362736367ba/nike-just-do-it.png",
        },
        
    ];

    return (
        <div className='caroucel'>
            <p className='Classics-Spotlight'>Classics Spotlight</p>
        <div className="carousel-container">
            <button
                className="scroll-button left"
                onClick={() => {
                    document.querySelector('.carousel').scrollBy({
                        left: -300,
                        behavior: 'smooth',
                    });
                }}
            >
                <img src={leftArrow} alt="" />
            </button>
            <div className="carousel">
                {items.map((item, index) => (
                    <div key={index} className="carousel-item">
                       <Link to={`/selectHomeImage/${item.id}/`}> <img src={item.img} alt={`Item ${item.id}`} className="carousel-image" /></Link>
                    </div>
                ))}
            </div>
            <button
                className="scroll-button right"
                onClick={() => {
                    document.querySelector('.carousel').scrollBy({
                        left: 300,
                        behavior: 'smooth',
                    });
                }}
            >
               <img src={rightArrow} alt="" />
            </button>
        </div>
        </div>
    );
}

export default HomeCarousel;
