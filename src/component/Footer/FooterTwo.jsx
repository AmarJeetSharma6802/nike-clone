import React, { useRef } from 'react'
import downArrow from '../../assets/down-arrow.png'


function FooterTwo() {
    const resourceRef = useRef(null)
    const helpRef = useRef(null)
    const companyRef = useRef(null)

    const resourceBtn =()=>{
        resourceRef.current.classList.toggle('show')
    }
    const helpBtn =()=>{
        helpRef.current.classList.toggle('show')
    }
    const companyBtn =()=>{
        companyRef.current.classList.toggle('show')
    }

  return (
    <div>
        <div className="footer-two">
            <div className="footer-reshelCom top-space">
            <div className="arrow-p">
                <p className='footer-reshelCom-para'>Resources</p>
                <img src={downArrow} alt=""  id='downarrow' onClick={resourceBtn}/>
                </div>
                <ul className="footer-reshelCom-ul resource" ref={resourceRef}>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">Find A Store</a></li>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">Become A Member</a></li>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">Send Us Feedback</a></li>
                </ul>
            </div>

            <div className="footer-reshelCom">
            <div className="arrow-p">
                <p className='footer-reshelCom-para '>Help</p>
                <img src={downArrow} alt=""  id='downarrow' onClick={helpBtn}/>
                </div>
                <ul className="footer-reshelCom-ul help" ref={helpRef}>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">Get Help</a></li>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">Order Status</a></li>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">Delivery</a></li>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">Returns</a></li>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">Payment Options</a></li>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">Contact Us On Nike.com Inquiries</a></li>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">Contact Us On All Other Inquiries</a></li>
                </ul>
            </div>
            <div className="footer-reshelCom">
                <div className="arrow-p">
                <p className='footer-reshelCom-para'>Company</p>
                <img src={downArrow} alt=""  id='downarrow' onClick={companyBtn}/>
                </div>
                <ul className="footer-reshelCom-ul company" ref={companyRef}>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">About Nike</a></li>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">News</a></li>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">Careers</a></li>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">Investors</a></li>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">Payment Options</a></li>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">Sustainability</a></li>
                    <li className="footer-reshelCom-li"><a href="" className="footer-reshelCom-a">Report a Concern</a></li>
                </ul>
            </div>

        </div>

        <div className="copyright">
            <div className="as">AS</div>
            <a href=""className='copyRght'>© 2024 Amarjeet sharma, Inc. All rights reserved</a>
            <div className="twobtn-details">
                <div className='Github'><a href="https://github.com/AmarJeetSharma6802" className='github-a'><i class="fa-brands fa-github"></i>Github</a></div>
                <div className='LinkedIn'><a href="https://www.linkedin.com/in/amarjeet-sharma-full-stack/" className='LinkedIn-a'><i class="fa-brands fa-linkedin-in"></i>LinkdIn</a></div>
            </div>
        </div>
    </div>
  )
}

export default FooterTwo