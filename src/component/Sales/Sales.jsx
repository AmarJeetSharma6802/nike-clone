import React,{useRef, useState,useEffect} from 'react'
import downArrow from '../../assets/down-arrow.png'
import { useNavigate,Link } from "react-router-dom";


function Sales() {
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
    document.title = "Nike Men's clothing and shoes";

    return () => {
      document.title = "Nike clone";
    };
  }, []);


const GalleryItem = ({ img, title, price, offer, id, color,topTitle }) => {
  return (
    <div className="img-container">
      <Link to={`/selectSalesImage/${id}/${title}`}>
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
          <p className='featured-p'>Sales</p>
          <div className="none-shoes">
            <p>Shoes </p>
            <p>Tops & T-shirts</p>
          </div>
          <div className="fillter-btnshortBy">
            <div className="fillter" onClick={filterBtn}><span>Fillter</span><i class="fa-solid fa-sliders"></i></div>
            <div className="shortBy-btn">
              <div className="shortBy" onClick={shortByBtn}>Short By <img src={downArrow} alt="" id='downarrow-short'/></div>
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
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fa5d7ecf-1208-4a4f-8b5f-46f1b888e4ad/AIR+FORCE+1+%2707+LV8.png"
              topTitle="Bestseller"
              title="Nike Air Force 1'17 LV8"
              offer="Men's shoes"
              color="1 color"
              price="MRP : ₹ 10 295.00"
            />
           <GalleryItem
              id={2}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da8cce5e-470a-4935-b8c8-1a8c9d402e8a/W+AIR+FORCE+1+%2707+NEXT+NATURE.png"
              topTitle="Sustainable Materials"
              title="Nike Air Force 1 '07 Next Nature"
              offer="Women's shoes"
              color="1 color"
              price="MRP : ₹ 7 787.00"
            />
           <GalleryItem
              id={3}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0efd4ef4-eb8b-4375-902c-c78791d47d80/NIKE+JAM.png"
              topTitle="Sustainable Materials"
              title="Nike JAM"
              offer="Women's Shoes"
              color="1 color"
              price="MRP : ₹  10 257.00"
            />
           <GalleryItem
              id={4}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c279f13e-cf3e-4738-8aa3-5b6576b5f51a/NIKE+AIR+MAX+90+LV8.png"
              topTitle="Bestseller"
              title="Nike Air Max 90 LV8"
              offer="Women's Shoes"
              color="1 color"
              price="MRP : ₹ 11 295.00"
            />
           <GalleryItem
              id={5}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/57645e9b-581c-4e5f-9b07-783d2e4682db/W+NIKE+AIR+MAX+1.png"
              topTitle="Sustainable Materials"
              title="Nike Air Max 1"
              offer="Women's shoes"
              color="3 color"
              price="MRP : ₹ 12 157.00"
            />
           <GalleryItem
              id={6}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d995ef9b-0fb1-402d-b933-51ff03fe735a/NIKE+JAM.png"
              topTitle="Sustainable Materials"
              title="Nike JAM"
              offer="Women's Shoes"
              color="1 color"
              price="MRP : ₹ 10 257.00"
            />
           <GalleryItem
              id={7}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f8aa60fa-7679-4074-8ea2-ead3813a50a3/AIR+JORDAN+4+RM.png"
              topTitle="Just In"
              title="Air Jordan 4 RM"
              offer="Men's Shoes"
              color="1 color"
              price="MRP : ₹ 12 195.00"
            />
           <GalleryItem
              id={8}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dc702cb7-ae0c-4c5a-b132-21c8f4ec93f8/AIR+JORDAN+1+LOW.png"
              topTitle="Bestseller"
              title="Air Jordan 1 Low"
              offer="Men's Shoes"
              color="1 color"
              price="MRP : ₹ 4 295.00"
            />
           <GalleryItem
              id={9}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b227d57b-4ed8-4c1b-99d0-f2b062e500a3/JORDAN+HEIR+SERIES+PF.png"
              topTitle="Bestseller"
              title="Jordan Heir Serires PF 'Classic'"
              offer="Basketball Shoes"
              color="1 color"
              price="MRP : ₹ 9 695.00"
            />
           <GalleryItem
              id={10}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/db45d3b2-f822-4ed2-b894-0c01e8937003/AIR+JORDAN+1+LOW+PRM.png"
              topTitle="Available SNKRS"
              title="Air Jordan 1 Low Premium"
              offer="Men's Shoes"
              color="1 color"
              price="MRP : ₹ 12 295.00"
            />
           <GalleryItem
              id={11}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0dde9946-f6fd-4a13-a149-1c2f11ca0b11/AIR+JORDAN+1+MID.png"
              topTitle="Bestseller"
              title="Air Jordan 1 Mid"
              offer="Men's Shoes"
              color="1 color"
              price="MRP : ₹ 11 495.00"
            />
           <GalleryItem
              id={12}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3fe719ae-5373-4c19-b8c8-d68df6ce1976/JORDAN+LUKA+3+PF.png"
              topTitle="Luka 3 PF 'Blurred Vision'"
              title="Basketball Shoes"
              offer="Men's Shoes"
              color="1 color"
              price="MRP : ₹ 11 895.00"
            />
           <GalleryItem
              id={13}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0efd4ef4-eb8b-4375-902c-c78791d47d80/NIKE+JAM.png"
              topTitle="Bestseller"
              title="Nike JAM"
              offer="Women's Shoes"
              color="1 color"
              price="MRP : ₹ 795.00"
            />
           <GalleryItem
              id={14}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c279f13e-cf3e-4738-8aa3-5b6576b5f51a/NIKE+AIR+MAX+90+LV8.png"
              topTitle="Just In"
              title="Nike Air Max 90"
              offer="Womens Shoes"
              color="1 color"
              price="MRP : ₹  695.00"
            />
           <GalleryItem
              id={15}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2fb53cb-011d-414f-a935-374280bc05e1/NIKE+V2K+RUN.png"
              topTitle="Just In"
              title="Nike V2K Run"
              offer="Men's Trousers"
              color="1 color"
              price="MRP : ₹ 795.00"
            />
           <GalleryItem
              id={16}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d995ef9b-0fb1-402d-b933-51ff03fe735a/NIKE+JAM.png"
              topTitle="Just In"
              title="Nike JAM"
              offer="Womens Shoes"
              color="1 color"
              price="MRP : ₹ 695.00"
            />
           <GalleryItem
              id={17}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f8aa60fa-7679-4074-8ea2-ead3813a50a3/AIR+JORDAN+4+RM.png"
              topTitle="Just In"
              title="Jordan 4 RM"
              offer="Mens Shoes"
              color="1 color"
              price="MRP : ₹ 995.00"
            />
           <GalleryItem
              id={24}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/381ef1c4-4c7c-4e17-8e91-5c27bdc75c21/W+NIKE+V2K+RUN.png"
              topTitle="Sustainable Materials"
              title="Nike V12K Run"
              offer="Womens Shoes"
              color="1 color"
              price="MRP : ₹  995.00"
            />
           </div>
        </div>

      </div>

    </div>
  )
}

export default Sales;