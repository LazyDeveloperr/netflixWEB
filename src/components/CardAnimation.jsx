import { Typography } from '@mui/material'
import React from 'react'

const CardAnimation = () => {
  return (
    <>
        <div className='container-fluid' style={{height:"473px", borderTop:"8px solid #222", backgroundColor:"#000000"}}>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-10 d-flex mx-auto ' style={{height:"460px"}}>
                  <div className='col-6 mx-auto ' style={{height:"100%", paddingTop:"150px"}}>
                  <Typography className='text-white fw-bolder' style={{fontSize:"3.125rem", lineHeight:"1.1" , marginBottom:"0.5rem"}}>Enjoy on your TV.</Typography>
                  <Typography className='text-white py-0 m-0' style={{fontFamily:"system-ui", fontWeight:"550", fontSize:"25px",lineHeight:'28px'}}>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</Typography>
                  </div>
                  <div className='col-6 mx-auto' style={{height:"100%" }}>
                    <div>
                      <div style={{position:"static"}}><img className='w-100'  src='./images/tv.png' height="auto" alt="404 image error"/>
                      <div style={{marginTop:"-399px"}}>
                      <video width="300px">
                             <source src="./images/cardvideo.m4v" type="video/mp4"/>
                           </video>
                      </div>
                      </div>
                     

                    </div>
                  </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default CardAnimation