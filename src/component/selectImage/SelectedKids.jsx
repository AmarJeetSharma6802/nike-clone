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
      title:"Nike Air Force 1 '07",
      offer:"Men's Shoes",
      price:"MRP : ₹ 11 895.00",
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
      title:"Nike Dunk Low Retro",
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
      id: 3,
      title:"Nike Dunk Low LX",
      offer:"Women's Shoes",
      price:"MRP : ₹ 10 795.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cd01d091-6f03-4339-8b7e-441a4c9071c8/W+NIKE+DUNK+LOW+LX.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/222c3439-be6e-4ecf-ae06-8ea7ab24c7b1/W+NIKE+DUNK+LOW+LX.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/94cb14cf-619c-42dc-a630-64c86589ca2d/W+NIKE+DUNK+LOW+LX.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/30ae21c0-9719-41cf-9c5d-c1634b22df1b/W+NIKE+DUNK+LOW+LX.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ae984380-efc7-4a3a-801a-ae204ab63455/W+NIKE+DUNK+LOW+LX.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e22cb07a-24c1-4421-8d19-d75d612d1483/W+NIKE+DUNK+LOW+LX.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/96f6b50f-aac4-49e6-834b-30830384afee/W+NIKE+DUNK+LOW+LX.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/12ebde68-95bc-43aa-8f37-cb2d807cbce7/W+NIKE+DUNK+LOW+LX.png",
      ],
    },
    {
      id: 4,
      title:"Nike Air Force 1 '07 LX",
      offer:"Women's Shoes",
      price:"MRP : ₹ 11 895.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a504e2c6-dcc0-41b9-bb00-3648c3906ae2/WMNS+AIR+FORCE+1+%2707+LX.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5f4951c5-6f95-40ec-bad9-d34f07d7e76e/WMNS+AIR+FORCE+1+%2707+LX.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b12a27fe-bf32-4ad8-9164-3eff2a97e702/WMNS+AIR+FORCE+1+%2707+LX.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8dd50264-3f7b-4177-ba83-7a1ca4d63b9d/WMNS+AIR+FORCE+1+%2707+LX.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2fcf4b6a-e747-443c-9f60-ab7bdef4cf35/WMNS+AIR+FORCE+1+%2707+LX.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb3749d8-0d11-480f-929b-ad8ff32d8089/WMNS+AIR+FORCE+1+%2707+LX.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0bd50da0-0c8b-4462-8182-c2c67fad486c/WMNS+AIR+FORCE+1+%2707+LX.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/02644260-f838-4490-aff2-97dc68f8c875/WMNS+AIR+FORCE+1+%2707+LX.png",
      ],
    },
    {
      id: 5,
      title:"Nike Pegasus 41",
      offer:"Mens's Road Running Shoes",
      price:"MRP : ₹ 11 895.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fc343d8b-ad46-477c-977f-c8e1fd47fb58/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5c589bfc-72b8-4736-af6e-64e2d26c9cab/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d90c8bcf-db58-4155-9c64-23c435557a16/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1e7e9ec9-af35-435a-be53-7542a0c64307/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7b5b6912-8712-4ad7-94ab-ec120003bcf7/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3dec7044-6ad8-4dac-926c-0f9edd4897c2/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/47ec1e3e-0bdd-4b07-a513-16d1ab06986c/AIR+ZOOM+PEGASUS+41.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/708dfd97-c229-42ff-bb8a-17c53cd4ffc6/AIR+ZOOM+PEGASUS+41.png",
      ],
    },
    {
      id: 6,
      title:"Nike Zoom Fly 6 Premium",
      offer:"Mens's Road Running Shoes",
      price:" 16 995.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e0a3120b-97c8-4f85-8a01-207d8e6793a1/AIR+ZOOM+ALPHAFLY+NEXT%25+3+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/430194a0-f26a-4570-b329-8ea5614a4402/AIR+ZOOM+ALPHAFLY+NEXT%25+3+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e2a05a42-bd72-420e-a452-4b84524e1e95/AIR+ZOOM+ALPHAFLY+NEXT%25+3+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7dbad0e-751d-4289-8331-fe0e8ea4dcfb/AIR+ZOOM+ALPHAFLY+NEXT%25+3+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/13b44e66-d45a-43d9-94d8-fb6922a9ff59/AIR+ZOOM+ALPHAFLY+NEXT%25+3+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f5276234-773b-40e6-bedf-0b9cab519f52/AIR+ZOOM+ALPHAFLY+NEXT%25+3+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/45a1cf54-9fbd-4981-b0a6-c014f1a42eca/AIR+ZOOM+ALPHAFLY+NEXT%25+3+PRM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8fa51835-424c-4fbc-b88a-55d2e428e389/AIR+ZOOM+ALPHAFLY+NEXT%25+3+PRM.png",
      ],
    },
    {
      id: 7,
      title:"Jordan Flight Fleece",
      offer:"Women's Cropped Satin-Lined Hoodie",
      price:"MRP : ₹ 5 695.00",
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
      price:"MRP : ₹ 5 495.00",
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
      price:"MRP : ₹ 5 495.00",
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
      price:"MRP : ₹ 4 095.00",
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
      price:"MRP : ₹ 4 295.00",
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
      price:"MRP : ₹ 4 295.00",
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

export default SelectedKids;
