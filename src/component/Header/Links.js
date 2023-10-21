import React from 'react';
import jump from '../Images/Jump.png';
import { Link } from 'react-router-dom';
const Links = () => {
    return (
        <div className='bg-base-200 h-12 mt-0'>


<div className="navbar max-w-[1440px] mx-auto -mt-3 mb-1 ">
  <div className="navbar-start">
  <img src={jump} className='w-6 h-6'></img>
  </div>



  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex">
    <div>
    <Link className='font-bold text-xs hover:text-gray-500'>Nike Refurbished&nbsp;&nbsp;&nbsp;&nbsp;|</Link>

        <Link className='font-bold text-xs hover:text-gray-500'>&nbsp;&nbsp;&nbsp;&nbsp;Find a Store&nbsp;&nbsp;&nbsp;&nbsp;|</Link>
        
        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end ">
                <label tabIndex={0} className="m-1 bg-inherit"><Link className='font-bold text-xs hover:text-gray-500 lowercase'>&nbsp;&nbsp;&nbsp;&nbsp; Help &nbsp;&nbsp;&nbsp;&nbsp;|</Link></label>
                <ul tabIndex={0} className="dropdown-content bg-white z-[2]  text-justify p-2 rounded-box w-60">
                    <li className='mb-5 mt-5' ><Link className='text-left font-bold text-black ml-5 '>Help</Link></li>
                    <li className='mb-2'><Link className='font-medium text-gray-500 hover:text-black ml-5'>Order Status</Link></li>
                    <li className='mb-2'><Link className='font-medium text-gray-500 hover:text-black ml-5'>Shipping and Delivery</Link></li>
                    <li  className='mb-2'><Link className='font-medium text-gray-500 hover:text-black ml-5'>Returns</Link></li>
                    <li className='mb-2'><Link className='font-medium text-gray-500 hover:text-black ml-5'>Order Cancellation</Link></li>
                    <li className='mb-2'><Link className='font-medium text-gray-500 hover:text-black ml-5'>Size Charts</Link></li>
                    <li className='mb-2'><Link className='font-medium text-gray-500 hover:text-black ml-5'>Privacy Policy</Link></li>
                    <li className='mb-2'><Link className='font-medium text-gray-500 hover:text-black ml-5'>Terms of Sale</Link></li>
                    <li className='mb-2'><Link className='font-medium text-gray-500 hover:text-black ml-5'>Terms of Use</Link></li>
                    <li className='mb-5'><Link className='font-medium text-gray-500 hover:text-black ml-5'>Send us Feedback</Link></li>
                </ul>
        </div>



        <Link className='font-bold text-xs hover:text-gray-500'>&nbsp;&nbsp;&nbsp;&nbsp;Join Us&nbsp;&nbsp;&nbsp;&nbsp;        |</Link>
        <Link className='font-bold text-xs hover:text-gray-500'>&nbsp;&nbsp;&nbsp;&nbsp;Sign in&nbsp;&nbsp;&nbsp;&nbsp;    </Link>
    </div>
  </div>
  <div className='lg:hidden flex '>
    <Link className='px-3'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
    </Link>
<Link className='px-3'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
</Link>
<Link className='px-3'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
</Link>


  </div>
  <div className="dropdown lg:hidden">
    <div>
            <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-xs m-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="dropdown-content  z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
    </div>

    </div>
  </div>
</div>
</div>
    );
};

export default Links;