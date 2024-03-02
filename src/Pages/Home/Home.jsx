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
            
        </section> 
    </>
  )
}

export default Home
