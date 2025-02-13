import React, { useEffect, useState, useRef } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart} from '../Reducer/cartSlice.js'
import "../selectImage/SelectedImage.css";

function SelectedSales() {
  const [activeImage, setActiveImage] = useState(null); 
    const [selectedSize, setSelectedSize] = useState("");
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate  = useNavigate()
  const scrollContainerRef = useRef(null); 
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Nike Selecting Sales Image";

    return () => {
      document.title = "Nike Clone";
    };
  }, []);

  const Sideitem = [
    {
      id: 1,
      topTitle:"Bestseller",
      title:"Nike Air Force 1 '07 LV8",
      offer:"Men's Shoes",
      price:" 10 257.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a944dfd4-a736-4072-b5cf-9f3befa25d1d/AIR+FORCE+1+%2707+LV8.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5b805d31-de0e-4213-982f-efe03a28fa2f/AIR+FORCE+1+%2707+LV8.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52620e53-bca7-4ff2-ab1d-a1ebaee08275/AIR+FORCE+1+%2707+LV8.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/750c41d3-962c-408c-b492-55edc676b261/AIR+FORCE+1+%2707+LV8.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b5b670f-c7e7-4933-9105-2e26f518c4bd/AIR+FORCE+1+%2707+LV8.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/db2925be-650f-4bf6-abbf-c0ba4512108f/AIR+FORCE+1+%2707+LV8.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cfa2b6b-5a59-41f7-9811-f29cfe4ff7bb/AIR+FORCE+1+%2707+LV8.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1bdf3ece-533f-44a7-a2e1-e5575d614704/AIR+FORCE+1+%2707+LV8.png"
      ],
    },
    {
      id: 2,
      title:"Nike Air Force 1 '07 Next Nature",
      offer:"  Women's Shoes",
      price:" 7 787.00",
      images: [
       "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4a806aff-ccd5-4b99-b2e8-6ef79a62f827/W+AIR+FORCE+1+%2707+NEXT+NATURE.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ae540a5e-1c22-43fd-a320-31560d0b7b39/W+AIR+FORCE+1+%2707+NEXT+NATURE.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/06b8d1a9-8778-4010-aec7-8ca82c68d7f3/W+AIR+FORCE+1+%2707+NEXT+NATURE.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3f522851-112e-4039-97c7-d221fe75b3e0/W+AIR+FORCE+1+%2707+NEXT+NATURE.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/de8c94d3-a19c-4a5c-8669-40dc4ecd5ca9/W+AIR+FORCE+1+%2707+NEXT+NATURE.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/088c940e-ae64-431e-80e7-a8f17fdc6acf/W+AIR+FORCE+1+%2707+NEXT+NATURE.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3227a5c6-17a6-440d-a56a-0e8d78fd15cc/W+AIR+FORCE+1+%2707+NEXT+NATURE.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4eb8a2d0-d240-480c-8f7f-e9ec5733763c/W+AIR+FORCE+1+%2707+NEXT+NATURE.png",
      ],
    },
    {
      id: 3,
      topTitle:"Sustainable Materials",
      title:"Nike JAM",
      offer:"Women's Shoes",
      price:" 10 257.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/47f10b50-eea8-483b-9fed-2e8d5fee60ee/NIKE+JAM.png",
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/671f9b63-2c51-4c10-bdbd-18b200b3f76a/NIKE+JAM.png",
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/33cc5553-ac3c-4f26-9027-5bf23c318ffb/NIKE+JAM.png",
        "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/33cc5553-ac3c-4f26-9027-5bf23c318ffb/NIKE+JAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7a500c54-a093-4be4-b0f0-643b29968066/NIKE+JAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/09289f20-ed64-4d4a-b27c-2b5b58268794/NIKE+JAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7f94a86b-0f48-4656-9d8a-153551493936/NIKE+JAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/46fab2d0-e31e-4579-9e04-45865664089c/NIKE+JAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4fe702e7-bf4b-4b92-a5b8-59f91b8fadb7/NIKE+JAM.png"
      ],
    },
    {
      id: 4,
      title:"Nike Air Max 90 LV8",
      offer:"Women's Shoes",
      price:" 12 157.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/accc6e79-3091-479b-a9b7-22cc00cc0d55/NIKE+AIR+MAX+90+LV8.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16d0d8a9-f6a4-4811-94f0-1deccc9662b3/NIKE+AIR+MAX+90+LV8.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e9b78f1d-95a3-44c6-84ad-da893eae3a90/NIKE+AIR+MAX+90+LV8.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6d42d86c-e0f7-475b-9aff-4faf8f097c3a/NIKE+AIR+MAX+90+LV8.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c4a8ada8-89ce-4f8d-ac48-69fadbe9dacf/NIKE+AIR+MAX+90+LV8.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cbfcb43d-d6d3-4a49-a153-5b3ed04f643f/NIKE+AIR+MAX+90+LV8.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9d07a663-5992-4bdb-9fea-b1aaeb4c1bea/NIKE+AIR+MAX+90+LV8.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a485c357-d7e5-4595-92d1-420dcd2fa426/NIKE+AIR+MAX+90+LV8.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/941942da-8e67-439d-ada1-63c8e5520422/NIKE+AIR+MAX+90+LV8.png"
      ],
    },
    {
      id: 5,
      topTitle:"Sustainable Materials",
      title:"Nike Air Max 1",
      offer:"Women's shoes",
      price:" 12 157.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9c20500a-7d63-488e-85ef-0dca6903f62a/W+NIKE+AIR+MAX+1.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ef402a5f-7434-45f9-af15-56b77c2eaada/W+NIKE+AIR+MAX+1.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/213b27ff-6aaa-451d-9ff5-caed61c3b82a/W+NIKE+AIR+MAX+1.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/95214fd9-4f3d-4067-a3a9-95f120f72f90/W+NIKE+AIR+MAX+1.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f8937eff-7cf3-4555-b844-ce359d8400be/W+NIKE+AIR+MAX+1.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3619a09f-b18f-447b-83c3-130b39ddd630/W+NIKE+AIR+MAX+1.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82d32d2e-6da5-402b-8eee-913f11d8dcdf/W+NIKE+AIR+MAX+1.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1365f7d0-c0ba-4250-afac-f41d1d553b3b/W+NIKE+AIR+MAX+1.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f5ad5553-0f09-4378-90f8-b8de56c6c138/W+NIKE+AIR+MAX+1.png",
      ],
    },
    {
      id: 6,
      topTitle:"Sustainable Materials",
      title:"Nike JAM",
      offer:"Women's Shoes",
      price:" 10 257.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/89f4fc2a-7964-4ab3-957c-1f2c5fe251bd/NIKE+JAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/716e818c-25ba-4bb5-9ddf-0d93ddd38f57/NIKE+JAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f1d3aa24-e256-4479-a5a9-e463f6018456/NIKE+JAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a7a05d19-a11d-4eb1-924c-058630076867/NIKE+JAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c499f3c0-0a71-4f65-9ade-be31c7c097ca/NIKE+JAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2101944e-b2e6-44e2-ae12-6c43adf6c5ed/NIKE+JAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3930db8f-f213-41fb-8b8d-d7b3a0eabb23/NIKE+JAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/424afe5d-1ec8-4b36-99fb-19d59027e2da/NIKE+JAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/60643889-adcb-447f-9639-b570583673ab/NIKE+JAM.png"
      ],
    },
    {
      id: 7,
      title:"Jordan Flight Fleece",
      topTitle:"Sustainable Materials",
      offer:"Women's Cropped Satin-Lined Hoodie",
      price:" 5 695.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/14bee479-6403-407d-b955-49b0e7cae6cc/W+J+FLT+FLC+PO+GFX+40.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bf94dd3d-923a-4a77-a0d5-0a7bafed0fd0/W+J+FLT+FLC+PO+GFX+40.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ab2e6a89-aa99-447e-bf08-58367b46526e/W+J+FLT+FLC+PO+GFX+40.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/af0abde6-d6b3-4cdd-a6fb-9d2d2213aca9/W+J+FLT+FLC+PO+GFX+40.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/eaead2bf-1c48-4e8a-bcea-7c9a6b7b0ab8/W+J+FLT+FLC+PO+GFX+40.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/131794eb-fc14-424c-93b0-551fce7b9491/W+J+FLT+FLC+PO+GFX+40.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f4a676ff-768a-45ba-83c3-7af7f14f502a/W+J+FLT+FLC+PO+GFX+40.png",
        "https://static.nike.com/a/videos/so_0/4b5e3b00-7a9b-4648-9961-04dd2639fe7e/W+J+FLT+FLC+PO+GFX+40.jpg",
      ],
    },
    {
      id: 8,
      title:"Air Jordan ",
      offer:"Women's Full-Zip Knit Top",
      price:" 5 495.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f4388cd3-d44a-4f72-881c-6c4a4fd086a2/W+J+AIR+JDN+ZIP+KNIT+TOP.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1627c767-58df-4ca1-adbb-2b996547c4ff/W+J+AIR+JDN+ZIP+KNIT+TOP.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0cf638e2-9214-436e-9056-62e06ff7729e/W+J+AIR+JDN+ZIP+KNIT+TOP.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/725590ea-d861-40e6-8234-4fe17309fb3d/W+J+AIR+JDN+ZIP+KNIT+TOP.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ae024b22-be2c-4db4-85c2-c91663de5e4d/W+J+AIR+JDN+ZIP+KNIT+TOP.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2c349be2-fe96-4889-8528-81bab6708a55/W+J+AIR+JDN+ZIP+KNIT+TOP.png",
        
      ],
    },
    {
      id: 9,
      title:"Nike Sportswear Windrunner",
      offer:"Women's Knit Jacket",
      price:" 5 495.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/17a94afc-19ff-43e6-a8d5-1537a08d8a7d/AS+W+NSW+NK+WR+POLY+KNIT+JKT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f6e4921d-a76a-4399-b3e4-0acb971545a8/AS+W+NSW+NK+WR+POLY+KNIT+JKT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2532b684-c872-4a8b-b139-ed8f8ceff388/AS+W+NSW+NK+WR+POLY+KNIT+JKT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d1363039-4c26-43df-bae4-a21df69e46cc/AS+W+NSW+NK+WR+POLY+KNIT+JKT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2be119b6-a244-400b-97e1-57c6ed73ee9c/AS+W+NSW+NK+WR+POLY+KNIT+JKT.png",
       
      ],
    },
    {
      id: 10,
      title:"Nike Sportswear Windrunner",
      offer:"Womens's Slim Mid-Rise Knit Trousers",
      price:" 4 095.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f0167150-cf7d-406e-b865-348fddd931a2/AS+W+NSW+NK+WR+MR+POLY+KNIT+PN.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd5f2f29-271e-4e15-8c30-65cc09a98d11/AS+W+NSW+NK+WR+MR+POLY+KNIT+PN.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/79c8f36d-dd39-4173-9e56-34b4f1e9af69/AS+W+NSW+NK+WR+MR+POLY+KNIT+PN.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7eecc3b1-7c61-4c2f-ad51-e1e8d072a3a0/AS+W+NSW+NK+WR+MR+POLY+KNIT+PN.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9113ac42-b369-4cee-8be5-4ea92dfe42fc/AS+W+NSW+NK+WR+MR+POLY+KNIT+PN.png",
        
      ],
    },
    {
      id: 11,
      title:"Nike Sportswear Phoenix Fleece",
      offer:"Women's Oversized V-Neck Cropped Top",
      price:"4 295.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b57e6ec4-7568-41a5-92d9-942613a40624/AS+W+NSW+PHNX+FLC+CROP+VNECK+O.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f5eb9143-5dcf-42bc-9f51-6e822f275d44/AS+W+NSW+PHNX+FLC+CROP+VNECK+O.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a7cfd6d-0645-44c0-96d6-1139ebcd5e55/AS+W+NSW+PHNX+FLC+CROP+VNECK+O.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fce19141-f090-4f41-83e1-5188b59b4b3e/AS+W+NSW+PHNX+FLC+CROP+VNECK+O.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/90e6c104-57db-4ed0-8997-4a4896eb3fce/AS+W+NSW+PHNX+FLC+CROP+VNECK+O.png",
      ]
    },
    {
      id: 12,
      title:"Nike Sportswear Phoenix Fleece",
      offer:"Women's Oversized V-Neck Cropped Top",
      price: "4 295.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/18f594d9-79b0-4326-8508-eaa3fda96ef8/AS+W+NSW+PHNX+FLC+CROP+VNECK+O.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0efe3350-f36c-411b-b9d1-fce6c81d8899/AS+W+NSW+PHNX+FLC+CROP+VNECK+O.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ebac5ae7-30af-4da1-b99d-69f955806e89/AS+W+NSW+PHNX+FLC+CROP+VNECK+O.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/007ce66d-b148-4bdb-8d59-7ad3d54801c3/AS+W+NSW+PHNX+FLC+CROP+VNECK+O.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5c41dc26-b698-4ece-8457-b891fe02607e/AS+W+NSW+PHNX+FLC+CROP+VNECK+O.png",
       
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
          <p className="price-para">MRP : ₹ {selectedItem.price}</p>
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

export default SelectedSales;
