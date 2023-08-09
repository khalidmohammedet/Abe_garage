import React from 'react'

// components 👉
import './static/css/Dashboard.css';
import Dashboard_first_box_image from './static/image/Dashboard_first_box_image.png';
import Dashboard_second_box_image from './static/image/Dashboard_second_box_image.png';
import Dashboard_third_box_image from './static/image/Dashboard_third_box_image.png';
import Dashboard_forth_box_image from './static/image/Dashboard_forth_box_image.png';
import Dashboard_fifth_box_image from './static/image/Dashboard_fifth_box_image.png';
import Dashboard_sixth_box_image from './static/image/Dashboard_sixth_box_image.png';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className='Dashboard'>
            <div className="Dashboard_heading">
                <div className="Dashboard_heading_title_container">
                    <p className='Dashboard_heading_title'>Admin Dashboard</p>
                    <span className='Dashboard_heading_line'>__</span>
                </div>
                <p className='Dashboard_heading_paragraph'>Bring to the table win-win survival strategies to ensure proactive domaination. At the end of the day, going forward, <br /> a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
            </div>
            <div className="Dashboard_boxes">
                <div className="Dashboard_above_boxes">
                    <div className='Dashboard_box'>
                        <small className='Dashboard_boxes_small_title'>open for all</small>
                        <h2 className='Dashboard_boxes_title'>All Orders</h2>
                        <div className='Dashboard_boxes_more_about_Admin'>
                            <Link to='#' className='Dashboard_boxes_list_of_orders_link'>list of orders +</Link>
                            <img src={Dashboard_first_box_image} className='Dashboard_boxes_image' />
                        </div>
                    </div>

                    <div className='Dashboard_box'>
                        <small className='Dashboard_boxes_small_title'>open for leads</small>
                        <h2 className='Dashboard_boxes_title'>New Orders</h2>
                        <div className='Dashboard_boxes_more_about_Admin'>
                            <Link to='#' className='Dashboard_boxes_add_order_link'>add order +</Link>
                            <img src={Dashboard_first_box_image} className='Dashboard_boxes_image' />
                        </div>
                    </div>

                    <div className='Dashboard_box'>
                        <small className='Dashboard_boxes_small_title'>open for Admin</small>
                        <h2 className='Dashboard_boxes_title'>Employees</h2>
                        <div className='Dashboard_boxes_more_about_Admin'>
                            <Link to='#' className='Dashboard_boxes_list_of_employees_link'>list of employees +</Link>
                            <img src={Dashboard_second_box_image} className='Dashboard_boxes_image' />
                        </div>
                    </div>
                </div>
                <div className="Dashboard_middle_boxes">
                    <div className='Dashboard_box'>
                        <small className='Dashboard_boxes_small_title'>open for admins</small>
                        <h2 className='Dashboard_boxes_title'>Add Employee</h2>
                        <div className='Dashboard_boxes_more_about_Admin'>
                            <Link to='#' className='Dashboard_boxes_read_more_link'>read more +</Link>
                            <img src={Dashboard_third_box_image} className='Dashboard_boxes_image' />
                        </div>
                    </div>
                    <div className='Dashboard_box'>
                        <small className='Dashboard_boxes_small_title'>service and repairs</small>
                        <h2 className='Dashboard_boxes_title'>Engine Service & Repair</h2>
                        <div className='Dashboard_boxes_more_about_Admin'>
                            <Link to='#' className='Dashboard_boxes_read_more_link'>read more +</Link>
                            <img src={Dashboard_forth_box_image} className='Dashboard_boxes_image' />
                        </div>
                    </div>
                    <div className='Dashboard_box'>
                        <small className='Dashboard_boxes_small_title'>service and repairs</small>
                        <h2 className='Dashboard_boxes_title'>Tyre & Wheels</h2>
                        <div className='Dashboard_boxes_more_about_Admin'>
                            <Link to='#' className='Dashboard_boxes_read_more_link'>read more +</Link>
                            <img src={Dashboard_fifth_box_image} className='Dashboard_boxes_image' />
                        </div>
                    </div>
                </div>
                <div className="Dashboard_bottom_boxes">
                    <div className='Dashboard_box'>
                        <small className='Dashboard_boxes_small_title'>service and repairs</small>
                        <h2 className='Dashboard_boxes_title'>Denting & Painting</h2>
                        <div className='Dashboard_boxes_more_about_Admin'>
                            <Link to='#' className='Dashboard_boxes_read_more_link'>read more +</Link>
                            <img src={Dashboard_sixth_box_image} className='Dashboard_boxes_image' />
                        </div>
                    </div>
                    <div className='Dashboard_box'>
                        <small className='Dashboard_boxes_small_title'>service and repairs</small>
                        <h2 className='Dashboard_boxes_title'>Engine Service & Repair</h2>
                        <div className='Dashboard_boxes_more_about_Admin'>
                            <Link to='#' className='Dashboard_boxes_read_more_link'>read more +</Link>
                            <img src={Dashboard_forth_box_image} className='Dashboard_boxes_image' />
                        </div>
                    </div>
                    <div className='Dashboard_box'>
                        <small className='Dashboard_boxes_small_title'>service and repairs</small>
                        <h2 className='Dashboard_boxes_title'>Tyre & Wheels</h2>
                        <div className='Dashboard_boxes_more_about_Admin'>
                            <Link to='#' className='Dashboard_boxes_read_more_link'>read more +</Link>
                            <img src={Dashboard_fifth_box_image} className='Dashboard_boxes_image' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;