import React from 'react'

// components 👉
import './static/css/Home.css';
import Home_workshop_image from './static/image/Home_workshop_image.png';
import Home_services_first_box_image from './static/image/Home_services_first_box_image.png';
import Home_services_second_box_image from './static/image/Home_services_second_box_image.png';
import Home_services_third_box_image from './static/image/Home_services_third_box_image.png';
import Home_services_forth_box_image from './static/image/Home_services_forth_box_image.png';
import Home_services_fifth_box_image from './static/image/Home_services_fifth_box_image.png';
import Home_services_sixth_box_image from './static/image/Home_services_sixth_box_image.png';
import certified_expert_mechanies from './static/image/certified_expert_mechanies.png';
import fast_and_quality_service from './static/image/fast_and_quality_service.png';
import best_prices_in_town from './static/image/best_prices_in_town.png';
import awarded_workshop from './static/image/awarded_workshop.png';
import Quality_service from './static/image/Quality_service.png';
import aditional_services_image from './static/image/aditional_services_image.png';
import menu_list_tick from './static/image/menu_list_tick.png';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div className="Home_header">
        <div className="Home_header_heading">
          <p className='Home_header_heading_title'>Working since 1992 <span className='Home_header_heading_hr'>___</span></p>
        </div>
        <div className="Home_header_title_container">
          <h1 className='Home_header_title'>Tuneup Your Car</h1>
          <h1 className='Home_header_title'>to Next Level</h1>
        </div>
        <div className="Home_header_About_container">
          <PlayArrowIcon className='Home_header_About_icon' style={{ fontSize: 40 }} />
          <div className="Home_header_About_text">
            <p className='Home_header_About_first_text'>watch intro video</p>
            <p className='Home_header_About_second_text'>about us</p>
          </div>
        </div>
      </div>
      <div className="Home_workshop">
        <div className="Home_workshop_left_side">
          <img src={Home_workshop_image} className='Home_workshop_left_side_image' />
        </div>
        <div className="Home_workshop_right_side">
          <div className="Home_workshop_right_side_heading">
            <small className='Home_workshop_right_side_heading_small_title'>Welcome to our workshop</small>
            <h2 className='Home_workshop_right_side_heading_title'>We have 24 experience</h2>
            <hr className='Home_workshop_right_side_heading_line' />
          </div>
          <div className="Home_workshop_right_side_paragraph">
            <p className='Home_workshop_right_side_paragraph_text1'>Bring to the table win-win survival strategies to endure proactive domination. <br /> At the end of the day, going dorward, a new normal that has evolved from <br /> generation X is on the runway heading towards a streamlined cloud solution. <br /> User generated content in real-time will have multiple touchpoints for offshoring.</p>
            <p className='Home_workshop_right_side_paragraph_text2'>Capitalize on low handing fruit to identify a ballpark value added activity to beta test. <br /> Override the digitgal divide with additional clickthroughs from DevOps. Nanotechnology <br /> immersion along the information highway will close the loop on focusing.</p>
          </div>
          <div className="Home_workshop_right_side_button">
            <Button>
              <div className='Home_workshop_right_side_button_container'>
                <p className='Home_workshop_right_side_button_text'>about us</p>
                <ArrowForwardIcon className='Home_workshop_right_side_button_icon' />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="Home_services">
        <div className="Home_services_heading">
          <div className="Home_services_heading_title_container">
            <p className='Home_services_heading_title'>Our Services</p>
            <span className='Home_services_heading_line'>__</span>
          </div>
          <p className='Home_services_heading_paragraph'>Bring to the table win-win survival strategies to ensure proactive domaination. At the end of the day, going forward, <br /> a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
        </div>
        <div className="Home_services_boxes">
          <div className="Home_services_above_boxes">
            <div className='Home_services_box'>
              <small className='Home_services_boxes_small_title'>services and repairs</small>
              <h2 className='Home_services_boxes_title'>Perform Upgrade</h2>
              <div className='Home_services_boxes_more_about_services'>
                <Link to='#' className='Home_services_boxes_read_more_link'>read more +</Link>
                <img src={Home_services_first_box_image} className='Home_services_boxes_image' />
              </div>
              <div className='Home_services_boxes_shadow'></div>
            </div>

            <div className='Home_services_box'>
              <small className='Home_services_boxes_small_title'>services and repairs</small>
              <h2 className='Home_services_boxes_title'>Transission Services</h2>
              <div className='Home_services_boxes_more_about_services'>
                <Link to='#' className='Home_services_boxes_read_more_link'>read more +</Link>
                <img src={Home_services_second_box_image} className='Home_services_boxes_image' />
              </div>
              <div className='Home_services_boxes_shadow'></div>
            </div>

            <div className='Home_services_box'>
              <small className='Home_services_boxes_small_title'>services and repairs</small>
              <h2 className='Home_services_boxes_title'>Break Repair & Service</h2>
              <div className='Home_services_boxes_more_about_services'>
                <Link to='#' className='Home_services_boxes_read_more_link'>read more +</Link>
                <img src={Home_services_third_box_image} className='Home_services_boxes_image' />
              </div>
              <div className='Home_services_boxes_shadow'></div>
            </div>
          </div>
          <div className="Home_services_bottom_boxes">
            <div className='Home_services_box'>
              <small className='Home_services_boxes_small_title'>services and repairs</small>
              <h2 className='Home_services_boxes_title'>Engine Service & Repair</h2>
              <div className='Home_services_boxes_more_about_services'>
                <Link to='#' className='Home_services_boxes_read_more_link'>read more +</Link>
                <img src={Home_services_forth_box_image} className='Home_services_boxes_image' />
              </div>
              <div className='Home_services_boxes_shadow'></div>
            </div>
            <div className='Home_services_box'>
              <small className='Home_services_boxes_small_title'>services and repairs</small>
              <h2 className='Home_services_boxes_title'>Tyre & Wheels</h2>
              <div className='Home_services_boxes_more_about_services'>
                <Link to='#' className='Home_services_boxes_read_more_link'>read more +</Link>
                <img src={Home_services_fifth_box_image} className='Home_services_boxes_image' />
              </div>
              <div className='Home_services_boxes_shadow'></div>
            </div>
            <div className='Home_services_box'>
              <small className='Home_services_boxes_small_title'>services and repairs</small>
              <h2 className='Home_services_boxes_title'>Denting & Painting</h2>
              <div className='Home_services_boxes_more_about_services'>
                <Link to='#' className='Home_services_boxes_read_more_link'>read more +</Link>
                <img src={Home_services_sixth_box_image} className='Home_services_boxes_image' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Home_Quality_service">
        <div className="Home_Quality_service_left_side">
          <div className="Home_Quality_service_heading">
            <h1 className='Home_Quality_service_heading_title'>Quality Service & Customer Satiisfaction !!</h1>
          </div>
          <div className="Home_Quality_service_paragraph">
            <p className='Home_Quality_service_right_side_paragraph_text'>We utilize the most recent symptomatic gear to ensure your vehicle is fixed <br /> or adjusted appropriately & in an opportune manner. We are an individual <br /> from Professional Auto Service, a first class execution arrange, where free <br /> assistance offices share shared objective is being world-class car <br /> administration focuses.</p>
          </div>
        </div>
        <div className="Home_Quality_service_right_side">
          <img src={Quality_service} className='Home_Quality_service_left_side_image' />
        </div>
      </div>
      <div className="Home_chooseUs_aditional_services">
        <div className="Home_chooseUs_aditional_services_choose_us">
          <div className="Home_chooseUs_aditional_services_choose_us_heading">
            <p className='Home_chooseUs_aditional_services_choose_us_title_container'>
              <p className='Home_chooseUs_aditional_services_choose_us_title'>Why Choose Us</p>
              <span className='Home_chooseUs_aditional_services_choose_us_title_line'>___</span>
            </p>
            <div className="Home_chooseUs_aditional_services_choose_us_paragraph">
              <p className='Home_chooseUs_aditional_services_choose_us_paragraph_text'>Bring to the table win-win survival strategies to ensure proactive <br /> domaination. At the end of the day, going forward, a new normal <br /> that has evolved from generation heading towards a streamlined <br /> cloud solution.</p>
            </div>
          </div>
          <ul className="Home_chooseUs_aditional_services_choose_us_menu_list">
            <div className='Home_chooseUs_aditional_services_choose_us_menu_container'>
              <img src={certified_expert_mechanies} className='Home_chooseUs_aditional_services_choose_us_menu_image' />
              <li className='Home_chooseUs_aditional_services_choose_us_menu'>Certified Expert Mechanies</li>
            </div>
            <hr className='Home_chooseUs_aditional_services_choose_us_menu_line' />
            <div className='Home_chooseUs_aditional_services_choose_us_menu_container'>
              <img src={fast_and_quality_service} className='Home_chooseUs_aditional_services_choose_us_menu_image' />
              <li className='Home_chooseUs_aditional_services_choose_us_menu'>Fast & Quality Service</li>
            </div>
            <hr className='Home_chooseUs_aditional_services_choose_us_menu_line' />
            <div className='Home_chooseUs_aditional_services_choose_us_menu_container'>
              <img src={best_prices_in_town} className='Home_chooseUs_aditional_services_choose_us_menu_image' />
              <li className='Home_chooseUs_aditional_services_choose_us_menu'>Best Prices in Town</li>
            </div>
            <hr className='Home_chooseUs_aditional_services_choose_us_menu_line' />
            <div className='Home_chooseUs_aditional_services_choose_us_menu_container'>
              <img src={awarded_workshop} className='Home_chooseUs_aditional_services_choose_us_menu_image' />
              <li className='Home_chooseUs_aditional_services_choose_us_menu'>Awarded Workshop</li>
            </div>
            <hr className='Home_chooseUs_aditional_services_choose_us_menu_line' />
          </ul>
        </div>
        <div className="Home_chooseUs_aditional_services_aditional_services">
          <div className="Home_chooseUs_aditional_services_aditional_services_heading">
            <p className='Home_chooseUs_aditional_services_aditional_services_title_container'>
              <p className='Home_chooseUs_aditional_services_aditional_services_title'>Aditional Services</p>
              <span className='Home_chooseUs_aditional_services_aditional_services_title_line'>___</span>
            </p>
          </div>
          <div className="Home_chooseUs_aditional_services_aditional_services_imageANDmenu">
            <img src={aditional_services_image} className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_image' />
            <ul className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_list'>
              <div className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>General Auto Repair & Maintence</li>
              </div>
              <div className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Transmission Repair & Replacement</li>
              </div>
              <div className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Tire Repair & Replacement</li>
              </div>
              <div className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>State Emissions Inspection</li>
              </div>
              <div className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Break job / Break Services</li>
              </div>
              <div className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Electrical Diagnostics</li>
              </div>
              <div className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Fuel System Repair</li>
              </div>
              <div className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Starting & Charging Repair</li>
              </div>
              <div className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Steering & Suspension Work</li>
              </div>
              <div className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Emission Repair Facility</li>
              </div>
              <div className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Wheel Alignment</li>
              </div>
              <div className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='Home_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Computer Diagnostics Testing</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="Home_Mechanical_work">
        <div className="Home_Mechanical_work_heading">
          <p className='Home_Mechanical_work_heading_title'>Working since 1992 <span className='Home_Mechanical_work_heading_hr'>___</span></p>
        </div>
        <div className="Home_Mechanical_work_title_container">
          <h1 className='Home_Mechanical_work_title'>We are leader</h1>
          <h1 className='Home_Mechanical_work_title'>in Car Mechanical Work</h1>
        </div>
        <div className="Home_Mechanical_work_About_container">
          <PlayArrowIcon className='Home_Mechanical_work_About_icon' style={{ fontSize: 40 }} />
          <div className="Home_Mechanical_work_About_text">
            <p className='Home_Mechanical_work_About_first_text'>watch intro video</p>
            <p className='Home_Mechanical_work_About_second_text'>about us</p>
          </div>
        </div>
      </div>
      <div className="Home_contact_us">
        <div className="Home_contact_us_heading">
          <p className='Home_Mechanical_work_heading_bolder_title'>Schedule Your Appointment Today</p>
          <p className='Home_Mechanical_work_heading_lighter_title'>Your Automotive Repair & Maintenance Service Specialist</p>
        </div>
        <div className="Home_contact_us_phone_number_container">
          <p className='Home_contact_us_phone_number'>1800.456.7890</p>
        </div>
        <div className='Home_contact_us_button_container'>
          <Button>
            <p className='Home_contact_us_button'><span className='Home_contact_us_button_text'>contact us</span> <ArrowForwardIcon className='Home_contact_us_button_icon' style={{ fontSize: 16 }} /></p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home;