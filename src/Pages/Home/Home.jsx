import React from 'react'
import Classes from './styles/style.module.css'
import imageHero from '../../utils/images/hero-right.png'
import img1 from '../../utils/images/img1.jpg'
import img2 from '../../utils/images/img2.jpg'
import img3 from '../../utils/images/img3.jpg'

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
                </div>
            </div>
        </section> 
    </>
  )
}

export default Home
