import React, { useState } from 'react'
import Classes from './styles/style.module.css'
import imageHero from '../../utils/images/hero-right.png'
import img1 from '../../utils/images/img1.jpg'
import img2 from '../../utils/images/img2.jpg'
import img3 from '../../utils/images/img3.jpg'
import locationIcon from '../../utils/icons/locationIcon.png'
import phoneIcon from '../../utils/icons/phoneIcon.png'
import emailIcon from '../../utils/icons/emailIcon.png'
import { useNavigate } from 'react-router-dom'
import LoginRequiredPopup from '../../Components/LoginRequiredPopup.jsx/LoginRequiredPopup'
import AnimHeading1 from '../../Components/ScrollEffect/AnimHeading1'
const Pricing = [
    {
        from: 'Istanbul, Turkey',
        to: 'Moscow, Russia',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Moscow, Russia',
        to: 'Istanbul, Turkey',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Istanbul, Turkey',
        to: 'London, United Kingdom',
        price: '$10,000 to $20,000',
    },
    {
        from: 'London, United Kingdom',
        to: 'Istanbul, Turkey',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Istanbul, Turkey',
        to: 'Saint Petersburg, Russia',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Berlin, Germany',
        to: 'Istanbul, Turkey',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Istanbul, Turkey',
        to: 'Madrid, Spain',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Istanbul, Turkey',
        to: 'Barcelona, Spain',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Barcelona, Spain',
        to: 'Istanbul, Turkey',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Istanbul, Turkey',
        to: 'Rome, Italy',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Rome, Italy',
        to: 'Istanbul, Turkey',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Istanbul, Turkey',
        to: 'Paris, France',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Paris, France',
        to: 'Istanbul, Turkey',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Istanbul, Turkey',
        to: 'Bucharest, Romania',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Bucharest, Romania',
        to: 'Istanbul, Turkey',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Moscow, Russia',
        to: 'Istanbul, Turkey',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Istanbul, Turkey',
        to: 'Moscow, Russia',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Moscow, Russia',
        to: 'London, United Kingdom',
        price: '$10,000 to $20,000',
    },
    {
        from: 'London, United Kingdom',
        to: 'Moscow, Russia',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Moscow, Russia',
        to: 'Saint Petersburg, Russia',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Berlin, Germany',
        to: 'Moscow, Russia',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Moscow, Russia',
        to: 'Madrid, Spain',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Moscow, Russia',
        to: 'Barcelona, Spain',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Barcelona, Spain',
        to: 'Moscow, Russia',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Moscow, Russia',
        to: 'Rome, Italy',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Rome, Italy',
        to: 'Moscow, Russia',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Moscow, Russia',
        to: 'Paris, France',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Paris, France',
        to: 'Moscow, Russia',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Moscow, Russia',
        to: 'Bucharest, Romania',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Bucharest, Romania',
        to: 'Moscow, Russia',
        price: '$10,000 to $20,000',
    },
    {
        from: 'London, United Kingdom',
        to: 'Istanbul, Turkey',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Istanbul, Turkey',
        to: 'London, United Kingdom',
        price: '$10,000 to $20,000',
    },
    {
        from: 'London, United Kingdom',
        to: 'Moscow, Russia',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Moscow, Russia',
        to: 'London, United Kingdom',
        price: '$10,000 to $20,000',
    },
    {
        from: 'London, United Kingdom',
        to: 'Saint Petersburg, Russia',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Berlin, Germany',
        to: 'London, United Kingdom',
        price: '$10,000 to $20,000',
    },
    {
        from: 'London, United Kingdom',
        to: 'Madrid, Spain',
        price: '$10,000 to $20,000',
    },
    {
        from: 'London, United Kingdom',
        to: 'Barcelona, Spain',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Barcelona, Spain',
        to: 'London, United Kingdom',
        price: '$10,000 to $20,000',
    },
    {
        from: 'London, United Kingdom',
        to: 'Rome, Italy',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Rome, Italy',
        to: 'London, United Kingdom',
        price: '$10,000 to $20,000',
    },
    {
        from: 'London, United Kingdom',
        to: 'Paris, France',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Paris, France',
        to: 'London, United Kingdom',
        price: '$10,000 to $20,000',
    },
    {
        from: 'London, United Kingdom',
        to: 'Bucharest, Romania',
        price: '$10,000 to $20,000',
    },
    {
        from: 'Bucharest, Romania',
        to: 'London, United Kingdom',
        price: '$10,000 to $20,000',
    },
]

function Home() {
    const [openLoginRequired,setopenLoginRequired] = useState(false);
    const handleopenLoginRequired = ()=>{
        setopenLoginRequired(true);
    }
    const handleCloseLoginRequired = ()=>{
        setopenLoginRequired(false)
    }
    const [formdata,setformdata] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    function changeValue(event){
        const {name,value} = event.target;
        setformdata({
          ...formdata,
          [name]: value,
        });
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
    }
    const Navigate = useNavigate();

  return (
    <>
        <AnimHeading1>
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
                            <button onClick={handleopenLoginRequired} >
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
        </AnimHeading1>
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
                        <h4>  Need your simple <br/> help for save children.</h4>
                        <div className={Classes.v_line} ></div>
                        <h4>Need your simple <br/> help for save children.</h4>
                    </div>
                    <div>
                        <button><h5>Book Now</h5></button>
                    </div>
                </div>
            </div>
        </section>
        <AnimHeading1>
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
                    <form onSubmit={handleSubmit} className={Classes.s3_right_con}>
                        <div className={Classes.input_l1_con} >
                            <input
                                type='text'
                                placeholder='First Name'
                                name='firstName'
                                value={formdata.firstName}
                                onChange={changeValue}
                                className={`${Classes.input_1} ${Classes.wid45}`}
                            />
                            <input
                                type='text'
                                placeholder='Last Name'
                                name='lastName'
                                value={formdata.lastName}
                                onChange={changeValue}
                                className={`${Classes.input_1} ${Classes.wid45}`}
                            />
                        </div>
                        <input
                            type='text'
                            placeholder='Email'
                            name='email'
                            value={formdata.email}
                            onChange={changeValue}
                            className={Classes.input_1}
                            required
                        />
                        <input
                            type='text'
                            placeholder='Phone'
                            name='phone'
                            value={formdata.phone}
                            onChange={changeValue}
                            className={Classes.input_1}
                        />
                        <textarea
                            type='text'
                            placeholder='Message'
                            name='message'
                            value={formdata.message}
                            onChange={changeValue}
                            className={Classes.input_1}
                            rows={9}
                        >
                        </textarea>
                        <button type='submit'>Send Message</button>
                    </form>
                </div>
                </div>
            </section>
        </AnimHeading1>
        <section className={Classes.s4}>
            <div>
                <h1>Pricing</h1>
                <div className={Classes.s4_list_head} >
                    <div>From</div>
                    <div>To</div>
                    <div>Price</div>
                </div>
                <div className={Classes.s4_list_con} >
                    { Pricing && Pricing.map((val,key)=>{
                        return(
                            <AnimHeading1>
                            <div className={Classes.s4_list_elem} >
                                <div> {val.from} </div>
                                <div> {val.to} </div>
                                <div> {val.price} </div>
                            </div>
                            </AnimHeading1>
                        )
                    })
                    }
                </div>
            </div>
        </section>
        { openLoginRequired &&
            <LoginRequiredPopup handleCloseLoginRequired={handleCloseLoginRequired} />
        }
    </>
  )
}

export default Home
