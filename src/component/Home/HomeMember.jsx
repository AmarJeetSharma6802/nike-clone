import React,{useRef,useState} from 'react'
import rightArrow from "../../assets/right-arrow.png"
import leftArrow from "../../assets/left-arrow.png"


function HomeMember() {
    const itemMember =[
        {
            id:1,
            img:"https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_582,c_limit/cb28c551-b85b-479f-8fc3-40ad4e7c9ca4/nike-just-do-it.jpg",
            p:"Member Product",
            h3:"Your Exclusive Access",
            btn:"shop"
        },
        {
            id:2,
            img:"https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_582,c_limit/100ca749-1a94-4f98-bc43-a58e7e9cdbcf/nike-just-do-it.png",
            p:"Nike By You",
            h3:"Your Customisation Service",
            btn:"customise"
        },
        {
            id:3,
            img:"https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_582,c_limit/39412611-0af5-4770-8c2e-ef5c23bc6a3d/nike-just-do-it.jpg",
            p:"Member Rewards",
            h3:"How We Say Thank You",
            btn:"celebrate"
        },
        {
            id:4,
            img:"https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_582,c_limit/a9767bce-db10-41ff-9eb5-f5daf8bbb3e6/nike-just-do-it.png",
            p:"Member Days",
            h3:"A Celebration of You",
            btn:"Learn more"
        },
        {
            id:5,
            img:"https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_582,c_limit/37b262a3-c8c7-49e8-a29f-8d46bc8ab950/nike-just-do-it.jpg",
            p:"Sport & Wellness Apps",
            h3:"Movement Where You Are",
            btn:"move"
        },
        {
            id:6,
            img:"https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_582,c_limit/c17ae904-9307-4575-8ac1-ad08adafe17f/nike-just-do-it.jpg",
            p:"SNKRS",
            h3:"Your Ultimate Sneaker Community",
            btn:"explore"
        },

    ]
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
        <div className="shop-sports">
                <p className="shop-sports-para">Member Benefits</p>
                <div className="carousel-container-2">
                  <button
                    className="scroll-button-2 left-2"
                    onClick={() => scrollCarousel("left")}
                    disabled={!canScrollLeft}
                  >
                    <img src={leftArrow} alt="" />
                  </button>
                  <div className="carousel-2" ref={carouselRef} onScroll={handleScroll}>
                    {itemMember.map((item) => (
                      <div key={item.id} className="carousel-item-3">
                        <a href="#">
                          <img
                            src={item.img}
                            alt={`${item.p} item`}
                            className="carousel-image-2"
                          />
                          <div className="carousel-text-3">
                            <p className="carousel-p-3">{item.p}</p>
                            <h3 className='caroucel-text-h3'>{item.h3}</h3>
                            <button className='caroucel-btn'>{item.btn}</button>
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
  )
}

export default HomeMember