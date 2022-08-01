import { Typography } from '@mui/material'
import React from 'react'

const DeviceAnimation = () => {
  return (
    <>
         <div className='container-fluid' style={{height:"473px", borderTop:"8px solid #222", backgroundColor:"#000000"}}>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-10 d-flex mx-auto ' style={{height:"460px"}}>
                  <div className='col-6 mx-auto ' style={{height:"100%", paddingTop:"140px"}}>
                  <Typography className='text-white fw-bolder' style={{fontSize:"3.125rem", lineHeight:"1.1" , marginBottom:"0.5rem"}}>Watch everywhere.</Typography>
                  <Typography className='text-white py-0 m-0' style={{fontFamily:"system-ui", fontWeight:"550", fontSize:"25px",lineHeight:'28px'}}>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</Typography>
                  </div>
                  <div className='col-6 mx-auto' style={{height:"100%" }}>
                    <div className=''>
                      <img className='mt-5 ms-4' src='./images/device.png' height="auto" width="100%"  alt="404 image error"/>
                    </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default DeviceAnimation