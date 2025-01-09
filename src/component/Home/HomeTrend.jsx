import React, { useRef, useState } from "react";
import rightArrow from "../../assets/right-arrow.png"
import leftArrow from "../../assets/left-arrow.png"

function HomeTrend() {
  const itemSports = [
    {
      id: 1,
      img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_466,c_limit/a3c971bc-bc0a-4c0c-8bdf-e807a3027e53/nike-just-do-it.jpg",
      p: "Running",
    },
    {
      id: 2,
      img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_466,c_limit/e4695209-3f23-4a05-a9f9-d0edde31b653/nike-just-do-it.jpg",
      p: "Football",
    },
    {
      id: 3,
      img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_466,c_limit/38ed4b8e-9cfc-4e66-9ddd-02a52314eed9/nike-just-do-it.jpg",
      p: "Basketball",
    },
    {
      id: 4,
      img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_466,c_limit/e36a4a2b-4d3f-4d1c-bc75-d6057b7cec87/nike-just-do-it.jpg",
      p: "Training and Gym",
    },
    {
      id: 5,
      img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_466,c_limit/7ce96f81-bf80-45b9-918e-f2534f14015d/nike-just-do-it.jpg",
      p: "Training and Gym",
    },
    {
      id: 6,
      img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_466,c_limit/6be55ac6-0243-42d6-87d0-a650074c658c/nike-just-do-it.jpg",
      p: "Yoga",
    },
    {
      id: 7,
      img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_466,c_limit/608705dc-dea5-4450-b68f-e624cf1ed2a7/nike-just-do-it.jpg",
      p: "Skateboarding",
    },
    {
      id: 8,
      img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_466,c_limit/608705dc-dea5-4450-b68f-e624cf1ed2a7/nike-just-do-it.jpg",
      p: "Skateboarding",
    },
    {
      id: 9,
      img: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_466,c_limit/c779e4f6-7d91-46c3-9282-39155e0819e5/nike-just-do-it.jpg",
      p: "Dance",
    },
  ];

  // Using refs to directly manipulate DOM elements
  const carouselRef = useRef(null);

  // State to manage button disabled state
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Scroll carousel function
  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;
    const scrollAmount = 300; 

    if (direction === "left") {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Update button states when scrolling
  const handleScroll = () => {
    const carousel = carouselRef.current;
    const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

    // Disable left button when at the start
    setCanScrollLeft(carousel.scrollLeft > 0);

    // Disable right button when at the end
    setCanScrollRight(carousel.scrollLeft < maxScrollLeft);
  };

  return (
    <div>
      <div className="trend">
        <p className="trend-p">Trending</p>
        <div className="tranding-img-details">
          <a href="" className="tranding-anchor">
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_1944,c_limit/2b169028-456c-4235-8dcb-fa5f9e851399/nike-just-do-it.png"
              alt="Trending Nike Shoe"
              id="trending-img"
            />
            <img
              src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_523,c_limit/2b169028-456c-4235-8dcb-fa5f9e851399/nike-just-do-it.png"
              alt="Trending Nike Shoe"
              id="trending-img2"
            />
            <div className="trending-center">
              <p className="trending-anchor-para">Jordan Spizike</p>
              <h1 className="trending-anchor-h1">IT'S GOTTA BE THE REMIX</h1>
              <p className="trending-anchor-para-2">
                It’s back like it never left. Five Air Jordan retros cut it up
                in the classic Spizike.
              </p>
              <button className="trending-button">Shop</button>
            </div>
          </a>
        </div>
      </div>

      <div className="shop-sports">
        <p className="shop-sports-para">Shop By Sport</p>
        <div className="carousel-container-2">
          <button
            className="scroll-button-2 left-2"
            onClick={() => scrollCarousel("left")}
            disabled={!canScrollLeft}
          >
            <img src={leftArrow} alt="" />
          </button>
          <div className="carousel-2" ref={carouselRef} onScroll={handleScroll}>
            {itemSports.map((item) => (
              <div key={item.id} className="carousel-item-2">
                <a href="#">
                  <img
                    src={item.img}
                    alt={`${item.p} item`}
                    className="carousel-image-2"
                  />
                  <div className="carousel-text-2">
                    <p className="carousel-p-2">{item.p}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <button
            className="scroll-button-2 right-2"
            onClick={() => scrollCarousel("right")}
            disabled={!canScrollRight}
          >
           <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeTrend;
