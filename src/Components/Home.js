import React from 'react'
import { FaCheck, FaSistrix, FaLocationDot, FaCalendarDays, FaUserLarge  } from "react-icons/fa6";
import OwlCarousel from 'react-owl-carousel';

const client_logo={
    loop:true,
    margin:10,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    smartSpeed:1000,
    responsive:{
        0:{
            items:3
        },
        992:{
            items:8
        }
    }
}

function Home() {
  return (
    <>
        <main>

            {/* Banner */}
            <div className="main_banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="banner_text">
                                <p className='banner_title'>Rishabh Eye Hospital and laser center | Cataract Surgery | Lasik Center |<br></br> Cornea Transplant Center</p>
                                <p className='banner_subtitle'>Donec sollicitudin molestie malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            </div>
                            <div className="banner_form">
                                <div className="form_header d-flex flex-wrap align-items-center mb-3">
                                    <p className='book_lable'>Book an appointment</p>
                                    <div class="custom-radios d-flex">
                                        <label htmlFor="opt1">
                                            <input type="radio" id='opt1' name="opt" checked />
                                            <span className='check_circle'>
                                                <FaCheck className='check_icon' />
                                            </span>
                                            <span className='radio_name'>General</span>
                                        </label>
                                        <label htmlFor="opt2">
                                            <input type="radio" id='opt2' name="opt" />
                                            <span className='check_circle'>
                                                <FaCheck className='check_icon' />
                                            </span>
                                            <span className='radio_name'>Para medical</span>
                                        </label>
                                        <label htmlFor="opt3">
                                            <input type="radio" id='opt3' name="opt" />
                                            <span className='check_circle'>
                                                <FaCheck className='check_icon' />
                                            </span>
                                            <span className='radio_name'>Dentis</span>
                                        </label>
                                        
                                    </div>
                                    <div className='search_box ms-auto position-relative d-flex'>
                                        <input type="text" placeholder='Search' />
                                        <FaSistrix className='search_icon' />
                                    </div>
                                </div>
                                <div className="row gx-2">
                                    <div className="col-4 select_opt">
                                        <div className="form-floating mb-3 position-relative">
                                            <input type="text" className="form-control input_box" id="floatingInput" value="Surat, Gujarat" />
                                            <label htmlFor="floatingInput" className='fw-600'>Location</label>
                                            <div className="input_icon active"><FaLocationDot /></div>
                                        </div>
                                    </div>
                                    <div className="col-4 select_opt">
                                        <div className="form-floating mb-3 position-relative">
                                            <input type="date" className="form-control input_box" id="floatingInput" />
                                            <label htmlFor="floatingInput" className='fw-600'>Appointment Date</label>
                                            <div className="input_icon"><FaCalendarDays /></div>
                                        </div>
                                    </div>
                                    <div className="col-4 select_opt">
                                        <div className="form-floating mb-3 position-relative">
                                            <input type="text" className="form-control input_box" id="floatingInput" value="02 Adults, 01 Child" />
                                            <label htmlFor="floatingInput" className='fw-600'>Persons</label>
                                            <div className="input_icon"><FaUserLarge /></div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <input type="text" className="form-control txt_box" id="floatingInput" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="mb-3">
                                            <input type="text" className="form-control txt_box" id="floatingInput" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-12 text-md-end text-center">
                                        <input type="submit" className='btn btn-booking' value="Booking Now" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 d-md-none d-block text-center">
                            <img src={require('../assets/image/banner_doctor.png')} className='banner_doctor_img' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* company employee */}
            <div className="container spacer">
                <div className="section_title">
                    <p>Over 20+ Company Employees Tie up</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="249" height="4" viewBox="0 0 249 4" fill="none">
                        <rect x="48" width="153" height="3.97701" rx="1.98851" fill="#37C38F"/>
                        <rect x="207" width="28" height="3.97701" rx="1.98851" fill="#37C38F"/>
                        <rect x="14" y="6.10352e-05" width="28" height="3.97701" rx="1.98851" fill="#37C38F"/>
                        <rect x="241" width="8" height="3.97701" rx="1.98851" fill="#37C38F"/>
                        <rect width="8" height="3.97701" rx="1.98851" fill="#37C38F"/>
                        <rect x="48" width="153" height="3.97701" rx="1.98851" fill="#37C38F"/>
                        <rect x="207" width="28" height="3.97701" rx="1.98851" fill="#37C38F"/>
                        <rect x="14" y="6.10352e-05" width="28" height="3.97701" rx="1.98851" fill="#37C38F"/>
                        <rect x="241" width="8" height="3.97701" rx="1.98851" fill="#37C38F"/>
                        <rect width="8" height="3.97701" rx="1.98851" fill="#37C38F"/>
                    </svg>
                </div>
                <div className="row mt-md-5 mt-0">
                    <OwlCarousel className='owl-theme employee_logo' {...client_logo} >
                        <div class='item'>
                            <img src={require('../assets/image/logo (1).png')} alt="" />
                        </div>
                        <div class='item'>
                            <img src={require('../assets/image/logo (3).png')} alt="" />
                        </div>
                        <div class='item'>
                            <img src={require('../assets/image/logo (4).png')} alt="" />
                        </div>
                        <div class='item'>
                            <img src={require('../assets/image/logo (5).png')} alt="" />
                        </div>
                        <div class='item'>
                            <img src={require('../assets/image/logo (6).png')} alt="" />
                        </div>
                        <div class='item'>
                            <img src={require('../assets/image/logo (7).png')} alt="" />
                        </div>
                        <div class='item'>
                            <img src={require('../assets/image/logo (8).png')} alt="" />
                        </div>
                    </OwlCarousel>
                </div>
            </div>

        </main>
    </>
  )
}

export default Home