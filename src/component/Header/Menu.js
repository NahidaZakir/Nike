import React from 'react';
import logo from '../Images/Logo.png'
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({

  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const Menu = () => {
    return (
        <div className='max-w-[1440px] mx-auto p-0' >
            <div className="navbar bg-base-100 mt-0 p-0">
  <div className="navbar-start mt-0 p-0">
    <div>
        <img src={logo} className='w-18 h-14'></img>
    </div>
  </div>


  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal px-1">
        <li ><Link className='text-base font-medium text-black'>New & Featured &nbsp;&nbsp;</Link></li>


        <li><Link className='text-base font-medium text-black'>&nbsp;&nbsp;Men&nbsp;&nbsp;</Link></li>
        <li><Link className='text-base font-medium text-black'>&nbsp;&nbsp;Women&nbsp;&nbsp;</Link></li>
        <li><Link className='text-base font-medium text-black'>&nbsp;&nbsp;Kids&nbsp;&nbsp;</Link></li>
        <li><Link className='text-base font-medium text-black'>&nbsp;&nbsp;Accessories&nbsp;&nbsp;</Link></li>
        <li><Link className='text-base font-medium text-black'>&nbsp;&nbsp;Sale&nbsp;&nbsp;</Link></li>
    </ul>
  </div>




  <div className="navbar-end">
<div className='w-100 h-12 rounded mr-5'>

            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography
            variant="h1"
            noWrap
            component="div"
            color="primary"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
        </div>


        <div className='mr-5'>

            <button className='btn btn-sm bg-white border-none hover:rounded-full hover:bg-base-300'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
        </button>
        </div>

        <div className='mr-5'>
            
        <button className='btn btn-sm bg-white border-none hover:rounded-full hover:bg-base-300'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
</button>
        </div>

  </div>


</div>
        </div>
    );
};

export default Menu;