import React from 'react'
import { Button, IconButton } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';


const Footer = () => {
  return (
    <>
     <div className='container-fluid' style={{height:"400px",backgroundColor:"#000000"}}>
    <div className='container'>
        <div className='row ' style={{height:"400px"}} >
        <div className='ms-5' style={{marginStart:"300px"}}>
        
        <div className='ms-5'>
       <div className='ms-5'>
       <h6 className='text-white  text-muted' style={{marginLeft:"56px",marginTop:"60px"}}>Questions? Call 000-800-040-1843</h6>

       </div>
        </div>
        
        </div>
     <div className='col-2 mt-0' style={{marginLeft:"200px",marginTop:"0px"}}>
        <ul className='navbar-nav text-white'>

            <li className='nav-item mt-2 text-muted'><a href="nav-link " style={{fontSize:"13px",color:"gray",textDecoration:"none"}}>FaQ</a></li>
            <li className='nav-item mt-2 text-muted'><a href="nav-link " style={{fontSize:"13px",color:"gray",textDecoration:"none"}}>Insvestor Registor</a></li>
            <li className='nav-item mt-2 text-muted'><a href="nav-link " style={{fontSize:"13px",color:"gray",textDecoration:"none"}}>Privcy</a></li>
            <li className='nav-item mt-2 text-muted '><a href="nav-link " style={{fontSize:"13px",color:"gray",textDecoration:"none"}}>Speed Test</a></li>
        </ul>
        <Button variant='outline' 
        sx={{fontSize:"13px",border:"1px solid gray",marginRight:"29px",color:"gray",borderRadius:"0",marginTop:"37px"}}><IconButton sx={{fontSize:"7px",marginRight:"4px",color:"gray",marginLeft:"0px"}}> <LanguageIcon/></IconButton> english</Button>
        <h6 className='small mt-4 text-muted'>Netflix India</h6>
    
     </div>
     <div className='col-2 ms-1'>
     <ul className='navbar-nav text-white'>

     <li className='nav-item mt-2 text-muted'><a href="nav-link " style={{color:"gray",fontSize:"13px",textDecoration:"none"}}>Help center?</a></li>
     <li className='nav-item mt-2 text-muted'><a href="nav-link " style={{color:"gray",fontSize:"13px",textDecoration:"none"}}>JOb</a></li>
     <li className='nav-item mt-2 text-muted'><a href="nav-link " style={{color:"gray",fontSize:"13px",textDecoration:"none"}}>Cookies performance</a></li>
     <li className='nav-item mt-2 text-muted'><a href="nav-link " style={{color:"gray",fontSize:"13px",textDecoration:"none"}}>Legal Notice</a></li>
</ul>
     </div>
     <div className='col-2  ms-1'>
     <ul className='navbar-nav text-white'>

     <li className='nav-item mt-2 text-muted'><a href="nav-link " style={{color:"gray",fontSize:"13px",textDecoration:"none"}}>Accounts</a></li>
     <li className='nav-item mt-2 text-muted'><a href="nav-link " style={{color:"gray",fontSize:"13px",textDecoration:"none"}}>Way to watch</a></li>
     <li className='nav-item mt-2 text-muted'><a href="nav-link " style={{color:"gray",fontSize:"13px",textDecoration:"none"}}>Corporate Information</a></li>
     <li className='nav-item mt-2 text-muted'><a href="nav-link " style={{color:"gray",fontSize:"13px",textDecoration:"none"}}>Only on netflix</a></li>
</ul>
     </div>
     <div className='col-2 ms-1'>
     <ul className='navbar-nav text-white'>

     <li className='nav-link mt-0 text-muted'><a href="nav-link" style={{color:"gray",fontSize:"13px",textDecoration:"none"}}>Media center</a></li>
     <li className='nav-item mt-0 text-muted'><a href="nav-link " style={{color:"gray",fontSize:"13px",textDecoration:"none"}}>Term of Use</a></li>
     <li className='nav-item mt-1 text-muted'><a href="nav-link " style={{color:"gray",fontSize:"13px",textDecoration:"none"}}>Contact us</a></li>
</ul>
     </div>
</div>
</div>
</div>
    </>
  )
}

export default Footer