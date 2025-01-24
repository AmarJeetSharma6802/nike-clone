import React, { useEffect, useState, useRef } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart} from '../Reducer/cartSlice.js'
import "../selectImage/SelectedImage.css";

function SelectedHomeImg() {
  const [activeImage, setActiveImage] = useState(null); 
    const [selectedSize, setSelectedSize] = useState("");
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate  = useNavigate()
  const scrollContainerRef = useRef(null); 
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = selectedItem.title;

    return () => {
      document.title = "Nike Clone";
    };
  }, []);

  const Sideitem = [
    {
      id: 1,
      topTitle:"Bestseller",
      title:"Nike Air Force 1 '07 Fresh",
      offer:"Men's Shoes",
      price:" 11 295.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd4a337e-51cf-46d1-9ef4-e2d41463c12d/AIR+FORCE+1+%2707+FRESH.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/58669e58-8c6a-44f5-bd2e-c44cd52f57b0/AIR+FORCE+1+%2707+FRESH.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b3dab15e-462d-4497-afb4-9f461508404a/AIR+FORCE+1+%2707+FRESH.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f360a5c9-c0e3-4e45-82ea-a7362fb7c9ff/AIR+FORCE+1+%2707+FRESH.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/42823683-790c-44db-8e25-41088109207c/AIR+FORCE+1+%2707+FRESH.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ecaa64ff-8b3c-45d0-b4b8-0ada52149992/AIR+FORCE+1+%2707+FRESH.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/753c5c4b-5bf6-4c0e-a9b1-e7d03298f5c5/AIR+FORCE+1+%2707+FRESH.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f6c76f3-533a-4f08-9175-b880c74b0cf3/AIR+FORCE+1+%2707+FRESH.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8af7abe8-17c7-48b4-8ef9-c46c1e403873/AIR+FORCE+1+%2707+FRESH.png",
      ],
    },
    {
      id: 2,
      topTitle:"Bestseller",
      title:"Air Jordan 1 Low",
      offer:"Men's Shoes",
      price:" 10 795.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/66b1a0a7-2277-4ab5-8f94-03e52d4fcd45/AIR+JORDAN+1+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7336e1ff-c705-4881-aab4-421d0b9a40c9/AIR+JORDAN+1+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f4da4ab1-85b7-44bf-982c-63fab37f704a/AIR+JORDAN+1+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2bbc11a1-bf7a-45a5-8d82-c94aa4823798/AIR+JORDAN+1+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/33b8c2f1-385f-4398-8fb8-6b46f6c3e713/AIR+JORDAN+1+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0fb0f49e-81d9-4156-83d2-fb4792810273/AIR+JORDAN+1+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/87d2ccc9-d72a-4bfe-ab8a-797b184b8352/AIR+JORDAN+1+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4d6c46a1-ad7c-430f-88ed-26d1d4272503/AIR+JORDAN+1+LOW.png",
      ],
    },
    {
      id: 3,
      topTitle:"Just In",
      title:"Nike Cortez Leather",
      offer:"Men's Shoes",
      price:" 9 695.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6d38b3f5-3365-4770-a178-22de3376304b/NIKE+CORTEZ.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/36ce874f-f646-4a83-aca8-63987b49fd5c/NIKE+CORTEZ.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b159e204-bdee-4b2b-aad1-036509bea441/NIKE+CORTEZ.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/53f8f82f-dab7-4eb1-8a01-678ad4315e4e/NIKE+CORTEZ.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9e52b5d4-2956-438d-96f0-35817024bcfb/NIKE+CORTEZ.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d67343f-cd02-4061-b048-fe46ccaf6d6d/NIKE+CORTEZ.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52f2bdfc-40fc-47c6-8f0b-79c80c300400/NIKE+CORTEZ.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/56d67268-f321-4a66-93ad-bfeb9412f844/NIKE+CORTEZ.png",
      ],
    },
    {
      id: 4,
      topTitle:"Just In",
      title:"Nike Killshot 2 Leather",
      offer:"Men's Shoes",
      price:"4 177.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c8ee0e57-f546-45dd-8f44-199439624435/KILLSHOT+2+LEATHER.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b66c6d9e-ddb8-488f-9607-e44d021db911/KILLSHOT+2+LEATHER.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6e222d0-57e5-4269-97e7-0e76fe71043b/KILLSHOT+2+LEATHER.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c64a0649-95ac-47ac-b0fc-b4edc5701bbe/KILLSHOT+2+LEATHER.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d8d2b671-3734-4a81-80e3-4ce9a5b6f579/KILLSHOT+2+LEATHER.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7a0744f9-95e7-46ec-be74-ef77e8f71feb/KILLSHOT+2+LEATHER.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4974a5ea-0f30-4f04-94d5-94a48a7ee4e1/KILLSHOT+2+LEATHER.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/91353c86-4b65-45be-9594-b5db714b2ebd/KILLSHOT+2+LEATHER.png",
      ],
    },
    {
      id: 5,
      topTitle:"Just In",
      title:"Nike Pegasus 41",
      offer:"Men's Road Running Shoes",
      price:"12 795.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/345a9e8e-29b7-4c1d-98e8-d03be07d7f28/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7746455c-c73f-487d-82d9-321abcb7c1ac/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/80f32275-aa20-44ac-937c-b9f7753eb268/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2c77cb75-dadb-4c63-b410-12927eb04e3c/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/763bd6d6-ba73-4270-a389-ac47783f80e5/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f6a342a-da8b-4cb9-a3dd-5a50e72c756f/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b1c2145-333b-45cb-ab5d-a4ea0f73488b/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c985df4b-cfad-41e6-867e-188597bc94b7/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b56fb290-c14b-4b34-a187-ab2d687df137/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fdd95721-2781-40fc-b607-f08634467744/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aec1b71e-ba1b-4baa-acae-045847747321/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8b0523b8-19d2-4de4-8d63-c8d7ce0eb97a/AIR+ZOOM+PEGASUS+41.png",
      ],
    },
    {
      id: 6,
      topTitle:"Just In",
      title:"Nike Zoom Vomero 5",
      offer:"Women's Shoes",
      price:"15 995.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16e6db2e-a8cc-446f-9aef-abf13d4cd6b1/W+NIKE+ZOOM+VOMERO+5.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/66f7f9e9-df89-4347-94d5-b66ad71f9dd4/W+NIKE+ZOOM+VOMERO+5.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ef5b4386-9bd2-4373-ad32-0efd0b3b368c/W+NIKE+ZOOM+VOMERO+5.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/da34cf10-125d-4a26-a032-9accdb7d4347/W+NIKE+ZOOM+VOMERO+5.png",
       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16943f7f-29ed-49c3-a8da-948b3b42fe3f/W+NIKE+ZOOM+VOMERO+5.png",
       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ab3c8ef9-3d50-413d-b4d4-d3d3f6295fbe/W+NIKE+ZOOM+VOMERO+5.png",
       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dcd3f15f-f50b-44e6-8188-397931e739ac/W+NIKE+ZOOM+VOMERO+5.png",
       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bbb6ea6d-845d-44b1-a5bd-8372b613edfa/W+NIKE+ZOOM+VOMERO+5.png"
      ],
    },
    {
      id: 7,
      topTitle:"Bestseller",
      title:"Nike V2K Run Premium",
      offer:"Women's Shoes",
      price:" 11 895.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7464bef5-fe79-459b-bcd7-550383d55025/W+NIKE+V2K+RUN+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3179cebb-6749-4ee9-8a98-47eba66bf3cf/W+NIKE+V2K+RUN+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cac98bee-0838-42ff-931e-d03fac0a6197/W+NIKE+V2K+RUN+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/798eaec7-f7cf-48d0-b56a-1f8141e0850d/W+NIKE+V2K+RUN+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e69a469-a558-42c9-a731-bc37e7a3d309/W+NIKE+V2K+RUN+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/48451e1f-57e9-4843-9fa2-3684421e6ab6/W+NIKE+V2K+RUN+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2147cf27-7788-4833-8e5c-f3669a61dbd6/W+NIKE+V2K+RUN+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/89227cef-a8d1-4221-96b3-56db1ac2e2c7/W+NIKE+V2K+RUN+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2423f519-4635-40b5-9957-1e63578c2788/W+NIKE+V2K+RUN+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a01871cb-bb4b-46f7-8cbd-e44698243553/W+NIKE+V2K+RUN+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5356715c-07cf-47a6-81ac-ba7dd2a2d182/W+NIKE+V2K+RUN+PRM.png"
      ],
    },
    {
      id: 8,
      topTitle:"Just In",
      title:"Nike Vaporfly 3",
      offer:"Men's Road Racing Shoes",
      price:"  21 695.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fae635e8-6645-40a1-b686-a0326f6fcfd5/ZOOMX+VAPORFLY+NEXT%25+3+FK+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/91693b39-d08b-46b6-b529-2fbf4b926e1e/ZOOMX+VAPORFLY+NEXT%25+3+FK+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/06a090a3-cc2c-45ca-ac1a-36f4a909a43a/ZOOMX+VAPORFLY+NEXT%25+3+FK+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f98a7c34-c3cd-4400-91b9-9d3c7ef210f3/ZOOMX+VAPORFLY+NEXT%25+3+FK+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1f00cba2-6d95-4b57-a708-68bd0f8400de/ZOOMX+VAPORFLY+NEXT%25+3+FK+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6a61ea9f-7823-46c1-8274-75f12fb7deee/ZOOMX+VAPORFLY+NEXT%25+3+FK+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4e2b60f9-6e73-4e52-8dcb-7fccc1aa96a3/ZOOMX+VAPORFLY+NEXT%25+3+FK+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82122598-f59f-4991-8b3d-d8bdfd35a36b/ZOOMX+VAPORFLY+NEXT%25+3+FK+PRM.png",
      ],
    },
    {
      id: 9,
      topTitle:"Just In",
      title:"Nike Dunk Low Retro",
      offer:"Men's Shoes",
      price:"MR 11 495.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e86b1b13-2100-4335-b8b1-d1b4752e6a91/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2df49ae9-6028-4127-b7f0-e2f242a2ea3b/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3d6bbb79-6168-460b-83b1-13ab425357bc/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1d769132-b8a8-4d1a-8582-f78872c4794b/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8c4cc614-b05f-4b94-a28b-a83641057375/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2fffdcec-5707-4122-87a8-c489fc00dc81/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/af63b377-559f-480f-b14c-c02508e17b69/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a31bf0a-4fd4-40f4-a93b-ec2c49b4c333/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/db69a4fa-8d07-4f66-bad2-b172e35de091/NIKE+DUNK+LOW+RETRO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2e85a229-e9c1-489f-ae00-f923eb3f7303/NIKE+DUNK+LOW+RETRO.png"
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

export default SelectedHomeImg;
