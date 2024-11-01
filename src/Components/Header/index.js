import React from 'react';
import Logo from "../../assets/images/logo.png";
import CountryDropDown from '../CountryDropDown';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { Button } from '@mui/material';

const Header = () => {
  return (
    <div className='headerWrapper'>
        <div className='top-strip bg-purple'>
            <div className='container'>
                <p className='mb-0 mt-0 text-center'>Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
            </div>
        </div>
        <header className="header">
          <div className="container">
            <div className='row'>
              <div className='logoWrapper d-flex align-items-center col-sm-2'>
                <Link to={'/'}><img src={Logo} alt="logo" /></Link>
              </div>
              <div className='col-sm-10 d-flex align-items-center part2'>
               <CountryDropDown />
               {/* header search start here */}
                <div className='headerSearch ml-3 mr-3'>
                  <input type="text" placeholder='Search for Products...'/>
                  <Button>
                  <IoSearchOutline />
                  </Button>
                </div>
              {/* header search end here */}
              </div>
            </div>
          </div>
        </header>
    </div>
  )
}

export default Header