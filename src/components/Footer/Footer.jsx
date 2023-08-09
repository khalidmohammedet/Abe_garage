import React from 'react'

// components 👉
import './static/css/Footer.css';
import Footer_location_image from './static/image/Footer_location_image.png';
import Footer_email_image from './static/image/Footer_email_image.png';
import Footer_call_image from './static/image/Footer_call_image.png';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer_link">
        <div className="Footer_link_location">
          <Link to="/">
            <img src={Footer_location_image} className='Footer_location_image' alt="Footer_location_image" />
          </Link>
          <div className='Footer_link_location_name'>
            <p className='Footer_link_location_name1'>54B, Tailstoi Town 5238 MT,</p>
            <p className='Footer_link_location_name2'>La city, IA 522364</p>
          </div>
          <div className='Footer_link_border_left'></div>
        </div>
        <div className="Footer_link_email">
          <Link to="/">
            <img src={Footer_email_image} className='Footer_email_image' alt="Footer_email_image" />
          </Link>
          <div className='Footer_link_email_name'>
            <p className='Footer_link_email_name1'>Email us: </p>
            <p className='Footer_link_email_name2'>contact@abeGarage.com</p>
          </div>
          <div className='Footer_link_border_left'></div>
        </div>
        <div className="Footer_link_call">
          <Link to="/">
            <img src={Footer_call_image} className='Footer_call_image' alt="Footer_call_image" />
          </Link>
          <div className='Footer_link_call_name'>
            <p className='Footer_link_call_name1'>call us on: </p>
            <p className='Footer_link_call_name2'>+ 1800 456 7890</p>
          </div>
          <div className='Footer_link_border_left'></div>
        </div>
      </div>

      <div className="Footer_container">
        <div className="Footer_paragraph">
          <p className='Footer_paragraph_text'>Capitalize on low hanging fruit to identify <br /> a ballpark value added activity to beta test. <br /> Override the digital divide additional clickthroughs.</p>
        </div>

        <div className="useful_link">
          <h5 className='useful_link_title'>Usefull Links</h5>
          <ul className="useful_list_menu">
            <Link to="#" className='useful_link_menu'><li>Home</li></Link>
            <Link to="#" className='useful_link_menu'><li>About Us</li></Link>
            <Link to="#" className='useful_link_menu'><li>Appointment</li></Link>
            <Link to="#" className='useful_link_menu'><li>Testimonials</li></Link>
            <Link to="#" className='useful_link_menu'><li>Contact Us</li></Link>
          </ul>
        </div>

        <div className="our_services">
          <h5 className='our_services_title'>Our Services</h5>
          <ul className="our_services_list_menu">
            <Link to="#" className='our_services_menu'><li>Performance Upgrade</li></Link>
            <Link to="#" className='our_services_menu'><li>Transmission Service</li></Link>
            <Link to="#" className='our_services_menu'><li>Break Repair & Service</li></Link>
            <Link to="#" className='our_services_menu'><li>Engine Service & Repair</li></Link>
            <Link to="#" className='our_services_menu'><li>Trye & Wheels</li></Link>
          </ul>
        </div>

        <div className="Newslatter">
          <h5 className='Newslatter_title'>Newslatter</h5>
          <div className="Newslatter_paragraph">
            <p className='Newslatter_paragraph_text'>Get latest updates & offers.</p>
          </div>
          <div className="Footer_social_links">
            <Link to="#" className="social_social_icon"><i className="bx bxl-facebook"></i></Link>
            <Link to="#" className="social_social_icon"><i className="bx bxl-linkedin"></i></Link>
            <Link to="#" className="social_social_icon"><i className="bx bxl-twitter"></i></Link>
            <Link to="#" className="social_social_icon"><i className="bx bxl-google-plus"></i></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;