import React from 'react'
import Classes from './styles/style.module.css'
import imageHero from '../../utils/images/hero-right.png'
import img1 from '../../utils/images/img1.jpg'
import img2 from '../../utils/images/img2.jpg'
import img3 from '../../utils/images/img3.jpg'
import locationIcon from '../../utils/icons/locationIcon.png'
import phoneIcon from '../../utils/icons/phoneIcon.png'
import emailIcon from '../../utils/icons/emailIcon.png'
function Home() {
  return (
    <>
        <section className={Classes.s1}>
                <div>
                    <div className={Classes.left_con} >
                        <div className={Classes.txt_con} >
                            <h1>We Need Your <br/> Powerful Hands To <br/> <span className={Classes.colored_txt} > Change </span> The World.</h1>
                        </div>
                        <div className={Classes.btn_con} >
                            <button>
                                <h5>All Causes</h5>
                            </button>
                            <button>
                                <h5>Book Now</h5>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={Classes.right_img_con} >
                        <img src={imageHero} alt='hero-image' />
                    </div>
                </div>
        </section> 
        <section className={Classes.s2}>
            <div>
                <div className={Classes.s2_left_con}>
                    <div className={Classes.s2_l_img_con1} >
                        <img src={img1} />
                    </div>
                    <div className={Classes.img_2_con} >
                        <div className={Classes.s2_2_img_con1} >
                            <img src={img2} />
                        </div>
                        <div className={Classes.s2_3_img_con1} >
                            <img src={img3} />
                        </div>
                    </div>
                </div>
                <div className={Classes.s2_right_con} >
                    <h1>About Us</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum
                        has been the industry's standard dummy text ever since the 1500s, when an unknown.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum
                        has been the industry's standard dummy text ever since the 1500s, when an unknown.
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
                    </p>
                    <div className={Classes.s2_two_txt_con} >
                        <h4>Need your simple <br/> help for save children.</h4>
                        <div className={Classes.v_line} ></div>
                        <h4>Need your simple <br/> help for save children.</h4>
                    </div>
                    <div>
                        <button><h5>Book Now</h5></button>
                    </div>
                </div>
            </div>
        </section>
        <section className={Classes.s3}>
            <div>
                <div className={Classes.s3_main_left} >
                    <div className={Classes.s3_left_con}>
                        <h1>Let's talk with us</h1>
                        <p>Questions, comments, or suggestions? Simply <br/> fill in the form and we’ll be in touch shortly.</p>
                        <div className={Classes.s3_address_con} >
                            <img src={locationIcon} />
                            <h1>
                                1055 Arthur ave Elk Groot, 67. <br/>
                                New Palmas South Carolina.
                            </h1>
                        </div>
                        <div className={Classes.s3_phone_con} >
                            <img src={phoneIcon} />
                            <h1>+1 234 678 9108 99</h1>
                        </div>
                        <div className={Classes.s3_phone_con} >
                            <img src={emailIcon} />
                            <h1>Contact@moralizer.com</h1>
                        </div>
                    </div>
                </div>
                <div className={Classes.s3_main_right} >
                    <div className={Classes.s3_right_con}>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home
