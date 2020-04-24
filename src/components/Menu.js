import React, {Component} from 'react';
import { Typography, Link } from '@material-ui/core';
import logo from '../images/logo.jpg';
import '../styles/Menu.css';

class Menu extends Component{

    render(){
        return (
            <div>
                <Typography className="Menu">
                    <Link href="/">
                        <img src={logo} alt={"logo"} className={'logo'}/>
                    </Link>
                    <Link href="/artists" className="link">
                        Artists
                    </Link>
                    <Link href="/couriers" className="link">
                        Couriers
                    </Link>
                    <Link href="/customers" className="link">
                        Customers
                    </Link>
                    <Link href="/deliveries" className="link">
                        Deliveries
                    </Link>
                    <Link href="/ordered_items" className="link">
                        Ordered items
                    </Link>
                    <Link href="/orders" className="link">
                        Orders
                    </Link>
                    <Link href="/payments" className="link">
                        Payments
                    </Link>
                    <Link href="/pictures" className="link">
                        Pictures
                    </Link>
                    <Link href="/waybills" className="link">
                        Waybills
                    </Link>
                </Typography>
            </div>
        )
    }
}

export default Menu;
