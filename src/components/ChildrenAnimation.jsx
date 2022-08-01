import { Typography } from '@mui/material'
import React from 'react'

const ChildrenAnimation = () => {
  return (
    <>
         <div className='container-fluid' style={{height:"473px", borderTop:"8px solid #222", backgroundColor:"#000000"}}>
            <div className='container'>
            <div className='row'>
                <div className='col-lg-10 d-flex mx-auto ' style={{height:"460px"}}>
                  <div className='col-6 mx-auto' style={{height:"100%" }}>
                    <div className='mt-3 me-3'>
                      <img className='mt-5 ' src='./images/Children.png' height="auto" width="94%" style={{marginLeft:"-10px"}} alt="404 image error"/>
                    </div>
                  </div>
                  <div className='col-6 mx-auto ' style={{height:"100%", paddingTop:"135px"}}>
                  <Typography className='text-white fw-bolder' style={{fontSize:"3.125rem", lineHeight:"1.1" , marginBottom:"0.5rem"}}>Create profiles for children.</Typography>
                  <Typography className='text-white py-0 m-0' style={{fontFamily:"system-ui", fontWeight:"550", fontSize:"25px",lineHeight:'28px'}}>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</Typography>
                  </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default ChildrenAnimation