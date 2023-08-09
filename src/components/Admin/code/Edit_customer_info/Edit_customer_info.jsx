import React from 'react'

// components 👉
import './static/css/Edit_customer_info.css';
import { Button } from '@mui/material';

function Edit_customer_info() {
    return (
        <div className='Edit_customer_info'>
            <div className='Edit_customer_info_heading'>
                <p className='Edit_customer_info_heading_title'>Edit: customer_name</p>
                <span className='Edit_customer_info_heading_line'>__</span>
            </div>
            <form className='Edit_customer_info_form'>
                <p className='Edit_customer_info_form_form_title'>Customer email: email_address</p>
                <div className='Edit_customer_info_form_inputs'>
                    <input className='Edit_customer_info_form_input' placeholder='First name' /> <br />
                    <input className='Edit_customer_info_form_input' placeholder='Last name' /> <br />
                    <input className='Edit_customer_info_form_input' placeholder='Phone number' /> <br />
                    <div className='Edit_customer_info_form_active_customer_container'>
                        <input type='checkbox' className='Edit_customer_info_form_active_customer_check_out' />
                        <p className='Edit_customer_info_form_active_customer'>Is active customer</p>
                    </div>
                    <div className="Edit_customer_info_form_button">
                        <Button>
                            <div className='Edit_customer_info_form_button_container'>
                                <p className='Home_workshop_right_side_button_text'>update</p>
                            </div>
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Edit_customer_info;