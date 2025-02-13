import React, { useEffect, useState, useRef } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart} from '../Reducer/cartSlice.js'
import "../selectImage/SelectedImage.css";

function SelectedWomenImg() {
  const [activeImage, setActiveImage] = useState(null); 
  const [selectedSize, setSelectedSize] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const scrollContainerRef = useRef(null); 
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title = "Nike Selecting  Women Image";

    return () => {
      document.title = "Nike Clone";
    };
  }, []);

  const Sideitem = [
    {
      id: 1,
      topTitle:"Just In",
      title:"Nike Sportswear Tech Fleece",
      offer:"Women's High-Waisted Pleated Trousers",
      price:"6 647.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8732eb64-8c8d-4921-8a48-ffcbd7949d7c/AS+W+NSW+TCH+FLC+HR+PLT+PANT+W.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/47923fa3-e04f-4476-a46f-315ed48c8cfb/AS+W+NSW+TCH+FLC+HR+PLT+PANT+W.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8dedf690-a713-4787-b413-ab264d6e80bf/AS+W+NSW+TCH+FLC+HR+PLT+PANT+W.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/796ae0c8-f238-422c-9cf1-20ff79ebedde/AS+W+NSW+TCH+FLC+HR+PLT+PANT+W.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b942b90f-0674-4552-a9ab-4346cee1c2a4/AS+W+NSW+TCH+FLC+HR+PLT+PANT+W.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3c390e6-eeb4-4192-b0d5-2a2b4cc37dc4/AS+W+NSW+TCH+FLC+HR+PLT+PANT+W.png",
       
      ],
    },
    {
      id: 2,
      topTitle:"Just In",
      title:"Nike SportsWear Essntial",
      offer:"Womens's Loose UV Woven Long-Sleeve",
       price:"MRP : ₹ 3 797.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e72a7b2b-6073-489e-bf80-e8171ed5a372/AS+W+NSW+ESSTL+WVN+UV+LS+VNCK.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7ca42f48-f94a-45a1-ba27-034b47829dad/AS+W+NSW+ESSTL+WVN+UV+LS+VNCK.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/319254fa-88d0-4b48-b8f6-97906aa1a37e/AS+W+NSW+ESSTL+WVN+UV+LS+VNCK.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/23dfe37b-c7e7-4f69-b954-3e0a5259fef3/AS+W+NSW+ESSTL+WVN+UV+LS+VNCK.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/56fff839-5a6d-4756-96f6-b061c3bf4603/AS+W+NSW+ESSTL+WVN+UV+LS+VNCK.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/75bcd3fe-9c9b-4e1d-b83b-5882fb6ba9a7/AS+W+NSW+ESSTL+WVN+UV+LS+VNCK.png",
    
      ],
    },
    {
      id: 3,
      topTitle:"Just In",
      title:"Nike Club",
      offer:"Women's Balloon Top",
      price:"MRP : ₹ 4 475.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/71a7bdd2-0b30-43fa-86e8-0b669a0b0109/AS+W+NSW+CLUB+FLC+CREW+STD.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/864354de-ef6d-41d5-8dda-d54a77da9e1f/AS+W+NSW+CLUB+FLC+CREW+STD.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8bb82f32-0263-48ca-8a14-7d573b1d5f06/AS+W+NSW+CLUB+FLC+CREW+STD.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a99dfd9e-ef4b-4f27-b838-aa41ac078594/AS+W+NSW+CLUB+FLC+CREW+STD.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/131dc118-cc60-4acc-87d2-c6e648518506/AS+W+NSW+CLUB+FLC+CREW+STD.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7ddadf51-b9ee-4ad8-a084-3baf595f2a7e/AS+W+NSW+CLUB+FLC+CREW+STD.png"
      ],
    },
    {
      id: 4,
      topTitle:"Just In",
      title:"Nike Sportswear Wovens",
      offer:"Women's Mid-Rise Cargo",
      price:"MRP : ₹ 4 695.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3da6249d-d8fd-4bc1-babd-e48466bc8e50/AS+W+NSW+ESSTL+WVN+MR+STD+CRGO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ca748d2-a83b-41b4-8de9-27277b3399d2/AS+W+NSW+ESSTL+WVN+MR+STD+CRGO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/960a563a-7eff-427e-9520-2d4232af42a8/AS+W+NSW+ESSTL+WVN+MR+STD+CRGO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ac86539-d467-4a3d-a791-0ab76c267bff/AS+W+NSW+ESSTL+WVN+MR+STD+CRGO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4586a583-d3ed-4ceb-b0e0-8d1e3782b94f/AS+W+NSW+ESSTL+WVN+MR+STD+CRGO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eafb0ddf-67b7-4cfd-84cc-611f36ee323d/AS+W+NSW+ESSTL+WVN+MR+STD+CRGO.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/affc11e7-6e13-4fd3-95f8-2460ff52b45f/AS+W+NSW+ESSTL+WVN+MR+STD+CRGO.png",
      ],
    },
    {
      id: 5,
      topTitle:"Just In",
      title:"Jordan (Her)itage",
       offer:"Women's Graphic T-Shirt",
       price:"MMRP : ₹ 2 295.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5fa94cc7-74cb-4d02-b873-cf59b0de8bbd/W+J+SS+GF+HRTG+TEE+GEL+J+DAY.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ec06e52a-8467-4353-9134-85532b06d738/W+J+SS+GF+HRTG+TEE+GEL+J+DAY.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/91341d14-6d1e-4aef-8605-3b12ad422757/W+J+SS+GF+HRTG+TEE+GEL+J+DAY.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/88b932c1-8721-4801-b884-958701bfdc60/W+J+SS+GF+HRTG+TEE+GEL+J+DAY.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/77568349-e849-4095-8344-2eddba7c7b4e/W+J+SS+GF+HRTG+TEE+GEL+J+DAY.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/704bf90f-e8a7-4c1b-a7c9-7bf9493a1b39/W+J+SS+GF+HRTG+TEE+GEL+J+DAY.png",
       
      ],
    },
    {
      id: 6,
      topTitle:"Just In",
      title:"Nike Sportswear ",
      offer:"Women's Mid-Rise Cargo Trousers",
      price:"MRP : ₹ 3 795.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4def6c49-032d-4c2f-ae60-c6f24e3bc63d/AS+W+NSW+DANCE+CARGO+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f58290ef-97f3-45f9-8ec9-08ea3ff2b443/AS+W+NSW+DANCE+CARGO+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e88df11b-22ed-44ef-bca3-686151b5c411/AS+W+NSW+DANCE+CARGO+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6abbb395-dac8-4224-876d-302c280f4635/AS+W+NSW+DANCE+CARGO+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d0c85999-42fc-48b1-a1e4-e5cbffc859bf/AS+W+NSW+DANCE+CARGO+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/69783973-16cb-410b-bb88-a271881363e4/AS+W+NSW+DANCE+CARGO+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ba27adee-92a4-42bf-ba0c-f0da58e5e672/AS+W+NSW+DANCE+CARGO+PANT.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/918fc5e5-2879-4d61-ba02-5a0df38cc1db/AS+W+NSW+DANCE+CARGO+PANT.png"
       
      ],
    },
    {
      id: 7,
      topTitle:"Just In",
      title:"Nike One Seamless Front",
      offer:"Women's High-Waisted Full-Length",
      price:"MRP : ₹ 3 095.00",

      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ec9d07dc-bebe-4a05-afcb-4241e8258854/AS+W+NK+DF+ONE+HR+TIGHT+USEAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/97386ae9-f3ff-4067-933a-7d8a98e0be03/AS+W+NK+DF+ONE+HR+TIGHT+USEAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/875343f0-7d70-4a78-bc89-d3e54674f550/AS+W+NK+DF+ONE+HR+TIGHT+USEAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8319e8fa-fc91-4184-a822-0a6f30ff885a/AS+W+NK+DF+ONE+HR+TIGHT+USEAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3d0bec6c-753e-4ac1-8360-6d05ca506470/AS+W+NK+DF+ONE+HR+TIGHT+USEAM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1dd249bc-278d-4abf-ac5a-4998f1052b5d/AS+W+NK+DF+ONE+HR+TIGHT+USEAM.png",
        
      ],
    },
    {
      id: 8,
      topTitle:"Coming Soon",
      title:"Nike SportsWear Club",
      offer:"Women's Crew-Neck",
      price:"MRP : ₹ 3 495.00",

      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b039734-5d15-4eb8-a2d5-94a91d754f31/AS+W+NSW+CLUB+CREW+CV.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/09ac46c2-9e35-4a64-9e7c-bd1f633cd4d3/AS+W+NSW+CLUB+CREW+CV.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d712bfa5-593c-4c4a-9ab2-bf47778dce86/AS+W+NSW+CLUB+CREW+CV.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/099aaeda-bc30-4fd0-ad88-a37b315164b8/AS+W+NSW+CLUB+CREW+CV.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c4d054f8-c79b-44b3-b81a-8ab1a3440e2c/AS+W+NSW+CLUB+CREW+CV.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4d95813f-7cfe-4d5b-a2f5-06c7bd590a6f/AS+W+NSW+CLUB+CREW+CV.png",
        
      ],
    },
    {
      id: 9,
      topTitle:"Just In",
      title:"Nike SportsWear",
      offer:"Women's Woven Trousers",
      price:"MRP : ₹ 4 295.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/59aba716-5608-4801-98f2-0a7e5eacd3af/W+NSW+WVN+PNT+SW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/828526fe-09d6-4aea-be23-b6988e79ac61/W+NSW+WVN+PNT+SW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7cd76da-d6ce-49ab-a1be-55cc0bbe467e/W+NSW+WVN+PNT+SW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/798b5cd7-c40a-4867-afc6-13ae7b512a14/W+NSW+WVN+PNT+SW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e721c6b-3b96-4008-b8af-7adfe611cbf1/W+NSW+WVN+PNT+SW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f52b2ad7-c174-4969-9a28-9c47b4c8097e/W+NSW+WVN+PNT+SW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/df3b6ed1-6764-4bce-aa2f-b315f6604feb/W+NSW+WVN+PNT+SW.png",
        
      ],
    },
    {
      id: 10,
      topTitle:"Just In",
      title:"Nike SportsWear Collection",
      offer:"Women's Mid-Rise Trousers",
      price:"MRP : ₹ 4 747.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/74691619-5462-4a0a-a45d-30748294946a/AS+W+NSW+CLLCTN+ASYM+TROUSER+O.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/57dc9973-8a27-4bca-99b5-9e917e1be755/AS+W+NSW+CLLCTN+ASYM+TROUSER+O.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0be950af-8e71-4c86-8ee0-2336724100ca/AS+W+NSW+CLLCTN+ASYM+TROUSER+O.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b54ad6fa-08ff-49f1-bd2e-b2ff1dcd7266/AS+W+NSW+CLLCTN+ASYM+TROUSER+O.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7213fc21-7ab6-4413-a6a6-e1fed62a47d2/AS+W+NSW+CLLCTN+ASYM+TROUSER+O.png",
        
        
      ],
    },
    {
      id: 11,
      topTitle:"Just In",
      title:"Nike Sports Essential",
      offer:"Women's Mid-Rise Joggers",
      price:"MRP : ₹ 4 095.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fd57ebb1-582a-40bc-9de3-36b4b09a48f3/AS+W+NSW+ESSTL+WVN+MR+OS+JGGR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/36381f04-3424-4f37-8445-088b27d8ebce/AS+W+NSW+ESSTL+WVN+MR+OS+JGGR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/00403610-4ea7-4dc5-8919-cb6f65643191/AS+W+NSW+ESSTL+WVN+MR+OS+JGGR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/edf5e6b4-4ff7-4f53-84f2-c08b03af38ca/AS+W+NSW+ESSTL+WVN+MR+OS+JGGR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a77bcf2a-fe63-496a-a7b8-98df15fa65fb/AS+W+NSW+ESSTL+WVN+MR+OS+JGGR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c858886e-5479-49c4-ad6c-a7396adf780b/AS+W+NSW+ESSTL+WVN+MR+OS+JGGR.png",
      ]
    },
    {
      id: 12,
      topTitle:"Just In",
      title:"NikeCourt Heritage ",
      offer:"Women's Oversized Crew-Neck ",
      price:"MRP : ₹ 4 495.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f8f2a4a8-d6c8-4bdf-a710-87aeda78c886/AS+W+NKCT+HRTGE+FLC+OOS+GFX+CR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5f178f62-d314-453d-8c87-3626f7659b9b/AS+W+NKCT+HRTGE+FLC+OOS+GFX+CR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e779a3ff-2359-4260-b0a8-f564cc2542c1/AS+W+NKCT+HRTGE+FLC+OOS+GFX+CR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e1f58559-f198-4bb9-a4db-6fec377109c1/AS+W+NKCT+HRTGE+FLC+OOS+GFX+CR.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3365678-589c-453f-97d4-ebcc14dee36b/AS+W+NKCT+HRTGE+FLC+OOS+GFX+CR.png",
        
       
      ],
    },
    {
      id: 13,
      topTitle:"Promo Exclusion",
      title:"Jordan Heir Series PF",
      offer:"Women's Basketball Shoes",
      price:"MRP : ₹ 9 695.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/46fbae0f-c7fe-40a5-bc0d-e2567e3f2669/WMNS+JORDAN+HEIR+SERIES+PF.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3dfafffa-862e-4a6f-baaa-00d76fadc178/WMNS+JORDAN+HEIR+SERIES+PF.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/62278627-9a95-4726-9c8e-e66c99aa4dfb/WMNS+JORDAN+HEIR+SERIES+PF.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/265b30aa-80d5-4134-bc5d-635fced4325b/WMNS+JORDAN+HEIR+SERIES+PF.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/057ec042-12e2-48e2-b721-ca0de91451a6/WMNS+JORDAN+HEIR+SERIES+PF.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e0c22f31-4e4d-431e-9248-4cfe9bea7d41/WMNS+JORDAN+HEIR+SERIES+PF.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/33e9c992-3318-4639-a829-abdf4535f9ce/WMNS+JORDAN+HEIR+SERIES+PF.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d75c01c0-c644-47c7-852f-b6ad245a9eee/WMNS+JORDAN+HEIR+SERIES+PF.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9cae3aa0-9e13-49d3-a4fc-6e9232d380c8/WMNS+JORDAN+HEIR+SERIES+PF.png",
       
      ],
    },
    {
      id: 14,
      topTitle:"Bestseller",
      title:"Jordan Heries PF",
      offer:"Women's Shoes",
      price:"MRP : ₹ 9 495.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d59e53f1-4c12-4345-a2e8-4dfc373280fc/WMNS+JORDAN+HEIR+SERIES+PF.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8aea8eaf-759d-454d-8c24-8019d49507e6/WMNS+JORDAN+HEIR+SERIES+PF.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/775c3489-5c03-4996-b4b1-3f852924c0cb/WMNS+JORDAN+HEIR+SERIES+PF.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7f44a411-3e7e-4196-894c-af8afe6eb8a0/WMNS+JORDAN+HEIR+SERIES+PF.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/25dde8ba-e7c5-420c-af28-8aea896a4ab5/WMNS+JORDAN+HEIR+SERIES+PF.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ba5ce091-e03c-4363-9362-1535b6f6b5b5/WMNS+JORDAN+HEIR+SERIES+PF.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0aff1909-9aba-4dd5-b543-ca93cfd2b900/WMNS+JORDAN+HEIR+SERIES+PF.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9135cdd8-93e5-421f-ada4-bf1e355a3fe2/WMNS+JORDAN+HEIR+SERIES+PF.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/189acfd2-3674-4cd9-80b8-2a91a633c074/WMNS+JORDAN+HEIR+SERIES+PF.png",
      ],
    },
    {
      id: 15,
      topTitle:"Bestseller",
      title:"Air Jordan 4RM ",
      offer:"Women's Shoes",
      price:"MRP : ₹ 12 795.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/990cda9d-ab7c-4d99-ac1b-20e8ea9694b7/WMNS+AIR+JORDAN+4+RM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e29ac38d-64a3-4b48-95f1-fe58f131b4dc/WMNS+AIR+JORDAN+4+RM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ae722316-7199-4a61-9951-1f44306f9ce4/WMNS+AIR+JORDAN+4+RM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8fb796f9-da78-45ad-bfb0-06d30183e0fd/WMNS+AIR+JORDAN+4+RM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e71c4f1d-a035-4d15-9a0a-0faf207be4eb/WMNS+AIR+JORDAN+4+RM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/40581a40-fb51-4b1c-b431-57a92668fca7/WMNS+AIR+JORDAN+4+RM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4735eaa3-7ceb-42fc-a398-6714215f4629/WMNS+AIR+JORDAN+4+RM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f8e41a7d-79d8-4104-9164-b9f962a429af/WMNS+AIR+JORDAN+4+RM.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/720afe9e-c38b-49bd-a362-e0599c30cb82/WMNS+AIR+JORDAN+4+RM.png"
      ],
    },
    {
      id: 16,
      topTitle:"Promo Exclusion",
      title:"Air Jordan 1 Low",
      offer:"Women's Shoes",
      price:"MRP : ₹  8 295.00",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9909210d-48ba-459e-96f4-faab32a41ce7/WMNS+AIR+JORDAN+1+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e6c4e7fb-8221-405d-bb21-d7b07504269a/WMNS+AIR+JORDAN+1+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/38f9a57a-c250-4efd-a922-29b6e0791d80/WMNS+AIR+JORDAN+1+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5671f9fd-8418-47b8-990b-14f5f8a920f4/WMNS+AIR+JORDAN+1+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fe0a757d-6982-44e0-988f-99ccf35a71e5/WMNS+AIR+JORDAN+1+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6db5eb4a-83f0-46f4-9dc1-b002ff3802ad/WMNS+AIR+JORDAN+1+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/219c0e36-6ef5-4f35-a92b-137b30b7ef17/WMNS+AIR+JORDAN+1+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/885dc01b-0203-498d-b3da-d5a3db9d5dcb/WMNS+AIR+JORDAN+1+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/29bbe4b2-1172-48f0-9d1b-45d0b571892e/WMNS+AIR+JORDAN+1+LOW.png",
      ],
    },
  ];

  const selectedItem = Sideitem.find((item) => item.id === parseInt(id));
  if (!selectedItem) {
    return <div>Product not found</div>;
  }

  // Scroll left and right functionality
  const handleScroll = (direction) => {
    const scrollAmount = direction === "left" ? -510 : 510; 
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

export default SelectedWomenImg;
