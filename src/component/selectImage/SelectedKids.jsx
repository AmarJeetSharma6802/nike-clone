import React, { useEffect, useState, useRef } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart} from '../Reducer/cartSlice.js'
import "../selectImage/SelectedImage.css";

function SelectedKids() {
  const [activeImage, setActiveImage] = useState(null); 
    const [selectedSize, setSelectedSize] = useState("");
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate  = useNavigate()
  const scrollContainerRef = useRef(null); 
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Nike Selecting kids Image";

    return () => {
      document.title = "Nike Clone";
    };
  }, []);

  const Sideitem = [
    {
      id: 1,
      topTitle:"Just In",
      title:"Nike Sportswear",
      offer:"Older Kids Tracksuit",
      price:" 3 495.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2f91bfdd-2c1b-44be-99bb-433e3146e738/K+NSW+TRACKSUIT+POLY+CREW+HBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/79c0db90-86d2-4b00-b1e0-dfa165690f0a/K+NSW+TRACKSUIT+POLY+CREW+HBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9b864771-b1dc-4c33-8b41-00bc95e78717/K+NSW+TRACKSUIT+POLY+CREW+HBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7d65c8c-3ae9-4831-97f6-ef8575d6e7a6/K+NSW+TRACKSUIT+POLY+CREW+HBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bebb5401-7646-4e0a-83e4-d4aa100196e5/K+NSW+TRACKSUIT+POLY+CREW+HBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/35a00208-8f36-4d4c-8eb8-77aa4b37453b/K+NSW+TRACKSUIT+POLY+CREW+HBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/185cbdb0-9cac-430b-82ac-23beaba017ba/K+NSW+TRACKSUIT+POLY+CREW+HBR.png",
      ],
    },
    {
      id: 2,
      topTitle:"Just In",
      title:"Nike Sportswear",
      offer:"Older Kids Tracksuit",
      price:" 3 065.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1ceb42b8-8ed1-449a-aeb1-f4452040d656/K+NSW+TRACKSUIT+POLY+FZ+HBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f5d284a4-4b3a-4c14-81b7-acf709fda922/K+NSW+TRACKSUIT+POLY+FZ+HBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0937418b-c696-4409-91d1-3defd286b79b/K+NSW+TRACKSUIT+POLY+FZ+HBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7f60361d-ba48-4168-8fc5-c8f94265cb94/K+NSW+TRACKSUIT+POLY+FZ+HBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/de04c9d8-0bbb-4e6b-bbd4-a3ef5db086d4/K+NSW+TRACKSUIT+POLY+FZ+HBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c05453ef-b7a1-4ff7-8bfd-27d1f1867237/K+NSW+TRACKSUIT+POLY+FZ+HBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ca7681fe-7a87-4eaf-bb49-a70dba743c23/K+NSW+TRACKSUIT+POLY+FZ+HBR.png",
      ],
    },
    {
      id: 3,
      topTitle:"Just In",
      title:"Nike Sportswear",
      offer:"Older Kids T-Shirt",
      price:" 895.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b80f4ab3-c707-4826-8292-4de162a4825d/K+NSW+TEE+EMB+FUTURA+LBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/634e7e6a-6009-46c3-a08e-7a89288801ed/K+NSW+TEE+EMB+FUTURA+LBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a1560839-03df-4bb9-ba7d-076a919f583c/K+NSW+TEE+EMB+FUTURA+LBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/26da4678-7dfd-42ce-881e-9f2ba27f6517/K+NSW+TEE+EMB+FUTURA+LBR.png",
        
      ],
    },
    {
      id: 4,
      topTitle:"Just In",
      title:"Nike Sportswear ",
      offer:"Older (Girls) T-Shirt",
      price:"4 177.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d6ecd347-0144-4438-b2fa-5bc4d7df6e56/G+NSW+TEE+BOXY+ESSNTL+LBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/552d8166-9d3c-4a9e-b543-2430e3ee7b09/G+NSW+TEE+BOXY+ESSNTL+LBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/564d6bbd-5bd3-497c-96ea-ec06bc829800/G+NSW+TEE+BOXY+ESSNTL+LBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/234d4651-64ae-4275-b326-ed9938564f9d/G+NSW+TEE+BOXY+ESSNTL+LBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/87266f87-903d-4d2a-a931-25bfbb3036c0/G+NSW+TEE+BOXY+ESSNTL+LBR.png",
        
      ],
    },
    {
      id: 5,
      topTitle:"Just In",
      title:"Nike Sportswear ",
      offer:"Older Kids T-Shirt",
      price:"1 295.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a3674515-b1b4-4b76-b2b9-cf3b837bbb63/K+NSW+TEE+FUTURA+HBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7d6cda29-5900-4aaa-bd0d-7027a4a9c286/K+NSW+TEE+FUTURA+HBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2158a746-edac-4b92-a209-8c1d1c422b8f/K+NSW+TEE+FUTURA+HBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1ea730d2-6fe1-4a3b-aa2c-f53a23b02e0d/K+NSW+TEE+FUTURA+HBR.png",
        
      ],
    },
    {
      id: 6,
      topTitle:"Coming Soon",
      title:"Nike Sportswear Club",
      offer:"Older Kids Oversized",
      price:"1 897.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6b42cf7-78dd-46bd-b3f4-408b51fe6a98/G+NSW+CLUB+FLC+OVRSZD+CREW+LBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/58b8c867-b012-482e-a801-1a540f84a9b5/G+NSW+CLUB+FLC+OVRSZD+CREW+LBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/db5b6076-ca05-4a85-ab6f-6fe7841a85c0/G+NSW+CLUB+FLC+OVRSZD+CREW+LBR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9dd46916-47e8-4f05-a3ec-70c1100b9ebc/G+NSW+CLUB+FLC+OVRSZD+CREW+LBR.png",
       
      ],
    },
    {
      id: 7,
      topTitle:"Bestseller",
      title:"Nike Crossover",
      offer:"Older Kids Repel",
      price:" 3 295.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ae6158b-0d20-426f-ad38-97d1ee31d650/K+NSW+CTY+UTLITY+EO+TF+WZ+TOP.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cd8eec94-13d0-4624-8728-5c4840f8588c/K+NSW+CTY+UTLITY+EO+TF+WZ+TOP.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/db4861f9-b063-4619-9018-88286245850b/K+NSW+CTY+UTLITY+EO+TF+WZ+TOP.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7e907ef5-8360-4745-85f8-2f1fe67ef078/K+NSW+CTY+UTLITY+EO+TF+WZ+TOP.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd06e80d-fd3a-4a41-ac81-a2433ff2d532/K+NSW+CTY+UTLITY+EO+TF+WZ+TOP.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c54123ac-665f-43c8-b04a-c24c17b84bd8/K+NSW+CTY+UTLITY+EO+TF+WZ+TOP.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e6aba890-c1b2-417b-abc8-0e104f55138d/K+NSW+CTY+UTLITY+EO+TF+WZ+TOP.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5fb2b049-0e57-4bf1-b5ae-c9b06d24ea35/K+NSW+CTY+UTLITY+EO+TF+WZ+TOP.png",
      ],
    },
    {
      id: 8,
      topTitle:"Coming Soon",
      title:"Nike ACG",
      offer:"Older kids Swearshirt",
      price:" 1 995.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/79f52ad3-6660-4db3-980f-fd6e3992fdde/K+ACG+TF+RVSBL+VEST.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6cca32f7-07f7-46c3-8e29-2f40f3f510cf/K+ACG+TF+RVSBL+VEST.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cdf6bffc-ea51-4979-ad4d-acda31f5c420/K+ACG+TF+RVSBL+VEST.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/39f40f90-11ef-44bc-ac1d-260730d48350/K+ACG+TF+RVSBL+VEST.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1d002a79-51e0-4036-92ee-6d7d0dece3a0/K+ACG+TF+RVSBL+VEST.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e67c8bfd-3350-4e8d-8135-2159fbf68910/K+ACG+TF+RVSBL+VEST.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a34412f5-fa96-4dda-9ae6-20927db7907b/K+ACG+TF+RVSBL+VEST.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e4e31927-bca5-44d0-ab91-5a0c89bc1906/K+ACG+TF+RVSBL+VEST.png",
      ],
    },
    {
      id: 9,
      topTitle:"Just In",
      title:"Nike Sportswear ",
      offer:"Older Kids' T-Shirt",
      price:"MR 495.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e4c9bb06-6b8f-46e3-adf4-ca2112bb59e5/K+NSW+TEE+JDI+HBR+GFX+FILL.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7e81178b-4a12-44d7-a3d3-d80ef86c1c04/K+NSW+TEE+JDI+HBR+GFX+FILL.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7e882c76-a6f2-4588-9c7d-0e464bb58c23/K+NSW+TEE+JDI+HBR+GFX+FILL.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1e981b04-310c-4e05-801f-26663ab51cb0/K+NSW+TEE+JDI+HBR+GFX+FILL.png",
       
      ],
    },
   
  ];

  const selectedItem = Sideitem.find((item) => item.id === parseInt(id));
  if (!selectedItem) {
    return <div>Product not found</div>;
  }

  // Scroll left and right functionality
  const handleScroll = (direction) => {
    const scrollAmount = direction === "left" ? -480 : 480; // Scroll by 300px
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleAddToBag = () => {
      
  
      if (!selectedSize) {
        alert("Please select a size.");
        return;
      }else{
        navigate("/cart")
      }
      dispatch(
        addToCart({
          id: selectedItem.id,
          title: selectedItem.title,
          price: selectedItem.price,
          offer:selectedItem.offer,
          size: selectedSize,
          image: selectedItem.images[0],
        })
      );
      alert("Item added to the bag!");
    };
  

  return (
    <div className="all-selected">

    <div className="flexImage">
      <div className="firstbox-hover-items">
        {/* Left side thumbnails */}
        <div className="side-item">
          {selectedItem.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              onMouseEnter={() => setActiveImage(image)} 
              onMouseLeave={() => setActiveImage(null)} 
            />
          ))}
        </div>

        {/* Center scrolling carousel */}
        <div className="center-image">
          <button className="scroll-btn left" onClick={() => handleScroll("left")}>
            &#8249; 
          </button>
          <div className="scroll-container" ref={scrollContainerRef}>
            {selectedItem.images.map((image, index) => (
              <img
                key={index}
                src={activeImage ? activeImage : image} 
                alt={`Product ${index}`}
                className="center-scroll-image"
              />
            ))}
          </div>
          <button className="scroll-btn right" onClick={() => handleScroll("right")}>
            &#8250; 
          </button>
        </div>

        <div className="right-side">
        <div className="right-side-items-details">
         <p className="Top-title-para">{selectedItem.topTitle}</p>
          <p className="title-para">{selectedItem.title}</p>
          <p className="offer-para">{selectedItem.offer}</p>
          <p className="price-para">MRP : ₹{selectedItem.price}</p>
        </div>
          <div className="texes-details">
            <p className="texes-para">Inclusive of all taxes</p>
            <p className="texes-para">(Also includes all applicable duties)</p>
          </div>
          <div className="btn-sizes">
            <div className="btn-flex">
              <p>Select Size</p>
              <p className="svg-span"><span ><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21.75 10.5v6.75a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V10.5m3.308-2.25h12.885"></path><path stroke="currentColor" stroke-width="1.5" d="M15.79 5.599l2.652 2.65-2.652 2.653M8.21 5.599l-2.652 2.65 2.652 2.653M17.25 19v-2.5M12 19v-2.5M6.75 19v-2.5"></path></svg></span>Size Guide</p>
            </div>
            <div className="btn-grid">
                {["S", "M", "L", "XL", "2XL"].map((size) => (
                  <button
                    key={size}
                    className={`btnSize ${selectedSize === size ? "active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
          </div>

          <div className="add-favourite" onClick={handleAddToBag}>
            <div className="addBag">Add to Bag</div>
            <div className="Favourite">Favourite <span className="heart"><svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"></path></svg></span></div>
            </div>

            <div className="madeByMe">
              <p className="madeByMe-para">
              This nike website clone is made by me, I have kept everything same as in nike official website, I have used redux toolkit in this website
              </p>
              <p className="MyName">Amarjeet Sharma</p>
            </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default SelectedKids;
