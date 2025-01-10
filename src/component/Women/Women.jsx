import React,{useRef, useState,useEffect} from 'react'
import downArrow from '../../assets/down-arrow.png'
import { useNavigate,Link } from "react-router-dom";


function Women() {
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
  window.scrollTo(0, 0);

    // Set the document title
    document.title = "Nike Women's clothing ";

    return () => {
      document.title = "Nike clone";
    };
  }, []);
   


const GalleryItem = ({ img, title, price, offer, id, color,topTitle }) => {
  return (
    <div className="img-container">
      <Link to={`/selectWomenImage/${id}/${title}`}>
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
          <p className='featured-p'>Women's Clothing </p>
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
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/36d87adf-d31c-4553-a89b-e58e8026a3d0/AS+W+NSW+TCH+FLC+HR+PLT+PANT+W.png"
              topTitle="Just In"
              title="Nike Sportswear Tech Fleece"
              offer="Women's High-Waisted Pleated Trousers"
              color="3 color"
              price="MRP : ₹ 6 647.00"
            />
           <GalleryItem
              id={2}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a110b79b-e247-4eab-8907-0df18d92d965/AS+W+NSW+ESSTL+WVN+UV+LS+VNCK.png"
              topTitle="Just In"
              title="Nike SportsWear Essntial"
              offer="Womens's Loose UV Woven Long-Sleeve"
              color="3 color"
              price="MRP : ₹ 3 797.00"
            />
           <GalleryItem
              id={3}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b08fc7ea-84a6-4bd7-8163-cd7f40e99ff6/AS+W+NSW+CLUB+FLC+CREW+STD.png"
              topTitle="Just In"
              title="Nike Club"
              offer="Men's Balloon Top"
              color="5 color"
              price="MRP : ₹ 4 475.00"
            />
           <GalleryItem
              id={4}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f38f1ede-cdc3-46b9-a442-9a3724db42ef/AS+W+NSW+ESSTL+WVN+MR+STD+CRGO.png"
              topTitle="Just In"
              title="Nike Sportswear Wovens"
              offer="Women's Mid-Rise Cargo"
              color="4 color"
              price="MRP : ₹ 4 695.00"
            />
           <GalleryItem
              id={5}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/72ed595b-fcae-492f-a93f-bb4d4fff12d7/W+J+SS+GF+HRTG+TEE+GEL+J+DAY.png"
              topTitle="Just In"
              title="Jordan (Her)itage"
              offer="Women's Graphic T-Shirt"
              color="2 color"
              price="MRP : ₹ 2 295.00"
            />
           <GalleryItem
              id={6}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/359b2cdb-4d1a-45d1-8d24-0ca9081a8c9e/AS+W+NSW+DANCE+CARGO+PANT.png"
              topTitle="Just In"
              title="Nike Sportswear "
              offer="Women's Mid-Rise Cargo Trousers"
              color="5 color"
              price="MRP : ₹ 3 795.00"
            />
           <GalleryItem
              id={7}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d3d4484-98ba-46f6-86cb-3a8db8fb296c/AS+W+NK+DF+ONE+HR+TIGHT+USEAM.png"
              topTitle="Just In"
              title="Nike One Seamless Front"
              offer="Women's High-Waisted Full-Length"
              color="6 color"
              price="MRP : ₹ 3 095.00"
            />
           <GalleryItem
              id={8}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/934f8f87-01d2-4dea-b758-d69155e80620/AS+W+NSW+CLUB+CREW+CV.png"
              topTitle="Just In"
              title="Nike SportsWear Club"
              offer="Women's Crew-Neck"
              color="2 color"
              price="MRP : ₹ 3 495.00"
            />
           <GalleryItem
              id={9}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/69686db4-b0e4-4fb9-bf59-864988fab69f/W+NSW+WVN+PNT+SW.png"
              topTitle="Just In"
              title="Nike SportsWear"
              offer="Women's Woven Trousers"
              color="2 color"
              price="MRP : ₹ 4 295.00"
            />
           <GalleryItem
              id={10}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a97cadc6-3966-46a6-9d79-11948dbd23ce/AS+W+NSW+CLLCTN+ASYM+TROUSER+O.png"
              topTitle="Just In"
              title="Nike SportsWear Collection"
              offer="Women's Mid-Rise Trousers"
              color="2 color"
              price="MRP : ₹ 4 747.00"
            />
           <GalleryItem
              id={11}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c3f89498-7230-4733-b19c-ea2a654ef9a6/AS+W+NSW+ESSTL+WVN+MR+OS+JGGR.png"
              topTitle="Just In"
              title="Nike Sports Essential"
              offer="Women's Mid-Rise Joggers"
              color="2 color"
              price="MRP : ₹ 4 095.00"
            />
           <GalleryItem
              id={12}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/131bbbf3-dd57-434f-8550-2523ff451ed4/AS+W+NKCT+HRTGE+FLC+OOS+GFX+CR.png"
              topTitle="Just In"
              title="NikeCourt Heritage "
              offer="Women's Oversized Crew-Neck "
              color="3 color"
              price="MRP : ₹ 4 495.00"
            />
           <GalleryItem
              id={13}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/67549078-1f37-4a8e-a27c-0ad5e1d89923/WMNS+JORDAN+HEIR+SERIES+PF.png"
              topTitle="Promo Exclusion"
              title="Jordan Heir Series PF"
              offer="Women's Basketball Shoes"
              color="1 color"
              price="MRP : ₹ 9 695.00"
            />
           <GalleryItem
              id={14}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1bb6e31-13e8-47e5-8ba5-5151a11e8ed4/WMNS+JORDAN+HEIR+SERIES+PF.png"
              topTitle="Bestseller"
              title="Jordan Heries PF" 
              offer="Women's Shoes"
              color="1 color"
              price="MRP : ₹ 9 695.00"
            />
           <GalleryItem
              id={15}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b276ea43-556c-49f1-a38c-28cb77626a10/WMNS+AIR+JORDAN+4+RM.png"
              topTitle="Bestseller"
              title="Air Jordan 4RM "
              offer="Women's Shoes"
              color="1 color"
              price="MRP : ₹ 12 795.00"
            />
           <GalleryItem
              id={16}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d3123e79-53e5-4a03-aa5b-fbc5c18b9bfd/WMNS+AIR+JORDAN+1+LOW.png"
              topTitle="Promo Exclusion"
              title="Air Jordan 1 Low"
              offer="Women's Shoes"
              color="1 color"
              price="MRP : ₹ 8 295.00"
            />
           <GalleryItem
              id={17}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/89b9c5f5-9049-422d-aa76-19ea5323ef58/WMNS+AIR+JORDAN+1+MID.png"
              topTitle="Bestseller"
              title="Air Jordan 1 Mid"
              offer="Women's Shoes"
              color="1 color"
              price="MRP : ₹ 11 495.00"
            />
           <GalleryItem
              id={18}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/46f55604-0c16-43d7-8d74-05b379c140dc/WMNS+AIR+JORDAN+1+MID.png"
              topTitle="Bestseller"
              title="Air Jordan 1 Mid"
              offer="Men's Shoes"
              color="1 color"
              price="MRP : ₹ 10 895.00"
            />
           <GalleryItem
              id={19}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e3026946-d893-4db4-8bea-86182e22a040/AS+W+NK+SWSH+MED+SPT+BRA.png"
              topTitle="Bestseller"
              title="Nike Swoosh Medium-Supprt"
              offer="Women's Padded Sports Bra"
              color="1 color"
              price="MRP : ₹ 2 495.00"
            />
           <GalleryItem
              id={20}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/75ed2a22-6df1-4068-85a0-7b1e80fb0dd3/AS+W+NK+ALATE+MINIMALIST+LSBRA.png"
              topTitle="Sustainable Materials"
              title="Nike Alate MiniMalist"
              offer="Womens's Light-Support Padded Bra"
              color="1 color"
              price="MRP : ₹ 5 695.00"
            />
           <GalleryItem
              id={21}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/81bc1cab-fd7d-4387-8acd-eeb70b68db20/AS+W+NK+DF+ALATE+TRACE+BRA.png"
              topTitle="Just In"
              title="Nike Zenvy Strappy"
              offer="Women's Light-Support Sports Bra"
              color="1 color"
              price="MRP : ₹ 3 795.00"
            />
           <GalleryItem
              id={22}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3f61070c-1b4f-48fc-968b-43f3ee5654c7/AS+W+NK+ONE+DF+MR+3IN+BR+SHORT.png"
              topTitle="Just In"
              title="Nike Dri-FIT One"
              offer="Women's Mid-RISE 8CM"
              color="1 color"
              price="MRP : ₹ 5 695.00"
            />
           <GalleryItem
              id={23}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d45fbfab-ee03-48ae-b011-2debbe3f527c/AS+W+NK+ONE+DF+MR+3IN+2N1+SRT.png"
              topTitle="Just In"
              title="nIKE Dri-Fit One"
              offer="Women's MiD-RISE 8CM (APPROX)"
              color="1 color"
              price="MRP : ₹ 1 995.00"
            />
           <GalleryItem
              id={24}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9ca1c72a-ff02-460e-97ed-e70e7c35c548/W+NP+SCULPT+DF+HR+3IN+SHORT+GG.png"
              topTitle="Just In"
              title="Nike Pro Sculpt"
              offer="Women's High-Waisted 7.5cm"
              color="1 color"
              price="MRP : ₹ 5 995.00"
            />
           <GalleryItem
              id={25}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/55910476-e707-4163-8e64-f70e13349a33/AS+W+NK+DF+UNIVERSA+HR+8IN+SHO.png"
              topTitle="Just In"
              title="Nike Universa"
              offer="Women's Medium-Supprots HighWaisted 20cm "
              color="1 color"
              price="MRP : ₹ 3 695.00"
            />
           <GalleryItem
              id={26}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/365ef44e-e73b-4fc6-a574-c359d866277f/AS+W+NK+%28M%29+DF+ZENVYHR8INSHORT.png"
              topTitle="Sustainable Materials"
              title="Nike Zenvy (M)"
              offer="Women's Gentle-Suppots High-waited 20cm (apporx)"
              color="1 color"
              price="MRP : ₹ 3 695.00"
            />
           <GalleryItem
              id={27}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/36178b18-12f6-4a4e-88c7-5b1c372428b6/AS+W+NK+DF+ZENVY+HR+8IN+SHORT.png"
              topTitle="Sustainable Materials"
              title="Nike Zenvy (M)"
              offer="Women's Gentle-Suppots High-waited 20cm (apporx)"
              color="1 color"
              price="MRP : ₹ 3 695.00"
            />
           </div>
        </div>

      </div>

    </div>
  )
}

export default Women