import { Typography } from '@mui/material'
import React from 'react'

const MobileAnimation = () => {
  return (
    
           <>
        <div className='container-fluid' style={{height:"473px", borderTop:"8px solid #222", backgroundColor:"#000000"}}>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-12 d-flex mx-auto ' style={{height:"460px"}}>
                  <div className='col-6 mx-auto' style={{height:"100%" }}>
                    <div className=''>
                      <img className='mt-4 ms-4' src='./images/mobile.jpg' height="auto" width="75%" style={{marginLeft:"-10px"}} alt="404 image error"/>
                    </div>
                  </div>
                  <div className='col-6 mx-auto ' style={{height:"100%", paddingTop:"135px"}}>
                  <Typography className='text-white fw-bolder' style={{fontSize:"3.125rem", lineHeight:"1.1" , marginBottom:"0.5rem"}}>Download your shows to watch offline.</Typography>
                  <Typography className='text-white py-0 m-0' style={{fontFamily:"system-ui", fontWeight:"550", fontSize:"25px",lineHeight:'28px'}}>Save your favourites easily and always have something to watch.</Typography>
                  </div>
                </div>
            </div>
            </div>
        </div>
    </>
    
  )
}

export default MobileAnimation