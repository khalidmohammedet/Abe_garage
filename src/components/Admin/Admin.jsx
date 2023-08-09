import React, { useState } from 'react'

// components 👉
import './static/css/Admin.css';
import { Link } from 'react-router-dom';
import Dashboard from './code/Dashboard/Dashboard';
import Orders from './code/Orders/Orders';
import New_order from './code/New_order/New_order';
import Add_employee from './code/Add_employee/Add_employee';
import Employees from './code/Employees/Employees';
import Add_customer from './code/Add_customer/Add_customer';
import Customers from './code/Customers/Customers';
import Services from './code/Services/Services';
import Edit_customer_info from './code/Edit_customer_info/Edit_customer_info';

function Admin() {
    const [selectedItem, setSelectedItem] = useState('edit_customer_info');

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    let content;

    switch (selectedItem) {
        case 'dashboard':
            content = <Dashboard />;
            break;
        case 'orders':
            content = <Orders onItemClick={handleItemClick} />;
            break;
        case 'new_order':
            content = <New_order />;
            break;
        case 'add_employee':
            content = <Add_employee />;
            break;
        case 'employees':
            content = <Employees />;
            break;
        case 'add_customer':
            content = <Add_customer />;
            break;
        case 'customers':
            content = <Customers />;
            break;
        case 'services':
            content = <Services />;
            break;
        case 'edit_customer_info':
            content = <Edit_customer_info />;
            break;
        default:
            content = null;
    }

    return (
        <div className='Admin'>
            <div className='Admin_landing'>
                <div className='Admin_landing_left_side'>
                    <h1 className='Admin_landing_left_side_title'>admin menu</h1>
                    <ul className='Admin_landing_left_side_menu_list'>
                        <li className='Admin_landing_left_side_menu' onClick={() => handleItemClick('dashboard')}>Dashboard</li>
                        <hr className='Admin_landing_left_side_menu_line' />
                        <li className='Admin_landing_left_side_menu' onClick={() => handleItemClick('orders')}>Orders</li>
                        <hr className='Admin_landing_left_side_menu_line' />
                        <li className='Admin_landing_left_side_menu' onClick={() => handleItemClick('new_order')}>New order</li>
                        <hr className='Admin_landing_left_side_menu_line' />
                        <li className='Admin_landing_left_side_menu' onClick={() => handleItemClick('add_employee')}>Add employee</li>
                        <hr className='Admin_landing_left_side_menu_line' />
                        <li className='Admin_landing_left_side_menu' onClick={() => handleItemClick('employees')}>Employees</li>
                        <hr className='Admin_landing_left_side_menu_line' />
                        <li className='Admin_landing_left_side_menu' onClick={() => handleItemClick('add_customer')}>Add customer</li>
                        <hr className='Admin_landing_left_side_menu_line' />
                        <li className='Admin_landing_left_side_menu' onClick={() => handleItemClick('customers')}>Customers</li>
                        <hr className='Admin_landing_left_side_menu_line_Customers' />
                        <li className='Admin_landing_left_side_menu' onClick={() => handleItemClick('services')}>Services</li>
                        <hr className={`Admin_landing_left_side_menu_line ${selectedItem === 'dashboard' ? 'mbDashboard' : ''} ${selectedItem === 'orders' ? 'mbOrders' : ''} ${selectedItem === 'edit_customer_info' ? 'mbDashboard' : ''} `} />
                        <li className='Admin_landing_left_side_another_menu'>another_menu</li>
                    </ul>
                </div>
                <div className='Admin_landing_right_side'>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default Admin;