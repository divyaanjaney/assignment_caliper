import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faBell, faAd } from '@fortawesome/free-solid-svg-icons'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Header.css';

library.add(faAd, faBell, faSearch);

class MainHeader extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
           dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
        dropdownOpen: !this.state.dropdownOpen
        });
    }
    render(){
        return(
            <div className='header-margin'>
                <FontAwesomeIcon icon={faAd} className={'headerIcon'} />
                <ButtonDropdown className='headerDropdown' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Tracking
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Shipping</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Receiving</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                <span>
                    <FontAwesomeIcon icon={faSearch} className='headerSearchIcon' />
                    <input className='inputSearch' placeholder='Search by docket no, trip no., transporter, driver name' />
                    <FontAwesomeIcon className='headerNotification' icon={faBell} />
                </span>
            </div>
        );
    }
}

export default MainHeader;