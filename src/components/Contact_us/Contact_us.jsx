import React from 'react'

// components 👉
import './static/css/Contact_us.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Contact_us_contacts_link_location_image from './static/image/Contact_us_contacts_link_location_image.png';
import Contact_us_contacts_link_email_image from './static/image/Contact_us_contacts_link_email_image.png';
import Contact_us_contacts_link_phone_image from './static/image/Contact_us_contacts_link_phone_image.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


function Contact_us() {
    return (
        <div className='Contact_us'>
            <div className="Contact_us_header">
                <div className="Contact_us_header_heading">
                    <p className='Contact_us_header_heading_title'>Contact Us</p>
                    <div className="Contact_us_header_heading_lighter_text_container">
                        <p className='Contact_us_header_heading_lighter_text_Home'>Home</p>
                        <ArrowForwardIosIcon className="Contact_us_header_heading_lighter_icon" style={{ fontSize: 13 }} />
                        <p className='Contact_us_header_heading_lighter_text_Contact_us'>Contact Us</p>
                    </div>
                </div>
            </div>
            <div className="Contact_us_contacts">
                <div className="Contact_us_contacts_location_map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.629628728737!2d-81.25866861114501!3d34.6640554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856447116e5fad1%3A0x5cb5d79f6bf8a485!2sAbe&#39;s%20Garage!5e0!3m2!1sen!2set!4v1690794101764!5m2!1sen!2set"
                        className='Contact_us_contacts_location_map_system'
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="Contact_us_contacts_location_adress">
                    <div className='Contact_us_contacts_location_adress_heading'>
                        <div className='Contact_us_contacts_location_adress_heading_title_container'>
                            <p className='Contact_us_contacts_location_adress_heading_title'>Our Address</p>
                        </div>
                        <div className='Contact_us_contacts_location_adress_heading_paragraph'>
                            <p className='Contact_us_contacts_location_adress_heading_paragraph_text'>Completely synergize resource Professionally <br /> cultivate one-to-one customer service.</p>
                        </div>
                    </div>
                    <div className="Contact_us_contacts_links">
                        <div className="Contact_us_contacts_link_location">
                            <Link to="#">
                                <img src={Contact_us_contacts_link_location_image} className='Contact_us_contacts_link_location_image' alt="Contact_us_contacts_link_location_image" />
                            </Link>
                            <div className='Contact_us_contacts_link_location_names'>
                                <p className='Contact_us_contacts_link_location_name'>Address: </p>
                                <p className='Contact_us_contacts_link_location_name_address'>54B, Tailstoi Town 5238 MT, La city, IA 522364</p>
                            </div>
                        </div>
                        <div className="Contact_us_contacts_link_email">
                            <Link to="#">
                                <img src={Contact_us_contacts_link_email_image} className='Contact_us_contacts_link_email_image' alt="Contact_us_contacts_link_email_image" />
                            </Link>
                            <div className='Contact_us_contacts_link_email_names'>
                                <p className='Contact_us_contacts_link_email_name'>Email: </p>
                                <p className='Contact_us_contacts_link_email_name_address'>contact@abeGarage.com</p>
                            </div>
                        </div>
                        <div className="Contact_us_contacts_link_phone">
                            <Link to="#">
                                <img src={Contact_us_contacts_link_phone_image} className='Contact_us_contacts_link_phone_image' alt="Contact_us_contacts_link_phone_image" />
                            </Link>
                            <div className='Contact_us_contacts_link_phone_names'>
                                <p className='Contact_us_contacts_link_phone_name'>Phone: </p>
                                <p className='Contact_us_contacts_link_phone_name_address'>+ 1800 456 7890 / + 1254 897 3654</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Contact_us_contact_us_container">
                <div className="Contact_us_contact_us">
                    <div className="Contact_us_contact_us_heading">
                        <p className='Contact_us_Mechanical_work_heading_bolder_title'>Schedule Your Appointment Today</p>
                        <p className='Contact_us_Mechanical_work_heading_lighter_title'>Your Automotive Repair & Maintenance Service Specialist</p>
                    </div>
                    <div className="Contact_us_contact_us_phone_number_container">
                        <p className='Contact_us_contact_us_phone_number'>1800.456.7890</p>
                    </div>
                    <div className='Contact_us_contact_us_button_container'>
                        <Button>
                            <p className='Contact_us_contact_us_button'><span className='Contact_us_contact_us_button_text'>contact us</span> <ArrowForwardIcon className='Home_contact_us_button_icon' style={{ fontSize: 16 }} /></p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact_us;