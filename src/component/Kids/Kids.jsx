import React,{useRef, useState,useEffect} from 'react'
import downArrow from '../../assets/down-arrow.png'
import { useNavigate,Link } from "react-router-dom";


function Kids() {
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
    document.title = "Nike Kids's clothing and shoes";

    return () => {
      document.title = "Nike clone";
    };
  }, []);


const GalleryItem = ({ img, title, price, offer, id, color,topTitle }) => {
  return (
    <div className="img-container">
      <Link to={`/selectKidsImage/${id}/${title}`}>
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
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/51274f91-1d19-425b-959c-08a380763c37/K+NSW+TRACKSUIT+POLY+CREW+HBR.png"
              topTitle="Just In"
              title="Nike Sportswear"
              offer="Older Kids Tracksuit"
              color="2 color"
              price="MRP : ₹ 3 495.00"
            />
           <GalleryItem
              id={2}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c5faaf71-5999-417e-93f7-09a00c07ccd2/K+NSW+TRACKSUIT+POLY+FZ+HBR.png"
              topTitle="Just In"
              title="Nike Sportswear"
              offer="Older Kids Tracksuit"
              color="2 color"
              price="MRP : ₹ 3 065.00"
            />
           <GalleryItem
              id={3}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e9df9ee0-b16a-4903-97ed-ba10ba79943a/K+NSW+TEE+EMB+FUTURA+LBR.png"
              topTitle="Just In"
              title="Nike Sportswear"
              offer="Older Kids T-Shirt"
              color="5 color"
              price="MRP : ₹ 895.00"
            />
           <GalleryItem
              id={4}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fce4149-67b9-4eeb-8098-4dc12b274ef2/G+NSW+TEE+BOXY+ESSNTL+LBR.png"
              topTitle="Just In"
              title="Nike Sportswear "
              offer="Older (Girls) T-Shirt"
              color="4 color"
              price="MRP : ₹ 4 177.00"
            />
           <GalleryItem
              id={5}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/598dd8c1-9387-4f4d-ba89-5df7fc577e3d/K+NSW+TEE+FUTURA+HBR.png"
              topTitle="Just In"
              title="Nike Sportswear "
                offer="Older Kids T-Shirt"
              color=" color"
              price="MRP : ₹ 1 295.00"
            />
           <GalleryItem
              id={6}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/77c5f1c7-af60-4a9a-9b73-1598b357563f/G+NSW+CLUB+FLC+OVRSZD+CREW+LBR.png"
              topTitle="Coming Soon"
              title="Nike Sportswear Club"
              offer="Older kids Oversized "
              color="3 color"
              price="MRP : ₹ 1 897.00"
            />
           <GalleryItem
              id={7}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0ebadb85-0c34-42d3-9774-964824945768/K+NSW+CTY+UTLITY+EO+TF+WZ+TOP.png"
              topTitle="Bestseller"
              title="Nike Crossover"
              offer="Older Kids Repel"
              color="12 color"
              price="MRP : ₹ 3 295.00"
            />
           <GalleryItem
              id={8}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e629549d-8c53-4a54-b951-99893a497564/K+ACG+TF+RVSBL+VEST.png"
              topTitle="Coming Soon"
              title="Nike ACG "
              offer="Older kids Swearshirt"
              color="1 color"
              price="MRP : ₹ 1 995.00"
            />
           <GalleryItem
              id={9}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/04a0a318-9694-45ec-9134-88d233f3ecd5/K+NSW+TEE+JDI+HBR+GFX+FILL.png"
              topTitle="Just In"
              title="Nike Sportswear"
              offer="Older Kids' T-Shirt"
              color="1 color"
              price="MRP : ₹  495.00"
            />
           <GalleryItem
              id={10}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b1ca76c9-abd2-4769-9865-55db5e2f6c91/AIR+JORDAN+1+MID+SS+%28GS%29.png"
              topTitle="Just In"
              title="Air Jordan Mid Sneakar"
              offer="Older Kids Shoes"
              color="1 color"
              price="MRP : ₹ 8 295.00"
            />
           <GalleryItem
              id={11}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/81186811-81dc-4426-9a53-109c2a564af7/JORDAN+LUKA+3+%28GS%29.png"
              topTitle="Sustainable Materials"
              title="Nike Luka 3"
              offer="Older Kids Shoes"
              color="1 color"
              price="MRP : ₹ 7 995.00"
            />
           <GalleryItem
              id={12}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4385b8ab-2c6e-4572-ab28-6ed36b5f8b88/AIR+JORDAN+4+RM+%28GS%29.png"
              topTitle="Promo Exclusion"
              title="Air Jordan 1 Low OG"
              offer="Older Kids Shoes"
              color="1 color"
              price="MRP : ₹ 8 995.00"
            />
           <GalleryItem
              id={13}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3c09366b-d0a4-43a3-b788-bae3f05e9733/JR+ZOOM+SUPERFLY+10+ACAD+FGMG.png"
              topTitle="Coming Soon"
              title="Nike Jr. Mercurial Superfly"
              offer="Younger/Older Kids MG"
              color="1 color"
              price="MRP : ₹ 12 195.00"
            />
           <GalleryItem
              id={14}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7dcce217-fb1a-4081-9917-e0acbd7a9483/JR+SUPERFLY+10+CLUB+TF.png"
              topTitle="Bestseller"
              title="Nike Jr. Mercurial Superfly 10 club"
              offer="Younger/Older Kids TG"
              color="1 color"
              price="MRP : ₹ 4 295.00"
            />
           <GalleryItem
              id={15}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/de725c6b-bf88-47eb-94ee-ea0920252fd5/JR+VAPOR+16+CLUB+TF.png"
              topTitle="Bestseller"
              title="Nike Jr. Mercurial Vapor 16 club"
              offer="Younger/Older Kids TF "
              color="1 color"
              price="MRP : ₹ 9 695.00"
            />
           <GalleryItem
              id={16}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1dfae5d6-1241-4169-8bd5-c3d546dbf834/PEGASUS+41+BLUEPRINT+%28GS%29.png"
              topTitle="Promo Exclusion"
              title="Nike Pegasus 41 BluePrint"
              offer="Older Kids Road Running shoes"
              color="1 color"
              price="MRP : ₹ 7 295.00"
            />
           <GalleryItem
              id={17}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/60b22a13-ec4d-47f3-96c2-51b26bdd331c/NIKE+REVOLUTION+7+%28GS%29.png"
              topTitle="Bestseller"
              title="Older kids Running Shoes"
              offer="Older Kids Running shoes"
              color="1 color"
              price="MRP : ₹ 3 495.00"
            />
           <GalleryItem
              id={18}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4c61e6e0-b559-4762-883d-cfd3674eef72/AIR+ZOOM+PEGASUS+41+%28GS%29.png"
              topTitle="Luka 'Blurred Vision'"
              title="Basketball Shoes"
              offer="Older kids's Shoes"
              color="1 color"
              price="MRP : ₹ 7 895.00"
            />
           <GalleryItem
              id={19}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b1fce2a3-1eca-41cf-86bf-d4724bae4422/K+NSW+CLUB+FLC+CRGO+PNT+LBR.png"
              topTitle="Just In"
              title="Nike Sportswear"
              offer="Older Kids Cargo"
              color="1 color"
              price="MRP : ₹ 2 395.00"
            />
           <GalleryItem
              id={20}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/53b37034-0c15-4be5-9e05-60c5ac8890ff/K+NSW+CITY+UTILITY+CARGO+PANT.png"
              topTitle="Just In"
              title="Nike Sportswear city Utility"
              offer="Older Kids Cargo trousers"
              color="1 color"
              price="MRP : ₹ 2 795.00"
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
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/64ad36da-5b2c-4f37-beda-3a3c147ea50a/B+NSW+TCH+FLC+SSNL+TF%2B+WR+FZ.png"
              topTitle="Just In"
              title="Nike sportswear Tech "
              offer="Older kids(boys/Girls)"
              color="1 color"
              price="MRP : ₹ 5 695.00"
            />
           <GalleryItem
              id={23}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/17a86757-f047-4a6e-a727-d4673b0cf3f9/K+NK+DF+ACD23+TOP+SS+GX+HBR.png"
              topTitle="Just In"
              title="Nike Academy"
              offer="Older kids Dri-Fit"
              color="2 color"
              price="MRP : ₹  995.00"
            />
           <GalleryItem
              id={24}
              img="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e77a53e3-7c1a-4895-a7fa-ad123478c75b/K+ACG+DF+WAFFLE+LS+TOP.png"
              topTitle="Just In"
              title="Nike ACG"
              offer="Older kids Dri-Fit Long-Sleeve"
              color="1 color"
              price="MRP : ₹ 1 895.00"
            />
           </div>
        </div>

      </div>

    </div>
  )
}

export default Kids;