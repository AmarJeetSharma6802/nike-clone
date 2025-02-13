import React, { useEffect, useState, useRef } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart} from '../Reducer/cartSlice.js'

import "../selectImage/SelectedImage.css";

function SelectedMenImg() {
  const [activeImage, setActiveImage] = useState(null); 
    const [selectedSize, setSelectedSize] = useState("");
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const scrollContainerRef = useRef(null); 
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Nike Selecting  Men Image";

    return () => {
      document.title = "Nike Clone";
    };
  }, []);

  const Sideitem = [
    {
      id: 1,
      topTitle:"Just In",
      title:"Nike Club Fleece",
      offer:"Men's Oversized French Terry Trousers",
      price:"MRP : ₹ 3 795.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b80b120-73b5-443b-b676-d3d0580130ef/AS+M+NK+CLUB+FT+OVERSIZED+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fbcdbefc-be59-450f-b136-b1f33cf80ae0/AS+M+NK+CLUB+FT+OVERSIZED+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cf2973bc-3dd8-44dd-b824-9764534a5625/AS+M+NK+CLUB+FT+OVERSIZED+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/85c38286-ac24-4a0e-902c-1ecf6fca135c/AS+M+NK+CLUB+FT+OVERSIZED+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ddfee77-fda6-4a81-9de1-4fc7d1f3ccb7/AS+M+NK+CLUB+FT+OVERSIZED+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/040d0bb5-26d5-4169-8cce-ac4d99e6025a/AS+M+NK+CLUB+FT+OVERSIZED+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3137b37e-e63a-4b4f-8d88-a1484310850b/AS+M+NK+CLUB+FT+OVERSIZED+PANT.png",
      ],
    },
    {
      id: 2,
      topTitle:"Just In",
      title:"Nike Sportswear",
      offer:"Mens's Max90 T-Shirt",
       price:"MRP : ₹ 2 365.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c6441adf-c8e3-4047-b15f-229a3c14f44d/AS+M+NSW+TEE+M90+OC+GRAPHIC+PK.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/da81aadc-fd7c-43b8-acc5-b22d0f158b74/AS+M+NSW+TEE+M90+OC+GRAPHIC+PK.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/84384ee1-022e-4777-abf5-281acf3baec4/AS+M+NSW+TEE+M90+OC+GRAPHIC+PK.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4bd450f1-3e80-4c9f-bc7a-1dedeb3a776d/AS+M+NSW+TEE+M90+OC+GRAPHIC+PK.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eed9a7df-daf2-48d6-a53b-920a4cf1c013/AS+M+NSW+TEE+M90+OC+GRAPHIC+PK.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/434a0633-1421-4a6d-b24d-01cd899fc330/AS+M+NSW+TEE+M90+OC+GRAPHIC+PK.png",
    
      ],
    },
    {
      id: 3,
      topTitle:"Just In",
      title:"Nike Club",
      offer:"Men's Balloon Trousers",
      price:"MRP : ₹ 4 475.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8597f8e0-1cd3-43fe-a429-6aa917aeb736/AS+M+NK+CLUB+BALLOON+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/19b6d1df-cd9a-48bc-8af0-53c0dd4c2ce0/AS+M+NK+CLUB+BALLOON+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e8d5eb2f-2b7b-4aca-91a9-bbe81281d282/AS+M+NK+CLUB+BALLOON+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cdefcbf-74cd-49da-abb8-95db2f063d10/AS+M+NK+CLUB+BALLOON+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/641ce89b-b228-4c12-838c-9bc56dbbdb02/AS+M+NK+CLUB+BALLOON+PANT.png",
        
      ],
    },
    {
      id: 4,
      topTitle:"Just In",
      title:"Jordan Brooklyn Fleence",
      offer:"Mens's Oversized Frech Terry Crew",
      price:"MRP : ₹ 4 177.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/ae77b70d-97c5-4176-8fab-46f0a789e98c/AS+M+NK+CLUB+FT+OVERSIZED+CREW.png",
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/c75ad6f0-c93e-4127-9d04-08a21da6cf55/AS+M+NK+CLUB+FT+OVERSIZED+CREW.png",
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/0713eeba-54b7-4501-89c1-0b5554f78ace/AS+M+NK+CLUB+FT+OVERSIZED+CREW.png",
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8a2996a0-91a8-4653-9ac7-e8942e329023/AS+M+NK+CLUB+FT+OVERSIZED+CREW.png",
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/309f7878-3a4a-46ca-a324-77ef88aacf8d/AS+M+NK+CLUB+FT+OVERSIZED+CREW.png",
      ],
    },
    {
      id: 5,
      topTitle:"Just In",
      title:"Nike ",
       offer:"Mens's Max90 Baskeball T-Shirt",
       price:"MRP : ₹ 2 495.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/29a12cbf-78c3-4470-a8bb-8ff3aa81f157/AS+M+NK+TEE+M90+OC+3.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/61576c90-6d3d-4026-83b5-2cef34abb047/AS+M+NK+TEE+M90+OC+3.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/35877d9a-2c72-4d3a-bde9-a4b333605c6a/AS+M+NK+TEE+M90+OC+3.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/10ab76bd-91ff-440d-8164-4c94ea0b331c/AS+M+NK+TEE+M90+OC+3.png",
       
      ],
    },
    {
      id: 6,
      topTitle:"Coming Soon",
      title:"Nike GP Challenge Pro Premium",
      offer:"Men's Hard Court Tennis",
      price:"MRP : ₹ 2 695.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ba35ccbd-3185-469f-9665-0ac07f31d647/M+J+BRAND+SNKR+PTCH+SS+CREW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/281b067e-9c33-472d-bd1b-f0838cd33512/M+J+BRAND+SNKR+PTCH+SS+CREW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/060a44d9-a7d4-4624-8784-2f1d088c9555/M+J+BRAND+SNKR+PTCH+SS+CREW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bdee9a12-9841-4389-9c82-215294a5ae5d/M+J+BRAND+SNKR+PTCH+SS+CREW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/95c416b8-cd35-4bd2-9149-8571113330d0/M+J+BRAND+SNKR+PTCH+SS+CREW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b89a38ca-a19f-4ab1-a999-d89f4462810b/M+J+BRAND+SNKR+PTCH+SS+CREW.png",
       
      ],
    },
    {
      id: 7,
      topTitle:"Bestseller",
      title:"Nike GP Premium Shoes",
      offer:"Men's shoes",
      price:"MRP : ₹ 8 295.00",

      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6474025e-c00a-4687-8fc8-e50230140f91/M+ZOOM+GP+CHALLENGE+PRO+HC+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ea6eb7e5-ab6b-421b-bfd7-c1733e9bd966/M+ZOOM+GP+CHALLENGE+PRO+HC+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f7aeea2e-8834-4f16-b53a-80dbf3bc093f/M+ZOOM+GP+CHALLENGE+PRO+HC+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/79488a2f-39c5-4cdb-87a6-20c59afc1b59/M+ZOOM+GP+CHALLENGE+PRO+HC+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/caf2965b-e7a2-4104-8d1a-9487f9f57245/M+ZOOM+GP+CHALLENGE+PRO+HC+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7a2fdc1c-cb86-41b1-b79e-33aa95fe572f/M+ZOOM+GP+CHALLENGE+PRO+HC+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/25aab054-1be6-476d-b5b0-b0c8f0e95083/M+ZOOM+GP+CHALLENGE+PRO+HC+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9436f9e3-7e96-48c2-9c0e-28b4b944941e/M+ZOOM+GP+CHALLENGE+PRO+HC+PRM.png",
      ],
    },
    {
      id: 8,
      topTitle:"Coming Soon",
      title:"Nike Drunk Low Retro ",
      offer:"Men's shoes",
      price:"MRP : ₹ 8 995.00",

      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e863ca32-5f23-49eb-9ee6-da62958650f9/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2c25c676-832d-453f-9cd9-dd6b492d7636/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/30ed2748-cf6a-4697-a59f-105bbc4de8dc/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2f7301c8-1550-4207-8360-0490266cf821/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b8083f2f-0933-4c11-9438-5497d751ce62/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ebd299fe-f5b4-45c6-9bf5-88bce1dc9878/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b64e38ae-4c2b-446d-9378-d100a190f847/NIKE+DUNK+LOW+RETRO.png"
        
      ],
    },
    {
      id: 9,
      topTitle:"Coming Soon",
      title:"Nike Drunk Low Retro",
      offer:"Men's Shoes",
      price:"MRP : ₹ 11 495.00",
      images: [
        "https://static.nike.com/a/images/t_default/dab259aa-dbc3-4c18-85e8-38dababbed92/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_default/68322318-bf05-44c2-a2b2-aba28e2f32f3/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_default/6efb6f4c-2e21-47b4-b4bd-6f25efeb32df/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_default/823c8123-5ff4-49be-9826-78b79bb2c59a/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_default/27897c9e-3842-4bb7-a9fd-b16d41786c63/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_default/dc9fa2e1-f229-4e95-aa4e-57d4ed46edfe/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_default/bea56c7d-912c-4911-b346-93d2d34435e3/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_default/7ae0b4f1-7f60-48a9-bc8d-16a507fbd596/NIKE+DUNK+LOW+RETRO.png",
      ],
    },
    {
      id: 10,
      topTitle:"Bestseller",
      title:"Nike Air Force 1'07 Fresh",
      offer:"Men's Shoes",
      price:"MRP : ₹ 11 295.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd4a337e-51cf-46d1-9ef4-e2d41463c12d/AIR+FORCE+1+%2707+FRESH.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/58669e58-8c6a-44f5-bd2e-c44cd52f57b0/AIR+FORCE+1+%2707+FRESH.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b3dab15e-462d-4497-afb4-9f461508404a/AIR+FORCE+1+%2707+FRESH.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f360a5c9-c0e3-4e45-82ea-a7362fb7c9ff/AIR+FORCE+1+%2707+FRESH.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/42823683-790c-44db-8e25-41088109207c/AIR+FORCE+1+%2707+FRESH.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ecaa64ff-8b3c-45d0-b4b8-0ada52149992/AIR+FORCE+1+%2707+FRESH.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/753c5c4b-5bf6-4c0e-a9b1-e7d03298f5c5/AIR+FORCE+1+%2707+FRESH.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f6c76f3-533a-4f08-9175-b880c74b0cf3/AIR+FORCE+1+%2707+FRESH.png"
        
      ],
    },
    {
      id: 11,
      topTitle:"Sustainable Materials",
      title:"Nike Mercurail Vapor 16 Club",
      offer:"MG Low-Top FootBall Boot",
      price:"MRP : ₹ 4 995.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/85727d50-e200-4797-91e4-23730539288b/VAPOR+16+CLUB+FG%2FMG.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb0b21f6-3adb-4381-b2c4-8e0576504bb1/VAPOR+16+CLUB+FG%2FMG.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e83e5ece-250d-4031-bded-579df39104a7/VAPOR+16+CLUB+FG%2FMG.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dc891909-70d0-450f-a3ca-82ebcd6b716c/VAPOR+16+CLUB+FG%2FMG.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e692114c-9eb2-4887-9c14-877f1f883748/VAPOR+16+CLUB+FG%2FMG.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/db6b0097-297f-4961-8822-cd662157923c/VAPOR+16+CLUB+FG%2FMG.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c15358a2-8805-4daf-a88f-290c655970a3/VAPOR+16+CLUB+FG%2FMG.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4676c64f-71e5-449f-b1dd-d9f2b92ef1ff/VAPOR+16+CLUB+FG%2FMG.png"
      ]
    },
    {
      id: 12,
      topTitle:"Sustainable Materials",
      title:"Nike Timepo Legend 10 Club",
      offer:"Women's Oversized V-Neck Cropped Top",
      price:"MRP : ₹ 4 295.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e28b8d13-6f6e-4834-941e-e65ef3b3fec1/VAPOR+16+CLUB+FG%2FMG.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33ce2093-cc7c-47ac-ba45-7885e8d6c1a4/VAPOR+16+CLUB+FG%2FMG.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5bbeb6f3-b503-4042-9789-47ae8e185494/VAPOR+16+CLUB+FG%2FMG.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7a82c053-378a-4588-b938-25e98e7fb595/VAPOR+16+CLUB+FG%2FMG.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6237e312-226e-44c4-bbe0-80bdfe016c9a/VAPOR+16+CLUB+FG%2FMG.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0e8c3759-cf76-4c19-9394-da2d67a6c6db/VAPOR+16+CLUB+FG%2FMG.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/05f76228-c1e1-4991-a1d1-c78cd857dc0e/VAPOR+16+CLUB+FG%2FMG.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5aadf534-1d1f-49cf-b54c-2abdc610757c/VAPOR+16+CLUB+FG%2FMG.png",
       
      ],
    },
  ];

  const selectedItem = Sideitem.find((item) => item.id === parseInt(id));
  if (!selectedItem) {
    return <div>Product not found</div>;
  }

  // Scroll left and right functionality
  const handleScroll = (direction) => {
    const scrollAmount = direction === "left" ? -500 : 500; // Scroll by 300px
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
          <p className="price-para">{selectedItem.price}</p>
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

export default SelectedMenImg;
