import React,{useRef, useState,useEffect} from 'react'
import downArrow from '../../assets/down-arrow.png'
import './newFeatured.css'
import { useNavigate,Link } from "react-router-dom";


function NewFeatured() {
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
    // Set the document title
    document.title = "Nike New featured";

    return () => {
      document.title = "Nike clone";
    };
  }, []);
const GalleryItem = ({ img, title, price, offer, id, color }) => {
  return (
    <div className="img-container">
      <Link to={`/selectimage/${id}/${title}`}>
        <img src={img} alt={title} className="grid-img" />
      </Link>
      <div className="info-details">
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
          <p className='featured-p'>NEW Featured clots</p>
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
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6ea5bb09-26b9-4232-ba27-821cf7743681/AIR+FORCE+1+%2707.png"
              title="Nike Air Force 1 '07"
              offer="Men's Shoes"
              color="1 color"
              price="MRP : ₹ 11 895.00"
            />
           <GalleryItem
              id={2}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dab259aa-dbc3-4c18-85e8-38dababbed92/NIKE+DUNK+LOW+RETRO.png"
              title="Nike Dunk Low Retro"
              offer="Men's Shoes"
              color="1 color"
              price="MRP : ₹ 11 495.00"
            />
           <GalleryItem
              id={3}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/468c655a-505f-4e45-93a8-ef2d6af3a35e/W+NIKE+DUNK+LOW+LX.png"
              title="Nike Dunk Low LX"
              offer="Women's Shoes"
              color="1 color"
              price="MRP : ₹ 10 795.00"
            />
           <GalleryItem
              id={4}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2151a64b-99bb-4313-b820-71f09cd40869/WMNS+AIR+FORCE+1+%2707+LX.png"
              title="Nike Air Force 1 '07 LX"
              offer="Women's Shoes"
              color="1 color"
              price="MRP : ₹ 11 895.00"
            />
           <GalleryItem
              id={5}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7a1471d2-d527-4f21-a3e7-1bb58d3d3c9f/AIR+ZOOM+PEGASUS+41.png"
              title="Nike Pegasus 41"
              offer="Mens's Road Running Shoes"
              color="1 color"
              price="MRP : ₹ 11 895.00"
            />
           <GalleryItem
              id={6}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d4d7b9cd-ec01-472f-8716-7f669982d0ad/ZOOM+FLY+6+PRM.png"
              title="Nike Zoom Fly 6 Premium"
              offer="Mens's Road Running Shoes"
              color="1 color"
              price="MRP : ₹ 16 995.00"
            />
           <GalleryItem
              id={7}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6787f6a3-8e9b-4838-9783-412aa6eeae13/W+J+FLT+FLC+PO+GFX+40.png"
              title="Jordan Flight Fleece"
              offer="Women's Cropped Satin-Lined Hoodie"
              color="1 color"
              price="MRP : ₹ 5 695.00"
            />
           <GalleryItem
              id={8}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/66ef5b2a-d475-4144-99ef-3bcf085754da/W+J+AIR+JDN+ZIP+KNIT+TOP.png"
              title="Air Jordan "
              offer="Women's Full-Zip Knit Top"
              color="1 color"
              price="MRP : ₹ 5 495.00"
            />
           <GalleryItem
              id={9}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/581de38c-b535-4d7e-a756-b097dbc2ba95/AS+W+NSW+NK+WR+POLY+KNIT+JKT.png"
              title="Nike Sportswear Windrunner"
              offer="Women's Knit Jacket"
              color="1 color"
              price="MRP : ₹ 5 495.00"
            />
           <GalleryItem
              id={10}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3b30bcc8-c227-4722-9be4-b5b680282aa2/AS+W+NSW+NK+WR+MR+POLY+KNIT+PN.png"
              title="Nike Sportswear Windrunner"
              offer="Womens's Slim Mid-Rise Knit Trousers"
              color="1 color"
              price="MRP : ₹ 4 095.00"
            />
           <GalleryItem
              id={11}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6683b133-6def-4037-a39e-9287af89a6a5/AS+W+NSW+PHNX+FLC+CROP+VNECK+O.png"
              title="Nike Sportswear Phoenix Fleece"
              offer="Women's Oversized V-Neck Cropped Top"
              color="1 color"
              price="MRP : ₹ 4 295.00"
            />
           <GalleryItem
              id={12}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e34f6bb2-3fbb-4bcd-8c68-15d3f956b045/AS+W+NSW+PHNX+FLC+CROP+VNECK+O.png"
              title="Nike Sportswear Phoenix Fleece"
              offer="Women's Oversized V-Neck Cropped Top"
              color="1 color"
              price="MRP : ₹ 4 295.00"
            />
           </div>
        </div>

      </div>

    </div>
  )
}

export default NewFeatured