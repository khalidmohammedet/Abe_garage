import React from 'react'

// components 👉
import './static/css/About_us.css';
import highly_skilled from './static/image/highly_skilled.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import About_us_workshop_image from './static/image/About_us_workshop_image.png';
import certified_expert_mechanies from './static/image/certified_expert_mechanies.png';
import fast_and_quality_service from './static/image/fast_and_quality_service.png';
import best_prices_in_town from './static/image/best_prices_in_town.png';
import awarded_workshop from './static/image/awarded_workshop.png';
import aditional_services_image from './static/image/aditional_services_image.png';
import menu_list_tick from './static/image/menu_list_tick.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function About_us() {
  return (
    <div className='About_us'>
      <div className="About_us_header">
        <div className="About_us_header_heading">
          <p className='About_us_header_heading_title'>About Us</p>
          <div className="About_us_header_heading_lighter_text_container">
            <p className='About_us_header_heading_lighter_text_Home'>Home</p>
            <ArrowForwardIosIcon className="About_us_header_heading_lighter_icon" style={{ fontSize: 13 }} />
            <p className='About_us_header_heading_lighter_text_about_us'>About Us</p>
          </div>
        </div>
      </div>
      <div className="About_us_highly_skilled">
        <div className="About_us_highly_skilled_left_side">
          <div className="About_us_highly_skilled_left_side_heading">
            <p className='About_us_highly_skilled_left_side_heading_title'>We are highly skilled mechanics <br /> for your car repair</p>
          </div>
          <div className="About_us_highly_skilled_left_side_paragraph">
            <p className='About_us_highly_skilled_left_side_paragraph_text1'>Bring to the table win-win survival strategies to ensure proactive domination. <br /> At the end of the day, going forward, a new normal that has evolved from <br /> generation X is on the runway heading towards a streamlined cloud solution. <br /> User generated content in real-time will have multiple touchpoints for offshoring.</p>
            <p className='About_us_highly_skilled_left_side_paragraph_text2'>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. <br /> Override the digitgal divide with additional clickthroughs from DevOps. Nanotechnology <br /> immersion along the information heading towards a stearmlined cloud solution, User generated content in real-time will have multiple.</p>
          </div>
        </div>
        <div className="About_us_highly_skilled_right_side">
          <img src={highly_skilled} className='About_us_highly_skilled_left_side_image' />
        </div>
      </div>
      <div className="About_us_workshop">
        <div className="About_us_workshop_left_side">
          <img src={About_us_workshop_image} className='About_us_workshop_left_side_image' />
        </div>
        <div className="About_us_workshop_right_side">
          <div className="About_us_workshop_right_side_heading">
            <small className='About_us_workshop_right_side_heading_small_title'>Welcome to our workshop</small>
            <h2 className='About_us_workshop_right_side_heading_title'>We have 24 experience</h2>
            <hr className='About_us_workshop_right_side_heading_line' />
          </div>
          <div className="About_us_workshop_right_side_paragraph">
            <p className='About_us_workshop_right_side_paragraph_text1'>Bring to the table win-win survival strategies to endure proactive domination. <br /> At the end of the day, going dorward, a new normal that has evolved from <br /> generation X is on the runway heading towards a streamlined cloud solution. <br /> User generated content in real-time will have multiple touchpoints for offshoring.</p>
            <p className='About_us_workshop_right_side_paragraph_text2'>Capitalize on low handing fruit to identify a ballpark value added activity to beta test. <br /> Override the digitgal divide with additional clickthroughs from DevOps. Nanotechnology <br /> immersion along the information highway will close the loop on focusing.</p>
          </div>
          <div className="About_us_workshop_right_side_button">
            <Button>
              <div className='About_us_workshop_right_side_button_container'>
                <p className='About_us_workshop_right_side_button_text'>about us</p>
                <ArrowForwardIcon className='About_us_workshop_right_side_button_icon' />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="About_us_chooseUs_aditional_services">
        <div className="About_us_chooseUs_aditional_services_choose_us">
          <div className="About_us_chooseUs_aditional_services_choose_us_heading">
            <p className='About_us_chooseUs_aditional_services_choose_us_title_container'>
              <p className='About_us_chooseUs_aditional_services_choose_us_title'>Why Choose Us</p>
              <span className='About_us_chooseUs_aditional_services_choose_us_title_line'>___</span>
            </p>
            <div className="About_us_chooseUs_aditional_services_choose_us_paragraph">
              <p className='About_us_chooseUs_aditional_services_choose_us_paragraph_text'>Bring to the table win-win survival strategies to ensure proactive <br /> domaination. At the end of the day, going forward, a new normal <br /> that has evolved from generation heading towards a streamlined <br /> cloud solution.</p>
            </div>
          </div>
          <ul className="About_us_chooseUs_aditional_services_choose_us_menu_list">
            <div className='About_us_chooseUs_aditional_services_choose_us_menu_container'>
              <img src={certified_expert_mechanies} className='About_us_chooseUs_aditional_services_choose_us_menu_image' />
              <li className='About_us_chooseUs_aditional_services_choose_us_menu'>Certified Expert Mechanies</li>
            </div>
            <hr className='About_us_chooseUs_aditional_services_choose_us_menu_line' />
            <div className='About_us_chooseUs_aditional_services_choose_us_menu_container'>
              <img src={fast_and_quality_service} className='About_us_chooseUs_aditional_services_choose_us_menu_image' />
              <li className='About_us_chooseUs_aditional_services_choose_us_menu'>Fast & Quality Service</li>
            </div>
            <hr className='About_us_chooseUs_aditional_services_choose_us_menu_line' />
            <div className='About_us_chooseUs_aditional_services_choose_us_menu_container'>
              <img src={best_prices_in_town} className='About_us_chooseUs_aditional_services_choose_us_menu_image' />
              <li className='About_us_chooseUs_aditional_services_choose_us_menu'>Best Prices in Town</li>
            </div>
            <hr className='About_us_chooseUs_aditional_services_choose_us_menu_line' />
            <div className='About_us_chooseUs_aditional_services_choose_us_menu_container'>
              <img src={awarded_workshop} className='About_us_chooseUs_aditional_services_choose_us_menu_image' />
              <li className='About_us_chooseUs_aditional_services_choose_us_menu'>Awarded Workshop</li>
            </div>
            <hr className='About_us_chooseUs_aditional_services_choose_us_menu_line' />
          </ul>
        </div>
        <div className="About_us_chooseUs_aditional_services_aditional_services">
          <div className="About_us_chooseUs_aditional_services_aditional_services_heading">
            <p className='About_us_chooseUs_aditional_services_aditional_services_title_container'>
              <p className='About_us_chooseUs_aditional_services_aditional_services_title'>Aditional Services</p>
              <span className='About_us_chooseUs_aditional_services_aditional_services_title_line'>___</span>
            </p>
          </div>
          <div className="About_us_chooseUs_aditional_services_aditional_services_imageANDmenu">
            <img src={aditional_services_image} className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_image' />
            <ul className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_list'>
              <div className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>General Auto Repair & Maintence</li>
              </div>
              <div className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Transmission Repair & Replacement</li>
              </div>
              <div className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Tire Repair & Replacement</li>
              </div>
              <div className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>State Emissions Inspection</li>
              </div>
              <div className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Break job / Break Services</li>
              </div>
              <div className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Electrical Diagnostics</li>
              </div>
              <div className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Fuel System Repair</li>
              </div>
              <div className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Starting & Charging Repair</li>
              </div>
              <div className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Steering & Suspension Work</li>
              </div>
              <div className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Emission Repair Facility</li>
              </div>
              <div className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Wheel Alignment</li>
              </div>
              <div className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_container'>
                <img src={menu_list_tick} className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu_image' />
                <li className='About_us_chooseUs_aditional_services_aditional_services_imageANDmenu_menu'>Computer Diagnostics Testing</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="About_us_Mechanical_work">
        <div className="About_us_Mechanical_work_heading">
          <p className='About_us_Mechanical_work_heading_title'>Working since 1992 <span className='About_us_Mechanical_work_heading_hr'>___</span></p>
        </div>
        <div className="About_us_Mechanical_work_title_container">
          <h1 className='About_us_Mechanical_work_title'>We are leader</h1>
          <h1 className='About_us_Mechanical_work_title'>in Car Mechanical Work</h1>
        </div>
        <div className="About_us_Mechanical_work_About_container">
          <PlayArrowIcon className='About_us_Mechanical_work_About_icon' style={{ fontSize: 40 }} />
          <div className="About_us_Mechanical_work_About_text">
            <p className='About_us_Mechanical_work_About_first_text'>watch intro video</p>
            <p className='About_us_Mechanical_work_About_second_text'>about us</p>
          </div>
        </div>
      </div>
      <div className="About_us_contact_us">
        <div className="About_us_contact_us_heading">
          <p className='About_us_Mechanical_work_heading_bolder_title'>Schedule Your Appointment Today</p>
          <p className='About_us_Mechanical_work_heading_lighter_title'>Your Automotive Repair & Maintenance Service Specialist</p>
        </div>
        <div className="About_us_contact_us_phone_number_container">
          <p className='About_us_contact_us_phone_number'>1800.456.7890</p>
        </div>
        <div className='About_us_contact_us_button_container'>
          <Button>
            <p className='About_us_contact_us_button'><span className='About_us_contact_us_button_text'>contact us</span> <ArrowForwardIcon className='About_us_contact_us_button_icon' style={{ fontSize: 16 }} /></p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default About_us;