import React,{useEffect} from 'react'
import { Link, } from 'react-router-dom'
import '../Home/home.css'
import HomeCarousel from './HomeCaroucel'
import HomeTrend from './HomeTrend'
import HomeMember from './HomeMember'

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div>
        <div className="homepage">
            <div className="nike-details">
                <p className='nike-details-para-first'>New Styles On Sale: Up To 40% Off</p>
                <p className='nike-details-para-second'>No matter what you feel like doing today, It’s better as a Member.</p>
                <p className='nike-details-para-third'>Join with amarjeet sharma</p>
            </div>
            
            <div className="homapage-main-img">
                <div className="main-img-shoes">
                   <a href=""className='mainPage-img-anchor'>
                   <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/24c4cdf6-9cdf-4aa6-8c9a-89dbd8b866d0/nike-just-do-it.jpg" alt="" id="shoesimg" />
                   <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_336,c_limit/f2df8a9e-c92c-4d97-811e-22ddfb29ee2a/nike-just-do-it.jpg" alt="" id="shoesimg2" />
                   
                   <div className="LeBron">
                    <h1 className='leborn-h1'>LeBron XXII ‘The Limelight’</h1>
                    <p className='leborn-para'>Bring the pressure no matter how large the stage in the latest colourway from the King.</p>
                    <button className='main-shop-btn'>Shop</button>
                   </div>
                   </a>
                   
                </div>
            </div>
        </div>

        <div className="featured-img">
            <div className="featured-max-width">
            <div className="featuredtext">Featured</div>
                <div className="img-three-anchor">
                    <div className="img-three-anchor-first-img">
                       <Link to="/women" className='anchor-first-img'> <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_582,c_limit/b6bc2a7d-d4ab-47f6-a709-cee396c5041f/image.jpg" alt="" id='img-three-anchor-first-img' />
                       <p className='img-three-anchor-first-img-para'>Bra & Leggings</p>
                       </Link>
                    </div>
                    <div className="img-three-anchor-first-img">
                       <Link to="/men" className='anchor-first-img'> <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_582,c_limit/2fef0730-64d1-417f-98f6-d0c5eb37d585/image.jpg" alt="" id='img-three-anchor-first-img' />
                       <p className='img-three-anchor-first-img-para'>The Air Max 1</p>
                       </Link>
                    </div>
                    <div className="img-three-anchor-first-img">
                       <Link to="/sales" className='anchor-first-img'> <img src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_582,c_limit/3d09add4-6b8b-428d-9625-409a248421fb/nike-just-do-it.jpg" alt="" id='img-three-anchor-first-img' />
                       <p className='img-three-anchor-first-img-para'>Vomero 5</p>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
        <HomeCarousel/>
        <HomeTrend/>
        <HomeMember/>
    </div>
    
  )
}

export default Home