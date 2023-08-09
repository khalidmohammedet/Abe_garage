import React from 'react'

// components 👉
import './static/css/Service.css';
import Services_services_first_box_image from './static/image/Services_services_first_box_image.png';
import Services_services_second_box_image from './static/image/Services_services_second_box_image.png';
import Services_services_third_box_image from './static/image/Services_services_third_box_image.png';
import Services_services_forth_box_image from './static/image/Services_services_forth_box_image.png';
import Services_services_fifth_box_image from './static/image/Services_services_fifth_box_image.png';
import Services_services_sixth_box_image from './static/image/Services_services_sixth_box_image.png';
import menu_list_tick from './static/image/menu_list_tick.png';
import certified_expert_mechanies from './static/image/certified_expert_mechanies.png';
import fast_and_quality_service from './static/image/fast_and_quality_service.png';
import best_prices_in_town from './static/image/best_prices_in_town.png';
import awarded_workshop from './static/image/awarded_workshop.png';
import aditional_services_image from './static/image/aditional_services_image.png';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Service() {
    return (
        <div className='Services'>
            <div className="Services_header">
                <div className="Services_header_heading">
                    <p className='Services_header_heading_title'>Our Services</p>
                    <div className="Services_header_heading_lighter_text_container">
                        <p className='Services_header_heading_lighter_text_Home'>Home</p>
                        <ArrowForwardIosIcon className="Services_header_heading_lighter_icon" style={{ fontSize: 13 }} />
                        <p className='Services_header_heading_lighter_text_Services'>Services</p>
                    </div>
                </div>
            </div>
            <div className="Services_services">
                <div className="Services_services_heading">
                    <div className="Services_services_heading_title_container">
                        <p className='Services_services_heading_title'>Our Services</p>
                        <span className='Services_services_heading_line'>__</span>
                    </div>
                    <p className='Services_services_heading_paragraph'>Bring to the table win-win survival strategies to ensure proactive domaination. At the end of the day, going forward, <br /> a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
                </div>
                <div className="Services_services_boxes">
                    <div className="Services_services_above_boxes">
                        <div className='Services_services_box'>
                            <small className='Services_services_boxes_small_title'>services and repairs</small>
                            <h2 className='Services_services_boxes_title'>Perform Upgrade</h2>
                            <div className='Services_services_boxes_more_about_services'>
                                <Link to='#' className='Services_services_boxes_read_more_link'>read more +</Link>
                                <img src={Services_services_first_box_image} className='Services_services_boxes_image' />
                            </div>
                        </div>

                        <div className='Services_services_box'>
                            <small className='Services_services_boxes_small_title'>services and repairs</small>
                            <h2 className='Services_services_boxes_title'>Transission Services</h2>
                            <div className='Services_services_boxes_more_about_services'>
                                <Link to='#' className='Services_services_boxes_read_more_link'>read more +</Link>
                                <img src={Services_services_second_box_image} className='Services_services_boxes_image' />
                            </div>
                        </div>

                        <div className='Services_services_box'>
                            <small className='Services_services_boxes_small_title'>services and repairs</small>
                            <h2 className='Services_services_boxes_title'>Break Repair & Service</h2>
                            <div className='Services_services_boxes_more_about_services'>
                                <Link to='#' className='Services_services_boxes_read_more_link'>read more +</Link>
                                <img src={Services_services_third_box_image} className='Services_services_boxes_image' />
                            </div>
                        </div>
                    </div>
                    <div className="Services_services_bottom_boxes">
                        <div className='Services_services_box'>
                            <small className='Services_services_boxes_small_title'>services and repairs</small>
                            <h2 className='Services_services_boxes_title'>Engine Service & Repair</h2>
                            <div className='Services_services_boxes_more_about_services'>
                                <Link to='#' className='Services_services_boxes_read_more_link'>read more +</Link>
                                <img src={Services_services_forth_box_image} className='Services_services_boxes_image' />
                            </div>
                        </div>
                        <div className='Services_services_box'>
                            <small className='Services_services_boxes_small_title'>services and repairs</small>
                            <h2 className='Services_services_boxes_title'>Tyre & Wheels</h2>
                            <div className='Services_services_boxes_more_about_services'>
                                <Link to='#' className='Services_services_boxes_read_more_link'>read more +</Link>
                                <img src={Services_services_fifth_box_image} className='Services_services_boxes_image' />
                            </div>
                        </div>
                        <div className='Services_services_box'>
                            <small className='Services_services_boxes_small_title'>services and repairs</small>
                            <h2 className='Services_services_boxes_title'>Denting & Painting</h2>
                            <div className='Services_services_boxes_more_about_services'>
                                <Link to='#' className='Services_services_boxes_read_more_link'>read more +</Link>
                                <img src={Services_services_sixth_box_image} className='Services_services_boxes_image' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Services_chooseUs_aditional_services">
                <div className="Services_chooseUs_aditional_services_choose_us">
                    <div className="Services_chooseUs_aditional_services_choose_us_heading">
                        <p className='Services_chooseUs_aditional_services_choose_us_title_container'>
                            <p className='Services_chooseUs_aditional_services_choose_us_title'>Why Choose Us</p>
                            <span className='Services_chooseUs_aditional_services_choose_us_title_line'>___</span>
                        </p>
                        <div className="Services_chooseUs_aditional_services_choose_us_paragraph">
                            <p className='Services_chooseUs_aditional_services_choose_us_paragraph_text'>Bring to the table win-win survival strategies to ensure proactive <br /> domaination. At the end of the day, going forward, a new normal <br /> that has evolved from generation heading towards a streamlined <br /> cloud solution.</p>
                        </div>
                    </div>
                    <ul className="Services_chooseUs_aditional_services_choose_us_menu_list">
                        <div className='Services_chooseUs_aditional_services_choose_us_menu_container'>
                            <img src={certified_expert_mechanies} className='Services_chooseUs_aditional_services_choose_us_menu_image' />
                            <li className='Services_chooseUs_aditional_services_choose_us_menu'>Certified Expert Mechanies</li>
                        </div>
                        <hr className='Services_chooseUs_aditional_services_choose_us_menu_line' />
                        <div className='Services_chooseUs_aditional_services_choose_us_menu_container'>
                            <img src={fast_and_quality_service} className='Services_chooseUs_aditional_services_choose_us_menu_image' />
                            <li className='Services_chooseUs_aditional_services_choose_us_menu'>Fast & Quality Service</li>
                        </div>
                        <hr className='Services_chooseUs_aditional_services_choose_us_menu_line' />
                        <div className='Services_chooseUs_aditional_services_choose_us_menu_container'>
                            <img src={best_prices_in_town} className='Services_chooseUs_aditional_services_choose_us_menu_image' />
                            <li className='Services_chooseUs_aditional_services_choose_us_menu'>Best Prices in Town</li>
                        </div>
                        <hr className='Services_chooseUs_aditional_services_choose_us_menu_line' />
                        <div className='Services_chooseUs_aditional_services_choose_us_menu_container'>
                            <img src={awarded_workshop} className='Services_chooseUs_aditional_services_choose_us_menu_image' />
                            <li className='Services_chooseUs_aditional_services_choose_us_menu'>Awarded Workshop</li>
                        </div>
                        <hr className='Services_chooseUs_aditional_services_choose_us_menu_line' />
                    </ul>
                </div>
                <div className="Services_chooseUs_aditional_services_aditional_services">
                    <div className="Services_chooseUs_aditional_services_aditional_services_heading">
                        <p className='Services_chooseUs_aditional_services_aditional_services_title_container'>
                            <p className='Services_chooseUs_aditional_services_aditional_services_title'>Aditional Services</p>
                            <span className='Services_chooseUs_aditional_services_aditional_services_title_line'>___</span>
                        </p>
                    </div>
                    <div className="Services_chooseUs_aditional_services_aditional_services_imageANDmenu">
                        <img src={aditional_services_image} className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_image' />
                        <ul className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_list'>
                            <div className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                                <img src={menu_list_tick} className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                                <li className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>General Auto Repair & Maintence</li>
                            </div>
                            <div className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                                <img src={menu_list_tick} className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                                <li className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Transmission Repair & Replacement</li>
                            </div>
                            <div className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                                <img src={menu_list_tick} className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                                <li className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Tire Repair & Replacement</li>
                            </div>
                            <div className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                                <img src={menu_list_tick} className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                                <li className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>State Emissions Inspection</li>
                            </div>
                            <div className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                                <img src={menu_list_tick} className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                                <li className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Break job / Break Services</li>
                            </div>
                            <div className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                                <img src={menu_list_tick} className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                                <li className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Electrical Diagnostics</li>
                            </div>
                            <div className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                                <img src={menu_list_tick} className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                                <li className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Fuel System Repair</li>
                            </div>
                            <div className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                                <img src={menu_list_tick} className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                                <li className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Starting & Charging Repair</li>
                            </div>
                            <div className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                                <img src={menu_list_tick} className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                                <li className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Steering & Suspension Work</li>
                            </div>
                            <div className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                                <img src={menu_list_tick} className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                                <li className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Emission Repair Facility</li>
                            </div>
                            <div className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                                <img src={menu_list_tick} className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                                <li className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Wheel Alignment</li>
                            </div>
                            <div className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                                <img src={menu_list_tick} className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                                <li className='Services_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Computer Diagnostics Testing</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Services_Mechanical_work">
                <div className="Services_Mechanical_work_heading">
                    <p className='Services_Mechanical_work_heading_title'>Working since 1992 <span className='Services_Mechanical_work_heading_hr'>___</span></p>
                </div>
                <div className="Services_Mechanical_work_title_container">
                    <h1 className='Services_Mechanical_work_title'>We are leader</h1>
                    <h1 className='Services_Mechanical_work_title'>in Car Mechanical Work</h1>
                </div>
                <div className="Services_Mechanical_work_About_container">
                    <PlayArrowIcon className='Services_Mechanical_work_About_icon' style={{ fontSize: 40 }} />
                    <div className="Services_Mechanical_work_About_text">
                        <p className='Services_Mechanical_work_About_first_text'>watch intro video</p>
                        <p className='Services_Mechanical_work_About_second_text'>about us</p>
                    </div>
                </div>
            </div>
            <div className="Services_contact_us">
                <div className="Services_contact_us_heading">
                    <p className='Services_Mechanical_work_heading_bolder_title'>Schedule Your Appointment Today</p>
                    <p className='Services_Mechanical_work_heading_lighter_title'>Your Automotive Repair & Maintenance Service Specialist</p>
                </div>
                <div className="Services_contact_us_phone_number_container">
                    <p className='Services_contact_us_phone_number'>1800.456.7890</p>
                </div>
                <div className='Services_contact_us_button_container'>
                    <Button>
                        <p className='Services_contact_us_button'><span className='Services_contact_us_button_text'>contact us</span> <ArrowForwardIcon className='Home_contact_us_button_icon' style={{ fontSize: 16 }} /></p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Service;