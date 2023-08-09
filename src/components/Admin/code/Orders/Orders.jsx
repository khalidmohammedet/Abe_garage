import React from 'react'

// components 👉
import './static/css/Orders.css';
import edit_customer_info_image from './static/image/edit_customer_info_image.png';
import new_vehicle_ignore_image from './static/image/new_vehicle_ignore_image.png';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Orders({ onItemClick }) {
  return (
    <div className='Orders'>
      <div className='Orders_left_side'>
        <p className='Orders_left_side_text_Info'>Info</p>
        <div className='Orders_left_side_line_Info'></div>
        <p className='Orders_left_side_text_Cars'>Cars</p>
        <div className='Orders_left_side_line_Cars'></div>
        <p className='Orders_left_side_text_Orders'>Orders</p>
        <div className='Orders_left_side_line_Orders'></div>
      </div>
      <div className='Orders_right_side'>
        <div className='Orders_right_side_info'>
          <p className='Orders_right_side_info_customer_name'>Customer: <span className='Orders_right_side_info_customer_name_value'>customer_name</span></p>
          <p className='Orders_right_side_info_email_address'>Email: <span className='Orders_right_side_info_email_address_value'>email_address</span></p>
          <p className='Orders_right_side_info_phone_number'>Phone Number: <span className='Orders_right_side_info_phone_number_value'>phone_number</span></p>
          <p className='Orders_right_side_info_active_customer'>Active Customer: <span className='Orders_right_side_info_active_customer_value'>Yes/No</span></p>
          <p className='Orders_right_side_info_edit_customer_info'>Edit customer info: <img src={edit_customer_info_image} onClick={() => onItemClick('edit_customer_info')} alt='edit_customer_info_image' /></p>
        </div>
        <div className='Orders_right_side_cars'>
          <div className='Orders_right_side_cars_heading'>
            <p className='Orders_right_side_cars_title'>Vehicles of customer_name</p>
            <div className='Orders_right_side_cars_not_found'>No vehicle found</div>
          </div>
          <div className='Orders_right_side_cars_new_vehicle'>
            <div className='Orders_right_side_cars_new_vehicle_heading'>
              <p className='Orders_right_side_cars_new_vehicle_heading_title'>Add a new vehicle</p>
              <span className='Orders_right_side_cars_new_vehicle_heading_line'>__</span>
              <img src={new_vehicle_ignore_image} className='Orders_right_side_cars_new_vehicle_edit_customer_info_image' alt='Orders_right_side_cars_new_vehicle_edit_customer_info_image' />
            </div>
            <form className='Orders_right_side_cars_new_vehicle_inputs'>
              <input className='Orders_right_side_cars_new_vehicle_input' placeholder='Vehicle year' /> <br />
              <input className='Orders_right_side_cars_new_vehicle_input' placeholder='Vehicle make' /> <br />
              <input className='Orders_right_side_cars_new_vehicle_input' placeholder='Vehicle model' /> <br />
              <input className='Orders_right_side_cars_new_vehicle_input' placeholder='Vehicle type' /> <br />
              <input className='Orders_right_side_cars_new_vehicle_input' placeholder='Vehicle mileage' /> <br />
              <input className='Orders_right_side_cars_new_vehicle_input' placeholder='Vehicle tag' /> <br />
              <input className='Orders_right_side_cars_new_vehicle_input' placeholder='Vehicle serial' /> <br />
              <input className='Orders_right_side_cars_new_vehicle_input' placeholder='Vehicle color' /> <br />
              <div className="Orders_right_side_cars_new_vehicle_button">
                <Button>
                  <div className='Orders_right_side_cars_new_vehicle_button_container'>
                    <p className='Home_workshop_right_side_button_text'>add vehicle</p>
                  </div>
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className='Orders_right_side_orders'>
          <p className='Orders_right_side_orders_title'>Orders of customer_name</p>
          <div className='Orders_right_side_order_display_here'>Orders will be display here</div>
        </div>
      </div>
    </div>
  )
}

export default Orders