import React, {  useEffect, useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import validator from 'validator';
import { Menu, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useFormControl } from '@mui/material/FormControl';
import CardAnimation from './CardAnimation';
import MobileAnimation from './MobileAnimation';
import DeviceAnimation from './DeviceAnimation';
import ChildrenAnimation from './ChildrenAnimation';
import Plan from './Plan';
import Footer from './Footer';

const Homepage = () => {
  const [email,setEmail] = useState("")
  const [isValid, setIsvalid] = useState(true)
  const [emailError, setEmailError] = useState("")

  useEffect(()=>{
    if(validator.isEmail(email)){
      setEmailError(<div className='text-success fs-6' >Valid email</div>)
      setIsvalid(false)
    }else{
      setEmailError(<div className='text-danger fs-6'>it's not a valid email, please input valid email</div>)
      setIsvalid(true)
    }
  },[email])
    
  return (
    <>
         <div className='bg-dark overflow-auto' style={{height:"100vh"}}>
           <div className='w-100' style={{height:"750px", left:0, backgroundImage:"url(./images/bgImg.jpg)", background:"center center flex-1"}}>
              <div className='w-100 bg-black bg-opacity-75' style={{height:"100%", width:"100%" }}>

              <div className='w-100' style={{opacity:"1"}} >
                 <div className='navbar navbar-expand-lg bg-transparent'>
                    <div className='container-fluid w-100'>
                        <div className='navbar-brand mt-3 ms-4' style={{ width:"170px"}}>
                          <svg viewBox="0 0 111 30" fill='red' className="svg-icon svg-icon-netflix-logo" aria-hidden="true" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
                        </div>
                        <div className=''>
                       
                          <ul className='navbar-nav'>
                            <li className="nav-item">
                            {/* <Select value="None">
                                <MenuItem value="None"><LanguageIcon/><em>English</em></MenuItem>
                                <MenuItem>Hello</MenuItem>
                                <MenuItem>Hello</MenuItem>
                                <MenuItem>Hello</MenuItem>
                            </Select>    */}

                            <div className='dropdown' >
                              <button className='btn  dropdown-toggle text-white border-white fs-5 mt-1 bg-transparent p-0 me-3' data-bs-toggle="dropdown" id='language' >
                              <LanguageIcon/>
                               English
                              </button>
                              <ul className='dropdown-menu'  aria-labelledby='language'>
                                <li><a className='dropdown-item'>Hindi</a></li>
                              </ul>
                             </div>
                            
                            </li>
                            <li className='nav-item'><button className='btn btn-danger'>Sign Up</button></li>
                           </ul>

                        </div>
                    </div>
                </div>

              <div className='container bg-transparent m-auto ' style={{height:"80%"}}>
                <div className='container bg-transparent m-auto ' style={{height:"80%"}}>
                  <div className=' bg-transparent m-auto px-5' style={{paddingTop:"165px",paddingBottom:"20px", width:"65%", fontFamily:"arial", }}>
                     <div className='text-white fw-bolder display-3  text-center' style={{fontFamily:"system-ui",lineHeight:'60px'}} >Unlimited movies, TV <br/> shows and more.</div>
                     <div className='text-white  text-center mt-4' style={{fontSize:"26px"}}>Watch anywhere. Cancel anytime.</div>
                     <div className='text-white fs-5 text-center mt-5'>Ready to watch? Enter your email to create or restart your membership..</div>
                     
                     <form className='d-flex flex-1 m-auto mt-2 bg-white ps-3'>
                              <TextField id='email'  variant='standard' InputProps={{disableUnderline:true}} label="email address" className='form-control' style={{fontSize:"22px", height:"70px"}} onChange={(e)=>setEmail(e.target.value)} />
                            <span><button className='btn text-white fs-4' style={{width:"300px", height:"100%", borderRadius:"0", backgroundColor:"red"}}>Get Started</button></span>  
                     </form>
                     </div>
                </div>
              </div> 
          </div>

              </div>
             
            </div>
         
          

           <CardAnimation/>
           <MobileAnimation/>
           <DeviceAnimation/>
           <ChildrenAnimation/>
           <Plan/>
           <Footer/>
          

        </div>
    </>
  )
}

export default Homepage