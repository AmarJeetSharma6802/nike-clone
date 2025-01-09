import React,{useRef, useState,useEffect} from 'react'
import downArrow from '../../assets/down-arrow.png'
import { useNavigate,Link } from "react-router-dom";


function Men() {
  const [fillterActive,setFillterActive] = useState(false)

  const priceRef= useRef(null)

  const genderRef = useRef(null)
  const KidsRef = useRef(null)
  const ShopByPriceRef = useRef(null)
  const ColorRef = useRef(null)
  const BrandRef = useRef(null)
  const SportsRef = useRef(null)
  const TechRef = useRef(null)

  const genderBtn =()=>{
    genderRef.current.classList.toggle('show')

  }
  const KidsBtn =()=>{
    KidsRef.current.classList.toggle('show')
  }
  const shopBtn =()=>{
    ShopByPriceRef.current.classList.toggle('show')
  }
  const colorBtn =()=>{
    ColorRef.current.classList.toggle('show')
  }
  const BrandBtn =()=>{
    BrandRef.current.classList.toggle('show')
  }
  const SportsBtn =()=>{
    SportsRef.current.classList.toggle('show')
  }
  const TechBtn =()=>{
    TechRef.current.classList.toggle('show')
  }

const shortByBtn=()=>{
  priceRef.current.classList.toggle('show')
}
const filterBtn=()=>{
setFillterActive((prev) => !prev)
}
const CloseBtn=()=>{
setFillterActive(false)
}
useEffect(() => {
  // window.scrollTo(0, 0);

    document.title = "Nike Men's clothing and shoes";

    return () => {
      document.title = "Nike clone";
    };
    
  }, []);


const GalleryItem = ({ img, title, price, offer, id, color,topTitle }) => {
  return (
    <div className="img-container">
      <Link to={`/selectmenImage/${id}/${title}`}>
        <img src={img} alt={title} className="grid-img" />
      </Link>
      <div className="info-details">
        <p className="TopTitle">{topTitle}</p>
        <p className="title">{title}</p>
        <p className="offer">{offer}</p>
        <p className="color">{color}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};
  return (
    <div>
      <div className="filter-height">
        <div className="flex-item-btn">
          <p className='featured-p'>Men's Clothing and Shoes</p>
          <div className="none-shoes">
            <p>Shoes </p>
            <p>Tops & T-shirts</p>
          </div>
          <div className="fillter-btnshortBy">
            <div className="fillter" onClick={filterBtn}><span className='filter-span'>Fillter</span><i class="fa-solid fa-sliders"></i></div>
            <div className="shortBy-btn">
            <div className="shortBy" onClick={shortByBtn}><span className='short-span'> Short By</span> <img src={downArrow} alt="" id='downarrow-short'/></div>
              <ul className="short-ul" ref={priceRef}>
                <li className="short-li">Featured</li>
                <li className="short-li">Newest</li>
                <li className="short-li">Price: High-Low</li>
                <li className="short-li">Price :Low-High</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`left-side ${fillterActive ? "active" : ""}`}>
          <div className="left-side-1">
            <div className="closefillter" onClick={CloseBtn}><i class="fa-solid fa-xmark"></i></div>
            <svg aria-hidden="true" class="swoosh-svg" focusable="false" viewBox="0 0 24 24" role="img" width="65px" height="65px" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z" clip-rule="evenodd"></path></svg>
              <div className="items-details">
                <div className="gender-arrow" onClick={genderBtn}>
                <h4 className='gender-h4'>Gender</h4>
                <img src={downArrow} alt="" id='downarrow-short' />
                </div>
                <ul className="gender-ul genderHide" ref={genderRef}>
                  <li className="gender-li">Male</li>
                  <li className="gender-li">Female</li>
                </ul>
              </div>
              
              <div className="items-details">
                <div className="gender-arrow" onClick={KidsBtn}>
                <h4 className='gender-h4'>Kids</h4>
                <img src={downArrow} alt="" id='downarrow-short' />
                </div>
                <ul className="gender-ul kidsHide" ref={KidsRef}>
                  <li className="gender-li">Boys</li>
                  <li className="gender-li">Girls</li>
                </ul>
              </div>

              <div className="items-details">
                <div className="gender-arrow" onClick={shopBtn}>
                <h4 className='gender-h4'>Shop By Price</h4>
                <img src={downArrow} alt="" id='downarrow-short' />
                </div>
                <ul className="gender-ul shopHide" ref={ShopByPriceRef}>
                  <li className="gender-li">Under ₹ 2 500.00</li>
                  <li className="gender-li">₹ 2 501.00 - ₹ 7 500.00</li>
                  <li className="gender-li"> ₹ 7 501.00 - ₹ 12 999.00</li>
                  <li className="gender-li"> Over ₹ 13 000.00</li>
                </ul>
              </div>

              <div className="items-details">
                <div className="gender-arrow" onClick={colorBtn}>
                <h4 className='gender-h4'>Colour</h4>
                <img src={downArrow} alt="" id='downarrow-short' />
                </div>
                <ul className="gender-ul flex-color colorref" ref={ColorRef}>
                  <li className="gender-li-color black"></li>
                  <li className="gender-li-color white"></li>
                  <li className="gender-li-color grey"></li>
                  <li className="gender-li-color blue"> </li>
                  <li className="gender-li-color red"> </li>
                  <li className="gender-li-color green"></li>
                </ul>
              </div>

              <div className="items-details">
                <div className="gender-arrow" onClick={BrandBtn}>
                <h4 className='gender-h4'>Brand</h4>
                <img src={downArrow} alt="" id='downarrow-short' />
                </div>
                <ul className="gender-ul brandHide" ref={BrandRef}>
                  <li className="gender-li">Nike Sportswear</li>
                  <li className="gender-li">Nike</li>
                </ul>
              </div>

              <div className="items-details">
                <div className="gender-arrow" onClick={SportsBtn}>
                <h4 className='gender-h4'>Sports</h4>
                <img src={downArrow} alt="" id='downarrow-short'  />
                </div>
                <ul className="gender-ul sportsHide" ref={SportsRef}>
                  <li className="gender-li">LifeStyle</li>
                  <li className="gender-li">Running</li>
                  <li className="gender-li">Football</li>
                  <li className="gender-li">Atletics</li>
                </ul>
              </div>

              <div className="items-details">
                <div className="gender-arrow" onClick={TechBtn}>
                <h4 className='gender-h4'>Technology</h4>
                <img src={downArrow} alt="" id='downarrow-short'  />
                </div>
                <ul className="gender-ul TechHide" ref={TechRef}>
                  <li className="gender-li">Nike ReactX</li>
                  <li className="gender-li">Dri-FIT</li>
                  <li className="gender-li">Nike Flyknit</li>
                  <li className="gender-li">Nike Air</li>
                </ul>
              </div>

          </div>
        </div>

        <div className="grid">
           <div className="gallery-grid">
           <GalleryItem
              id={1}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a12535e9-1d0d-469b-9b01-ee647c0594a1/AS+M+NK+CLUB+FT+OVERSIZED+PANT.png"
              topTitle="Just In"
              title="Nike Club Fleece"
              offer="Men's Oversized French Terry Trousers"
              color="3 color"
              price="MRP : ₹ 3 795.00"
            />
           <GalleryItem
              id={2}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a9135310-b0f9-4e95-b184-e1c59a5449d2/AS+M+NSW+TEE+M90+OC+GRAPHIC+PK.png"
              topTitle="Just In"
              title="Nike Sportswear"
              offer="Mens's Max90 T-Shirt"
              color="2 color"
              price="MRP : ₹ 2 365.00"
            />
           <GalleryItem
              id={3}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/088a0820-771b-4606-94d7-f6bbaabf1250/AS+M+NK+CLUB+BALLOON+PANT.png"
              topTitle="Just In"
              title="Nike Club"
              offer="Men's Balloon Trousers"
              color="5 color"
              price="MRP : ₹ 4 475.00"
            />
           <GalleryItem
              id={4}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/91a10a1a-63db-46d2-810d-13af336c0008/AS+M+NK+CLUB+FT+OVERSIZED+CREW.png"
              topTitle="Just In"
              title="Jordan Brooklyn Fleence"
              offer="Mens's Oversized Frech Terry Crew"
              color="4 color"
              price="MRP : ₹ 4 177.00"
            />
           <GalleryItem
              id={5}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c89bf927-2396-48f4-8bcf-4a171576e65a/AS+M+NK+TEE+M90+OC+3.png"
              topTitle="Just In"
              title="Nike "
              offer="Mens's Max90 Baskeball T-Shirt"
              color="2 color"
              price="MRP : ₹ 2 495.00"
            />
           <GalleryItem
              id={6}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0c64bbaf-6ff5-4d3d-8c5c-7e5aabdfe840/M+J+BRAND+SNKR+PTCH+SS+CREW.png"
              topTitle="Coming Soon"
              title="Nike GP Challenge Pro Premium"
              offer="Men's Hard Court Tennis"
              color="1 color"
              price="MRP : ₹ 2 695.00"
            />
           <GalleryItem
              id={7}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b1f2fa39-1018-4d4d-bc4b-5cbc12bd97cd/M+ZOOM+GP+CHALLENGE+PRO+HC+PRM.png"
              topTitle="Bestseller"
              title="Nike GP Premium Shoes"
              offer="Men's shoes"
              color="1 color"
              price="MRP : ₹ 8 295.00"
            />
           <GalleryItem
              id={8}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f76f73e-2578-4d62-abab-c5563ea4f78c/NIKE+DUNK+LOW+RETRO.png"
              topTitle="Coming Soon"
              title="Nike Drunk Low Retro "
              offer="Men's shoes"
              color="1 color"
              price="MRP : ₹ 8 995.00"
            />
           <GalleryItem
              id={9}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dab259aa-dbc3-4c18-85e8-38dababbed92/NIKE+DUNK+LOW+RETRO.png"
              topTitle="Coming Soon"
              title="Nike Drunk Low Retro"
              offer="Men's Shoes"
              color="1 color"
              price="MRP : ₹ 11 495.00"
            />
           <GalleryItem
              id={10}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b24bc11-4ea0-4ee5-8d16-aa58b518475b/AIR+FORCE+1+%2707+FRESH.png"
              topTitle="Bestseller"
              title="Nike Air Force 1'07 Fresh"
              offer="Men's Shoes"
              color="1 color"
              price="MRP : ₹ 11 295.00"
            />
           <GalleryItem
              id={11}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/05442d82-fde1-401f-a24e-33409f65c375/VAPOR+16+CLUB+FG%2FMG.png"
              topTitle="Sustainable Materials"
              title="Nike Mercurail Vapor 16 Club"
              offer="MG Low-Top FootBall Boot"
              color="3 color"
              price="MRP : ₹ 4 995.00"
            />
           <GalleryItem
              id={12}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec2b2eb3-a34f-4411-a6d9-fc218ef848ef/LEGEND+10+CLUB+FG%2FMG.png"
              topTitle="Sustainable Materials"
              title="Nike Timepo Legend 10 Club"
              offer="Women's Oversized V-Neck Cropped Top"
              color="1 color"
              price="MRP : ₹ 4 295.00"
            />
           <GalleryItem
              id={13}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f8aa60fa-7679-4074-8ea2-ead3813a50a3/AIR+JORDAN+4+RM.png"
              topTitle="Just In"
              title="Air Jordan 4 RM"
              offer="Men's Shoes"
              color="1 color"
              price="MRP : ₹ 12 195.00"
            />
           <GalleryItem
              id={14}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dc702cb7-ae0c-4c5a-b132-21c8f4ec93f8/AIR+JORDAN+1+LOW.png"
              topTitle="Bestseller"
              title="Air Jordan 1 Low"
              offer="Men's Shoes"
              color="1 color"
              price="MRP : ₹ 4 295.00"
            />
           <GalleryItem
              id={15}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b227d57b-4ed8-4c1b-99d0-f2b062e500a3/JORDAN+HEIR+SERIES+PF.png"
              topTitle="Bestseller"
              title="Jordan Heir Serires PF 'Classic'"
              offer="Basketball Shoes"
              color="1 color"
              price="MRP : ₹ 9 695.00"
            />
           <GalleryItem
              id={16}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/db45d3b2-f822-4ed2-b894-0c01e8937003/AIR+JORDAN+1+LOW+PRM.png"
              topTitle="Available SNKRS"
              title="Air Jordan 1 Low Premium"
              offer="Men's Shoes"
              color="1 color"
              price="MRP : ₹ 12 295.00"
            />
           <GalleryItem
              id={17}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0dde9946-f6fd-4a13-a149-1c2f11ca0b11/AIR+JORDAN+1+MID.png"
              topTitle="Bestseller"
              title="Air Jordan 1 Mid"
              offer="Men's Shoes"
              color="1 color"
              price="MRP : ₹ 11 495.00"
            />
           <GalleryItem
              id={18}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3fe719ae-5373-4c19-b8c8-d68df6ce1976/JORDAN+LUKA+3+PF.png"
              topTitle="Luka 3 PF 'Blurred Vision'"
              title="Basketball Shoes"
              offer="Men's Shoes"
              color="1 color"
              price="MRP : ₹ 11 895.00"
            />
           <GalleryItem
              id={19}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dcd68a40-5b6e-44c0-b6a1-4893da96353d/M+J+ESS+HLDY+FLC+PO.png"
              topTitle="Bestseller"
              title="Jordan Essentials"
              offer="Men's Fleece Pullover Hoodie"
              color="1 color"
              price="MRP : ₹ 4 395.00"
            />
           <GalleryItem
              id={20}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2e90a60d-5fa4-41e4-90d3-e62ed8718ab3/M+J+DF+SPRT+HOOP+FLC+FZ.png"
              topTitle="Just In"
              title="Jordan Sport Hoop Fleece"
              offer="Men's Dri-Fit Full-Zip Hoodie"
              color="1 color"
              price="MRP : ₹ 5 695.00"
            />
           <GalleryItem
              id={21}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d19ea0eb-20ef-44ec-b773-616e7523a74d/M+J+BRK+FLC+PANT+LB.png"
              topTitle="Just In"
              title="Jordan Brooklyn Fleece"
              offer="Men's Trousers"
              color="1 color"
              price="MRP : ₹ 3 795.00"
            />
           <GalleryItem
              id={22}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2a43ff48-f11d-4c98-901a-ee7163e7dd2d/M+J+SPRT+JAM+WARM+UP+JACKET.png"
              topTitle="Just In"
              title="Jordan Sport "
              offer="Men's Warm-Up"
              color="1 color"
              price="MRP : ₹ 5 695.00"
            />
           <GalleryItem
              id={23}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b15e0ed5-2a8a-438b-b83b-4bf5cda6a442/M+J+MVP+JM+SS+CREW.png"
              topTitle="Just In"
              title="Jordan mvp"
              offer="Men's Jumpman T-Shirt"
              color="1 color"
              price="MRP : ₹ 1 995.00"
            />
           <GalleryItem
              id={24}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/14125f4a-60c1-42c2-b668-1f350ce0ee19/M+J+SPRT+JAM+WARM+UP+JACKET.png"
              topTitle="Sustainable Materials"
              title="Jordan Sport Jam"
              offer="Men's Warm-Up Jacket"
              color="1 color"
              price="MRP : ₹ 5 995.00"
            />
           </div>
        </div>

      </div>

    </div>
  )
}

export default Men