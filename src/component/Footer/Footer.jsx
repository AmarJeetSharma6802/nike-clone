import React, { useRef } from 'react'
import '../Footer/footer.css'
import FooterTwo from './FooterTwo'


function Footer() {

const iconRef = useRef(null) 
const shoesRef = useRef(null) 
const clothingRef = useRef(null) 
const kidsRef = useRef(null) 

const iconsBtn =()=>{
    iconRef.current.classList.toggle('show')
}
const shoesBtn =()=>{
    shoesRef.current.classList.toggle('show')
}
const ClothingBtn =()=>{
    clothingRef.current.classList.toggle('show')
}
const kidsBtn =()=>{
    kidsRef.current.classList.toggle('show')
}
  return (
    <>
    <div className='footer-flex'>
        <div className="footer-icon-shoes-clothing-kid">
            <div className="footer-icon-shoes-clothing-kid-1">
                <h3 className="footer-icon-shoes-clothing-kid-h3" onClick={iconsBtn}>Icons</h3>
                <ul className="footer-icon-shoes-clothing-kid-ul icons" ref={iconRef}>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>AirForce</a></li>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Huarache</a></li>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Air Max 90</a></li>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Air Max 95</a></li>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Air Max 270</a></li>
                </ul>
            </div>

            <div className="footer-icon-shoes-clothing-kid-1 ">
                <h3 className="footer-icon-shoes-clothing-kid-h3" onClick={shoesBtn}>Shoes</h3>
                <ul className="footer-icon-shoes-clothing-kid-ul shoes" ref={shoesRef}>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>All Shoes</a></li>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Custom Shoes</a></li>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Jordan Shoes</a></li>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Running Shoes</a></li>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Basketball Shoes</a></li>
                </ul>
            </div>

            <div className="footer-icon-shoes-clothing-kid-1">
                <h3 className="footer-icon-shoes-clothing-kid-h3" onClick={ClothingBtn}>Clothing</h3>
                <ul className="footer-icon-shoes-clothing-kid-ul clothing" ref={clothingRef}>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>All Clothing</a></li>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Modest Wear</a></li>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Hoodies & Pullovers</a></li>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Shirts & Tops</a></li>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Jacketss</a></li>
                </ul>
            </div>

            <div className="footer-icon-shoes-clothing-kid-1">
                <h3 className="footer-icon-shoes-clothing-kid-h3 "  onClick={kidsBtn}>Kids</h3>
                <ul className="footer-icon-shoes-clothing-kid-ul kids" ref={kidsRef}>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Infant & Toddler Shoes</a></li>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Kids' Shoes</a></li>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Kids' Jordan Shoes</a></li>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Kids' Basketball Shoes</a></li>
                    <li className="footer-icon-shoes-clothing-kid-li"><a href="" className='footer-icon-shoes-clothing-kid-a'>Kids' Running Shoes</a></li>
                </ul>
            </div>

        </div>
    </div>

    <FooterTwo/>
    </>
  )
}

export default Footer